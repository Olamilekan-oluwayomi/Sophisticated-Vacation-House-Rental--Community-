import { Link } from "react-router-dom";

function About() {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 font-serif text-sm text-stone-700">About</p>

        <div className="max-w-5xl space-y-12">
          <p className="font-serif text-4xl leading-tight tracking-tight text-stone-900 md:text-5xl lg:text-6xl">
            Tucked into the rugged cliffs of Santorini, the Shore Guesthouse
            offers a retreat with uninterrupted views of the caldera.
          </p>

          <p className="font-serif text-3xl leading-tight text-stone-900 md:text-4xl lg:text-5xl">
            <Link
              to="/information"
              className="text-blue-500 underline underline-offset-4 transition-colors hover:text-blue-600"
            >
              Read our story
            </Link>{" "}
            to learn the history behind Shore Guesthouse and the beauty of
            Santorini.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
