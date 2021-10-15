import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Homepage/Home";
import Footer from "./components/Footer";
import Plan from "./components/Plan";
import Plans from "./components/pages/Plans/Plans";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/plans" exact component={Plans} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
