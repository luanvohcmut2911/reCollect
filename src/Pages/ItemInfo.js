import { React, useState, useEffect } from 'react'
import { Layout, Typography, Carousel, Image, Avatar, Button, Space, Tag, Table } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import NavBar from '../Components/NavBar';
import EndBar from '../Components/EndBar';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}
const columns = [
    {
        title: "Item",
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Condition',
        dataIndex: 'condition',
        key: 'condition',
    }
];
const data = [
    {
        key: '1',
        name: 'Charger',
        age: 5,
        condition: 'Used for 5 years - Scratches a little',
    },
    {
        key: '2',
        name: 'Box',
        age: 5,
        condition: 'Old XBox box, still usable',
    },
    {
        key: '3',
        name: 'Monitor',
        age: 3,
        condition: 'Additional monitor bought outside of XBox, used for 3 years',
    },
];

const ItemInfo = () => {
    const { width } = useWindowDimensions();
    

    return (
        <Layout>
            <NavBar />
            <div>
                <div className='container' style={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    flexWrap: (width < 800) ? "wrap" : "nowrap"
                }}>
                    <div className="carou-fucking-sel" style={{
                        height: "25rem",
                        width: "25rem",
                        marginBottom: "50px",
                        alignSelf: "center",
                        margin: "10px",
                        borderRadius: "24px",
                        border: "#10393B"
                    }} >
                        <Carousel className="fuckyouANTcarousel" autoplay dotPosition='bottom'>
                            <Image
                                width="100%"
                                height="100%"
                                style={{
                                    borderRadius: "24px",
                                }}
                                src="https://picsum.photos/1000"
                            />
                            <Image
                                width="100%"
                                height="100%"
                                style={{
                                    borderRadius: "24px",
                                }}
                                src="https://picsum.photos/1000"
                            />
                            <Image
                                width="100%"
                                height="100%"
                                style={{
                                    borderRadius: "24px",
                                }}
                                src="https://picsum.photos/1000"
                            />
                            <Image
                                width="100%"
                                height="100%"
                                style={{
                                    borderRadius: "24px",
                                }}
                                src="https://picsum.photos/1000"
                            />
                        </Carousel>
                        <Typography.Title level={3} type="secondary" style={{
                            alignSelf: "center",
                            textAlign: "center"
                        }}> Old XBox Series X controller  </Typography.Title>
                    </div>
                    <div style={{
                        flexWrap: "wrap",
                        flex: "0 1 50%",
                        padding: "2rem"
                    }}>
                        <Typography.Title level={2}> Old XBox Series X controller </Typography.Title>
                        <div style={{
                            display: "flex",
                            flexWrap: "wrap",
                            padding: "0.2rem",
                            margin: "0.2rem",
                            alignItems: "center"
                        }}>
                            <Avatar
                                size={{
                                    xs: 40,
                                    sm: 50,
                                    md: 50,
                                    lg: 50,
                                    xl: 50,
                                    xxl: 50,
                                }}
                                style={{
                                    margin: "0.2rem"
                                }}
                                icon={<AntDesignOutlined />}
                            />
                            <div style={{
                                textAlign: "left",
                                padding: "5px",
                                paddingLeft: "10px",
                            }}>
                                <div>
                                    <Typography.Title level={5} style={{
                                        fontSize: "20px",
                                        fontStyle: "bold",
                                        margin: 0
                                    }}> Tri Nhan Pham</Typography.Title>
                                    <Typography.Text type="secondary"> @District 8, HCMC</Typography.Text>
                                </div>
                            </div>
                            <Button style={{
                                marginLeft: "2rem"
                            }}> Follow </Button>
                        </div>

                        <div className="item-description" style={{
                            marginLeft: "0.2rem",
                            marginRight: "0.2rem"
                        }}>
                            <Typography.Title level={5} type="secondary"> Updated March 09, 2023 </Typography.Title>
                            <Typography.Text type="secondary"> Reviewed and managed by <Tag color="#87d068">NguyenKuteBaoKhanh</Tag>
                                <br />
                                <Space size={[0, 8]} wrap style={{
                                    padding: "1rem"
                                }}>
                                    <Tag color="magenta">#magenta</Tag>
                                    <Tag color="gold">#gold</Tag>
                                    <Tag color="green">#green</Tag>
                                    <Tag color="cyan">#cyan</Tag>
                                    <Tag color="blue">#blue</Tag>
                                    <Tag color="purple">#purple</Tag>
                                </Space>
                            </Typography.Text>
                            <Typography.Title level={3}> Description </Typography.Title>
                            <Typography.Text style={{
                                padding: "5px"
                            }}>
                                Mollit laborum enim non ullamco et occaecat velit nulla tempor
                                voluptate adipisicing. Eu reprehenderit eu proident non aliqua occaecat anim qui ipsum veniam. Non exercitation eu in fugiat anim sunt dolor ad deserunt ut do dolore ipsum. Enim fugiat amet tempor eiusmod commodo excepteur culpa.
                                Mollit laborum enim non ullamco et occaecat velit nulla tempor
                                voluptate adipisicing. Eu reprehenderit eu proident non aliqua occaecat anim qui ipsum veniam. Non exercitation eu in fugiat anim sunt dolor ad deserunt ut do dolore ipsum. Enim fugiat amet tempor eiusmod commodo excepteur culpa.
                                Mollit laborum enim non ullamco et occaecat velit nulla tempor
                            </Typography.Text>
                        </div>

                        <div className="additional-items" style={{
                            marginLeft: "0.2rem",
                            marginRight: "0.2rem"
                        }}>
                            <Typography.Title level={3}> Additional Items </Typography.Title>
                            <Table columns={columns} dataSource={data} />
                        </div>
                        <Button width="100%" size="large" style={{
                            backgroundColor: "#10393B", color: "white",
                            width: "100%",
                            height: "50px",
                        }}> Request Trade </Button>
                    </div>
                </div>
            </div>
            <EndBar />
        </Layout >
    )
}

export default ItemInfo;
