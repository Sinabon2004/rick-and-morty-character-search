import React from "react";

export default function Skeleton(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className="bg-gradient-to-br from-gray-200 to-gray-400
      animate-pulse w-full h-auto aspect-[3/1]
      col-span-6 lg:col-span-3 xl:nth-1:col-span-3 xl:nth-2:col-span-3 xl:col-span-2
      shadow-[0px_7px_25px] shadow-secondary-gray/20"
    ></div>
  );
}
