import { model, Schema } from "mongoose";

interface Iproduct{
    name?: string;
    price?: string;
    amount?: string;
    image?: string;
    description?: string;
};

const productSchema = new Schema<Iproduct>({
    name: String,
    price: String,
    amount: String,
    image: String,
    description: String  
})

const Product = model<Iproduct>('Product',productSchema);
export {Product};