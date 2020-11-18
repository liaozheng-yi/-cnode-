import { Col, Layout, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Container from "./container";
import { navs } from "../router/router_list";
import Nav from "./nav";

function Header() {
    return <Layout.Header id="header">
        <Container>
            <Row>
                <Col 
                    xs={24}
                    sm={6}
                >
                    <h1 id='logo'>
                    <Link to='/'>
                        <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg"
                        style={{width:"120px",height:"28px",marginTop:"-5px"}}
                        />
                    </Link>
                    </h1>
                </Col>
                <Col
                    xs={24}
                    sm={18}
                >
                    <Nav
                        id="headerMenu"
                        navs={navs}
                        getSelected={(location) => {
                            const { pathname } = location;
                            return navs.findIndex(item => {
                                return item.to === pathname;
                            })
                        }}
                        theme="dark"
                    />
                </Col>
            </Row>

        </Container>
    </Layout.Header>
}

export default Header;