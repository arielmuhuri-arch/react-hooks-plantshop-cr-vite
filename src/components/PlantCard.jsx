function PlantCard({ plant, onSoldOut }) {
  // Destructure plant data
  const { id, name, image, price, inStock } = plant;

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />

      <h4>{name}</h4>

      <p>Price: {price}</p>

      {/* Show "In Stock" button if plant is in stock, otherwise show disabled "Out of Stock" button */}
      {inStock ? (
        <button onClick={() => onSoldOut(id)}>
          In Stock
        </button>
      ) : (
        <button disabled>
          Out of Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;