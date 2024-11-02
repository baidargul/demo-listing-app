import React from "react";

type Props = {
  tag: string;
};

const Tag = (props: Props) => {
  return (
    <div className="p-1 text-xs bg-zinc-50 rounded tracking-wide border-b drop-shadow-sm select-none">
      {props.tag.toLocaleUpperCase()}
    </div>
  );
};

export default Tag;
