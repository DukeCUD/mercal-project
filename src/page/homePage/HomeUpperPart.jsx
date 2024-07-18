import "./HomeUpperPart.css"
import {Link} from "react-router-dom";
const HomeUpperPart =()=>{
    return (
        <>
            <div className="HomeUpperPart" >
                <h1 className="h1-0">Make Your Software Vision a Reality</h1>
                <p className="p-0">Help designers/developers building beautiful products more flexible and working with happiness</p>
                <div>
                    <Link to="/book.manage">
                        <button className="bth bth-0">Getting Started</button>
                    </Link>
                    <Link className="link-1" to="./login"> <button className="bth bth-1">
                        Log In
                    </button></Link>

                </div>
            </div>
        </>
    )
}
export default HomeUpperPart;