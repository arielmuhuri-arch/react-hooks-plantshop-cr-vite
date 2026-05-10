import { useEffect, useState } from "react";
import Header from "./Header";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";

function App() {
  // State to store all plants from the backend
  const [plants, setPlants] = useState([]);
  // State to store the search filter value
  const [search, setSearch] = useState("");

  // Fetch plants from the backend when the component mounts
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // Add new plant to the state after form submission
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // Toggle plant in/out of stock by updating the inStock property
  function handleSoldOut(id) {
    const updatedPlants = plants.map((plant) =>
      plant.id === id
        ? { ...plant, inStock: false }
        : plant
    );

    setPlants(updatedPlants);
  }

  // Filter plants based on search input (case-insensitive)
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <Header
        search={search}
        onSearchChange={setSearch}
      />

      <NewPlantForm onAddPlant={handleAddPlant} />

      <PlantList
        plants={filteredPlants}
        onSoldOut={handleSoldOut}
      />
    </div>
  );
}

export default App;