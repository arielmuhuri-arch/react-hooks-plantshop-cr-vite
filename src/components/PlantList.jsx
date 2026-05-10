import PlantCard from "./PlantCard";

function PlantList({ plants, onSoldOut }) {
  // Render each plant as a PlantCard component
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onSoldOut={onSoldOut}
        />
      ))}
    </ul>
  );
}

export default PlantList;