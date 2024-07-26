import './registerPage.css';
import {Button, Checkbox, Form, Input, message, notification, Select, Space} from 'antd';
import {signUpUserAPI} from "../../service/api.service.js";
import {useNavigate} from "react-router-dom";

const { Option } = Select;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const SignUpPage = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onFinish = async  (values) => {
        console.log('Success:', values);
        const res = await signUpUserAPI(
            values.fullName,values.email,values.password,values.phone
        )
        if(res.data){
            notification.success({
                message:"Register user",
                description:"User created successfully!"
            })
            navigate("/login")
        }
        else {
            notification.error({
                message:"Register user",
                description:JSON.stringify(res.message)
            })
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    const onReset = () => {
        form.resetFields();
    };

    return (
        <div className="login-content">
            <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Sign up</h1>
            <Form
                justify="center"
                align="center"
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
                    label="Full name"
                    name="fullName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your full name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

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
                    <Input />
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
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="Phone Number"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            pattern: new RegExp(/\d+/g),
                            message: "Please enter a valid phone number format!"
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Space>
                        <Button type="primary" htmlType="submit">
                            Sign up
                        </Button>
                        <Button htmlType="button" onClick={onReset}>
                            Reset
                        </Button>

                    </Space>
                </Form.Item>

                {/*Tự động điền thông tin khi click button*/}
                {/*<Button*/}
                {/*onClick={()=>{*/}
                {/*    form.setFieldsValue({*/}
                {/*        fullName:"Nguyen Hong Duc",*/}
                {/*        email:"ducnguyen7925@gmail.com",*/}
                {/*        password:"ducnguyen7925",*/}
                {/*        phone:"0975731218"*/}
                {/*    })*/}
                {/*}}*/}

                {/*>Auto </Button>*/}
            </Form>

            <Form.Item
                wrapperCol={{
                    offset: 4,
                    span: 16,
                }}
            >
            </Form.Item>
        </div>
    );
};

export default SignUpPage;
