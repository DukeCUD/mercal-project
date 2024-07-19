import {Input, Button, notification} from 'antd';
import {useState} from "react";
import {createUserAPI} from "../../service/api.service.js";
import { Modal } from 'antd';
import {Typography} from "antd";
const { Title } = Typography;
const BookManage=(props)=>{
    const {loadAPI}=props
const [fullName,setFullName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [phone,setPhone]=useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);
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
            resetAndCloseModal()
            await loadAPI()

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

    const resetAndCloseModal=()=>{
        setIsModalOpen(false);
         setFullName("")
         setEmail("")
         setPassword("")
         setPhone("")
    }



    return(


            <div style={{display:"flex",justifyContent: 'space-between',alignItems:"center"}}>
                <Title>Books Manage</Title>
                <Button  type="primary" onClick={() => setIsModalOpen(true)}>
                    Create User
                </Button>
                <Modal maskClosable={false} title="Create User"  okText="Create" open={isModalOpen} onOk={handleClick} onCancel={resetAndCloseModal}>
                    <div style={{marginBottom: "50px"}}>
                        <div style={{margin: "20px 0"}}>
                            <p>Full name</p>
                            <Input
                                   value={fullName}
                                   onChange={(event) => setFullName(event.target.value)}
                            />
                        </div>
                        <div style={{margin: "20px 0"}}>
                            <p>Email</p>
                            <Input
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                />
                        </div>
                        <div style={{margin: "20px 0"}}>
                            <p>Password</p>
                            <Input.Password
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                               />
                        </div>
                        <div style={{margin: "20px 0"}}>
                            <p>Phone number</p>
                            <Input
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}
                                />
                        </div>

                    </div>
                </Modal>

            </div>

    )
}
export default BookManage
