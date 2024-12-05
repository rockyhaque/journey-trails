import { Clock, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedPlaceCards({ travelInfo }) {
  return (
    <Link href={`/destinations/${travelInfo?._id}`}>
      <button>
        <div className="h-[600px] overflow-hidden group border p-5 rounded-lg bg-gradient-to-r from-neutral-50 to-sky-50 shadow-lg">
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
                  {travelInfo?.originalAmount}
                </div>
                <div className="text-xl font-bold text-rose-500">
                  ${travelInfo?.amount}
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
    </Link>
  );
}
