import { ObjectId } from "mongodb";

export interface ProductType  {
    _id: ObjectId
    name: string;
    slug: string;
    description: string;
    category: string;
    excerpt: string;
    thumbnail: string;
    price: number;
    tags: string[];
    images: string[];
    createdAt: Date;
    updatedAt: Date
  };