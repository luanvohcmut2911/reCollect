import React from 'react'
import logo from '../asset/reCollect.png';
import { Menu } from 'antd';

const items=[{
  label: 'logo',
  icon: <img src={logo} alt='logo'/>
}]

export default function NavBar() {
  return (
    // <div style={{
    //   backgroundColor: 'black'
    // }}>
    //   <img src={logo} alt="logo"/>
    // </div>
    <Menu theme="dark" items={items} > 
      
    </Menu>
  )
}
