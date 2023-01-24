import React, { useState, useEffect } from "react";
import { Button, Table, Modal, Input, Tabs } from "antd";
import "./Members.css";
import NewMember from "./NewMember.js";
import { Link, Outlet } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import client from '../../lib/api/client';
const { Search } = Input;
const onSearch = (value) => console.log(value);

const columns = [
  {
    title: "이름",
    dataIndex: "name"
  },
  {
    title: "연락처",
    dataIndex: "phone"
  },
  {
    title: "이메일",
    dataIndex: "email"
  },
  {
    title: "직무",
    dataIndex: "job"
  }
];

const Members = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10);
  const [admin, setAdmin] = useState([]);
  const [coach, setCoach] = useState([]);
  const [loading, setloading] = useState(true);

  const TabPane = Tabs.TabPane;

  function callback(key) {
    console.log(key);
  }

  useEffect(() => {
    getAdminData();
    getCoachData();
  }, []);

  const getAdminData = async () => {
    await client.get("/api/member/admin").then(
      res => {
        setloading(false);
        setAdmin(
          res.data.map(row => ({
            name: row.name,
            position: row.position,
            phone: row.phone,
            email: row.email,
            username: row.username,
            password: row.password,
            job: row.job,
            id: row._id
          }))
        );
      }
    );
  };

  const getCoachData = async () => {
    await client.get("/api/member/coach").then(
      res => {
        setloading(false);
        setCoach(
          res.data.map(row => ({
            name: row.name,
            phone: row.phone,
            email: row.email,
            username: row.username,
            password: row.password,
            job: row.job,
            record: row.record,
            coachnum: row.coachnum,
            id: row._id
          }))
        );
      }
    );
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="관리자" key="1"><div className="commoDiv1">
            <Search />
            <Button type="primary" onClick={showModal}>
              <PlusOutlined />
              신규 관리자 등록
            </Button>
            <Modal
              title="신규 관리자 등록"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              width={1000}
            >
              <NewMember />
            </Modal>
          </div>
          <br />
          <Table columns={columns} dataSource={admin} size="middle"
          pagination={{ 
            current:page,
            pageSize: pageSize,
            total:500,
            onChange: (page,pageSize)=>{
              setPage(page);
              setPageSize(pageSize)
            }
          }} />
       </TabPane>
      <TabPane tab="코치" key="2"><div className="commoDiv1">
      <Search />
            <Button type="primary" onClick={showModal}>
              <PlusOutlined />
              신규 코치 등록
            </Button>
            <Modal
              title="신규 코치 등록"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              width={1000}
            >
              <NewMember />
            </Modal>
          </div>
          <br />
          <Table columns={columns} dataSource={coach} size="middle"
          pagination={{ 
            current:page,
            pageSize: pageSize,
            total:500,
            onChange: (page,pageSize)=>{
              setPage(page);
              setPageSize(pageSize)
            }
          }} />
      </TabPane>
      </Tabs>
    </>
  );
};

export default Members;
