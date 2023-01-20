import { Table, Row, Input } from "antd";
import React from "react";

const { Search } = Input;
const onSearch = (value) => console.log(value);

const columns = [
  {
    title: "발신시각",
    dataIndex: "date",
    sorter: (a, b) => a.age - b.age
  },
  {
    title: "내용",
    dataIndex: "msg",
    render: (text) => <a>{text}</a>
  },
  {
    title: "제목",
    dataIndex: "title",
    render: (text) => <a>{text}</a>
  },
  {
    title: "구분",
    dataIndex: "type",
    render: (text) => <a>{text}</a>
  }
];
const data = [
  {
    key: "1",
    date: "2023-1-11 23:12:00",
    msg: "모두가 차별없이 건강한 세상, ~~~~",
    title: "어댑핏 오픈채팅방 초대",
    type: "LMS"
  },
  {
    key: "2",
    date: "2023-1-11 23:12:00",
    msg: "모두가 차별없이 건강한 세상, ~~~~",
    title: "어댑핏 오픈채팅방 초대",
    type: "LMS"
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

const SentMessage = () => (
  <>
    <Row>
      <Search
      placeholder="검색할 단어를 입력하세요"
      onSearch={onSearch}
      style={{
        width: 300,
      }}
    />

    </Row>
    <br></br>
    <Table
      rowSelection={{
        type: "checkbox",
        ...rowSelection
      }}
      columns={columns}
      dataSource={data}
    />
  </>
);

export default SentMessage;
