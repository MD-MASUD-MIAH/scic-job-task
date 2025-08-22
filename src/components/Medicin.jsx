"use client"
import Image from "next/image";
import Link from "next/link";
 
 function Medicin({data}) {
  
  return (
    <div className="py-10 w-11/12 mx-auto overflow-hidden">
      <div className="py-10 flex  flex-col  items-center gap-4">
        <h1 className="text-center text-xl md:text-4xl font-bold">
          Complete Medicine List
        </h1>
        <p className="text-center w-10/12 md:max-w-2xl ">
          Browse our complete medicine list featuring trusted brands, detailed
          information, and affordable prices to support your health and wellness
          needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.map((product) => (
          <div
            key={product?._id}
            className="card w-80 bg-gradient-to-br from-white to-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 mx-auto my-8 overflow-hidden"
          >
            <figure className="relative">
              <Image
                width={500}
                height={500}
                src={product?.image}
                alt={product?.name}
                className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
              />
              <span className="absolute top-2 right-2 badge bg-[#ff99c8] text-xs font-semibold text-white">
                {product?.type}
              </span>
            </figure>
            <div className="card-body p-5">
              <h2 className="card-title text-xl font-semibold text-gray-800 truncate">
                {product?.name}
              </h2>
              <p className="text-sm text-gray-600">{product?.brand}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-2xl text-black font-bold ">
                  ${product?.price?.toFixed(2)}
                </span>
                <Link
                  href={`/medicine/${product?._id}`}
                  className="btn tom-btn"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Medicin;
