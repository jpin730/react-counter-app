import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleSubtract = () => setCounter(counter - 1);

  const handleReset = () => setCounter(value);

  const handleAdd = () => setCounter(counter + 1);

  return (
    <div className="border rounded shadow m-5 p-5 text-center">
      <h1>CounterApp</h1>
      <h2 className="bg-success text-bg-success rounded w-25 py-3 mx-auto my-5">
        {counter}
      </h2>
      <button
        className="btn btn-danger btn-lg px-5 mx-3"
        onClick={handleSubtract}
      >
        -1
      </button>
      <button
        className="btn btn-secondary btn-lg px-5 mx-3"
        aria-label="btn-reset"
        onClick={handleReset}
      >
        Reset
      </button>
      <button className="btn btn-primary btn-lg px-5 mx-3" onClick={handleAdd}>
        +1
      </button>
    </div>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
