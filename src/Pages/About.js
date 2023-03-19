import React, { useContext } from "react";
import {
    Button,
    Layout,
    theme,
    Typography,
    Card,
    Image,
    FloatButton,
} from "antd";
import { AppContext } from "../Context/AppProvider";
import "../App.css";

import img_front from "../asset/AdobeStock_355885536 1.png";
import placeholder_img from "../asset/Placeholder image.png";
import placeholder_img2 from "../asset/Placeholder image2.png";
import placeholder_img3 from "../asset/Placeholder image3.png";
import EndBar from "../Components/EndBar";
import LogoIcon from "../icons/LogoIcon";
import { HomeOutlined } from "@mui/icons-material";
const { Header } = Layout;
const { Text, Title } = Typography;


export default function About() {
    const { width, commonBreakPoint } = useContext(AppContext);
    const windowWidth = width;
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div style={{
            overflowY: 'hidden'
        }}>
            <FloatButton.BackTop />
            <Layout className="layout">
                <Header style={{ backgroundColor: "#10393B", padding: "10px" }}>
                    <LogoIcon
                        color="white"
                        style={{
                            float: "left",
                            margin: "16px 24px 16px 1rem",
                            width: (windowWidth < commonBreakPoint[1]) ? "" : "150px",
                            height: (windowWidth < commonBreakPoint[1]) ? "" : "27.19px"
                        }}
                    />          <div
                        className="right"
                        style={{
                            margin: "0.7rem",
                            marginRight: "1em",
                        }}
                    >
                        <a href="/home">
                            {
                                <HomeOutlined
                                    style={{
                                        color: "white",
                                        float: "right",
                                        margin: "10px",
                                        fontSize: "40px"
                                    }} />
                            }
                        </a>
                    </div>
                </Header>
                <div
                    className="site-layout-content"
                    style={{
                        backgroundColor: "#10393B",
                        borderBottomRightRadius: "20px",
                        borderBottomLeftRadius: "20px",
                        padding: "50px",
                        paddingBottom: "50px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                        }}
                    >
                        <div
                            style={{
                                flex: "33.3%",
                                padding: "1.2em",
                                alignSelf: "center",
                            }}
                        >
                            <Text
                                style={{
                                    color: "white",
                                    fontSize: "1.5rem",
                                }}
                            >
                            </Text>
                            <Title style={{ color: "white", marginTop: 0, fontSize: "5em" }}>
                                {" "}
                                Oh hey, it's reCollect Time!
                            </Title>
                            <Text style={{ color: "white", fontSize: "1.5rem" }}>
                                Welcome to reCollect Education, where you can learn more about us, our project and what goals we aim to achieve
                                and how YOU can help us achieve them by learning the principles of responsible consumption and production.
                                Let's get started!
                            </Text>
                            <div
                                style={{
                                    marginTop: "20px",
                                }}
                            >
                                <Button
                                    style={{
                                        borderRadius: "24px",
                                        marginRight: "16px",
                                        backgroundColor: "#10393B",
                                        borderColor: "#EF8450",
                                        color: "#EF8450",
                                    }}
                                    size="large"
                                    href="#site-layout-content-2"
                                >
                                    Let's go!
                                </Button>
                            </div>
                        </div>
                        <iframe width="760" height="515" src="https://www.youtube.com/embed/W2vec3v1wfo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                {/* ----------------------------------- */}
                <div
                    className="site-layout-content-2"
                    id="site-layout-content-2"
                    style={{
                        background: colorBgContainer,
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        textAlign: "left",
                    }}
                >
                    <Card
                        style={{
                            width: "90%",
                            height: "auto",
                            margin: 30,
                            backgroundColor: "#EF8450",
                            borderRadius: "24px",
                            paddingBottom: "50px"
                        }}
                    >
                        <Title style={{ color: "white" }}> “Trading old items is like passing a torch from one generation to another.”
                        </Title>
                        <Text
                            italic
                            style={{
                                color: "white",
                                fontSize: "1.5rem",
                            }}
                        >
                            As you may already know, reCollect is a web application that allows users to easily trade their old items with others.
                            With the growing trend of sustainable living and the desire to reduce waste,
                            reCollect provides an eco-friendly solution for those looking to get rid of their old items while also finding new treasures.
                        </Text>
                        <br />
                        <br />
                        <Text style={{
                            color: "white",
                            fontSize: "1.5rem",
                        }}>
                            However, we are not just a old stuffs trading web app, our greatest goal is to build an active
                            community that aims to consume and produce more sustainably and responsibly. And that starts with each individual takes account in
                            their actions of reducing the tendency to hoard and throw away usable products.
                        </Text>
                        <Title
                            style={{
                                fontSize: "1.5rem",
                            }}
                        >
                            It's not just a web app, it's a community of people <mark>trading and giving.</mark>
                        </Title>
                    </Card>
                </div>
                {/* ----------------------------------- */}
                <div
                    className="site-layout-content"
                    style={{
                        background: colorBgContainer,
                        display: "flex",
                        flexWrap: "wrap",
                        marginLeft: "2rem"
                    }}
                >
                    <div
                        style={{
                            flex: "50%",
                            padding: "5px",
                            paddingRight: "20px",
                            alignSelf: "center",
                        }}
                    >
                        <Title
                            style={{
                                fontSize: "3rem",
                            }}
                        >
                            But why the need?
                        </Title>
                        <Text
                            style={{
                                fontSize: "1.25rem",
                            }}
                        >
                            "After all, we already have what we all need! We just have to go to a supermarket or a local convenience store to buy, then why trade?"
                            <br />
                            <br />
                            You must thinking why would you take the effort to go and trade items with people instead of buying a new one and throw away the old one.
                            However, great environmental impacts occur if we produce too much and dispose too much for our need of convenience.
                            <br />
                            <br />
                            Take Fast Fashion for example, here's a video introduction on Fast Fashion by TEDx speakers Patrick Woodyard, Co-Founder & CEO of Nisolo.
                            His experience using business as a force for good has led him across the globe ranging from Kenya and Uganda to Argentina and Peru.
                            <br />
                            <br />
                        </Text>
                    </div>
                    <div style={{
                        flex: "50%",
                        justifyContent: "center",
                        alignContent: "center",
                        alignSelf: "center",
                        justifyItems: "center",
                        paddingRight: "10px"
                    }}>
                        <iframe width="350" height="315" src="https://www.youtube.com/embed/mPM9lhackHw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <iframe width="350" height="315" src="https://www.youtube.com/embed/tLfNUD0-8ts" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <iframe width="350" height="315" src="https://www.youtube.com/embed/BiSYoeqb_VY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <iframe width="350" height="315" src="https://www.youtube.com/embed/5r8V4QWwxf0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                {/* ----------------------------------- */}
                <div
                    className="site-layout-content"
                    style={{
                        background: colorBgContainer,
                        display: "flex",
                        flexDirection: "row-reverse",
                        flexWrap: "wrap",
                        paddingRight: "20px",
                    }}
                >
                    <div
                        style={{
                            flex: "33.3%",
                            padding: "5px",
                            textAlign: "left",
                            paddingLeft: "20px",
                            paddingRight: "20px",
                            alignSelf: "center",
                        }}
                    >
                        <Title
                            style={{
                                fontSize: "3rem",
                            }}
                        >
                            Responsible Consumption and Production/ No poverty
                        </Title>
                        <Title level={2} type={"secondary"}>
                            Goal 12, Goal 1 of Sustainable Development Goals (SDG)
                        </Title>
                        <Text
                            style={{
                                fontSize: "1.25rem",
                            }}
                        >
                            We aim to contribute our parts to Goal 12 - Responsible Consumption and Production and
                            Goal 1 - No poverty:
                            <ul>
                                <li>
                                    
                                </li>
                                <li>
                                    
                                </li>
                            </ul>

                        </Text>
                        <br />
                        <br />
                        <Typography.Paragraph italic strong style={{
                            fontSize: "1.25rem",
                            border: "#"
                        }}>
                            It's not just a web app, it's a community of people trading and giving. We allow users
                            to either give away or trade their items based on their needs.
                        </Typography.Paragraph>
                    </div>
                    <Image
                        width={800}
                        src={placeholder_img2}
                        style={{
                            borderRadius: "24px",
                            padding: "5px",
                            paddingRight: "20px",
                        }}
                    />
                </div>
                {/* ----------------------------------- */}
                <div
                    className="site-layout-content"
                    style={{
                        background: colorBgContainer,
                        display: "flex",
                        flexWrap: "wrap",
                    }}
                >
                    <div
                        style={{
                            flex: "20%",
                            padding: "5px",
                            alignSelf: "center",
                            paddingRight: "20px",
                        }}
                    >
                        <Title
                            style={{
                                fontSize: "3rem",
                            }}
                        >
                            Donate, spread love
                        </Title>
                        <Text
                            style={{
                                fontSize: "1.25rem",
                            }}
                        >
                            With reCollect, you are able to donate your old items to ongoing
                            charity events and charity organizations.
                        </Text>
                        <br />
                        <br />
                        <Typography.Paragraph italic strong style={{
                            fontSize: "1.25rem",
                            border: "#"
                        }}>
                            Give old items as well as hopes and dreams to those in needs.
                        </Typography.Paragraph>
                    </div>
                    <Image
                        width={800}
                        src={placeholder_img3}
                        style={{
                            flex: "66.6%",
                            padding: "5px",
                            borderRadius: "24px",
                        }}
                    />
                </div>
                {/* ----------------------------------- */}
                <div
                    className="site-layout-content"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "#10393B",
                        padding: "3rem",
                        paddingTop: "10rem",
                        paddingBottom: "10rem",
                        alignItems: "center",
                    }}
                >
                    <div>
                        <Title
                            style={{
                                color: "white",
                                marginTop: 0,
                                fontSize: "3rem",
                            }}
                        >
                            {" "}
                            Ready to reCollect?
                        </Title>
                    </div>
                    <div
                        style={{
                            marginTop: "20px",
                            alignContent: "center",
                        }}
                    >
                        <Button
                            style={{
                                borderRadius: "24px",
                                marginRight: "16px",
                                backgroundColor: "#EF8450",
                                borderColor: "#EF8450",
                                color: "white",
                            }}
                            size="large"
                            href="/signup"
                        >
                            Sign Up Now
                        </Button>
                    </div>
                </div>
                {/* ----------------------------------- */}
                <EndBar color="white" />
            </Layout>
        </div>
    );
}
