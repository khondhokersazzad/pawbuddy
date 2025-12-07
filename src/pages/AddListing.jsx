import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddListing = () => {
  const { user } = useContext(AuthContext);
  const navigation = useNavigate();
  const handleAddListing = (e) => {
    e.preventDefault();
    const name = e.target.productName.value;
    const category = e.target.category.value;
    const price = e.target.price.value;
    const location = e.target.location.value;
    const description = e.target.description.value;
    const image = e.target.imageUrl.value;
    const date = e.target.date.value;
    const email = e.target.email.value;

    const formData = {
      name,
      category,
      price,
      location,
      description,
      image,
      date,
      email,
    };

    //req.body part
    axios.post("http://localhost:3000/services", formData).then((res) => {
      console.log(res);
      navigation("/my-listing");
      if (res.data.acknowledged) {
        Swal.fire({
          title: "Successfully Add!",
          icon: "success",
          draggable: true,
        });
      }
      
    });

    console.log(user);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 via-rose-50 to-amber-100">
      <div className="relative max-w-4xl w-full mx-4 rounded-2xl shadow-2xl overflow-hidden">
        <div className="relative md:ml-1/3 bg-white bg-opacity-90 backdrop-blur-sm p-8 md:p-12">
          <header className="mb-6 flex items-center gap-4">
            <div className="rounded-full bg-pink-200 p-3 shadow-inner">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 11.5C3 8 6 5 9.5 5s6.5 3 6.5 6.5S13 18 9.5 18 3 15 3 11.5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 7l4-1v6l-4 1z" />
              </svg> */}
              🐾
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Add a Pet / Product
              </h2>
              <p className="text-sm text-gray-500">
                Friendly form to list pets, food, accessories or care products.
              </p>
            </div>
          </header>

          <form
            onSubmit={handleAddListing}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Product / Pet Name
              </label>
              <input
                name="productName"
                placeholder="e.g. Fluffy the Persian / Grain-Free Salmon"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-pink-200 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                name="category"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 bg-white focus:ring-2 focus:ring-amber-200"
              >
                <option>Pets</option>
                <option>Pet Food</option>
                <option>Accessories</option>
                <option>Pet Care Products</option>
              </select>
              <p className="mt-2 text-xs text-gray-500">
                Note: Price should be 0 if you select{" "}
                <span className="font-semibold">Pets</span>.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price (BDT)
              </label>
              <input
                name="price"
                placeholder="0 (set to 0 if Category = Pets)"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-amber-200 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                name="location"
                placeholder="City, area (e.g. Pabna, Bangladesh)"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-pink-200 focus:outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Short description (age, breed, condition, features, etc.)"
                rows={4}
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-amber-200 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image (URL)
              </label>
              <input
                name="imageUrl"
                placeholder="https://example.com/image.jpg"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-pink-200 focus:outline-none"
              />
              <p className="mt-2 text-xs text-gray-500">
                Provide a direct image URL. Preview not included (design-only).
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date (Pick Up)
              </label>
              <input
                name="date"
                type="date"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:ring-2 focus:ring-amber-200 focus:outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email (current user)
              </label>
              <input
                name="email"
                value={user?.email}
                readOnly
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700"
              />
            </div>

            <div className="md:col-span-2 flex items-center justify-between gap-4">
              <div>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-pink-800 text-white font-semibold shadow-sm cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddListing;
