import { Input ,Button } from 'antd';
import {useState} from "react";
import axios from "axios";
const BookInput=()=>{
const [fullName,setFullName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [phone,setPhone]=useState("")
    const handleClick=()=>{
        const URL_BACKEND="http://localhost:8080/api/v1/user"
        const data ={fullName,email,password,phone}
        axios.post(URL_BACKEND,data)
        // cấu trúc tạo mới dữ liê axios.post(URL backend, data)
        console.log(">> check data",fullName,email,password,phone)
    }

    return(
        <div style={{marginBottom:"50px"}}>
            <div style={{margin:"20px 0"}}>
                <p>Full name</p>
                <Input placeholder="Basic usage"
                       value={fullName}
                    onChange={(event)=>setFullName(event.target.value)}
                />
            </div>
            <div style={{margin:"20px 0"}}>
                <p>Email</p>
                <Input
                    value={email}
                    onChange={(event)=>setEmail(event.target.value)}
                    placeholder="Basic usage"/>
            </div>
            <div style={{margin:"20px 0"}}>
                <p>Password</p>
                <Input.Password
                    value={password}
                    onChange={(event)=>setPassword(event.target.value)}
                    placeholder="input password" />
            </div>
            <div style={{margin:"20px 0"}}>
                <p>Phone number</p>
                <Input
                    value={phone}
                    onChange={(event)=>setPhone(event.target.value)}
                    placeholder="Basic usage"/>
            </div>
            <Button type="primary" onClick={()=>handleClick()}>
                Create User
            </Button>
        </div>
    )
}
export default BookInput
