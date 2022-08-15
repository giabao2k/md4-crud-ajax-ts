import { Request, Response } from "express";
declare class Productcontroller {
    getAll: (req: Request, res: Response) => Promise<void>;
    addProduct: (req: Request, res: Response) => Promise<void>;
    deleteProduct: (req: Request, res: Response) => Promise<void>;
}
declare const _default: Productcontroller;
export default _default;
