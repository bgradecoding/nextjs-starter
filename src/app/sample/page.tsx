"use client";
import { useState, useEffect, useCallback } from "react";

const SamplePage = () => {
  const [clicked, setClicked] = useState(false);
  const [error, setError] = useState(null);

  if (clicked) {
    throw new Error("Oh no! Something went wrong.");
  }
  useEffect(() => {
    console.log("logging error:");
    //throw new Error("error");
  }, []);
  return (
    <div>
      <h1>Sample Page</h1>
      <p>data.sample</p>
      <button onClick={() => setClicked(true)}>Click2</button>
    </div>
  );
};

export default SamplePage;
