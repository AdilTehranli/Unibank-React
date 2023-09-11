import Card from "./components/card/Card";
import Cardnews from "./components/cardnews/Cardnews";
import Support from "./components/support/Support";
import Ubank from "./components/ubank/Ubank";
import Ucard from "./components/ucard/Ucard";
import Footer from "./layouts/footer/Footer";
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
    <Support/>
    <Footer/>
    </div>
  );
}

export default App;
