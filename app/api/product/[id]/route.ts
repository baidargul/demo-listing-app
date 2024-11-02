import { products, ProductType } from "@/libs/Storage";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const response = {
    status: 500,
    message: "Internal Server Error",
    data: null as any,
  };

  try {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name")?.toLowerCase();

    const items: ProductType[] = products;

    if (name) {
      const product = items.find((item) => item.name === name);
      if (product) {
        response.status = 200;
        response.message = "Success";
        response.data = product;
      } else {
        response.status = 404;
        response.message = "Product not found";
        response.data = null;
      }
    }

    return new Response(JSON.stringify(response));
  } catch (error: any) {
    console.log("[SERVER ERROR]: " + error.message);
    response.status = 500;
    response.message = error.message;
    response.data = null;
  }

  return new Response(JSON.stringify(response));
}
