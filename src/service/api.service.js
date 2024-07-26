'use strict'
import axios from "./axios.customize.js";

const createUserAPI=(fullName,email,password,phone)=>{
    const URL_BACKEND="api/v1/user"
    const data ={fullName,email,password,phone}
    return axios.post(URL_BACKEND,data) //kê't quả của function là axios.post(URL backend, data)
    // cấu trúc tạo mới dữ liê axios.post(URL backend, data)
}
const updateUserAPI=(fullName,_id,email,phone)=>{
    const URL_BACKEND="api/v1/user"
    const data ={fullName,_id,email,phone}
    return axios.put(URL_BACKEND,data)
}
const fetchAllAPI=(current,pageSize)=>{
    const URL_BACKEND=`api/v1/user?current=${current}&pageSize=${pageSize}`
    return axios.get(URL_BACKEND)   //Đối với method GET chỉ cần truyền URL
}

const deleteUserAPI=(_id)=>{
    const URL_BACKEND=`api/v1/user/${_id}`
    return axios.delete(URL_BACKEND)
}

const handleUploadFile=(file, folder)=>{
    const URL_BACKEND=`api/v1/file/upload`
    let config ={
        headers:{
            "upload-type": folder,
            "Content-Type": "multipart/form-data"  // Đảm bảo viết đúng "Content-Type"
        }
    }
    const bodyFormData = new FormData();
    bodyFormData.append("fileImg", file);
    return axios.post(URL_BACKEND, bodyFormData, config);
}

const updateUserAvatarAPI=(avatar,_id,fullName,phone)=>{
    const URL_BACKEND="api/v1/user"
    const data ={avatar,_id, fullName,phone}
    return axios.put(URL_BACKEND,data)
}

const signUpUserAPI=(fullName,email,password,phone)=>{
    const URL_BACKEND="api/v1/user/register"
    const data ={fullName,email,password,phone}
    return axios.post(URL_BACKEND,data) //kê't quả của function là axios.post(URL backend, data)
    // cấu trúc tạo mới dữ liê axios.post(URL backend, data)
}

const logInUserAPI=(email,password)=>{
    const URL_BACKEND="api/v1/auth/login"
    const data ={
        username:email,
        password:password,
        delay:2000
    }
    return axios.post(URL_BACKEND,data)
}

export {
    createUserAPI,fetchAllAPI,updateUserAPI,deleteUserAPI,handleUploadFile,updateUserAvatarAPI,signUpUserAPI,logInUserAPI
}