import { useState } from "react";

function FoodCard({ foodName, price, type, image }) {

  const [ordered, setOrdered] = useState(false);

  function orderFood() {
    setOrdered(true);
  }

  return (
    <div>

      <img
        src={image}
        alt={foodName}
        width="200"
      />

      <h2>{foodName}</h2>

      <p>Price: ₹{price}</p>

      <p>Type: {type}</p>

      <button
        onClick={orderFood}
        disabled={ordered}
      >
        {ordered ? "Ordered" : "Order Now"}
      </button>

    </div>
  );
}

export default FoodCard;