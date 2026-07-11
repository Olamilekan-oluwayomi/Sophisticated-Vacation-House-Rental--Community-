import {
  BedDouble,
  Bath,
  Users,
  Wifi,
  Utensils,
  AirVent,
  Mountain,
  CookingPot,
} from "lucide-react";

const amenities = [
  {
    icon: <Users size={22} />,
    title: "2 Guests",
  },
  {
    icon: <BedDouble size={22} />,
    title: "1 King Bedroom",
  },
  {
    icon: <Bath size={22} />,
    title: "Private Bathroom",
  },
  {
    icon: <Wifi size={22} />,
    title: "High-Speed WiFi",
  },
  {
    icon: <Utensils size={22} />,
    title: "Breakfast Included",
  },
  {
    icon: <AirVent size={22} />,
    title: "Air Conditioning",
  },
  {
    icon: <Mountain size={22} />,
    title: "Sea View Terrace",
  },
  {
    icon: <CookingPot size={22} />,
    title: "Kitchenette",
  },
];

function BookingOverview() {
  return (
    <section className="px-6 py-20 md:px-10 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 font-serif text-sm text-stone-500">
            Stay Overview
          </p>

          <h2 className="mb-6 font-serif text-4xl leading-tight text-stone-900 md:text-5xl">
            Everything you need for a relaxing stay.
          </h2>

          <p className="max-w-2xl leading-8 text-stone-600">
            Wake up to panoramic sea views, enjoy thoughtfully designed
            interiors, and experience the charm of Santorini from the comfort
            of Shore Guesthouse.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-stone-200 p-6 transition duration-300 hover:border-stone-900"
            >
              <div className="mb-4 text-stone-900">{item.icon}</div>

              <h3 className="font-serif text-xl text-stone-900">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BookingOverview;