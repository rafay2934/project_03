import React from 'react';
import './App.css';
import City from './City.js';
import Dinner from './City.js';
function App() {
  return (
    <div className='App'>
      {/* <Dinner></Dinner> */}
      <City name='Ali' cityName='Islamabad' />
      <hr />
      <City name='Amjad 'cityName='Lahore'/>
      <hr />
      <City name='Umair' cityName='Bahawalpur'/>
    </div>
  );
}
export default App;