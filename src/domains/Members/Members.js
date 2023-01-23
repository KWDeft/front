import React, { useState } from "react";
import { Button, Table, Modal, Input } from "antd";
import "./Members.css";
import NewMember from "./NewMember.js";
import { Link, Outlet } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

const { Search } = Input;
const onSearch = (value) => console.log(value);

const columns = [
  {
    title: "이름",
    dataIndex: "name"
  },
  {
    title: "직책",
    dataIndex: "position"
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
const data = [
  {
    key: "1",
    name: "문하늘",
    position: "관리자",
    phone: "010-1111-2222",
    email: "gksmf@naver.com",
    job: "P.T"
  },
  {
    key: "2",
    name: "문하늘",
    position: "관리자",
    phone: "010-1111-2222",
    email: "gksmf@naver.com",
    job: "P.T"
  },
];

const Members = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      <div className="commoDiv1">
        <Search />
        <Button type="primary" onClick={showModal}>
          <PlusOutlined />
          신규 구성원 등록
        </Button>
        <Modal
          title="신규 구성원 등록"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={1000}
        >
          <NewMember />
        </Modal>
      </div>
      <br />
      <Table columns={columns} dataSource={data} size="middle" />
    </>
  );
};

export default Members;
