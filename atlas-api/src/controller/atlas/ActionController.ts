import {NextFunction, Request, Response} from "express";
import ActionEngine from "@services/atlas/actions/ActionEngine";
import ActionInterface from "@interfaces/actions/Action.interface";


export default class ActionController {

    private actionService: ActionEngine = ActionEngine.getInstance();

    /**
     * Get the list of the actions.
     * OPTIONNAL ?category=string To filter actions based on their category
     * @param req
     * @param res
     * @param next
     */
    public getActions = (req: Request, res: Response, next: NextFunction): void => {
        try {
            // Check options
            if ("category" in Object.keys(req.query)) {
                const category = String(req.query.category);
                const actions: ActionInterface[] = this.actionService.getActionsByCategory(category);
                res.status(200).json({data: actions, message: `Action list`});
            } else {
                const actions: ActionInterface[] = this.actionService.getActions();
                res.status(200).json({data: actions, message: `Action list`});
            }
        } catch (error) {
            next(error);
        }
    };

    /**
     * Get a single action by its ID.
     * If the action is not found, return null
     * @param req
     * @param res
     * @param next
     */
    public getActionById = (req: Request, res: Response, next: NextFunction): void => {
        try {
            const id = Number(req.params.id);
            const report: ActionInterface = this.actionService.getActionById(id);
            res.status(200).json({data: report, message: `Report ${id}`});
        } catch (error) {
            next(error);
        }
    };

    /**
     * Get the list of categories in the actions
     * @param req
     * @param res
     * @param next
     */
    public getCategories = (req: Request, res: Response, next: NextFunction): void => {
        try {
            const categories: string[] = this.actionService.getCategories();
            res.status(200).json({data: categories, message: `Action Categories`});
        } catch (error) {
            next(error);
        }
    };


    /**
     * Execute an action on an application.
     * POST BODY {
     *     id: number,
     *     application: string
     * }
     * @param req
     * @param res
     * @param next
     */
    public executeAction = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const body = req.body;

            if (body.id == null) throw new Error("Missing 'id' property.")
            if (body.application == null) throw new Error("Missing 'application' property.")
            const id = body.id, application = body.application;

            await this.actionService.executeAction(id, application);
            res.status(200).json({data: true, message: `Action executed`});
        } catch (error) {
            next(error);
        }
    };

}