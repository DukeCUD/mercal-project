
import {  Table } from 'antd';



const BookTable=(props)=>{
    const {dataUser}=props
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

    return(
        <Table
            columns={columns} dataSource={dataUser} rowKey={"_id"} />)
}
export default BookTable