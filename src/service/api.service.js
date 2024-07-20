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
const fetchAllAPI=()=>{
    const URL_BACKEND="api/v1/user"
    return axios.get(URL_BACKEND)   //Đối với method GET chỉ cần truyền URL
}

const deleteUserAPI=(_id)=>{
    const URL_BACKEND=`api/v1/user/${_id}`
    return axios.delete(URL_BACKEND)
}

export {
    createUserAPI,fetchAllAPI,updateUserAPI,deleteUserAPI
}