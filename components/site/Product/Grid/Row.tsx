import { ProductType } from "@/libs/Storage";
import React from "react";

type Props = {
  product: ProductType;
  index: number;
};

const Row = (props: Props) => {
  return (
    <a href={`/product/${props.product.name}`}>
      <div className="flex flex-col min-w-[230px] justify-between bg-white p-2 select-none h-[230px] group cursor-pointer rounded hover:drop-shadow-sm">
        <div className="flex flex-col justify-between items-center gap-1">
          <img
            src={props.product.image}
            width={500}
            height={500}
            alt={`${props.product.name}`}
            className="w-28 h-28 rounded-full mx-auto pointer-events-none select-none"
          />
          <div className="font-semibold text-md">{props.product.name}</div>
          <div className="text-xs line-clamp-2">
            {props.product.description}
          </div>
        </div>
        <div className="p-1 w-full group-hover:bg-gradient-to-t group-hover:from-zinc-200 group-hover:to-transparent bg-zinc-100 transition-all duration-500 border group-hover:border-zinc-200 border-transparent rounded  text-center">
          See more
        </div>
      </div>
    </a>
  );
};

export default Row;
