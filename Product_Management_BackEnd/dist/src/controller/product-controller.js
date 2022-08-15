"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../model/product");
class Productcontroller {
    constructor() {
        this.getAll = async (req, res) => {
            let products = await product_1.Product.find();
            res.status(200).json(products);
        };
        this.addProduct = async (req, res) => {
            let product = req.body;
            product = await product_1.Product.insertMany(product);
            res.status(201).json(product);
        };
        this.deleteProduct = async (req, res) => {
            let id = req.params.id;
            let product = await product_1.Product.findById(id);
            if (!product) {
                res.status(404);
            }
            else {
                product.delete();
                res.status(200);
            }
        };
    }
}
exports.default = new Productcontroller();
//# sourceMappingURL=product-controller.js.map