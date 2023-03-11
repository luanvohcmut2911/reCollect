import React from 'react';
import { Button, Layout, theme, Typography, Card, Image } from 'antd';
import '../App.css';
const { Header } = Layout;
const { Text, Title } = Typography;

export default function LandingPage() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div>
            <Layout className="layout">
                <Header style={{ backgroundColor: "#10393B", }
                }>
                    <div className="logo" />
                    <div className="right">
                        <Button
                            style={{
                                borderRadius: "24px",
                                marginRight: "16px",
                                backgroundColor: "#EF8450",
                                borderColor: "#EF8450",
                                color: "white"
                            }}>Sign in</Button>
                        <Button
                            style={{
                                borderRadius: "24px",
                                marginRight: "16px",
                                backgroundColor: "#10393B",
                                borderColor: "#EF8450",
                                color: "#EF8450",
                            }}
                        >Sign up</Button>
                    </div>
                </Header>
                <div
                    className="site-layout-content"
                    style={{
                        backgroundColor: "#10393B",
                        borderBottomRightRadius: "20px",
                        borderBottomLeftRadius: "20px",
                        padding: "50px"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap"
                        }}
                    >
                        <div
                            style={{
                                flex: "33.3%",
                                padding: "5px"
                            }}
                        >
                            <Text style={{ color: "white" }}>Everyone has an old item...</Text>
                            <Title style={{ color: "white", marginTop: 0 }}> Give your goods a second life!</Title>
                            <Text style={{ color: "white" }}>
                                Welcome to reCollect, where you can trade your old drawer sitting alone in the corner of your
                                basement for something nice to put on your bedroom without additional costs.
                            </Text>
                        </div>
                        <Image
                            width={500}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            style={{
                                flex: "66.6%",
                                borderRadius: "10px"
                            }}
                        />
                    </div>

                    <div
                        style={{
                            marginTop: "20px"
                        }}
                    >
                        <Button
                            style={{
                                borderRadius: "24px",
                                marginRight: "16px",
                                backgroundColor: "#EF8450",
                                borderColor: "#EF8450",
                                color: "white"
                            }}>Sign Up Now</Button>
                        <Button
                            style={{
                                borderRadius: "24px",
                                marginRight: "16px",
                                backgroundColor: "#10393B",
                                borderColor: "#EF8450",
                                color: "#EF8450",
                            }}
                        >Explore more</Button>
                    </div>
                </div>
                {/* ----------------------------------- */}
                <div
                    className="site-layout-content"
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
                            width: 400,
                            margin: 30,
                            backgroundColor: "#EF8450",
                        }}
                    >
                        <Title style={{ color: "white" }}>$2.12 bil.</Title>
                        <Text style={{ color: "white" }}>Tons of waste each year</Text>
                    </Card>
                    <Card
                        style={{
                            width: 400,
                            margin: 30,
                            borderColor: "#EF8450",
                        }}
                    >
                        <Title>{"<"}6 months</Title>
                        <Text>An item's lifetime before trashed</Text>
                    </Card>
                    <Card
                        style={{
                            width: 400,
                            margin: 30,
                            borderColor: "#EF8450",
                        }}
                    >
                        <Title>80%</Title>
                        <Text>waste is unrecycled each year</Text>
                    </Card>
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
                            flex: "33.3%",
                            padding: "5px"
                        }}
                    >
                        <Title>Trade old goods</Title>
                        <Text>With reCollect, you can trade your old items with something new from other users without throwing them away. </Text>
                    </div>
                    <Image
                        width={400}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        style={{
                            flex: "66.6%",
                            padding: "5px"
                        }}
                    />
                </div>
                {/* ----------------------------------- */}
                <div
                    className="site-layout-content"
                    style={{
                        background: colorBgContainer,
                        display: "flex",
                        flexDirection: "row-reverse",
                        flexWrap: "wrap",
                    }}
                >
                    <div
                        style={{
                            flex: "33.3%",
                            padding: "5px",
                            textAlign: "right"
                        }}>
                        <Title>Give away</Title>
                        <Text>In case you don’t need anything in return, you are able to just simply give it away to someone who needs it more.</Text>
                    </div>
                    <Image
                        width={400}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                </div>
                {/* ----------------------------------- */}
                <div
                    className="site-layout-content"
                    style={{
                        background: colorBgContainer,
                        display: "flex",
                        flexWrap: "wrap"
                    }}
                >
                    <div
                        style={{
                            flex: "33.3%",
                            padding: "5px"
                        }}
                    >
                        <Title>Donate, spread love</Title>
                        <Text>With reCollect, you are able to donate your old items to ongoing charity events and charity organizations.</Text>
                    </div>
                    <Image
                        width={400}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        style={{
                            flex: "66.6%",
                            padding: "5px"
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
                        padding: "50px",
                        justifyContent: "center"
                    }}
                >
                    <div>
                        <Title style={{ color: "white", marginTop: 0 }}> Ready to reCollect?</Title>
                    </div>
                    <div
                        style={{
                            marginTop: "20px",
                            alignContent: "center"
                        }}
                    >
                        <Button
                            style={{
                                borderRadius: "24px",
                                marginRight: "16px",
                                backgroundColor: "#EF8450",
                                borderColor: "#EF8450",
                                color: "white"
                            }}>Sign Up Now</Button>
                    </div>
                </div>
                {/* ----------------------------------- */}
                <footer class="site-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-6">
                                <h6>About</h6>
                                <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
                            </div>

                            <div class="col-xs-6 col-md-3">
                                <h6>Categories</h6>
                                <ul class="footer-links">
                                    <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                                    <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                                    <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                                    <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                                    <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                                    <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
                                </ul>
                            </div>

                            <div class="col-xs-6 col-md-3">
                                <h6>Quick Links</h6>
                                <ul class="footer-links">
                                    <li><a href="http://scanfcode.com/about/">About Us</a></li>
                                    <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                                    <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
                                    <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                                    <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-sm-6 col-xs-12">
                                <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by
                                    <a href="/">Scanfcode</a>.
                                </p>
                            </div>

                            <div class="col-md-4 col-sm-6 col-xs-12">
                                <ul class="social-icons">
                                    <li><a class="facebook" href="/"><i class="fa fa-facebook"></i></a></li>
                                    <li><a class="twitter" href="/"><i class="fa fa-twitter"></i></a></li>
                                    <li><a class="dribbble" href="/"><i class="fa fa-dribbble"></i></a></li>
                                    <li><a class="linkedin" href="/"><i class="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </Layout>
        </div >
    )
}
