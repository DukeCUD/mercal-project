// import {useEffect, useState} from "react";
import {Drawer,} from 'antd';
import {useState} from "react";
const BookDetailModall=(props)=>{
    const {dataDetail,
        setDataDetail,
        isDetailOpen,
        setIsDataDetail,}=props
    return(

        <>
            <Drawer title="User Information" open={isDetailOpen} onClose={()=> {setDataDetail(null);setIsDataDetail(false)}}>
                {dataDetail?
                    <>
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
                </>:<p>Không có dữ liệu</p>
                }
            </Drawer>
        </>
    )
}
export default BookDetailModall