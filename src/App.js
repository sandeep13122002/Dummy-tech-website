import{BrowserRouter as Router,Routes,Route}from "react-router-dom"
import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/services.scss";
import "./styles/mediaquery.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";
import Services from "./components/Services";


function App() {
  return (
    <Router>
      <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contacts/>}/>
      <Route path="/services" element={<Services/>}/>
    </Routes>
     <Footer/>

    </Router>
  );
}

export default App;
