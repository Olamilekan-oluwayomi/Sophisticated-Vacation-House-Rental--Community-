import { Link } from "react-router-dom";

function Intro() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl bg-gray-100 rounded-sm  p-8 md:p-16">
        <p className="mb-6 font-serif text-sm">Gallery</p>

        <h2 className="mb-6 max-w-xl font-serif text-4xl md:text-5xl">
          Experience Shore Guesthouse.
        </h2>

        <Link
          to="/gallery"
          className="font-serif text-3xl text-blue-500 underline underline-offset-4"
        >
          View full gallery
        </Link>
      </div>
    </section>
  );
}

export default Intro;
