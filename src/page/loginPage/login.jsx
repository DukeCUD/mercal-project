
import {Button, Checkbox, Divider, Form, Input, notification} from 'antd';
import {  Flex } from 'antd';
import {Link, useNavigate} from "react-router-dom";
import {logInUserAPI} from "../../service/api.service.js";
import {useContext, useState} from "react";
import {AuthContext} from "../../component/context/auth.context.jsx";



const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const LoginPage =()=>{
    const navigate = useNavigate();
    const [loading,setLoading]=useState(false)
    const {setUser}=useContext(AuthContext)
    const onFinish =async (values) => {
        setLoading(true)
        console.log('Success:', values);
        const res = await logInUserAPI(values.email,values.password)
        if(res.data){
            notification.success({
                message:"Login user",
                description:"Login successful!"
            })
            localStorage.setItem("access_token",res.data.access_token)
            setUser(res.data.user)
            navigate("/")
        }
        else{
            notification.error({
                message:"Login user",
                description:JSON.stringify(res.message)
            })
        }
        setLoading(false)
    };
    const [form] = Form.useForm();
    return (
        <div className="login-content">
            <h1 style={{textAlign:'center',marginBottom:"40px"}}>Log in</h1>
            <Form
                form={form}
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password/>
                </Form.Item>
                <Link className="link-0" href="./register">Forgot password</Link>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                    style={{marginTop:"10px"}}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 4,
                        span: 16,
                    }}
                >
                    <div className="bth-4">

                        <Flex
                            vertical
                            gap="small"
                            style={{
                                width: '100%',
                            }}
                        >
                            <Button
                                loading={loading}
                                type="primary"htmlType="submit" block>
                                Log In
                            </Button>
                            <Divider style={{margin:'14px'}} plain></Divider>
                            <Divider style={{margin:"2px"}} plain>Don't have an account? <Link to="/sign-up">Sign Up</Link></Divider>
                        </Flex>
                    </div>
                </Form.Item>
            </Form>
        </div>

    )
}
export default LoginPage