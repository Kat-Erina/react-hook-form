import { useState } from "react";

const StateComp = () => {
  let [val, setVa] = useState(0);

  function handleClick() {
    // es ver ichers dzvel values
    // setTimeout(() => {
    //   setVa(val + 1);
    //   console.log("clicked", val);
    // }, 3000);

    setTimeout(() => {
      setVa((prevValue) => prevValue + 1);
      console.log("clicked", val);
    }, 3000);
  }
  console.log(val);
  return (
    <section>
      <p>Now it is {val}</p>

      <button onClick={handleClick}>change val</button>
    </section>
  );
};

export default StateComp;
