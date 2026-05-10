import { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  // Form state for plant name, image URL, and price
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  });

  // Update form state when input values change
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  // Handle form submission: POST new plant to backend and reset form
  function handleSubmit(e) {
    e.preventDefault();

    // Create form data without inStock - that's handled by the backend
    const newPlantData = {
      name: formData.name,
      image: formData.image,
      price: formData.price
    };

    // Send POST request to backend
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlantData)
    })
      .then((res) => res.json())
      // Call parent callback with the newly created plant (includes id from backend)
      .then((addedPlant) => onAddPlant(addedPlant));

    // Clear form after submission
    setFormData({
      name: "",
      image: "",
      price: ""
    });
  }

  return (
    <form
      className="new-plant-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        placeholder="Plant name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
      />

      <button type="submit">
        Add Plant
      </button>
    </form>
  );
}

export default NewPlantForm;