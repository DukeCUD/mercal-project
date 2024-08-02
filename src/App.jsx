import Header from "./component/layout/Header.jsx";
import Footer from "./component/layout/Footer.jsx";
import { Outlet } from "react-router-dom";
import { getAccountAPI } from "./service/api.service.js";
import { useContext, useEffect } from "react";
import { AuthContext } from "./component/context/auth.context.jsx";
import {Flex, Spin} from "antd";
import {LoadingOutlined} from "@ant-design/icons";


const App = () => {
    const { isAppLoading, setUser, setIsAppLoading } = useContext(AuthContext);

    const delay = (milSeconds) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, milSeconds);
        });
    };
    const fetchUserInfo = async () => {
        setIsAppLoading(true); // Bắt đầu tải dữ liệu
        const res = await getAccountAPI();
        await delay(1000);
        if (res.data) {
            console.log(">>check data", res.data);
            setUser(res.data.user);
        }
        setIsAppLoading(false); // Hoàn tất tải dữ liệu
    };

    useEffect(() => {
        fetchUserInfo();
    }, []);

    return (
        <>
            {isAppLoading ?
                <div style={{
                    position:"absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center"
                }
                }
                >
                    <Flex align="center" gap="middle">
                        <Spin
                            indicator={
                                <LoadingOutlined
                                    style={{
                                        fontSize: 48,
                                    }}
                                    spin
                                />
                            }
                        />
                    </Flex>
                </div>
                : <>
                <Header />
                <Outlet />
                <Footer />
            </>}
        </>
    );
};

export default App;
