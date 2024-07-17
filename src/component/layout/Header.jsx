import {useState} from 'react';
import "./Header.css";
import { Menu } from 'antd';
import ViteLogo from '../../../public/vite.svg'
import {NavLink} from "react-router-dom";

const items = [
    {
        label: <NavLink to="/book.manage">Books Manage</NavLink>,
        key: 'nav1', // Add unique keys for top-level items
    },
    {
        label: <NavLink to="/Update">Update</NavLink>,
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
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                   stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
        </svg>,
        children: [
            {
                label:  <NavLink to="/setting">Setting</NavLink>,
                key: 'setting:5',
            },
            {
                label: <NavLink to="/login">Log In</NavLink>,
                key: 'setting:3',
            },

            {
                label: <NavLink to="/sign-up">Sign Up</NavLink>,
                key: 'setting:4',
            },

        ],

    },
];

const Header = () => {
    const [current, setCurrent] = useState(null); // Set initial selected key to null

    const onClick = (e) => {
        // Allow only single selection based on key
        if (e.key !== current) {
            setCurrent(e.key);
        }
    };

    return (
        <>
            <div style={{display: "grid",  gridTemplateColumns:" 1fr 20fr" ,alignItems: "center",gridAutoFlow: "column", padding: "0px 30px",height:"70px"}}>
                <NavLink to="/./"><img src={ViteLogo} style={{height: "50px", width: "50px",}}></img></NavLink>
                <Menu
                    onClick={onClick}
                    selectedKeys={[current]} // Update selected key based on state
                    mode="horizontal"
                    items={items}
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: "20px",
                        margin: "0 40px",
                        alignItems: 'center',
                    }} // Added style for right alignment
                />
            </div>
        </>

    );
};

export default Header;
