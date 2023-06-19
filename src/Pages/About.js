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

// import img_front from "../asset/AdobeStock_355885536 1.png";
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
                            Goal 12, Goal 1 of <a href="https://www.un.org/sustainabledevelopment/">Sustainable Development Goals (SDGs) </a>
                        </Title>
                        <Text
                            style={{
                                fontSize: "1.25rem",
                            }}
                        >   <Text italic style={{
                            fontSize: "1.25rem",
                        }}>
                                We aim to contribute our parts to these goals from SDGs by creating a community allows people to nurture literacy on responsible consumption/production patterns and the state of poverty in the world.
                            </Text>

                            <ul>
                                <li>
                                    <Typography.Title level={4} style={{
                                        marginBottom: 0
                                    }}>Goal 12 - Responsible Consumption and Production
                                    </Typography.Title>
                                    <br />
                                    Ensuring sustainable consumption and production patterns, which is key to sustain the livelihoods of current and future generations.
                                    <br />
                                    Unsustainable patterns of consumption and production are root causes of the triple planetary crises of climate change, biodiversity loss and pollution. These crises, and related environmental degradation, threaten human well-being and achievement of the Sustainable Development Goals.
                                    <br />
                                    Governments and all citizens should work together to improve resource efficiency, reduce waste and pollution, and shape a new circular economy.
                                </li>
                                <li>
                                    <Typography.Title level={4} style={{
                                        marginBottom: 0
                                    }}>Goal 1 - No poverty
                                    </Typography.Title>
                                    <br />
                                    Eradicating extreme poverty for all people everywhere by 2030 is a pivotal goal of the 2030 Agenda for Sustainable Development. Between 2015 and 2018, global poverty continued its historical decline, with the poverty rate falling from 10.1 per cent in 2015 to 8.6 per cent in 2018.
                                    <br />
                                    Nowcasts suggest that owing to the COVID-19 pandemic, the global poverty rate increased sharply from 8.3 per cent in 2019 to 9.2 per cent in 2020, representing the first increase in extreme poverty since 1998 and the largest increase since 1990 and setting back poverty reduction by about three years.                                    <br />
                                    The impact of the COVID-19 pandemic reversed the steady progress of poverty reduction over the past 25 years. This unprecedented reversal is being further exacerbated by rising inflation and the impacts of the war in Ukraine. It is estimated that these combined crises will lead to an additional 75 million–95 million people living in extreme poverty in 2022, compared with pre-pandemic projections.                                </li>
                            </ul>

                        </Text>
                        <br />
                        <br />
                        <div style={{
                            flex: "50%",
                            display: "flex",
                            justifyContent: "space-around",
                            flexWrap: "wrap",
                            alignContent: "center",
                            alignSelf: "center",
                            justifyItems: "center",
                            paddingRight: "10px"
                        }}>
                            <iframe width="400" height="315" src="https://www.youtube.com/embed/o08ykAqLOxk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="400" height="315" src="https://www.youtube.com/embed/j7c9b9A2AHc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="400" height="315" src="https://www.youtube.com/embed/uDpIAcT3mqU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <iframe width="400" height="315" src="https://www.youtube.com/embed/puEWxGStQrE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>

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
                            reduce, reuse, reCollect
                        </Title>
                        <Title level={2} type={"secondary"}>
                            The Circular Economy
                        </Title>
                        <Text
                            style={{
                                fontSize: "1.25rem",
                            }}
                        >
                            Circular Economy -  an economic system that is designed to keep resources in use for as long as possible, extracting the maximum value from them before recovering and regenerating products and materials at the end of their lifecycle. It is based on the principles of designing out waste and pollution, keeping products and materials in use, and regenerating natural systems.
                            <br />
                            <br />
                            In a circular economy, products are designed to be durable, repairable, and recyclable, and materials are reused and recycled as much as possible. Waste is minimized and resources are conserved, reducing the environmental impact of production and consumption.
                            <br />
                            <br />
                            The circular economy is often contrasted with the traditional linear economy, which is based on a take-make-dispose model. In the linear economy, resources are extracted, products are manufactured, used, and then discarded as waste, leading to environmental degradation and resource depletion.
                            <br />
                            <br />
                            Inspired by such theory, reCollect can help reduce waste by giving old items a new life.
                            You'll also be able to save money by trading items instead of buying new ones.
                            And, by promoting sustainable consumption, you'll be doing your part to help the environment.
                            Many benefits arise from using reCollect:
                            <ul>
                                <li>Reduce waste: By using reCollect, users can trade their unused items with others instead of throwing them away, reducing the amount of waste sent to landfills.</li>
                                <li>Save money: Instead of buying new items, users can trade for items they need on reCollect, saving money on new purchases.</li>
                                <li>Connect with others: reCollect creates a community of people who are interested in sustainable consumption and production, providing a space for users to connect with like-minded individuals.</li>
                                <li>Promote sustainability: By encouraging the reuse of items and reducing waste, reCollect promotes sustainable practices that can help to reduce the negative impact of human activity on the environment.</li>
                                <li>Increase awareness: By providing information and resources on responsible consumption and production, reCollect can help to increase awareness and educate users on the importance of sustainable living.</li>
                            </ul>
                        </Text>
                    </div>
                    {/* <Image
                        width={800}
                        src={placeholder_img3}
                        style={{
                            flex: "66.6%",
                            padding: "5px",
                            borderRadius: "24px",
                        }}
                    /> */}
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
                            Let's go!
                        </Button>
                    </div>
                </div>
                {/* ----------------------------------- */}
                <EndBar color="white" />
            </Layout>
        </div>
    );
}
