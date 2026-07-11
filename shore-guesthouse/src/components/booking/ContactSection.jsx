import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  ArrowRight,
} from "lucide-react";

function ContactSection() {
  return (
    <section className="px-6 py-20 md:px-10 lg:px-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          {/* Left */}
          <div>
            <p className="mb-3 font-serif text-sm text-stone-500">
              Need Assistance?
            </p>

            <h2 className="mb-6 font-serif text-4xl leading-tight text-stone-900 md:text-5xl">
              We're here to help you plan your stay.
            </h2>

            <p className="leading-8 text-stone-600">
              Whether you have questions about availability,
              transportation, local attractions, or special
              requests, we'd be delighted to assist you.
            </p>
          </div>

          {/* Right */}
          <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <Mail
                  size={22}
                  className="mt-1 text-stone-900"
                />

                <div>
                  <h3 className="font-serif text-xl text-stone-900">
                    Email
                  </h3>

                  <p className="mt-2 text-stone-600">
                    hello@shoreguesthouse.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Phone
                  size={22}
                  className="mt-1 text-stone-900"
                />

                <div>
                  <h3 className="font-serif text-xl text-stone-900">
                    Phone
                  </h3>

                  <p className="mt-2 text-stone-600">
                    +30 210 123 4567
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <MapPin
                  size={22}
                  className="mt-1 text-stone-900"
                />

                <div>
                  <h3 className="font-serif text-xl text-stone-900">
                    Address
                  </h3>

                  <p className="mt-2 text-stone-600">
                    Shore Guesthouse
                    <br />
                    Oia, Santorini
                    <br />
                    Greece
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Clock3
                  size={22}
                  className="mt-1 text-stone-900"
                />

                <div>
                  <h3 className="font-serif text-xl text-stone-900">
                    Response Time
                  </h3>

                  <p className="mt-2 text-stone-600">
                    We typically reply within
                    <strong> 24 hours.</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="mailto:hello@shoreguesthouse.com"
                className="inline-flex items-center gap-3 rounded-full bg-stone-900 px-8 py-4 text-white transition hover:bg-stone-700"
              >
                Contact Us

                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;