import "./HomeMidlePart.css";

const HomeMidlePart = () => {
    return (
        <>
            <div className="container">
                <div className="image-overlay">
                    <img
                        src="https://3back.com/app/uploads/2017/07/Team-scaled.jpg"
                        alt="Background Image"
                    />
                </div>
                <div className="text-overlay">
                    <h1 style={{marginBottom: "12px"}}>“Rich components</h1>
                    <p>Mission-critical tools and a wide variety of supported languages and frameworks are at your
                        fingertips – no plugin hassle included.</p>
                </div>
            </div>
            <div className="container2">
                <div className="text-overlay2">
                    <h1 style={{marginBottom: "12px"}}>Flexible theme customization</h1>
                    <div className="author">
                        <p >“There are several ways to position a paragraph element to the right side
                            of its container. Here are two common approaches using.”</p>
                        <i>-Jonas Arbraham-</i>
                    </div>
                </div>
                <div className="image-overlay2">
                    <img
                        src="https://th.bing.com/th/id/OIP.KbVAM8VN3AOjJKNnE9eVDwHaE8?rs=1&pid=ImgDetMain"
                        alt="Background Image"
                    />
                </div>
            </div>
        </>
    );
};

export default HomeMidlePart;