import "./HomeUpperPart.css"
const HomeUpperPart =()=>{
    return (
        <>
            <div className="HomeUpperPart" >
                <h1 className="h1-0">Make Your Software Vision a Reality</h1>
                <p className="p-0">Help designers/developers building beautiful products more flexible and working with happiness</p>
                <div>
                    <a href="/book.manage">
                        <button className="bth bth-0">Getting Started</button>
                    </a>
                    <a className="link-1" href="./login"> <button className="bth bth-1">
                        Log In
                    </button></a>

                </div>
            </div>
        </>
    )
}
export default HomeUpperPart;