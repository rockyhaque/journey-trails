"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import Spinner from "@/components/shared/Spinner/Spinner";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import CustomBtn from "@/components/shared/Button/CustomBtn";
import { IoHeartOutline } from "react-icons/io5";
import TouristBookingModal from "@/components/dashboard/Tourist/TouristBookingModal/TouristBookingModal";
import { useSession } from "next-auth/react";
import Swal from "sweetalert2";

const DestinationDetailsSinglePage = () => {
  const { id } = useParams();
  const { data: session } = useSession();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadPlaceDetails = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_URL}/api/all-places/${id}`
      );
      setPlace(data);
    } catch (error) {
      console.error("Error fetching place details:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (id) loadPlaceDetails();
  }, [id]);

  const handleWishlist = async () => {
    if (!session || !place) return;
    const wishlistData = {
      title: place.title,
      placeName: place.location,
      placeImage: place.coverImg,
      price: place.amount,
      bookingDate: new Date(),
      travelDate: new Date(),
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      status: "wish",
    };
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/all-bookings`,
        wishlistData
      );
      console.log("Added to wishlist:", response.data);
      Swal.fire({
        icon: "success",
        title: "Added to Wishlist!",
        text: "This place has been successfully added to your wishlist.",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "There was an error adding the place to your wishlist. Please try again.",
        confirmButtonText: "OK",
      });
    }
  };
  const handleBook = async () => {
    if (!session || !place) return;
    const bookingData = {
      title: place.title,
      placeName: place.location,
      placeImage: place.coverImg,
      price: place.amount,
      bookingDate: new Date(),
      travelDate: new Date(),
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      status: "booked",
    };
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/all-bookings`,
        bookingData
      );
      console.log("Successfully booked:", response.data);
      Swal.fire({
        icon: "success",
        title: "Booking Confirmed!",
        text: "This place has been successfully booked.",
        confirmButtonText: "OK",
      });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error booking place:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "There was an error processing your booking. Please try again.",
        confirmButtonText: "OK",
      });
    }
  };
  const handleBookNow = () => {
    setIsModalOpen(true);
  };
  const modalHandler = (selected) => {
    handleBook();
    setIsModalOpen(false);
  };
  if (loading) {
    return <Spinner />;
  }
  if (!place) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Place not found.</p>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <h1 className="text-4xl font-bold">{place.title}</h1>
            <div className="flex justify-center items-center border p-1 rounded-md">
              <button onClick={handleWishlist}>
                <IoHeartOutline
                  size={30}
                  className="text-cyan-400 hover:text-rose-600 transition duration-300"
                />
              </button>
            </div>
          </div>
          <p className="text-xl text-muted-foreground">
            {place.shortDescription}
          </p>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src={place.coverImg || null}
              alt="Countryside Escape"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-1 badge">
              <MapPin className="w-4 h-4" />
              {place.location}
            </div>
            <div className="flex items-center gap-1 badge">
              <Users className="w-4 h-4" />
              {place.peopleCountRange} people
            </div>
            <div className="flex items-center gap-1 badge">
              <Calendar className="w-4 h-4" />
              {place.days}
            </div>
          </div>
          <p className="text-lg">{place.description}</p>
        </div>
        <div className="space-y-6">
          <div className="rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">What's Included</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Accommodation in a charming countryside villa</li>
              <li>Daily breakfast with local specialties</li>
              <li>Guided tour of nearby vineyards</li>
              <li>Cooking class featuring Tuscan cuisine</li>
              <li>Bicycle rentals for exploring the area</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Booking Details</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Price</span>
                <span className="text-2xl font-bold">$ {place.amount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Discount</span>
                <div variant="destructive" className="flex items-center gap-1">
                  <div className=" badge badge-error">
                    <p>{place.discount}% OFF</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Duration</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {place.days} days
                </span>
              </div>
              <CustomBtn
                onClick={handleBookNow}
                text="Book Now"
                customClass="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <TouristBookingModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        modalHandler={modalHandler}
        place={place}
      />
    </div>
  );
};

export default DestinationDetailsSinglePage;
