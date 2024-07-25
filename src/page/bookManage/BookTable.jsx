
import {message, notification, Popconfirm, Table} from 'antd';
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import UpdateUserModal from "./bookUpdateModal.jsx";
import {useState} from "react";
import BookDetailModall from "./BookDetailModall.jsx";
import {deleteUserAPI, updateUserAPI} from "../../service/api.service.js";


const BookTable=(props)=>{
    const {dataUser,loadAPI,current,pageSize,total ,setCurrent,setPageSize}=props

    const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);
    const [dataUpdate,setDataUpdate]=useState(null)

    const [dataDetail,setDataDetail]=useState(null)
    const [isDetailOpen,setIsDataDetail]=useState(false)

    const handleDelete = async (id)=>{

        const res = await
            // Cụm async await có tác dun nhằm hứng kết quả sau khi axios.post()
            deleteUserAPI(id)
        if(res.data) {
            notification.success(
                {
                    message: "Delete User",
                    description: "User deleted successfully!",
                }
            )
            await loadAPI()

        }
        else{
            notification.error(
                {
                    message: "Error Delete User",
                    description: JSON.stringify(res.message),
                }
            )
        }
        console.log(">> check respon",res.data)
        //Truy cập vào sâu trong phần tử của data chính là các biến fullName, email,...
    }


    const columns = [
        {
            title: 'No',
            // dataIndex: '_id',
            render: (_, record,index) => (
                <>
                    <p style={{cursor:"pointer"}}>
                        {index+1}
                    </p>
                </>
            ),
        },

        {
            title: 'Name',
            dataIndex: 'fullName',
        },
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => (
                <>
                    <a style={{cursor:"pointer"}}
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
                    <Popconfirm
                        title="Delete User"
                        description="Are you sure to delete user?"
                        onConfirm={()=>handleDelete(record._id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <DeleteOutlined  style={{cursor:"pointer",color:"red"}  }/>

                    </Popconfirm>
                </div>
            ),
        },
    ];
    const onChange = (pagination, filters, sorter, extra) => {
        // Nê'u thay đổi trang: current
        console.log("check event", {pagination, filters, sorter, extra})
        if(pagination&&pagination.current){
            if(+pagination.current!==+current){
                setCurrent(+pagination.current)
            }
        }
        if(pagination && pagination.pageSize){
            if(+pagination.pageSize!==+pageSize){
                setPageSize(+pagination.pageSize)
            }
        }
    };
    console.log("check pageSize",pageSize)

    return (
        <div>
            <Table
                columns={columns} dataSource={dataUser} rowKey={"_id"}
                onChange={onChange}
                pagination={
                    {
                        current: current,
                        pageSize: pageSize,
                        showSizeChanger: true,
                        total: total,
                        showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
                    } }
            />
            <UpdateUserModal
                isModalOpenUpdate={isModalOpenUpdate}
                setIsModalOpenUpdate={setIsModalOpenUpdate}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadAPI={loadAPI}
            />
            <BookDetailModall
                loadAPI={loadAPI}
                dataDetail={dataDetail}
            setDataDetail={setIsDataDetail}
            isDetailOpen={isDetailOpen}
            setIsDataDetail={setIsDataDetail}
            />
        </div>
    )
}
export default BookTable