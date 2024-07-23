import Link from "next/link";
import { ProductType } from "@/typeProduct";

async function getData(): Promise<ProductType[]> {
  // const res = await fetch("https://dummyjson.com/products");
  const res = await fetch("http://localhost:3000/api/product", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Product() {
  // const { products }: { products: ProductType[] } = await getData();
  const data = await getData();
  // console.log(data);

  return (
    <div className="w-2/3 grid grid-cols-3 gap-5">
      {data.map((product) => {
        return (
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src={product.thumbnail} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {product.name}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{product.description}</p>
              <div className="card-actions justify-end">
                {product.tags.map((tag, idx) => {
                  return (
                    <div key={idx} className="badge badge-outline">
                      {tag}
                    </div>
                  );
                })}
              </div>
              <Link
                href={`/products/${product.slug}`}
                className="btn btn-outline-primary"
              >
                Detail
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
