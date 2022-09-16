import "./App.css";

import Search from "./components/Search";
import Table from "./components/Table";
import Context from "./contexApi/Context";


function App() {
  

 

  return (
    <div className="App ">
      
     

      <Context>
  
        <Search />
        <Table />
       
      </Context>
    

    </div>
  );
}

export default App;
