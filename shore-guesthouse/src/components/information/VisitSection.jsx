import transportOptions from "../../data/information";
import TransportOption from "./TransportOption";

function VisitSection() {
  return (
    <section className="px-6 py-20 md:px-10 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-16">
          <p className="mb-4 font-serif text-sm text-stone-500">
            Visit
          </p>

          <h2 className="max-w-3xl font-serif text-4xl leading-tight text-stone-900 md:text-6xl">
            There are many ways to get to Shore Guesthouse.
          </h2>
        </div>

        {/* Options */}
        <div className="divide-y divide-stone-300">
          {transportOptions.map((option) => (
            <TransportOption
              key={option.id}
              {...option}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default VisitSection;