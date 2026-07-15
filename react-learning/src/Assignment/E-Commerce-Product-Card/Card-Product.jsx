import { useState } from "react";

function CardProduct({ title, price, rating, image }) {
  const [addedToCart, setAddedToCart] = useState(false);

  function toggleCart() {
    setAddedToCart(!addedToCart);
  }

  return (
    <div>
      <img src={image} alt={title} width="200" />

      <h2>{title}</h2>

      <p>Price: ₹{price}</p>

      <p>Rating: {rating} ⭐</p>

      <button onClick={toggleCart}>
        {addedToCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

export default CardProduct;