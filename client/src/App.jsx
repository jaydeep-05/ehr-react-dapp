import { AppContext } from "./Context/AppContext";
import { useContext } from "react";
function App() {
  const {storageContract} =useContext(AppContext);
  console.log(storageContract);
  return (
    <>
      <div id="App">
        <h1>Hello</h1>
      </div>
    </>
  );
}

export default App;
