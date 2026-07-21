import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>

      <Link to="/">
        <button>Go to Home</button>
      </Link>
    </div>
  );
}

export default Contact;