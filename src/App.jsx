import "./App.css";
import Header from "./components/Header";
import Calculator from "./components/Calculator";

function App() {
  return (
    <>
      <div className="hd">
        <Header />
      </div>
      <div className="app">
        <Calculator />
      </div>
    </>
  );
}

export default App;
