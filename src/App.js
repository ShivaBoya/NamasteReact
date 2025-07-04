import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";




const Title = () =>(
    <h1 className="head" tabIndex="5">Namaste React using JSX</h1>
)




const Style = {
    backgroundColor : "#f0f0f0",
}






const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);