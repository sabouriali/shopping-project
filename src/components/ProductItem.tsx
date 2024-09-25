import { Link } from "react-router-dom";

import { ProductItemProps } from "../types/componentTypes";

function ProductItem({
  id,
  image,
  title,
  price,
  description,
}: ProductItemProps) {
  return (
    <Link
      to={`/products/${id}`}
      className="grid grid-rows-5 rounded-2xl shadow-md hover:shadow-xl transition text-sm bg-white dark:bg-[#424242]"
    >
      <div className="row-span-3 border-b">
        <img src={image} alt={title} className="rounded-t-2xl" />
      </div>
      <div className="row-span-1 flex items-center justify-between gap-6 px-4">
        <h3 className="font-bold line-clamp-1">{title}</h3>
        <h4 className="text-red-500">{price}$</h4>
      </div>
      <div className="row-span-1">
        <p className="text-justify px-4 line-clamp-5 sm:line-clamp-3 text-gray-500 dark:text-gray-300">
          {description}
        </p>
      </div>
    </Link>
  );
}

export default ProductItem;
