import { Request, Response } from "express";
import { Product } from "../model/product"

class Productcontroller{
   //không có show from nên làm lần lượt các API get post put delete
   
   // lấy ds sản phẩm
    getAll = async (req:Request, res:Response) => {
        let products = await Product.find();
        res.status(200).json(products);
   }

   addProduct = async (req:Request, res:Response) => {
    let product = req.body;
    product = await Product.insertMany(product);
    res.status(201).json(product);
   }

   deleteProduct = async (req:Request, res:Response) => {
    let id = req.params.id;
    let product = await Product.findById(id);
    if(!product){
        res.status(404);
    }else{
        product.delete();
        res.status(200);
    }
   }
}
export default new Productcontroller();