import React from 'react'
import { Menu, Space } from 'antd';
import styled from 'styled-components';
import ItemProfile from '../asset/ItemProfile.png';
import ItemAddButton from '../asset/ItemAddButton.png';

const items = [
  {
    label: 'Items'
  },
  {
    label: 'Saved Events'
  }
];

const ImageStyled = styled.img`
  width: 200px;
  height: 150px;
  // border: solid;
  border-radius: 24px;
  &:hover{
    cursor: pointer;
  }
`;

const ImageAddButtonStyled = styled.img`
  padding: 40px 40px;
  border: solid;
  border-radius: 24px;
  &:hover{
    cursor: pointer;
  }
`

const MenuStyled = styled(Menu)`
  background-color: #9C9C9C;
  .ant-menu-item{
    margin: 1rem;
    border-radius: 300px;
    color: #10393B;
  }
  .ant-menu-item-selected {
    margin: 1rem;
    background-color: #10393B!important;
    color: white !important;
    border-radius: 30px;
  }
`;

export default function ProfileMenu() {
  return (
    <div style={{
      overflowY: 'scroll'
    }} ><MenuStyled
      items={items}
      mode='horizontal'
      theme='dark'
    />
      <Space size={[8,16]} wrap style={{
        marginLeft: '2rem',
      }}>
        <ImageAddButtonStyled src={ItemAddButton}  alt='item'/>
        <ImageStyled src={ItemProfile}  alt='item'/>
        <ImageStyled src={ItemProfile}  alt='item'/>
        <ImageStyled src={ItemProfile}  alt='item'/>
        <ImageStyled src={ItemProfile}  alt='item'/>
        <ImageStyled src={ItemProfile}  alt='item'/>
        <ImageStyled src={ItemProfile}  alt='item'/>
        <ImageStyled src={ItemProfile}  alt='item'/>
        <ImageStyled src={ItemProfile}  alt='item'/>
        <ImageStyled src={ItemProfile}  alt='item'/>
        <ImageStyled src={ItemProfile}  alt='item'/>
        <ImageStyled src={ItemProfile}  alt='item'/>
        <ImageStyled src={ItemProfile}  alt='item'/>
        <ImageStyled src={ItemProfile}  alt='item'/>
      </Space>
    </div>
  )
}
