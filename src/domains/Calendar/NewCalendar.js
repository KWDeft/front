import React from "react";
import { Col, Row, Radio, AutoComplete, Input, Table } from "antd";
import {
  Dropdown,
  Menu,
  Space,
  Typography,
  DatePicker,
  TimePicker
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import moment from "moment";
import "./NewCalendar.css";

const NewCalendar = () => (
  <div className="Div">
    <Row gutter={[32, 16]}>
      <div className="div1">
        <Col>
          <Title level={4}>회원 검색 </Title>
          <br></br>
          <Title level={5}>검색 대상</Title>

          <Row>
            <Radio.Group>
              <Radio.Button value="large">전체회원</Radio.Button>
              <Radio.Button value="default">등록회원</Radio.Button>
              <Radio.Button value="small">만기회원</Radio.Button>
            </Radio.Group>
          </Row>

          <br></br>
          <br></br>

          <Row>
            <Col span={8}>
              <Dropdown overlay={menu}>
                <Typography.Link>
                  <Space>
                    검색항목
                    <DownOutlined />
                  </Space>
                </Typography.Link>
              </Dropdown>
            </Col>

            <Col span={16}>
              <AutoComplete
                popupClassName="certain-category-search-dropdown"
                dropdownMatchSelectWidth={500}
                style={{ width: 250 }}
              >
                <Input.Search size="small" placeholder="검색" />
              </AutoComplete>
            </Col>
          </Row>

          <br></br>

          <Row>
            <div>
              <Table columns={columns} dataSource={data} size="small" />
            </div>
          </Row>
        </Col>
      </div>

      <div className="div2">
        <Col>
          <Title level={4}>일정</Title>
          <br></br>
          <Title level={5}>수업 일시</Title>

          <Space direction="vertical" size={12}>
            <DatePicker
              defaultValue={moment("2022/11/3", dateFormat)}
              format={dateFormat}
            />
          </Space>
          <div>
            {" "}
            <br></br>{" "}
          </div>
          <TimePicker.RangePicker />

          <div>
            {" "}
            <br></br>{" "}
          </div>
          <Title level={5}>기타 메모</Title>

          <TextArea rows={4} placeholder="메모를 작성하세요." maxLength={50} />
        </Col>
      </div>
    </Row>
  </div>
);

const menu = (
  <Menu
    selectable
    defaultSelectedKeys={["3"]}
    items={[
      {
        key: "1",
        label: "통합"
      },
      {
        key: "2",
        label: "회원번호"
      },
      {
        key: "3",
        label: "이름"
      }
    ]}
  />
);

const renderTitle = (title: string) => (
  <span>
    {title}
    <a
      style={{ float: "right" }}
      href="https://www.google.com/search?q=antd"
      target="_blank"
      rel="noopener noreferrer"
    >
      more
    </a>
  </span>
);

const renderItem = (title: string, count: number) => ({
  value: title,
  label: (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      {title}
      <span>
        <UserOutlined /> {count}
      </span>
    </div>
  )
});

interface DataType {
  key: React.Key;
  name: string;
  disability: string;
  phonenum: string;
  coach: string;
  signup_date: Date;
}

const columns: ColumnsTypeDataType = [
  {
    title: "회원번호",
    dataIndex: "key"
  },
  {
    title: "이름",
    dataIndex: "name"
  },
  {
    title: "장애유무",
    dataIndex: "disability"
  },
  {
    title: "전화번호",
    dataIndex: "phonenum"
  },
  {
    title: "코치",
    dataIndex: "coach"
  },
  {
    title: "등록일자",
    dataIndex: "singup_date"
  }
];

const data: DataType[] = [
  {
    key: "1",
    name: "홍길동",
    disability: "유",
    phonenum: "010-1234-5678",
    coach: "문하늘",
    singup_date: "2022-09-01"
  },
  {
    key: "2",
    name: "홍길동",
    disability: "무",
    phonenum: "010-1234-5678",
    coach: "문하늘",
    singup_date: "2022-09-11"
  },
  {
    key: "3",
    name: "홍길동",
    disability: "무",
    phonenum: "010-1234-5678",
    coach: "김지수",
    singup_date: "2022-10-29"
  }
];

const { RangePicker } = DatePicker;
const dateFormat = "YYYY/MM/DD";
const weekFormat = "MM/DD";
const monthFormat = "YYYY/MM";
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
const customWeekStartEndFormat = (value) =>
  `${moment(value).startOf("week").format(weekFormat)} ~ ${moment(value)
    .endOf("week")
    .format(weekFormat)}`;
const { TextArea } = Input;
const { Title } = Typography;

export default NewCalendar;
