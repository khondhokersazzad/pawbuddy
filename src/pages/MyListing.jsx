import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useParams } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const MyListing = () => {
  const [pet, setPet] = useState([]);
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/my-services?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setPet(data);
        console.log(pet);
      })
      .catch((err) => console.log(err));
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
      .delete(`http://localhost:3000/delete/${id}`)
      .then((res) => {
        if(res.data.deletedCount == 1){
          const filterData = pet.filter((service) => service._id != id);
        setPet(filterData);
        }
        
      })
      .catch((err) => console.log(err));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });

    
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Edit</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {pet.map((service) => {
              return (
                <tr key={service._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={service?.image} alt="Avatar" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{service.name}</div>
                        <div className="text-sm opacity-50">
                          {service.location}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>
                    {service.category}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {service.description.slice(0, 20)}...
                    </span>
                  </td>

                  <td>{service.price}</td>

                  <td className="flex gap-3">
                    <Link to={`/update-Listing/${service?._id}`}>
                      <button className="btn btn-neutral btn-s">Edit</button>
                    </Link>
                    <button
                      onClick={() => handleDelete(service?._id)}
                      className="btn btn-error btn-s"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyListing;
