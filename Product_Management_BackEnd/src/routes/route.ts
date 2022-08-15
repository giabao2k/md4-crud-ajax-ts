import { Router } from "express";
import { productRouter } from "./product-route";

export const router =  Router();
router.use('/products', productRouter);