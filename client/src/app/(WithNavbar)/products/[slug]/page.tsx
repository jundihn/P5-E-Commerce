import Link from "next/link";
import { ProductType } from "@/typeProduct";

export default async function DetailProduct({
  params,
}: {
  params: { slug: string };
}) {
  console.log(params.slug);

  const res = await fetch(`http://localhost:3001/products/${params.slug}`);
  // console.log(res);

  const data = await res.json();
  // console.log(data.name);

  return (
    <div>
      <img src={data.thumbnail} alt="" />
      <p>test</p>
    </div>
  );
}
