import Navbar from "./page/navbar";
import Footer from "./page/Footer";
import Blog from "./page/blog";
import { useState } from "react";
function App(){

  const [count, setCount] = useState(0);
  const innerHandler = () => {
    setCount(count + 1);
  };

  const outerHandler = () => {
    setCount(count - 1);
  };
  return <>

  <Navbar/>

  <h1>hello world</h1>;
  <button>Increase</button>
  <button>Decrease</button>
  </>
  
};
export default App;
