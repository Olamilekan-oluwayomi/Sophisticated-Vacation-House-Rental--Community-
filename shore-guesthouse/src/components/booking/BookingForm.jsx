function BookingForm({
  booking,
  setBooking,
  errors,
  setErrors,
  setShowModal,
}) {
  const today = new Date().toISOString().split("T")[0];

  function handleChange(e) {
    const { name, value } = e.target;

    setBooking((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function increaseGuests() {
    if (booking.guests < 4) {
      setBooking((prev) => ({
        ...prev,
        guests: prev.guests + 1,
      }));
    }
  }

  function decreaseGuests() {
    if (booking.guests > 1) {
      setBooking((prev) => ({
        ...prev,
        guests: prev.guests - 1,
      }));
    }
  }

  function validate() {
    const newErrors = {};

    if (!booking.checkIn) {
      newErrors.checkIn = "Please select a check-in date.";
    }

    if (!booking.checkOut) {
      newErrors.checkOut = "Please select a check-out date.";
    }

    if (
      booking.checkIn &&
      booking.checkOut &&
      booking.checkOut <= booking.checkIn
    ) {
      newErrors.checkOut =
        "Check-out must be after check-in.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    setShowModal(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-3 font-serif text-sm text-stone-500">
        Reservation
      </p>

      <h2 className="mb-10 font-serif text-4xl text-stone-900">
        Book your stay
      </h2>

      <div className="space-y-8">
        <div>
          <label className="mb-2 block">
            Check-in
          </label>

          <input
            type="date"
            name="checkIn"
            min={today}
            value={booking.checkIn}
            onChange={handleChange}
            className="w-full rounded-lg border border-stone-300 px-4 py-3"
          />

          {errors.checkIn && (
            <p className="mt-2 text-sm text-red-600">
              {errors.checkIn}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block">
            Check-out
          </label>

          <input
            type="date"
            name="checkOut"
            min={booking.checkIn || today}
            value={booking.checkOut}
            onChange={handleChange}
            className="w-full rounded-lg border border-stone-300 px-4 py-3"
          />

          {errors.checkOut && (
            <p className="mt-2 text-sm text-red-600">
              {errors.checkOut}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block">
            Guests
          </label>

          <div className="flex w-fit items-center gap-8 rounded-lg border border-stone-300 px-5 py-3">
            <button
              type="button"
              onClick={decreaseGuests}
              aria-label="Decrease guest count"
            >
              −
            </button>

            <span>{booking.guests}</span>

            <button
              type="button"
              onClick={increaseGuests}
              aria-label="Increase guest count"
            >
              +
            </button>
          </div>
        </div>

        <div>
          <label className="mb-2 block">
            Special Requests
          </label>

          <textarea
            rows="5"
            name="requests"
            value={booking.requests}
            onChange={handleChange}
            placeholder="Airport pickup, anniversary decoration..."
            className="w-full rounded-lg border border-stone-300 px-4 py-3"
          />
        </div>

        <button
          type="submit"
          className="rounded-full bg-stone-900 px-8 py-4 text-white transition hover:bg-stone-700 cursor-pointer"
        >
          RESERVE NOW
        </button>
      </div>
    </form>
  );
}

export default BookingForm;