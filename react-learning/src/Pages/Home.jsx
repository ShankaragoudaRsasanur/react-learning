import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <Link to="/contact">
        <button>Go to Contact</button>
      </Link>
    </div>
  );
}

export default Home;