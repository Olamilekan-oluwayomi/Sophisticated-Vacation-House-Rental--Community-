import { Link } from "react-router-dom";
import ctaImage from "../../assets/Homepage-cta.jpg";

function CTA() {
  return (
    <section className="relative h-[500px] overflow-hidden md:h-[600px]">
      {/* Background Image */}
      <img
        src={ctaImage}
        alt="Shore Guesthouse overlooking the sea"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative flex h-full items-center justify-center px-6">
        <div className="max-w-4xl text-center text-white">
          <p className="mb-6 font-serif text-lg md:text-xl">
            Plan Your Dream Getaway:
          </p>

          <h2 className="mb-8 font-serif text-4xl leading-tight md:text-6xl lg:text-7xl">
            Summer 2025
            <br />
            Dates Available
          </h2>

          <Link
            to="/booking"
            className="font-serif text-2xl underline underline-offset-4 transition-opacity hover:opacity-80 md:text-3xl"
          >
            Book now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTA;
