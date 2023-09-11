import Card from "./components/card/Card";
import Cardnews from "./components/cardnews/Cardnews";
import Ubank from "./components/ubank/Ubank";
import Ucard from "./components/ucard/Ucard";
import Header from "./layouts/header/Header";
import Navbar from "./layouts/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Header/>
    <Card/>
    <Ucard/>
    <Ubank/>
    <Cardnews/>
    </div>
  );
}

export default App;
