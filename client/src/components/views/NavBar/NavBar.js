import React from 'react';
import { Menu } from 'antd';
import { useState } from 'react';

const items = [
  {
    label: '검색',
    key: 'mail'
  },
  {
    label: '테스트',
    key: 'app'
  },
];

function NavBar() {

  return (
    <Menu mode="horizontal" items={items} />
  )
}

export default NavBar