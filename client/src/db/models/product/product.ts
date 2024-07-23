import { database } from "@/db/config";
import { ProductType } from "@/typeProduct";

export default class ProductModel {
    static async getAllProduct() {
        const data = await database.collection('products').find().toArray()

        return data as ProductType[]
    }
}