
import { Button, Checkbox, Form, Input } from 'antd';
import {  Flex } from 'antd';
import {Link} from "react-router-dom";
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const LoginPage =()=>{
    return (
        <div className="login-content">
            <h1 style={{textAlign:'center',marginBottom:"40px"}}>Log in</h1>
            <Form
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
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
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
                <a className="link-0" href="./register">Forgot password</a>

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
                            <Button style={{marginBottom:"10px"}} type="primary"htmlType="submit" block>
                                Log In
                            </Button>
                            <Link to="/sign-up"><Button block>
                                Sign Up
                            </Button></Link>


                        </Flex>
                    </div>
                </Form.Item>
            </Form>
        </div>

    )
}
export default LoginPage