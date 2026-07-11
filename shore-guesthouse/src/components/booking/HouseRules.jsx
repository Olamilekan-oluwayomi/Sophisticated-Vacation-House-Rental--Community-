import {
  Clock3,
  Ban,
  PawPrint,
  PartyPopper,
  Volume2,
  ShieldCheck,
} from "lucide-react";

const rules = [
  {
    icon: <Clock3 size={22} />,
    title: "Check-in",
    description: "From 3:00 PM onwards",
  },
  {
    icon: <Clock3 size={22} />,
    title: "Check-out",
    description: "Before 11:00 AM",
  },
  {
    icon: <Ban size={22} />,
    title: "No Smoking",
    description: "Smoking is not permitted anywhere inside the property.",
  },
  {
    icon: <PartyPopper size={22} />,
    title: "No Parties",
    description: "Events and parties are not allowed.",
  },
  {
    icon: <PawPrint size={22} />,
    title: "No Pets",
    description: "Pets are not permitted during your stay.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Respect the Property",
    description:
      "Please treat the guesthouse as you would your own home.",
  },
];

function HouseRules() {
  return (
    <section className="bg-stone-100 px-6 py-20 md:px-10 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 font-serif text-sm text-stone-500">
            House Rules
          </p>

          <h2 className="mb-6 font-serif text-4xl leading-tight text-stone-900 md:text-5xl">
            A few simple guidelines for an enjoyable stay.
          </h2>

          <p className="leading-8 text-stone-600">
            We want every guest to enjoy a peaceful and memorable experience.
            Please take a moment to review our house rules before making your reservation.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rules.map((rule) => (
            <article
              key={rule.title}
              className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-5 text-stone-900">
                {rule.icon}
              </div>

              <h3 className="mb-2 font-serif text-2xl text-stone-900">
                {rule.title}
              </h3>

              <p className="leading-7 text-stone-600">
                {rule.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HouseRules;