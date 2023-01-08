import { Table, Modal } from "antd";
import React, { useState } from "react";
import "./Curriculum.css";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import WriteCurriDetail from "./WriteCurriDetail.js";
import ViewCurriDetail from "./ViewCurriDetail";
import {Link} from "react-router-dom";

const columns = [
  {
    title: "장애",
    dataIndex: "name"
  },
  {
    title: "커리큘럼",
    dataIndex: "curriculum"
  }
];
const data = [
  {
    key: "1",
    name: "장애에 대한 내용",
    curriculum: "커리큘럼에 대한 내용"
  },
  {
    key: "2",
    name: "장애에 대한 내용",
    curriculum: "커리큘럼에 대한 내용"
  },
  {
    key: "3",
    name: "장애에 대한 내용",
    curriculum: "커리큘럼에 대한 내용"
  }
];

const Curriculum = () => {
  const [size, setSize] = useState("large");
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
    <div className="curriDiv">
      <div className="curriDiv1">
        <Link to="/curriculum/write">
          <Button type="primary" onClick={showModal}>
          <PlusOutlined />
          커리큘럼 추가
          </Button>
        </Link>
      </div>
      <br />
      <Table columns={columns} dataSource={data} size="middle" />
      <ViewCurriDetail />
    </div>
  );
};

export default Curriculum;