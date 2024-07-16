import Header from "./component/layout/Header.jsx";
import Footer from "./component/layout/Footer.jsx";
import {Outlet} from "react-router-dom";

function App() {

  return (
   <>
       <Header/>
       <Outlet/>
       <Footer/>
   </>
  )
}

export default App
