"use client";
import CustomBtn from "@/components/shared/Button/CustomBtn";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import Container from "@/components/ui/Container";
import React from "react";

const AddPlacePage = () => {
  const handleAddPlace = (event) => {
    event.preventDefault();

    const addedPlace = {
      title: event.target.title.value,
      coverImage: event.target.coverImage.value,
      location: event.target.location.value,
      discount: event.target.discount.value,
      amount: event.target.amount.value,
      days: event.target.days.value,
      peopleCountRange: event.target.peopleCountRange.value,
      isFeatured: event.target.isFeatured.value,
      shortDescription: event.target.shortDescription.value,
      description: event.target.description.value,
    };

    console.log(addedPlace);
  };

  return (
    <div>
      <SectionHeading
        title="Add Place for Admin"
        description="Added places where people want to go!!"
      />

      <div>
        <Container>
          <form
            onSubmit={handleAddPlace}
            className="bg-slate-200/5 p-1 sm:-6 md:p-10 lg:p-12 rounded"
          >
            {/* title, coverURL */}
            <div className="grid grid-cols-1 md:gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-gray-700 text-sm md:text-base"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  required
                  className="block w-full px-4 py-2 mt-1 md:mt-2 text-gray-700 border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring placeholder:text-sm"
                  placeholder="Add Place Title"
                />
              </div>
              <div className="mt-2 md:mt-0">
                <label
                  className="text-gray-700 text-sm md:text-base"
                  htmlFor="coverImage"
                >
                  Cover Image URL
                </label>
                <input
                  type="text"
                  name="coverImage"
                  required
                  className="block w-full px-4 py-2 mt-1 md:mt-2 text-gray-700 border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring placeholder:text-sm"
                  placeholder="Cover image URL"
                />
              </div>
            </div>

            {/* location, discount, amount */}
            <div className="grid grid-cols-1 gap-2 md:gap-6 mt-4 sm:grid-cols-3">
              <div>
                <label
                  className="text-gray-700 text-sm md:text-base"
                  htmlFor="location"
                >
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  className="block w-full px-4 py-2 mt-1 md:mt-2 text-gray-700 border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring placeholder:text-sm"
                  placeholder="Location"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 text-sm md:text-base"
                  htmlFor="discount"
                >
                  Discount
                </label>
                <input
                  type="number"
                  name="discount"
                  required
                  className="block w-full px-4 py-2 mt-1 md:mt-2 text-gray-700 border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring placeholder:text-sm"
                  placeholder="Add discount"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 text-sm md:text-base"
                  htmlFor="amount"
                >
                  Amount
                </label>
                <input
                  type="number"
                  name="amount"
                  required
                  className="block w-full px-4 py-2 mt-1 md:mt-2 text-gray-700 border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring placeholder:text-sm"
                  placeholder="Amount"
                />
              </div>
            </div>

            {/* Days, peopleCountRange, isFeatured*/}
            <div className="grid grid-cols-1 gap-2 md:gap-6 mt-4 sm:grid-cols-3">
              <div>
                <label
                  className="text-gray-700 text-sm md:text-base"
                  htmlFor="days"
                >
                  Days
                </label>
                <input
                  type="number"
                  name="days"
                  required
                  className="block w-full px-4 py-2 mt-1 md:mt-2 text-gray-700 border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring placeholder:text-sm"
                  placeholder="Days"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 text-sm md:text-base"
                  htmlFor="peopleCountRange"
                >
                  People Count Range
                </label>
                <input
                  type="text"
                  name="peopleCountRange"
                  required
                  className="block w-full px-4 py-2 mt-1 md:mt-2 text-gray-700 border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring placeholder:text-sm"
                  placeholder="Add discount"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 text-sm md:text-base"
                  htmlFor="isFeatured"
                >
                  Featured
                </label>
                <select
                  name="isFeatured"
                  required
                  className="block w-full px-4 py-2 mt-1 md:mt-2 text-gray-700 border border-gray-200 rounded-md"
                >
                  <option disabled defaultValue>
                    Selected one
                  </option>
                  <option value={true}>true</option>
                  <option value={false}>false</option>
                </select>
              </div>
            </div>

            {/* shortDescription */}
            <div className="mt-2 md:mt-3">
              <label
                className="text-gray-700 text-sm md:text-base"
                htmlFor="shortDescription"
              >
                Short Description
              </label>
              <textarea
                type="text"
                name="shortDescription"
                required
                className="block w-full h-20 md:h-24 px-4 py-2 mt-1 md:mt-2 text-gray-700 border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring placeholder:text-sm"
                placeholder="Short description"
              ></textarea>
            </div>
            {/* description */}
            <div className="mt-2 md:mt-3">
              <label
                className="text-gray-700 text-sm md:text-base"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                type="text"
                name="description"
                required
                className="block w-full h-24 md:h-40 px-4 py-2 mt-1 md:mt-2 text-gray-700 border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring placeholder:text-sm"
                placeholder="Add Place description"
              ></textarea>
            </div>

            <div className="flex justify-center mt-6">
              <CustomBtn
                type="submit"
                text="Added Place"
                customClass="w-full md:w-2/6"
              />
            </div>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default AddPlacePage;
