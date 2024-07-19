import {Input, Modal, notification} from "antd";
import {useEffect, useState} from "react";
import { updateUserAPI} from "../../service/api.service.js";

const UpdateUserModal =(props)=>{
    const {isModalOpenUpdate,setIsModalOpenUpdate,dataUpdate,setDataUpdate,loadAPI}=props
    const [fullName,setFullName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [_id,setID]=useState("")
    console.log(">> Check data",dataUpdate)
    useEffect(() => {
        if(dataUpdate){
            console.log(">> Check data",dataUpdate)
            setFullName(dataUpdate.fullName)
            setID(dataUpdate._id)
            setEmail(dataUpdate.email)
            setPhone(dataUpdate.phone)

        }
    }, [dataUpdate]);
    const handleClick=async ()=>{

        const res = await
            // Cụm async await có tác dun nhằm hứng kết quả sau khi axios.post()
            updateUserAPI(fullName,_id,email,phone)
        if(res.data) {
            notification.success(
                {
                    message: "Update User",
                    description: "User updated successfully!",
                }
            )
            resetAndCloseModal()
            await loadAPI()

        }
        else{
            notification.error(
                {
                    message: "Update User",
                    description: JSON.stringify(res.message),
                }
            )
        }
        console.log(">> check respon",res.data)
        //Truy cập vào sâu trong phần tử của data chính là các biến fullName, email,...
    }

    const resetAndCloseModal=()=>{
        setIsModalOpenUpdate(false);
        setFullName("")
        setEmail("")
        setID("")
        setPhone("")
        setDataUpdate(null)
    }

    return(
        <>
            <Modal maskClosable={false} title="Update User"  okText="Save" open={isModalOpenUpdate} onOk={handleClick} onCancel={resetAndCloseModal}>
                <div style={{marginBottom: "50px"}}>
                    <div style={{margin: "20px 0"}}>
                        <p>Full name</p>
                        <Input
                            value={fullName}
                            onChange={(event) => setFullName(event.target.value)}
                        />
                    </div>
                    <div style={{margin: "20px 0"}}>
                        <p>ID</p>
                        <Input
                            value={_id}
                            disabled
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
                        <p>Phone number</p>
                        <Input
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                        />
                    </div>

                </div>
            </Modal>
        </>
    )
}
export default UpdateUserModal