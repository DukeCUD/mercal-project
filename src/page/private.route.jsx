import {useContext} from "react";
import {AuthContext} from "../component/context/auth.context.jsx";
import {Link, Navigate} from "react-router-dom";

const PrivateRoute =(props)=>{
    const {user}=useContext(AuthContext)
    if(user&&user.id){
        return(
            <>
                {props.children}
            </>
        )
    }
    return (
        <div id="error-page" style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            padding: '20px'
        }}>
            <svg style={{height: "80px", width: "80px"}} xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/>
            </svg>

            <h1>Oops!</h1>
            <p style={{margin: "5px"}}>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>You need to log in to access this website</i>
            </p>
            <Link to="/login">
                <button style={{
                    margin: "15px",
                    backgroundColor: "#339af0",
                    color: "white",
                    border: "none",
                    padding: "15px",
                    borderRadius: "5px"
                }}>Login
                </button>
            </Link>
        </div>
    )
}
export default PrivateRoute