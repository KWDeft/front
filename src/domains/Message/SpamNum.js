import { Input, Table, Button, Row, Col, Modal } from "antd";
import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import CustomerSearch from "../Customers/CustomerSearch.js";
import "./SpamNum.css";

const { Search } = Input;
const onSearch = (value: string) => console.log(value);

const columns = [
  {
    title: "고객명",
    dataIndex: "name",
    render: (text) => <a>{text}</a>
  },
  {
    title: "전화번호",
    dataIndex: "phone"
  }
];
const data = [
  {
    key: "1",
    name: "김회원",
    phone: "010-1234-1234"
  },
  {
    key: "2",
    name: "김회원",
    phone: "010-1234-1234"
  }
];
// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    // Column configuration not to be checked
    name: record.name
  })
};

const SpamNum = () => {
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
      <Row>
        <Search
          placeholder="검색할 단어를 입력하세요"
          onSearch={onSearch}
          style={{ width: 300 }}
        />
      </Row>
      <br></br>
      <Row gutter={20}>
        <Col span={12}>
          <div className="addedNum">
            <h2>등록된 수신 거부 번호</h2>
            <div className="select">
              <Button>전체 선택</Button>
              <Button>중복 선택</Button>
              <Button>
                <DeleteOutlined />
              </Button>
            </div>
            <br></br>
            <Table
              size="small"
              rowSelection={{
                type: "checkbox",
                ...rowSelection
              }}
              columns={columns}
              dataSource={data}
            />
          </div>
        </Col>

        <Col span={12}>
          <div className="addNum">
            <h2>수신 거부 번호 추가</h2>
            <Row>
              <Col span={8}>
                <Button type="primary" onClick={showModal}>
                  회원 목록에서 불러오기
                </Button>
                <Modal
                  title="회원 목록에서 불러오기"
                  width={1200}
                  overflow-y={"auto"}
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <CustomerSearch />
                </Modal>
              </Col>
              <Col span={4}></Col>
              <Col span={12}>
                <div className="select">
                  <Button>전체 선택</Button>
                  <Button>중복 선택</Button>
                  <Button>
                    <DeleteOutlined />
                  </Button>
                </div>
              </Col>
            </Row>

            <br></br>
            <Table
              size="small"
              rowSelection={{
                type: "checkbox",
                ...rowSelection
              }}
              columns={columns}
              dataSource={data}
            />
            <div className="addbtn">
              <Button type="primary">수신 거부 목록에 추가하기</Button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SpamNum;
