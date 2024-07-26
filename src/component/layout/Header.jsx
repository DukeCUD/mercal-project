import {useState, useEffect, useContext} from 'react';
import "./Header.css";
import { Menu } from 'antd';
import ViteLogo from '../../../public/vite.svg'
import { NavLink, useLocation } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import {AuthContext, AuthWrapper} from "../context/auth.context.jsx";

const items = [
    {
        label: <NavLink to="/book.manage">Books Manage</NavLink>,
        key: 'nav1', // Add unique keys for top-level items
    },
    {
        label: <NavLink to="/update">Update</NavLink>,
        key: 'nav2', // Add unique keys for top-level items
    },
    {
        label: 'Navigation Three - Submenu',
        key: 'nav3',  // Add unique keys for top-level items
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
    {
        label: "",
        key: 'user',  // Add unique key for user item
        icon: <UserOutlined />,
        children: [
            {
                label: <NavLink to="/setting">Setting</NavLink>,
                key: 'setting:5',
            },
            {
                label: <NavLink to="/login">Log In</NavLink>,
                key: 'setting:6',
            },
            {
                label: <NavLink to="/sign-up">Sign Up</NavLink>,
                key: 'setting:7',
            },
        ],
    },
];

const Header = () => {
    const {user} = useContext(AuthContext);
    console.log(">>check user",user)
    const location = useLocation();
    const [current, setCurrent] = useState(null);

    useEffect(() => {
        // Update the current key based on the current pathname
        const pathToKeyMap = {
            '/book.manage': 'nav1',
            '/update': 'nav2',
            '/setting': 'setting:5',
            '/login': 'setting:6',
            '/sign-up': 'setting:7',
        };

        setCurrent(pathToKeyMap[location.pathname]);
    }, [location.pathname]);

    const onClick = (e) => {
        setCurrent(e.key);
    };

    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 20fr", alignItems: "center", gridAutoFlow: "column", padding: "0px 30px", height: "70px" }}>
            <NavLink to="/./"><img src={ViteLogo} style={{ height: "50px", width: "50px" }} alt="Vite Logo" /></NavLink>
            <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: "20px",
                    margin: "0 40px",
                    alignItems: 'center',
                }}
            />
        </div>
    );
};

export default Header;
