import React from 'react'
import NavBar from '../Components/NavBar';
import EndBar from '../Components/EndBar';
import { Layout } from 'antd';

const { Content } = Layout;

export default function Homepage() {
  return (
    <Layout>
      <NavBar />
      <Content>
        <div style={{
          backgroundColor: 'green',
          height: '100vh'
        }} >

        </div>
      </Content>
      <EndBar />
    </Layout>
  )
}
