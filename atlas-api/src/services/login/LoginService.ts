import {Neo4JAccessLayer} from "@database/Neo4jAccessLayer";
import fs from "fs";
import path from "path";
import * as crypto from "crypto";
import * as jwt from "jsonwebtoken";
import {Node} from "neo4j-driver";
import {logger} from "@shared/Logger";
import {timeConverter} from "../../utils/utils";

interface Session {
    data: string,
    token: string,
    issued: number,
    expires: number
}

class LoginService {
    private static INSTANCE: LoginService = null;
    private static LOGIN_CONFIGURATION_NODE = "AtlasLogin";
    private static NODE_LICENSE_PROPERTY = "License";
    private neo4jAl: Neo4JAccessLayer = Neo4JAccessLayer.getInstance();
    private cert: Buffer;
    private privateKey: Buffer;
    private publicLoginKey: Buffer;

    private constructor() {
        // Get actual application path
        const appDir = path.dirname(require.main.filename);

        // Read keys
        this.cert = fs.readFileSync(path.join(appDir, '../config/keys/public.pem'));
        this.privateKey = fs.readFileSync(path.join(appDir, '../config/keys/private.key'));

        // Read key for license
        this.publicLoginKey = fs.readFileSync(
            path.join(appDir, '../config/keys/privateLicense.key')
        );
    }

    /**
     * Get the instance of the Login service
     * @public
     */
    public static getInstance(): LoginService {
        if (LoginService.INSTANCE == null) {
            LoginService.INSTANCE = new LoginService();
        }

        return LoginService.INSTANCE;
    }

    /**
     * Check if a license provided is valid or not, and if it's valid store it
     * @throws Errors if the configuration is not valid or not well formatted
     * @param license To apply
     */
    public async applyLicense(license: string): Promise<void> {
        try {
            const isValid: boolean = this.verifyLicense(license);
            if (isValid) {
                await this.createLoginConfigurationNode(license);
            } else {
                throw new Error("The license provided is not valid")
            }
        } catch (err) {
            logger.warn(`The verification of the license ${license} failed.`, err)
            throw err;
        }
    }

    /**
     * Check the status of the actual License
     * @return The actual license if valid
     */
    public async getActualLicense(): Promise<string> {
        const node: Node = await this.getLoginConfigurationNode();
        // Check the format of the node
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (!node.properties || node.properties[LoginService.NODE_LICENSE_PROPERTY] == null) {
            throw new Error("The Configuration node is not correctly formatted.")
        }

        // Get the license
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return String(node.properties[LoginService.NODE_LICENSE_PROPERTY]);
    }

    /**
     * Verify if the actual is valid or not
     */
    public async verifyActualLicense(): Promise<boolean> {
        try {
            const license: string = await this.getActualLicense();
            const result: boolean = this.verifyLicense(license);

            return result;
        } catch (err) {
            logger.warn(`Failed to verify the actual license.`, err)
            return false;
        }
    }

    /**
     * Check the password a return a token if valid
     * @param password
     */
    public checkPassword(password: string) {
        // pass
    }

    /**
     * Verify the signature of a token
     * @param token
     */
    public verifyToken(token: string): boolean {
        try {
            jwt.verify(token, this.privateKey);
            return true;
        } catch (err) {
            return false;
        }
    }

    /**
     * Create a new token to query the API
     */
    public createSessionToken(): Session {
        // Always use HS512 to sign the token
        const algorithm = "RS256";
        // Determine when the token should expire
        const issued = Date.now() / 1000;
        const certDuration = 2 * 60 * 60;
        const expires = issued + certDuration;

        const session = {
            data: "consultant",
            issued: issued,
            expires: expires
        };

        return {
            data: "AtlasToken",
            token: jwt.sign(session, this.privateKey, {algorithm: algorithm}),
            issued: issued,
            expires: expires
        };
    }

    /**
     * Delete all the login configuration nodes in the database
     * @private
     */
    private async deleteAllLoginConfigurationNode() {
        const delReq = `MATCH (n:${LoginService.LOGIN_CONFIGURATION_NODE}) DETACH DELETE n;`
        await this.neo4jAl.execute(delReq);
    }

    /**
     * Create a new login configuration node.
     * Will also remove all the other configuration nodes
     * @param license New License to apply
     * @private
     */
    private async createLoginConfigurationNode(license: string) {
        await this.deleteAllLoginConfigurationNode()

        const req = `MERGE (n:${LoginService.LOGIN_CONFIGURATION_NODE}) 
        SET n.${LoginService.NODE_LICENSE_PROPERTY}=$license`;
        await this.neo4jAl.executeWithParameters(req, {license: license})
    }

    /**
     * Retrieve the first login configuration node
     * @private
     * @throws Error if no configuration node was found you need to enter a license key fisrt
     */
    private async getLoginConfigurationNode(): Promise<Node> {
        const reqSearch = `MATCH (n:${LoginService.LOGIN_CONFIGURATION_NODE})  
        RETURN n as node LIMIT 1`;
        const results = await this.neo4jAl.execute(reqSearch);

        if (!results.records || results.records.length == 0) {
            throw new Error("No login configuration  was found ")
        }

        return results.records[0].get(0) as Node;
    }

    /**
     * Verify if the license is valid and signed
     * License : ATLAS_INFO$TIMESTAMP:SIGNATURE
     * @param license License key
     * @throws Error if the format of the license is not correct
     * @private True if the license if valid, False otherwise
     */
    private verifyLicense(license: string): boolean {
        // split the license at : to get the signature
        const split: string[] = license.split(":")
        if (split.length < 2) {
            throw new Error("The format of the license is not correct.")
        }

        const data = split[0];
        const signature = split[1];

        // In Data

        const verifier = crypto.createVerify('sha256');
        verifier.update(data);
        verifier.end()

        const valid = verifier.verify(this.publicLoginKey, signature, 'hex');
        if (!valid) return false;

        // Else check the date in the data, if the signature is valid
        const splitData: string[] = data.split("$")
        if (splitData.length < 2) {
            throw new Error("The format of the license is not correct.")
        }

        const todaytimestamp = Date.now() / 1000;
        const timestampLicense = parseInt(splitData[1]);

        if (todaytimestamp > timestampLicense) {
            logger.warn(`License expired on ${timeConverter(timestampLicense)}. Today's date ${timeConverter(todaytimestamp)}`);
            throw new Error("This license has expired.")
        }

        // If everything is find return  true
        return true;
    }
}

export default LoginService;