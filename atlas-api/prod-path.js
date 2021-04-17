const tsConfig = require("./tsconfig.json");
const tsConfigPaths = require("tsconfig-paths");

const baseUrl = "./dist"; // Either absolute or relative path. If relative it's resolved to current working directory.
const paths = {
    "@agents/*": [
        "dist/agents/*"
    ],
        "@daos/*": [
        "dist/daos/*"
    ],
        "@entities/*": [
        "dist/entities/*"
    ],
        "@shared/*": [
        "dist/shared/*"
    ],
        "@assistants/*": [
        "dist/assistants/*"
    ],
        "@controller/*": [
        "dist/controller/*"
    ],
        "@services/*": [
        "dist/services/*"
    ],
        "@interfaces/*": [
        "dist/interfaces/*"
    ],
        "@dtos/*": [
        "dist/dtos/*"
    ],
        "@database/*": [
        "dist/database/*"
    ],
        "@exceptions/*": [
        "dist/exceptions/*"
    ],
        "@server": [
        "dist/Server"
    ] }

const cleanup = tsConfigPaths.register({
    baseUrl,
    paths: paths
});

cleanup()