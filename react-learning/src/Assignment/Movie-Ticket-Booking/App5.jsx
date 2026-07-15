import MovieCard from "./MovieCard.jsx";

function App5() {
  return (
    <div>

      <h1>Movie Ticket Booking</h1>

      <MovieCard
        movieName="KGF"
        language="Kannada"
        timing="7:00 PM"
        poster="https://picsum.photos/200?random=20"
      />

      <MovieCard
        movieName="Kantara"
        language="Kannada"
        timing="9:30 PM"
        poster="https://picsum.photos/200?random=21"
      />

    </div>
  );
}

export default App5;