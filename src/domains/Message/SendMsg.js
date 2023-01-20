import {
    Divider,
    Input,
    Space,
    Table,
    Select,
    Button,
    Row,
    Checkbox,
    Col
  } from "antd";
  import React, { useState, useRef } from "react";
  import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
  import "./SpamNum.css";
  import Customers from "../Customers/Customers.js";
  const { TextArea } = Input;
  let index = 0;
  
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
  
  const SendMsg = () => {
    const [items, setItems] = useState(["01012341234"]);
    const [name, setName] = useState("");
    const inputRef = useRef(null);
    const onNameChange = (event) => {
      setName(event.target.value);
    };
    const addItem = (e) => {
      e.preventDefault();
      setItems([...items, name || `New item ${index++}`]);
      setName("");
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    };
  
    return (
      <>
        <Row gutter={20}>
          <Col span={8}>
            <div className="addedNum">
              <h2>내용</h2>
              <TextArea
                showCount
                maxLength={500}
                style={{
                  height: 250,
                  marginBottom: 24,
                  resize: "none"
                }}
              />
            </div>
          </Col>
  
          <Col span={16}>
            <div>
              <Row>
                <Col span={8}>
                  <Checkbox>광고성 메시지일 경우 체크해주세요</Checkbox>
                </Col>
                <Col span={6}></Col>
                <Col span={10}>
                  <div className="select">
                    <Button>예약전송</Button>
                    <Button type="primary">전송</Button>
                  </div>
                </Col>
              </Row>
              <br />
              <h2>발신 번호</h2>
              <Row>
                <Select
                  style={{
                    width: 300
                  }}
                  placeholder="발신번호"
                  dropdownRender={(menu) => (
                    <>
                      {menu}
                      <Divider
                        style={{
                          margin: "8px 0"
                        }}
                      />
                      <Space
                        style={{
                          padding: "0 8px 4px"
                        }}
                      >
                        <Input
                          placeholder="새로운 번호 추가하기"
                          ref={inputRef}
                          value={name}
                          onChange={onNameChange}
                        />
                        <Button
                          type="text"
                          icon={<PlusOutlined />}
                          onClick={addItem}
                        >
                          번호 추가
                        </Button>
                      </Space>
                    </>
                  )}
                  options={items.map((item) => ({
                    label: item,
                    value: item
                  }))}
                />
              </Row>
              <br></br>
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
        </Row>
        <Customers />
      </>
    );
  };
  
  export default SendMsg;
  