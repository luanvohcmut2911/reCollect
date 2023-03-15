import React from 'react'
import { Layout, Typography, Space, Image, List, Button, Pagination } from 'antd';
import NavBar from '../Components/NavBar';
import EndBar from '../Components/EndBar';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

function DonateInfo() {
    return (
        <Layout>
            <Layout>
                <NavBar />
                <Layout.Content>
                    <Typography.Title style={{
                        padding: "1.7rem"
                    }}> Clothes & shoes donations in Ho Chi Minh City </Typography.Title>
                    <Space direction="horizontal" wrap>
                        <Space direction="vertical" wrap>
                            <Layout style={{
                                padding: "1.7rem"
                            }}>
                                <Typography.Title level={3}>1.  About this campaign</Typography.Title>
                                <Space direction='vertical'>
                                    <Typography.Text>
                                        Pariatur ipsum elit laboris nulla pariatur eiusmod magna aute. Eu dolor magna quis excepteur esse. Et quis id aliqua quis non id ipsum.
                                        Pariatur cillum nulla id officia velit laborum aliquip excepteur consectetur proident elit nisi. Do mollit sit do excepteur consectetur sit aliqua cillum sint.
                                        Et occaecat tempor qui incididunt commodo dolore cupidatat. Adipisicing officia id nisi fugiat Lorem cupidatat ex ad consectetur incididunt qui ullamco.
                                        Occaecat aute fugiat eu nostrud duis anim. Consectetur tempor ex quis fugiat tempor sint et in amet. Ea pariatur ex ut reprehenderit culpa do aliqua qui eu.
                                        Labore incididunt sit in deserunt magna ipsum culpa eiusmod pariatur in exercitation reprehenderit fugiat velit. Ex ex sit proident mollit elit.
                                    </Typography.Text>
                                    <Typography.Text>
                                        Pariatur ipsum elit laboris nulla pariatur eiusmod magna aute. Eu dolor magna quis excepteur esse. Et quis id aliqua quis non id ipsum.
                                        Pariatur cillum nulla id officia velit laborum aliquip excepteur consectetur proident elit nisi. Do mollit sit do excepteur consectetur sit aliqua cillum sint.
                                        Et occaecat tempor qui incididunt commodo dolore cupidatat. Adipisicing officia id nisi fugiat Lorem cupidatat ex ad consectetur incididunt qui ullamco.
                                        Occaecat aute fugiat eu nostrud duis anim. Consectetur tempor ex quis fugiat tempor sint et in amet. Ea pariatur ex ut reprehenderit culpa do aliqua qui eu.
                                        Labore incididunt sit in deserunt magna ipsum culpa eiusmod pariatur in exercitation reprehenderit fugiat velit. Ex ex sit proident mollit elit.
                                    </Typography.Text>
                                </Space>
                            </Layout>
                            <div style={{
                                padding: "1.7rem"
                            }}>
                                <Typography.Title level={3}>2.  Item that you can donate</Typography.Title>
                                <List
                                    header={<div>List of items</div>}
                                    bordered
                                    size={"small"}
                                    dataSource={data}
                                    renderItem={(item) => (
                                        <List.Item>
                                            <Typography.Text mark>[ITEM]</Typography.Text> {item}
                                        </List.Item>
                                    )}
                                />
                            </div>
                            <Space direction="horizontal" wrap
                                style={{
                                    justifyContent: "center",
                                    padding: "1.7em"
                                }}>
                                <Button type="primary" shape="round" size="large">
                                    Make a donate
                                </Button>
                                <Button type="primary" shape="round" size="large">
                                    Save for later
                                </Button>
                            </Space>
                        </Space>
                        <Space direction="horizontal" wrap
                            style={{
                                justifyContent: "center"
                            }}>
                            <Image
                                width={350}
                                style={{
                                    borderRadius: "24px",
                                    padding: "1.2em"
                                }}
                                src="https://picsum.photos/601"
                            />
                            <Image
                                width={350}
                                style={{
                                    borderRadius: "24px",
                                    padding: "1.2em"
                                }}
                                src="https://picsum.photos/602"
                            />
                            <Image
                                width={350}
                                style={{
                                    borderRadius: "24px",
                                    padding: "1.2em"
                                }}
                                src="https://picsum.photos/603"
                            />
                            <Image
                                width={350}
                                style={{
                                    borderRadius: "24px",
                                    padding: "1.2em"
                                }}
                                src="https://picsum.photos/604"
                            />
                            <Image
                                width={350}
                                style={{
                                    borderRadius: "24px",
                                    padding: "1.2em"
                                }}
                                src="https://picsum.photos/604"
                            />
                        </Space>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            alignSelf: "center",
                            padding: "2rem"
                        }}>
                            <Pagination
                                total={85}
                                showSizeChanger
                                showTotal={(total) => `Total ${total} items`}
                                pageSize={5}
                            />
                        </div>

                    </Space>
                </Layout.Content>
                <Space direction="vertical"
                    style={{
                        paddingTop: "1.2rem"
                    }}>
                    <Space direction="vertical"
                        style={{
                            padding: "1.7rem"
                        }}>
                        <Typography.Title level={2} > Locate us </Typography.Title>
                        <Typography.Text>
                            Please consider donate in-place if you are available or near our meet-up destination.
                        </Typography.Text>
                    </Space>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.49524122255!2d106.69876695099104!3d10.773330262157684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4743648f3d%3A0x16ce95918cb14834!2sSaigon%20Centre!5e0!3m2!1svi!2s!4v1678703624556!5m2!1svi!2s" width={"100%"} height={"400px"} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map-api"></iframe>
                </Space>
            </Layout>
            <EndBar />
        </Layout >
    )
}

export default DonateInfo;
