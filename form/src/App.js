// =========================================Control Component ================
import React, { useState } from "react";

const App = () => {
  const data = {
    fname:"",
    lname:""

  }
  const [inputData,setInputData] = useState(data);
  const inputHanldler = (e) => {
    // if (e.target.name === "fname") {
    //   setFname(e.target.value);
    // }
    // if (e.target.name === "lname") {
    //   setLanem(e.target.value);
    // }
    // console.log({...inputData,[e.target.name]:e.target.value});
    setInputData({...inputData,[e.target.name]:e.target.value})

  };

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(inputData);
    setInputData(data);

  };
  return (
    <>
      <form onSubmit={submitHandle}>
        <label for="fname">First name:</label>
        <br />
        <input
          type="text"
          value={inputData.fname}
          name="fname"
          onChange={inputHanldler}
        />
        <br />
        <label for="fname">Last name:</label>
        <br />
        <input
          type="text"
          value={inputData.lname}
          name="lname"
          onChange={inputHanldler}
        />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default App;

// ========================Uncontrol Component ================================

// import React, { useRef } from "react";

// const App = () => {
//   const name = useRef();
//   const submitHanlde = (e) => {
//     e.preventDefault();
//     console.log(name.current.value);
    
//   };
//   return (
//     <>
//       <form onSubmit={submitHanlde}>
//         <input type="text" ref={name} />
//         <input type="submit" />
//       </form>
//     </>
//   );
// };

// export default App;
