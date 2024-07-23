// import {useEffect, useState} from "react";
import {Button, Drawer, notification,} from 'antd';
import {useState} from "react";
import {handleUploadFile, updateUserAvatarAPI} from "../../service/api.service.js";
const BookDetailModall=(props)=>{
    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)

    const {dataDetail,
        setDataDetail,
        isDetailOpen,
        setIsDataDetail,
        loadAPI }=props
    const handleOnChangeFile=(e)=>{
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(null)
            setPreview(null)
            return
        }
        const file=e.target.files[0]
        if(file){
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file))
        }
    }
    const handleUploadAvatar=async()=> {
        const resUpload = await handleUploadFile(selectedFile,"avatar")
        console.log("check response upload",resUpload)
        if(resUpload.data){
            const newAvatar = resUpload.data.fileUploaded
            const resUpdateAvatar= await updateUserAvatarAPI(newAvatar,dataDetail._id,dataDetail.fullName,dataDetail.phone)
            console.log("check newAvatar",newAvatar)
            if(resUpdateAvatar.data){
                setIsDataDetail(false)
                setSelectedFile(null)
                setPreview(null)
                await  loadAPI()
                notification.success({
                    message:"Update avatar",
                    description:"Update avatar successfully!"
                })
            }
            else{
                notification.error({
                    message:"Error upload file",
                    description:JSON.stringify(resUpdateAvatar.message)
                })
            }
        }
        else{
            notification.error({
                message:"Error upload file",
                description:JSON.stringify(resUpload.message)
            })
        }
    }

    return(

        <>
            <Drawer title="User Detail" open={isDetailOpen} onClose={()=> {setDataDetail(null);setIsDataDetail(false)}}>
                {dataDetail?
                    <>
                        <div style={{display: "grid", justifyItems: "center"}}>
                            <div
                                style={{margin: "20px 0", height: "150px", width: "180px", border: "2px solid e9ecef"}}>
                                <img style={{height: "100%", width: "100%",}}
                                     src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`}/>
                            </div>
                            <div>
                                <label style={{
                                    display: "block",
                                    backgroundColor: "gold",
                                    padding: " 10px 30px",
                                    borderRadius: "10px"
                                }} htmlFor="bthUploadFile">Upload File</label>
                                <input type="file" hidden id='bthUploadFile'
                                       onChange={(event) => handleOnChangeFile(event)}
                                />
                            </div>
                        </div>
                        <div style={{margin: "20px 0"}}>
                            <p>Full name: {dataDetail.fullName}</p>
                        </div>
                        <div style={{margin: "20px 0"}}>
                            <p>ID: {dataDetail._id}</p>
                        </div>
                        <div style={{margin: "20px 0"}}>
                            <p>Email: {dataDetail.email}</p>
                        </div>
                        <div style={{margin: "20px 0"}}>
                            <p>Phone number: {dataDetail.phone}</p>
                        </div>
                        {preview && <>
                            <div

                                style={{margin: "20px 0", height: "100px", width: "120px", border: "2px solid e9ecef"}}>
                                <p>Preview</p>

                                <img style={{height: "100%", width: "100%",}}
                                     src={preview}/>
                                <Button type="primary"
                                    onClick={()=>handleUploadAvatar()}
                                >Save</Button>
                            </div>

                        </>}
                    </> : <p>Không có dữ liệu</p>
                }
            </Drawer>
        </>
    )
}
export default BookDetailModall