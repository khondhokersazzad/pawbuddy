import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios, { Axios } from "axios";
import { Navigate, useNavigate, useParams } from "react-router";

const UpdateListing = () => {
  const [services, setServices] = useState([]);
  const [category, setCategory] = useState(services?.category);
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigation = useNavigate();
  useEffect(() => {
    fetch(`https://pawbuddy-five.vercel.app/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setCategory(data.category);
      });
  }, [id]);

  console.log(services);

  

  const handleUpdateListing = (e) => {
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
    axios
      .put(`https://pawbuddy-five.vercel.app/update/${id}`, formData)
      .then((res) => {
        console.log(res.data);
        navigation("/my-listing");
      })
      .catch((errr) => console.log(errr));
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-50 via-rose-50 to-amber-100">
      <div className="relative max-w-4xl w-full mx-4 rounded-2xl shadow-2xl overflow-hidden">
        <div className="relative md:ml-1/3 bg-white bg-opacity-90 backdrop-blur-sm p-8 md:p-12">
          <header className="mb-6 flex items-center gap-4">
            <div className="rounded-full bg-pink-200 p-3 shadow-inner">🐾</div>
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
            onSubmit={handleUpdateListing}
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
                defaultValue={services.name}
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
                <option>Food</option>
                <option>Accessories</option>
                <option>Care Products</option>
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
                defaultValue={services.price}
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
                defaultValue={services.location}
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
                defaultValue={services.description}
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
                defaultValue={services.image}
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
                defaultValue={services.date}
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
                defaultValue={services.email}
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-700"
              />
              <p className="mt-2 text-xs text-gray-500">
                This email is read-only and should reflect the currently
                signed-in user.
              </p>
            </div>

            <div className="md:col-span-2 flex items-center justify-between gap-4">
              <div>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-pink-800 text-white font-semibold shadow-sm cursor-pointer"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateListing;
