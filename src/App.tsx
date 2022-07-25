import "./App.css";
import Challange from "./components/Challang";
import Header from "./components/Header";
import LeftMenu from "./components/LeftMenu";
import Main from "./components/Main";


function App(): JSX.Element {
  return (
    <div className="app">
      <Header/>
      <LeftMenu/>
     <Main/>
     <Challange/>
    </div>
  );
}

export default App;
