import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import {
  HomeOutlined,
  UserOutlined,
  ShoppingOutlined,
  ProfileOutlined,
  MessageOutlined,
  TeamOutlined,
  CalendarOutlined,
  SettingOutlined
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";
import Dashboard from "../domains/Dashboard/Dashboard.js";

const { Header, Content, Sider } = Layout;

const menuItems = [
  {
    label: <Link to="/dashboard">대시보드</Link>,
    key: "대시보드",
    icon: <HomeOutlined />
  },
  {
    label: <Link to="/customers">회원</Link>,
    key: "회원",
    icon: <UserOutlined />
  },
  {
    label: <Link to="/commodity">상품</Link>,
    key: "상품",
    icon: <ShoppingOutlined />
  },
  {
    label: <Link to="/curriculum">커리큘럼</Link>,
    key: "커리큘럼",
    icon: <ProfileOutlined />
  },
  {
    label: <Link to="/message">문자메세지</Link>,
    key: "문자메세지",
    icon: <MessageOutlined />
  },
  {
    label: <Link to="/members">구성원</Link>,
    key: "구성원",
    icon: <TeamOutlined />
  },
  {
    label: <Link to="/calendar">일정</Link>,
    key: "일정",
    icon: <CalendarOutlined />
  },
  {
    label: <Link to="/setting">설정</Link>,
    key: "설정",
    icon: <SettingOutlined/>
  }
];

const PostListPage = () => {
  const activeStyle = {
    color: "green",
    fontSize: "2rem"
  };

  return (
    <>
      <HeaderContainer />
      <Layout>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
                borderRight: 0
              }}
              items={menuItems}
            />
          </Sider>
          <Layout
            style={{
              padding: "0 24px 24px"
            }}
          >
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default PostListPage;
