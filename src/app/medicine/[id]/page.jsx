
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

async function page({ params }) {
  const p = await params;

  const medicinesCollection = dbConnect(collectionNameObj.medicinesCollection);

  const product = await medicinesCollection.findOne({
    _id: new ObjectId(p.id),
  });

  return (
    <div className="flex flex-col  justify-center min-h-[calc(100vh-200px)] py-10">
      <div className="w-11/12 mx-auto rounded-2xl overflow-hidden shadow-2xl transform transition-all hover:scale-[1.02] duration-300">
        <div className="flex flex-col md:flex-row bg-gradient-to-br from-white to-pink-50">
          {/* Product Image Section */}
          <div className="md:w-2/5 p-8 flex items-center justify-center bg-gradient-to-b from-pink-50 to-white">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#ff99c8] rounded-2xl opacity-20 blur-lg"></div>
              <img
                src={product.image}
                alt={product.name}
                className="relative rounded-2xl object-contain h-64 w-full shadow-lg"
              />
            </div>
          </div>

          {/* Product Details Section */}
          <div className="md:w-3/5 p-8">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-sm font-semibold text-pink-700 bg-pink-100 px-3 py-1 rounded-full">
                  {product.brand}
                </span>
                <h2 className="text-3xl font-bold text-gray-800 mt-2">
                  {product.name}
                </h2>
              </div>
              <div className="bg-[#ff99c8] text-white font-bold py-2 px-4 rounded-full">
                {product.type}
              </div>
            </div>

            {/* Price and Stock */}
            <div className="my-6">
              <p className="text-4xl font-bold text-[#ff99c8]">
                ${product.price.toFixed(2)}
              </p>
              <div
                className={`mt-3 inline-flex items-center px-4 py-2 rounded-full ${
                  product.stock > 50
                    ? "bg-green-100 text-green-800"
                    : "bg-amber-100 text-amber-800"
                }`}
              >
                <span
                  className={`w-3 h-3 rounded-full mr-2 ${
                    product.stock > 50 ? "bg-green-500" : "bg-amber-500"
                  }`}
                ></span>
                {product.stock > 50 ? "In Stock" : "Low Stock"} ({product.stock}
                )
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Meta Information */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-pink-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Expiry Date</p>
                <p className="font-medium">{product.expiry_date}</p>
              </div>
              <div className="bg-pink-50 p-3 rounded-lg">
                <p className="text-sm text-gray-500">Product ID</p>
                <p className="font-medium">#{product.id}</p>
              </div>
            </div>

            {/* Action Buttons */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
