import React, { useState } from 'react';
import './App.css';
import FoodBox from './assets/FoodBox';
import foodData from './FoodData';

const App = () => {
  const [totalCalories, setTotalCalories] = useState(0);

  const handleAdd = (id, quantity) => {
    const foodItem = foodData.find(item => item.id === id);
    const calories = foodItem.cal * quantity;
    setTotalCalories(totalCalories + calories);
  };

  return (
    <div className="App">
      <h1>Pro Nutrition</h1>
      <div className="food-container">
        {foodData.map(food => (
          <FoodBox
            key={food.id}
            id={food.id}
            img={food.img}
            name={food.name}
            cal={food.cal}
            handleAdd={handleAdd}
          />
        ))}
      </div>
      <div>
        <h2>Total Calories: {totalCalories}</h2>
      </div>
    </div>
  );
}

export default App;
