import Tag from "@/components/site/Product/Tag";
import { products, ProductType } from "@/libs/Storage";
import { SERVER, SERVER_RESPONSE } from "@/serverActions/backend/SERVER";
import React from "react";

type Props = {
  params: { name: string };
};

const page = (props: Props) => {
  const product = decodeURIComponent(props.params.name);

  let item: ProductType[] | ProductType = products.filter(
    (item) => item.name === product
  );

  if (item.length < 1) {
    return (
      <div className="flex justify-center items-center w-full">
        <div className="text-center border-red-900 bg-white/40 hover:bg-white transition-all duration-1000 cursor-default drop-shadow-lg border-dashed p-10 rounded-md text-xl font-bold text-red-900">
          404 Not Found
          <div className="text-sm font-normal flex flex-col gap-2">
            <p>
              `<span className="font-medium">{product}</span>` not found in our
              database
            </p>
            <a
              href="/"
              className="bg-red-900 text-center text-white px-6 p-2 rounded-md mt-2"
            >
              Go Back
            </a>
          </div>
        </div>
      </div>
    );
  }

  item = item[0];

  return (
    <div className="flex justify-start sm:justify-center items-start sm:items-center h-full w-full mt-4 sm:mt-0">
      <div className="p-5 w-full flex flex-col sm:flex-row justify-start sm:justify-center items-start sm:items-center gap-8">
        <div className="w-full object-cover h-auto flex justify-center items-center sm:w-[200px] sm:h-[200px]">
          <img
            src={item.image}
            width={500}
            height={500}
            alt={`${item.name}`}
            className="w-full h-full rounded-md max-w-[300px]"
          />
        </div>
        <div className="flex flex-col gap-4 sm:gap-2 justify-between">
          <div className="text-4xl font-bold first-letter:text-red-900 first-letter:p-1 first-letter:bg-red-900/10 first-letter:rounded">
            {item.name}
          </div>
          <div className="text-base tracking-tight">{item.description}</div>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, index) => (
              <div key={index}>
                <Tag tag={tag} />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <a href="/">
              <div className="p-1 w-full hover:bg-gradient-to-t hover:from-red-900 hover:to-red-800 bg-red-900 text-white cursor-pointer transition-all duration-500 border group-hover:border-zinc-200 border-transparent rounded  text-center">
                Go Back
              </div>
            </a>
            <a href="/">
              <div className="p-1 w-full hover:bg-gradient-to-t hover:from-zinc-200 hover:to-zinc-50 bg-red-100/50 cursor-pointer transition-all duration-500 border group-hover:border-zinc-200 border-transparent rounded  text-center">
                Homepage
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
