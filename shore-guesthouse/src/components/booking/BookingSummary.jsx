import { useMemo } from "react";

const PRICE_PER_NIGHT = 350;
const CLEANING_FEE = 80;
const SERVICE_FEE = 45;

function BookingSummary({ booking }) {
  const { nights, subtotal, total } = useMemo(() => {
    let nights = 0;

    if (booking.checkIn && booking.checkOut) {
      const diff =
        new Date(booking.checkOut) -
        new Date(booking.checkIn);

      nights = Math.max(
        0,
        Math.ceil(diff / (1000 * 60 * 60 * 24))
      );
    }

    const subtotal = nights * PRICE_PER_NIGHT;

    const total =
      subtotal + CLEANING_FEE + SERVICE_FEE;

    return {
      nights,
      subtotal,
      total,
    };
  }, [booking]);

  return (
    <aside className="sticky top-24 h-fit rounded-2xl border border-stone-200 p-8 shadow-sm">
      <h2 className="mb-8 font-serif text-3xl">
        Booking Summary
      </h2>

      <div className="space-y-5">
        <div className="flex justify-between">
          <span>Guests</span>

          <span>{booking.guests}</span>
        </div>

        <div className="flex justify-between">
          <span>Nights</span>

          <span>{nights}</span>
        </div>

        <div className="flex justify-between">
          <span>€350 × {nights}</span>

          <span>€{subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Cleaning</span>

          <span>€80</span>
        </div>

        <div className="flex justify-between">
          <span>Service</span>

          <span>€45</span>
        </div>

        <hr />

        <div className="flex justify-between text-xl font-semibold">
          <span>Total</span>

          <span>€{total}</span>
        </div>
      </div>
    </aside>
  );
}

export default BookingSummary;