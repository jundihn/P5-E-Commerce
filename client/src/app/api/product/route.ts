import ProductModel from "@/db/models/product/product";
import { NextRequest } from "next/server";

export async function GET(requst: NextRequest) {
    try {
        const data = await ProductModel.getAllProduct()
        // console.log(data);
        
        return Response.json(data)
    } catch (error) {
        console.log(error);
        
    }
}