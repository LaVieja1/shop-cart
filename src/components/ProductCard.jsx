/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import getPrice from "../utilities/getPrice";

export default function ProductCard({ props }) {
  const { node } = props;
  const productId = node.id.match(/\d+$/)[0];
  const price = getPrice(node);

  return (
    <div className="m-4 flex w-full max-w-xs  flex-col items-center bg-[#f3f3f3] p-8 shadow-md shadow-slate-300">
      <Link to={productId}>
        <img
          className="col-start-1 col-end-2 w-[180px] object-cover"
          src={node.featuredImage.url}
          alt={node.title.split(" ").slice(0, 2).join(" ")}
        />
        <p className="mt-2 text-2xl">{node.title}</p>
        <p className="text-xl font-bold text-sky-700">${Math.round(price)}</p>
      </Link>
    </div>
  );
}