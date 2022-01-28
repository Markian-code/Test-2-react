import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь", price: "200" },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 3, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);
  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialState);
  };
  const onIncrement = (id) => {  
      setCounters((prevState)=>{
        prevState.map((c) =>{
          if(c.id === id) {
            return {...c, value: c.value + 1}
          }
          return c 
        })
      })
  };

  const onDecrement = (id) => {
    setCounters((prevState)=>{
      prevState.map((c) =>{
        if(c.id === id) {
          return {...c, value: c.value - 1}
        }
        return c 
      })
    })
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}                    
          onDelete={handleDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};
export default CountersList;
