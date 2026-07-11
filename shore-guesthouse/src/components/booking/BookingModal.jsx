import { CircleCheckBig, X } from "lucide-react";

function formatDate(date) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

function BookingModal({
  open,
  onClose,
  booking,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8">
        <button
          onClick={onClose}
          className="absolute right-5 top-5"
        >
          <X />
        </button>

        <div className="flex justify-center">
          <CircleCheckBig
            size={70}
            className="text-green-600"
          />
        </div>

        <h2 className="mt-6 text-center font-serif text-3xl">
          Booking Request Sent
        </h2>

        <p className="mt-4 text-center text-stone-600">
          Thank you for your reservation request.
          We'll contact you shortly.
        </p>

        <div className="mt-8 rounded-xl bg-stone-100 p-5">
          <p>
            <strong>Check-in:</strong>{" "}
            {formatDate(booking.checkIn)}
          </p>

          <p>
            <strong>Check-out:</strong>{" "}
            {formatDate(booking.checkOut)}
          </p>

          <p>
            <strong>Guests:</strong>{" "}
            {booking.guests}
          </p>
        </div>

        <button
          onClick={onClose}
          className="mt-8 w-full rounded-full bg-stone-900 py-4 text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default BookingModal;