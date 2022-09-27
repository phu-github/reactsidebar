import React, {FC} from 'react';
import './App.css';
import {SideBar} from "./components/molecules/Sidebar";
import {Images} from "./configs/images";
import './configs/global.scss';

function App() {

  const sidebarArr = [
    {
      name: 'Dashboard',
      linkIcon: Images.InboxIcon || 'https://picsum.photos/19',
      activeObject: false,
      linkIconPlus: Images.InboxIcon,
      imgVariantPlus: 'img-arrow',
      path: '/inbox',
    },
    {
      name: 'Actions',
      linkIcon: Images.Book || 'https://picsum.photos/19',
      activeObject: false,
      linkIconPlus: Images.RightIcon,
      imgVariantPlus: 'img-arrow',
      path: '/action',
    },
    {
      name: 'Reports',
      linkIcon: Images.Grade || 'https://picsum.photos/19',
      activeObject: false,
      linkIconPlus: Images.ReportIcon,
      imgVariantPlus: 'img-arrow',
      path: '/reports',
    }
  ];
  return (
    <div className="App">
      <SideBar sidebarArr={sidebarArr} />
    </div>
  );
}

export default App;
