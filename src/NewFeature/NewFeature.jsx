import { useState } from "react";
import "./whatever";
import "./anotherfile-with-no-jsx.js";
import "./woops-jsx";

export const NewFeature = () => {
  const [state, setState] = useState("yellow");
  const handler = () => {
    if (state === "yellow") {
      setState("hello");
    } else {
      setState("yellow");
    }
  };

  return (
    <div>
      <h1>i am a new feature</h1>
      <button onClick={handler}>{state}</button>
    </div>
  );
};
