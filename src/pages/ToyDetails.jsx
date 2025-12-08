import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";

const ToyDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigation = useNavigate();

  const [pet, setPet] = useState();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    fetch(`https://pawbuddy-five.vercel.app/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setPet(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleOrder = (e) => {
    e.preventDefault();
    const buyerName = e.target.buyerName.value;
    const email = e.target.email.value;
    const listingId = e.target.listingId.value;
    const listingName = e.target.listingName.value;
    const quantity = parseInt(e.target.quantity.value);
    const price = parseInt(e.target.price.value);
    const address = e.target.address.value;
    const date = e.target.date.value;
    const phone = e.target.phone.value;
    const notes = e.target.notes.value;

    const formData = {
      buyerName,
      email,
      listingId,
      listingName,
      quantity,
      price,
      address,
      date,
      phone,
      notes,
    };

    axios
      .post("https://pawbuddy-five.vercel.app/orders", formData)
      .then((res) => {
        console.log(res);
        navigation("/my-listing");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-amber-100 p-6 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <div className="md:col-span-1 flex items-center justify-center">
          <div className="w-full">
            <img
              src={pet?.image}
              alt={pet?.name}
              className="w-full h-64 object-cover rounded-xl shadow-inner"
              onError={(e) => {
                e.currentTarget.src =
                  "https://via.placeholder.com/600x400?text=No+Image";
              }}
            />

            <div className="mt-4 text-center space-y-2">
              <h2 className="text-xl font-semibold">{pet?.name}</h2>
              <p className="text-sm text-gray-600">{pet?.category}</p>
              {/* <p className="text-lg font-bold">{pet?.priceLabel || 'Nan'}</p> */}
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-extrabold">{pet?.name}</h1>
              <p className="text-sm text-gray-500">
                ID: <span className="font-mono">{pet?._id}</span>
              </p>
            </div>

            <div className="text-right">
              {/* <p className="text-sm text-gray-500">Posted: <span className="font-medium">{formattedDate}</span></p> */}
              <p className="text-sm text-gray-500">
                Location: <span className="font-medium">{pet?.location}</span>
              </p>
            </div>
          </div>

          <section className="mt-6">
            <h3 className="text-lg font-semibold mb-2">About {pet?.name}</h3>
            <p className="text-gray-700 leading-relaxed">{pet?.description}</p>
          </section>
        </div>
      </div>
      {/* Form Field for Adoption or Buy Modal */}
      <div className="my-5">
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          Buy Or Adopt
        </button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <form
              onSubmit={handleOrder}
              className="space-y-4 p-4 bg-white shadow rounded"
            >
              {/* Buyer Name */}
              <div>
                <label htmlFor="buyerName" className="block font-medium">
                  Buyer Name
                </label>
                <input
                  type="text"
                  name="buyerName"
                  id="buyerName"
                  value={user?.displayName}
                  readOnly
                  className="w-full border rounded p-2 bg-gray-100"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={user?.email}
                  readOnly
                  className="w-full border rounded p-2 bg-gray-100"
                />
              </div>

              {/* Listing ID */}
              <div>
                <label htmlFor="listingId" className="block font-medium">
                  Product / Listing ID
                </label>
                <input
                  type="text"
                  name="listingId"
                  id="listingId"
                  value={pet?._id}
                  readOnly
                  className="w-full border rounded p-2 bg-gray-100"
                />
              </div>

              {/* Listing Name */}
              <div>
                <label htmlFor="listingName" className="block font-medium">
                  Product / Listing Name
                </label>
                <input
                  type="text"
                  name="listingName"
                  id="listingName"
                  value={pet?.name}
                  readOnly
                  className="w-full border rounded p-2 bg-gray-100"
                />
              </div>

              {/* Quantity */}
              <div>
                <label htmlFor="quantity" className="block font-medium">
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  value={pet?.category === "Pets" ? 1 : quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  readOnly={pet?.category === "Pets"}
                  className="w-full border rounded p-2"
                />
              </div>

              {/* Price */}
              <div>
                <label htmlFor="price" className="block font-medium">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  value={pet?.price}
                  readOnly
                  className="w-full border rounded p-2 bg-gray-100"
                />
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block font-medium">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter your address"
                  className="w-full border rounded p-2"
                  required
                />
              </div>

              {/* Pick-up Date */}
              <div>
                <label htmlFor="date" className="block font-medium">
                  Pick-up Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="w-full border rounded p-2"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block font-medium">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter phone number"
                  className="w-full border rounded p-2"
                  required
                />
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="notes" className="block font-medium">
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  id="notes"
                  placeholder="Any extra information..."
                  className="w-full border rounded p-2"
                  rows="3"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Submit Request
              </button>
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default ToyDetails;
