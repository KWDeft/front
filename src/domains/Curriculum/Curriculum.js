import { Table, Modal } from "antd";
import React, { useState } from "react";
import "./Curriculum.css";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import WriteCurriDetail from "./WriteCurriDetail.js";
import ViewCurriDetail from "./ViewCurriDetail";
import {Link} from "react-router-dom";
import CurriTable from "./Table/TableMain";

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
    <div>
      <br />
      <CurriTable />
      <ViewCurriDetail />
    </div>
  );
};

export default Curriculum;