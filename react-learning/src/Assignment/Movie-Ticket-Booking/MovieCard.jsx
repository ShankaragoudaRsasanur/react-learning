import { useState } from "react";

function MovieCard({ movieName, language, timing, poster }) {

  const [bookingStatus, setBookingStatus] = useState(false);

  function toggleBooking() {
    setBookingStatus(!bookingStatus);
  }

  return (
    <div>

      <img
        src={poster}
        alt={movieName}
        width="200"
      />

      <h2>{movieName}</h2>

      <p>Language: {language}</p>

      <p>Timing: {timing}</p>

      <p>
        Booking Status: {bookingStatus ? "Booked" : "Not Booked"}
      </p>

      <button onClick={toggleBooking}>
        {bookingStatus ? "Cancel Ticket" : "Book Ticket"}
      </button>

    </div>
  );
}

export default MovieCard;