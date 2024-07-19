
import {  Table } from 'antd';
import {fetchAllAPI} from "../../service/api.service.js";
import {useEffect, useState} from "react";


const BookTable=()=>{
    const [dataUser,setDataUser]=useState([])
    useEffect(() => {
        loadAPI(),[]

    }, []);
    const columns = [
        {
            title: 'Name',
            dataIndex: 'fullName',
        },
        {
            title: 'ID',
            dataIndex: '_id',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },

    ];
    const loadAPI=async()=>{
        const res =await fetchAllAPI()
        setDataUser(res.data)
    }
    return(
        <Table
            columns={columns} dataSource={dataUser} rowKey={"_id"} />)
}
export default BookTable