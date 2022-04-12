import React, {useState} from "react";

function Day({day}) {
  const [isDone, setDone] = useState(false);

  const complete = () => {
    setDone(true);
  }

  return (
    <button type="button" onClick={complete} className={isDone ? "btn-month done" : "btn-month"}>{day}</button>
  );
}

export default Day;
