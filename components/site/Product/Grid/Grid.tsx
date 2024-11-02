"use client";
import InputBox from "@/components/ui/InputBox";
import { ProductType } from "@/libs/Storage";
import { SERVER, SERVER_RESPONSE } from "@/serverActions/backend/SERVER";
import React, { useEffect, useState } from "react";
import Row from "./Row";
import { Loader } from "lucide-react";

type Props = {};

const Grid = (props: Props) => {
  const [products, setProducts] = useState<ProductType[] | null>(null);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("");
  const fetchProducts = async () => {
    const res: SERVER_RESPONSE = await SERVER.Product.list();

    if (res.status === 200) {
      setProducts(res.data);
    }
  };

  useEffect(() => {
    fetchProducts();
    setIsMounted(true);
  }, []);

  const handleFilterChange = (value: string) => {
    setFilter(value);
  };

  if (!isMounted) {
    return (
      <div className="w-full h-full flex justify-center gap-2 items-center">
        <Loader className="w-6 h-6 text-red-900 animate-spin" />
        <div className="text-xl text-red-900">Please wait...</div>
      </div>
    );
  }

  if (products?.length === 0) {
    return (
      <div className="w-full h-full flex justify-center gap-2 items-center">
        <div className="text-xl text-red-900">No products found</div>
      </div>
    );
  }

  return (
    <div className="mt-4">
      {isMounted && (
        <div className="flex flex-col rounded-md w-full px-3 items-center">
          <div className="font-bold text-lg text-start text-red-900 pl-1">
            Search Product
          </div>
          <InputBox
            placeholder="Foam Roller"
            setValue={handleFilterChange}
            value={filter}
          />
        </div>
      )}
      <div>
        <div className="w-full grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
          {products &&
            products.length > 0 &&
            products.map((product: ProductType, index: number) => {
              if (isThisProduct(filter, product) === false) {
                return;
              }

              return (
                <div key={product.name}>
                  <Row product={product} index={index + 1} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Grid;

function isThisProduct(criteria: string, product: ProductType) {
  let isThisProduct = false;

  if (criteria === "") {
    isThisProduct = true;
  }

  if (product.name.toLowerCase().includes(criteria.toLowerCase())) {
    isThisProduct = true;
  }

  return isThisProduct;
}
