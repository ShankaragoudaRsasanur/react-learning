import CardProduct from "./Card-Product.jsx";

function App3() {
  return (
    <div>
      <h1>E-Commerce Product Card</h1>

      <CardProduct
        title="Laptop"
        price={50000}
        rating={4.5}
        image="https://picsum.photos/200"
      />
       <CardProduct
        title="Laptop"
        price={50000}
        rating={4.5}
        image="https://picsum.photos/200"
      />   
    </div>
  );
}

export default App3;