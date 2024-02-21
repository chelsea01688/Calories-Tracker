import React, { useState, useEffect } from 'react'
import '../components/CaloriesTrackerBox.css'

function CaloriesTrackerBox() {
  const [meals, setMeals] = useState([]);
  const [mealName, setMealName] = useState("");
  const [calories, setCalories] = useState(0);

  const addMeals = () => {
    //creates a copy of the current meals array using...
    const oldMeals = [...meals];
    //creates a new meal {} using the values of mealName and calories entered by the user
    const meal = {
      mealName,
      calories,
      id: Math.floor(Math.random()*1000),
    };

    //create a new array newMeals containing the updated list of meals
    const newMeals = oldMeals.concat(meal);
    //updates the state with the new list
    setMeals(newMeals)

    //clears the input fields
    setMealName("");
    setCalories(0);
  }

  const deleteMeals = (id) => {
    const oldMeals = [...meals];

    const newMeals = oldMeals.filter((meal) => meal.id !== id);

    setMeals(newMeals);
  }

  return (
    <div className='customBox'>
      <div className='header'>
        <h1>Calories Tracker App</h1>
        <button className='delete'>Delete All</button>
      </div>
      <div className='totalCalories'>
        <h3>Total Calories: <span>0</span></h3>
      </div>
      <div className='add'>
        <input type='text'
        placeholder='Meal'
        style={{ marginRight: '80px' }}
        value={mealName}
        onChange={(e)=>setMealName(e.target.value)}
        />
        <input type='number'
        placeholder='Calories'
        value={calories}
        onChange={(e)=>setCalories(e.target.value)}
        min={0}
        />
      </div>
      <button onClick={addMeals} className='add'>Add Meal</button>
      <div className='mealListContainer'>
        {meals.map((meal, index) => (
          <div key={index} className='mealListContainer_wrapper'>
            <div>{`${meal.mealName} : ${meal.calories}`}</div>
            <div>
              <button className='deleteMeal' onClick={() => deleteMeals(meal.id)}>Delete Meal</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CaloriesTrackerBox