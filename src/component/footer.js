import { Layout } from 'antd';
import React from 'react';
import Container from './container';

function Footer() {
    return <Layout.Footer id="indexFooter">
        <Container>
            CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。
        </Container>
    </Layout.Footer>
}

export default Footer;