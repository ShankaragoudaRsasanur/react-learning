import FoodCard from "./FoodCard.jsx";

function App4() {
  return (
    <div>

      <h1>Food Ordering App</h1>

      <FoodCard
        foodName="Pizza"
        price={299}
        type="Veg"
        image="https://picsum.photos/200?random=10"
      />

      <FoodCard
        foodName="Chicken Biryani"
        price={350}
        type="Non-Veg"
        image="https://picsum.photos/200?random=11"
      />

    </div>
  );
}

export default App4;