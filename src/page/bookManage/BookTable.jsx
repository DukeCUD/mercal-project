
import {  Table } from 'antd';
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import UpdateUserModal from "./bookUpdateModal.jsx";
import {useState} from "react";
import BookDetailModall from "./BookDetailModall.jsx";


const BookTable=(props)=>{
    const {dataUser,loadAPI}=props
    const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);
    const [dataUpdate,setDataUpdate]=useState(null)

    const [dataDetail,setDataDetail]=useState(null)
    const [isDetailOpen,setIsDataDetail]=useState(false)

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
                    <a href="#" style={{cursor:"pointer"}}
                       onClick={()=>{
                        // console.log(">>check record",record)
                        setDataDetail(record)
                        setIsDataDetail(true)
                        }}>
                        {record._id}
                    </a>
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
                loadAPI={loadAPI}
            />
            <BookDetailModall
                dataDetail={dataDetail}
            setDataDetail={setIsDataDetail}
            isDetailOpen={isDetailOpen}
            setIsDataDetail={setIsDataDetail}
                loadAPI={loadAPI}

            />

        </div>
    )
}
export default BookTable