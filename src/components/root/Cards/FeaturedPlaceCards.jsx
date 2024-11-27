import { Clock, MapPin, Users } from "lucide-react";
import Image from "next/image";

export default function FeaturedPlaceCards({ travelInfo }) {
  // const travelInfo = {
  //   id: "01",
  //   title: "Sunny Beach Paradise",
  //   description:
  //     "Relax on golden sands and enjoy the calming ocean breeze at Sunny Beach Paradise.",
  //   coverImg:
  //     "https://i.ibb.co/56dDNys/wallace-fonseca-v-Te2-E3es6-WI-unsplash.jpg",
  //   location: "Maldives",
  //   peopleCountRange: "1-5",
  //   days: 7,
  //   discount: "10",
  //   amount: 1500,
  //   originalAmount: 1667, // Calculated based on discount (10%)
  //   isFeatured: true,
  // };

  return (
    <div className="max-w-sm overflow-hidden group border p-3 rounded-lg bg-gradient-to-r from-neutral-50 to-sky-50">
      {/* Image Section with Discount Badge */}
      <div className="relative">
        <Image
          src={travelInfo?.coverImg}
          alt={travelInfo?.title}
          width={200}
          height={300}
          className="w-full h-[200px] object-cover rounded-lg"
        />
        {travelInfo?.discount && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-900 text-white rounded-lg px-2 py-1">
            <p className="">{travelInfo?.discount}% OFF</p>
          </div>
        )}
      </div>

      {/* Header Section */}
      <div className="ml-2 mt-3 space-y-1">
        <h3 className="text-xl font-semibold">{travelInfo?.title}</h3>
        <p className="text-sm text-muted-foreground">
          {travelInfo?.description}
        </p>
      </div>

      {/* Content Section */}
      <div className="flex justify-between ml-2 mt-2">
        <div className="space-y-3">
          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{travelInfo?.location}</span>
          </div>

          {/* Duration */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{travelInfo.days} Days</span>
          </div>

          {/* People Count */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{travelInfo?.peopleCountRange} People</span>
          </div>
        </div>
        <div>
          {/* Pricing */}
          <div className="flex items-center gap-2 pt-2">
            <div className="text-sm text-muted-foreground line-through">
              ${travelInfo?.originalAmount}
            </div>
            <div className="text-xl font-bold text-rose-500">
              ${travelInfo?.amount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
