import React from 'react'
import {Row, Col, Typography, Layout} from 'antd';
import LogoIcon from '../icons/LogoIcon';
import GoogleIcon from '../icons/GoogleIcon';
import FacebookIcon from '../icons/FacebookIcon';
import GmailIcon from '../icons/GmailIcon';
import PhoneIcon from '../icons/PhoneIcon';
import styled from 'styled-components';

const {Footer} = Layout;

const TypographyStyle = styled(Typography.Text)`
  color: white
`

export default function EndBar() {
  return (
    <Footer style={{
      backgroundColor: "#10393B",
      color: "white"
    }}>
      <Row>
        <Col span={1}></Col>
        <Col span={15}>
          <LogoIcon color="white" style= {{
            marginLeft: '0rem'
          }} />
          <TypographyStyle>
            Minus aut soluta nihil similique earum.
          </TypographyStyle>
        </Col>
        <Col span={7}>
          <Typography.Title level={1} style={{
            margin: 0,
            color: "white"
          }}>Contact us</Typography.Title>
          <div>
            <TypographyStyle style={{
              display:'flex',
              alignItems: 'center'
            }}>
              <GoogleIcon />
              abc@gmail.com
            </TypographyStyle>  
          </div>
          <div>
            <TypographyStyle style={{
              display:'flex',
              alignItems: 'center',
            }}>
              <FacebookIcon />
              abc@gmail.com
            </TypographyStyle>  
          </div>
          <div>
            <TypographyStyle style={{
              display:'flex',
              alignItems: 'center',
            }}>
              <GmailIcon />
              abc@gmail.com
            </TypographyStyle>  
          </div>
          <div>
            <TypographyStyle style={{
              display:'flex',
              alignItems: 'center',
            }}>
              <PhoneIcon  />
              abc@gmail.com
            </TypographyStyle>  
          </div>
        </Col>
        <Col span={1}></Col>
      </Row>
    </Footer>
  )
}
