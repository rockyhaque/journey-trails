'use client';
import React, { useState, useEffect } from "react";
import Container from "@/components/ui/Container";

const UpdateDestinations = ({ destination, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    coverImage: "",
    location: "",
    discount: "",
    amount: "",
    days: "",
    peopleCountRange: "",
    isFeatured: false,
    shortDescription: "",
    description: "",
  });

  useEffect(() => {
    if (destination) {
      setFormData({
        title: destination.title || "",
        coverImage: destination.coverImg || "",
        location: destination.location || "",
        discount: destination.discount || "",
        amount: destination.amount || "",
        days: destination.days || "",
        peopleCountRange: destination.peopleCountRange || "",
        isFeatured: destination.isFeatured || false,
        shortDescription: destination.shortDescription || "",
        description: destination.description || "",
      });
    }
  }, [destination]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  return (
    <div className="">
      <div className="w-full max-w-3xl  ">
        <Container>
          <form
           
            className="bg-cyan-100 p-6 md:p-10 lg:p-12 shadow-lg rounded-lg space-y-6"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800">
                Update Destination
              </h2>
              <p className="text-sm text-gray-500">
                Fill in the details below to update the destination.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-gray-700 text-sm font-medium" htmlFor="title">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
                  placeholder="Add Place Title"
                />
              </div>
              <div>
                <label className="text-gray-700 text-sm font-medium" htmlFor="coverImage">
                  Cover Image URL
                </label>
                <input
                  type="url"
                  name="coverImage"
                  value={formData.coverImage}
                  onChange={handleInputChange}
                  required
                  className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
                  placeholder="Cover Image URL"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="text-gray-700 text-sm font-medium" htmlFor="location">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
                  placeholder="Location"
                />
              </div>
              <div>
                <label className="text-gray-700 text-sm font-medium" htmlFor="discount">
                  Discount
                </label>
                <input
                  type="text"
                  name="discount"
                  value={formData.discount}
                  onChange={handleInputChange}
                  required
                  className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
                  placeholder="Discount"
                />
              </div>
              <div>
                <label className="text-gray-700 text-sm font-medium" htmlFor="amount">
                  Amount
                </label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  required
                  className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
                  placeholder="Amount"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="text-gray-700 text-sm font-medium" htmlFor="days">
                  Days
                </label>
                <input
                  type="number"
                  name="days"
                  value={formData.days}
                  onChange={handleInputChange}
                  required
                  className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
                  placeholder="Days"
                />
              </div>
              <div>
                <label className="text-gray-700 text-sm font-medium" htmlFor="peopleCountRange">
                  People Count
                </label>
                <input
                  type="text"
                  name="peopleCountRange"
                  value={formData.peopleCountRange}
                  onChange={handleInputChange}
                  required
                  className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
                  placeholder="Range"
                />
              </div>
              <div>
                <label className="text-gray-700 text-sm font-medium" htmlFor="isFeatured">
                  Featured
                </label>
                <select
                  name="isFeatured"
                  value={formData.isFeatured}
                  onChange={handleInputChange}
                  required
                  className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
                >
                  <option disabled>Select One</option>
                  <option value={true}>True</option>
                  <option value={false}>False</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-gray-700 text-sm font-medium" htmlFor="shortDescription">
                Short Description
              </label>
              <textarea
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleInputChange}
                required
                className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
                placeholder="Short Description"
              ></textarea>
            </div>

            <div>
              <label className="text-gray-700 text-sm font-medium" htmlFor="description">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
                placeholder="Full Description"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 text-white bg-gradient-to-r from-cyan-500 to-blue-500"
              >
                Update Destination
              </button>
            </div>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default UpdateDestinations;
