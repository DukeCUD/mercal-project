import BookManage from "./bookManage/book.manage.jsx";
import BookTable from "./bookManage/BookTable.jsx";
import {useEffect, useState} from "react";
import {fetchAllAPI} from "../service/api.service.js";


const Book =()=>{
    const [dataUser,setDataUser]=useState([])
    const [current,setCurrent]=useState(1)
    const [pageSize,setPageSize]=useState(5)
    const [total,setTotal]=useState(0)

    useEffect(() => {
        loadAPI()
    }, [current, pageSize]);
    const loadAPI=async()=>{
        const res =await fetchAllAPI(current,pageSize) // Thêm 2 biến để dựa vào chúng xác định động số phần tử
        if(res.data){
            setDataUser(res.data.result)
            setCurrent(res.data.meta.current)
            setPageSize(res.data.meta.pageSize)
            setTotal(res.data.meta.total)

        }
    }


    return (
        <div style={{margin:"50px 100px",}}>
            <BookManage loadAPI={loadAPI}/>
            <BookTable
                loadAPI={loadAPI}
                dataUser={dataUser}
                current={current}
                pageSize={pageSize}
                total={total}
                setCurrent={setCurrent}
                setPageSize={setPageSize}
            />

        </div>
    )
}
export default  Book