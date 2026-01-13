import { getSingleProduct } from "@/actions/server/product";
import Image from "next/image";
import { FaStar, FaShoppingCart, FaCheckCircle } from "react-icons/fa";

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const product = await getSingleProduct(id);
  const {
    title,
    bangla,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
    description,
    info,
    qna,
  } = product;

  const finalPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Image */}
      <div className="bg-base-100 rounded-lg shadow-md p-4">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Content */}
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        {bangla && <p className="text-gray-500 mt-1">{bangla}</p>}

        {/* Rating */}
        <div className="flex items-center gap-4 mt-3 text-sm">
          <div className="flex items-center gap-1">
            <FaStar className="text-warning" />
            <span>{ratings}</span>
          </div>
          <span>{reviews} Reviews</span>
          <span>{sold} Sold</span>
        </div>

        {/* Price */}
        <div className="mt-4">
          {discount && (
            <span className="line-through text-gray-400 mr-2">৳{price}</span>
          )}
          <span className="text-3xl font-bold text-primary">৳{finalPrice}</span>
          {discount && (
            <span className="ml-2 badge badge-secondary">-{discount}%</span>
          )}
        </div>

        {/* Add to cart */}
        <button className="btn btn-primary mt-5 gap-2">
          <FaShoppingCart />
          Add to Cart
        </button>

        {/* Info */}
        {info?.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Key Features</h3>
            <ul className="space-y-1">
              {info.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm">
                  <FaCheckCircle className="text-success" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Description & QnA */}
      <div className="md:col-span-2 space-y-6">
        {/* Description */}
        <div className="bg-base-100 p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Description</h3>
          <p className="text-sm whitespace-pre-line">{description}</p>
        </div>

        {/* QnA */}
        {qna?.length > 0 && (
          <div className="bg-base-100 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Questions & Answers</h3>
            <div className="space-y-3">
              {qna.map((item, idx) => (
                <div key={idx}>
                  <p className="font-medium">Q: {item.question}</p>
                  <p className="text-sm text-gray-600">A: {item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
