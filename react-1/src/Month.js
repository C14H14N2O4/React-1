import React from "react";
import Day from './Day.js'

function Month({name, days}) {

  const dayButton: JSX.Element[] = [];
  for (let i = 1; i <= days; i++) {
        dayButton.push(<Day day={i}/>);
  }
  return (
      <div className="month">
        {name}
        {dayButton}
      </div>
  );
}

export default Month;
