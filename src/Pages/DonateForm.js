import React, { useContext } from 'react';
import {
    Button,
    Checkbox,
    Col,
    Form,
    Input,
    Row,
    Select,
    Layout
} from 'antd';
import styled from "styled-components";
import { AppContext } from "../Context/AppProvider";
import NavBar from '../Components/NavBar';
import EndBar from '../Components/EndBar';
import AddModal from '../Components/AddModal';
import ItemAddButton from "../asset/ItemAddButton.png";
const { Option } = Select;

const ImageAddButtonStyled = styled.img`
  padding: 40px 40px;
  border: solid;
  border-radius: 24px;
  margin: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
const DonateForm = () => {
    const [form] = Form.useForm();
    const { setAddModalVisible } = useContext(AppContext);
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const handleAdd = () => {
        setAddModalVisible(true);
    };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="84">+84</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );
    return (
        <Layout>
            <NavBar />
            <Layout.Content>
                <div style={{
                    margin: 30
                }}>
                    <Form
                        {...formItemLayout}
                        form={form}
                        name="register"
                        onFinish={onFinish}
                        initialValues={{
                            residence: ['zhejiang', 'hangzhou', 'xihu'],
                            prefix: '84',
                        }}
                        style={{
                            maxWidth: 600,
                        }}
                        scrollToFirstError
                    >

                        <Form.Item
                            name="Name"
                            label="Name"
                            tooltip="What do you want others to call you?"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your name!',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input placeholder='Your name here...' />
                        </Form.Item>

                        <Form.Item
                            name="phone"
                            label="Phone Number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your phone number!',
                                },
                            ]}
                        >
                            <Input
                                addonBefore={prefixSelector}
                                style={{
                                    width: '100%',
                                }}
                                placeholder='Your phone number...'
                            />
                        </Form.Item>
                        <Form.Item
                            name="address"
                            label="Address"
                            tooltip="Insert where you want us to pick up your item."
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your address!',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input placeholder='Your address here...' />
                        </Form.Item>
                        <Form.Item
                            name="note"
                            label="Note"
                            rules={[
                                {
                                    required: false,
                                    message: 'Please input note',
                                },
                            ]}
                        >
                            <Input.TextArea showCount maxLength={200} />
                        </Form.Item>
                        <Form.Item label="Captcha" extra="We must make sure that your are a human.">
                            <Row gutter={8}>
                                <Col span={12}>
                                    <Form.Item
                                        name="captcha"
                                        noStyle
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input the captcha you got!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Button>Get captcha</Button>
                                </Col>
                            </Row>
                        </Form.Item>
                        <Form.Item
                            name="agreement"
                            valuePropName="checked"
                            rules={[
                                {
                                    validator: (_, value) =>
                                        value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                },
                            ]}
                            {...tailFormItemLayout}
                        >
                            <Checkbox>
                                I have read the <a href="/">agreement</a>
                            </Checkbox>
                        </Form.Item>
                        <Form.Item>
                            <ImageAddButtonStyled
                                src={ItemAddButton}
                                alt="item"
                                onClick={handleAdd}
                            />
                        </Form.Item>
                        <AddModal />
                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Layout.Content>
            <EndBar />
        </Layout>
    );
};
export default DonateForm;