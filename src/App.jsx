import Header from "./component/layout/Header.jsx";
import Footer from "./component/layout/Footer.jsx";
import {Outlet} from "react-router-dom";
import { getAccountAPI} from "./service/api.service.js";
import {useContext, useEffect} from "react";
import {AuthContext} from "./component/context/auth.context.jsx";

function App() {
    const {setUser} = useContext(AuthContext);

    const fetchUserInfo = async()=>{
        const res = await getAccountAPI()
        if(res.data){
            console.log(">>check data",res.data)
            setUser(res.data.user)
        }
    }
    useEffect(() => {
        fetchUserInfo()
    }, []);


  return (
   <>
       <Header/>
       <Outlet/>
       <Footer/>
   </>
  )
}

export default App
