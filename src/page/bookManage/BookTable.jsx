
import {  Table } from 'antd';
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import UpdateUserModal from "./bookUpdateModal.jsx";
import {useState} from "react";



const BookTable=(props)=>{
    const {dataUser}=props
    const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);
    const [dataUpdate,setDataUpdate]=useState(null)
    const columns = [
        {
            title: 'Name',
            dataIndex: 'fullName',
        },
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => (
                <>
                    <a href="#">{record._id}</a>
                </>
            ),
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{display:"flex",gap:"20px"}}>
                    <EditOutlined style={{cursor:"pointer",color:"orange"}}
                                  onClick={()=>{
                                      // console.log(">>check record",record)
                                      setDataUpdate(record)
                                      setIsModalOpenUpdate(true)
                                  }}/>

                    <DeleteOutlined  style={{cursor:"pointer",color:"red"}  }/>
                </div>
            ),
        },

    ];
    return (
        <div>
            <Table
                columns={columns} dataSource={dataUser} rowKey={"_id"} />
            <UpdateUserModal
                isModalOpenUpdate={isModalOpenUpdate}
                setIsModalOpenUpdate={setIsModalOpenUpdate}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
            />
        </div>
    )
}
export default BookTable