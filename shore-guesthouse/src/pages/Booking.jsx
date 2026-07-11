import { useState } from "react";

import BookingHero from "../components/booking/BookingHero";
import BookingOverview from "../components/booking/BookingOverview";
import BookingForm from "../components/booking/BookingForm";
import BookingSummary from "../components/booking/BookingSummary";
import BookingModal from '../components/booking/BookingModal';
import HouseRules from "../components/booking/HouseRules";
import ContactSection from "../components/booking/ContactSection";

function Booking() {
    const [booking, setBooking] = useState({
    checkIn: "",
    checkOut: "",
    guests: 2,
    requests: "",
  });

    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);

  return (
    <>
      
        <BookingHero />
         <BookingOverview />

        <section className="px-6 py-20 md:px-10 lg:px-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[2fr_1fr]">
            <BookingForm
            booking={booking}
            setBooking={setBooking}
            errors={errors}
            setErrors={setErrors}
            setShowModal={setShowModal}
            />

            <BookingSummary booking={booking} />

          </div>
        </section>

        <HouseRules />
        <ContactSection />


        <BookingModal
            open={showModal}
            onClose={() => {
                setShowModal(false)
                setBooking({
            checkIn: "",
            checkOut: "",
            guests: 2,
            requests: "",
          })
            }}
            booking={booking}
            
            />
      
    
    </>
  );
}

export default Booking;