import BookManage from "./bookManage/book.manage.jsx";
import BookTable from "./bookManage/BookTable.jsx";
import {useEffect, useState} from "react";
import {fetchAllAPI} from "../service/api.service.js";


const Book =()=>{
    const [dataUser,setDataUser]=useState([])
    useEffect(() => {
        loadAPI(),[]

    }, []);
    const loadAPI=async()=>{
        const res =await fetchAllAPI()
        setDataUser(res.data)
    }
    return (
        <div style={{margin:"50px 100px",}}>
            <BookManage loadAPI={loadAPI}/>
            <BookTable dataUser={dataUser}/>
        </div>
    )
}
export default  Book