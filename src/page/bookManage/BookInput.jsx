import {Input, Button, notification} from 'antd';
import {useState} from "react";
import {createUserAPI} from "../../service/api.service.js";

const BookInput=()=>{
const [fullName,setFullName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [phone,setPhone]=useState("")
    const handleClick=async ()=>{
        const res = await
        // Cụm async await có tác dun nhằm hứng kết quả sau khi axios.post()
        createUserAPI(fullName,email,password,phone)
        if(res.data) {
            notification.success(
                {
                    message: "Create User",
                    description: "User created successfully!",
                }
            )
        }
        else{
            notification.error(
                {
                    message: "Create User",
                    description: JSON.stringify(res.message),
                }
            )
        }
        console.log(">> check respon",res.data)
        //Truy cập vào sâu trong phần tử của data chính là các biến fullName, email,...
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
