"use client";

import Image from "next/image";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import CustomBtn from "../shared/Button/CustomBtn";
import { IoHeartOutline } from "react-icons/io5";

const ModernDetails = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <h1 className="text-4xl font-bold">Countryside Escape</h1>
            <div className="flex justify-center items-center border p-1 rounded-md">
              <button>
                <IoHeartOutline
                  size={30}
                  className="text-cyan-400 hover:text-rose-600 transition duration-300"
                />
              </button>
            </div>
          </div>
          <p className="text-xl text-muted-foreground">
            Unwind in peaceful countryside surroundings, ideal for relaxation
            and nature lovers.
          </p>
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="https://i.ibb.co.com/2F3sRHk/pexels-quang-nguyen-vinh-222549-2165688.jpg"
              alt="Countryside Escape"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-1 badge">
              <MapPin className="w-4 h-4" />
              Tuscany, Italy
            </div>
            <div className="flex items-center gap-1 badge">
              <Users className="w-4 h-4" />
              1-5 people
            </div>
            <div className="flex items-center gap-1 badge">
              <Calendar className="w-4 h-4" />7 days
            </div>
          </div>
          <p className="text-lg">
            Romantic Paris Experience offers a magical journey through the City
            of Lights. Explore iconic landmarks like the Eiffel Tower and Louvre
            Museum, stroll along the Seine River, and savor world-class French
            cuisine. Paris is the perfect destination for couples and art
            lovers.
          </p>
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
                <span className="text-2xl font-bold">$ 1100</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Discount</span>
                <div variant="destructive" className="flex items-center gap-1">
                  <div className=" badge badge-error">
                    <p>8% OFF</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Duration</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />7 days
                </span>
              </div>
              <CustomBtn text="Book Now" customClass="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernDetails;
