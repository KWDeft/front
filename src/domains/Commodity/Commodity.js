import React, { useState } from "react";
import { Button, Table, Modal, Input } from "antd";
import "./Commodity.css";
import NewCommodity from "./NewCommodity.js";
import { Link, Outlet } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

const { Search } = Input;
const onSearch = (value) => console.log(value);

const columns = [
  {
    key: "1",
    title: "상품 유형",
    dataIndex: "category"
  },
  {
    key: "2",
    title: "상품 이름",
    dataIndex: "name"
  },
  {
    key: "3",
    title: "등록횟수",
    dataIndex: "number"
  },
  {
    key: "4",
    title: "가격",
    dataIndex: "price"
  },
  {
    key: "5",
    title: "회원권 등록",
    dataIndex: "regist"
  }
];
const data = [
  {
    category: "프라이빗 회원권",
    name: "입문자PT",
    number: "10회",
    price: "100,000원",
    regist: "APT 1:1"
  },
  {
    category: "프라이빗 회원권",
    name: "입문자PT",
    number: "10회",
    price: "100,000원",
    regist: "APT 1:1"
  },
  {
    category: "프라이빗 회원권",
    name: "입문자PT",
    number: "10회",
    price: "100,000원",
    regist: "APT 1:1"
  }
];

const Commodity = () => {
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
          신규 상품 등록
        </Button>
        <Modal
          title="신규 상품 등록"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={1000}
        >
          <NewCommodity />
        </Modal>
      </div>
      <br />
      <Table 
        columns={columns} 
        dataSource={data} 
        size="middle" 
      />
    </>
  );
};

export default Commodity;
