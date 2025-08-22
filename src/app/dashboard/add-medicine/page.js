"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";
function AddMedicine(props) {
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const newMedicine = {
      name: form.name.value,
      brand: form.brand.value,
      type: form.type.value,
      price: parseFloat(form.price.value),
      stock: parseInt(form.stock.value),
      description: form.description.value,
      expiry_date: form.expiry_date.value,
      mfg_date: form.mfg_date.value,
      image: form.image.value,
      author_email: session?.user?.email,
      author_name: session?.user?.name,
    };

    console.log("Form Data:", newMedicine);

    setLoading(true);

    const res = await fetch("http://localhost:3000/api/medicine", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMedicine),
    });

    const data = await res.json();
    console.log("Response:", data);

    if (data?.result?.acknowledged) {
      Swal.fire({
        title: "✅ Medicine Added!",
        text: `${newMedicine.name} has been successfully added.`,
        icon: "success",
        confirmButtonColor: "#ff99c8",
      });
      setLoading(false);
      form.reset();
      router.push("/medicines");
    } else {
      Swal.error({
        title: "something! wrong",
        text: ` added fail.`,
        icon: "fail",
        confirmButtonColor: "#ff99c8",
      });
    }
  };
  return (
    <div className="py-10">
      <div className="w-11/12 md:max-w-7xl mx-auto  border  border-[#ff99c8] shadow-2xl rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-[#f472b6] tracking-tight">
            Add New Medicine
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-6 lg:space-y-0"
        >
          {/* Medicine Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold ">
                Medicine Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter medicine name"
              className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-[#f472b6] focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          {/* Brand */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold ">
                Brand
              </span>
            </label>
            <input
              type="text"
              name="brand"
              placeholder="Enter brand name"
              className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-[#f472b6] focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Type Dropdown */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">
                Type
              </span>
            </label>
            <select
              name="type"
              className="select select-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-[#f472b6] focus:border-transparent transition-all duration-200"
            >
              <option value="Tablet">Tablet</option>
              <option value="Syrup">Syrup</option>
              <option value="Capsule">Capsule</option>
              <option value="Injection">Injection</option>
            </select>
          </div>

          {/* Price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold ">
                Price
              </span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-[#f472b6] focus:border-transparent transition-all duration-200"
              min="0"
              step="0.01"
            />
          </div>

          {/* Stock Quantity */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold ">
                Stock Quantity
              </span>
            </label>
            <input
              type="number"
              name="stock"
              placeholder="Enter stock quantity"
              className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-[#f472b6] focus:border-transparent transition-all duration-200"
              min="0"
            />
          </div>
          {/* Image URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold ">
                Image URL
              </span>
            </label>
            <input
              type="url"
              name="image"
              placeholder="Enter image URL"
              className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-[#f472b6] focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Expiry Date */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold ">
                Expiry Date
              </span>
            </label>
            <input
              type="date"
              name="expiry_date"
              className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-[#f472b6] focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold ">
                Manufacture Date
              </span>
            </label>
            <input
              type="date"
              name="mfg_date"
              className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-[#f472b6] focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold ">
                Author Name
              </span>
            </label>
            <input
              type="text"
              value={session?.user?.name}
              placeholder="Enter brand name"
              className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-[#f472b6] focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold ">
                Author Email
              </span>
            </label>
            <input
              type="text"
              value={session?.user?.email}
              placeholder="Enter brand name"
              className="input input-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-[#f472b6] focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Description (spans both columns) */}
          <div className="form-control lg:col-span-2">
            <label className="label">
              <span className="label-text font-semibold">
                Description
              </span>
            </label>
            <textarea
              name="description"
              placeholder="Write a description"
              className="textarea textarea-bordered w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-[#f472b6] focus:border-transparent transition-all duration-200 resize-y"
              rows="4"
            />
          </div>

          {/* Submit Button (spans both columns) */}
          <div className="form-control lg:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="btn w-full tom-btn"
              style={{ backgroundColor: "#f472b6", border: "none" }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8h8a8 8 0 01-16 0z"
                    ></path>
                  </svg>
                  Adding...
                </span>
              ) : (
                "Add Medicine"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddMedicine;
