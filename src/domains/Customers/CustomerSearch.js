import {
    Col,
    DatePicker,
    Select,
    Modal,
    Row,
    Button,
    Table,
    Input,
    Radio,
    Checkbox
  } from "antd";
  import React, { useState } from "react";
  import { DeleteOutlined } from "@ant-design/icons";
  import "./CustomerSearch.css";
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  
  const CustomerSearch = () => {
    const options = [
      {
        value: "today",
        label: "오늘"
      },
      {
        value: "yesterday",
        label: "어제"
      },
      {
        value: "thisweek",
        label: "이번 주"
      },
      {
        value: "lastweek",
        label: "지난 주"
      }
    ];
  
    const handleChange = (value) => {
      console.log(`selected ${value}`);
    };
  
    // 번호, 성명, 유형, 상태, 성별, 생년월일, 담당자, 운동목적, 장애유형, 전화번호, 회원권, 결제정보, 소개정보
    const columns = [
      {
        title: "번호",
        dataIndex: "num"
      },
      {
        title: "성명",
        dataIndex: "name",
        render: (text) => <a>{text}</a>
      },
      {
        title: "유형",
        dataIndex: "type",
        render: (text) => <a>{text}</a>
      },
      {
        title: "상태",
        dataIndex: "state",
        render: (text) => <a>{text}</a>
      },
      {
        title: "성별",
        dataIndex: "sex",
        render: (text) => <a>{text}</a>
      },
      {
        title: "생년월일",
        dataIndex: "birth"
      },
      {
        title: "담당자",
        dataIndex: "coach",
        render: (text) => <a>{text}</a>
      },
      {
        title: "운동목적",
        dataIndex: "purpose",
        render: (text) => <a>{text}</a>
      },
      {
        title: "장애유형",
        dataIndex: "disability",
        render: (text) => <a>{text}</a>
      },
      {
        title: "전화번호",
        dataIndex: "phone"
      },
      {
        title: "회원권",
        dataIndex: "membership",
        render: (text) => <a>{text}</a>
      },
      {
        title: "결제정보",
        dataIndex: "payment",
        render: (text) => <a>{text}</a>
      },
      {
        title: "소개정보",
        dataIndex: "route",
        render: (text) => <a>{text}</a>
      }
    ];
    const data = [
      {
        key: "1",
        num: "1",
        name: "홍길동",
        type: "온라인",
        state: "이용중",
        sex: "남",
        birth: 19990101,
        coach: "문하늘",
        purpose: "근력강화",
        disability: "비장애",
        phone: "01012341234",
        membership: "A.P.T 20",
        payment: "카드",
        route: "지인 소개"
      },
      {
        key: "2",
        num: "2",
        name: "홍길동",
        type: "온라인",
        state: "이용중",
        sex: "남",
        birth: 19990101,
        coach: "문하늘",
        purpose: "근력강화",
        disability: "비장애",
        phone: "01012341234",
        membership: "A.P.T 20",
        payment: "카드",
        route: "지인 소개"
      },
      {
        key: "3",
        num: "3",
        name: "홍길동",
        type: "온라인",
        state: "이용중",
        sex: "남",
        birth: 19990101,
        coach: "문하늘",
        purpose: "근력강화",
        disability: "비장애",
        phone: "01012341234",
        membership: "A.P.T 20",
        payment: "카드",
        route: "지인 소개"
      },
      {
        key: "4",
        num: "4",
        name: "홍길동",
        type: "온라인",
        state: "이용중",
        sex: "남",
        birth: 19990101,
        coach: "문하늘",
        purpose: "근력강화",
        disability: "비장애",
        phone: "01012341234",
        membership: "A.P.T 20",
        payment: "카드",
        route: "지인 소개"
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
  
    const onChange = (date, dateString) => {
      console.log(date, dateString);
    };
  
    const [value, setValue] = useState(1);
    const onChange1 = (e) => {
      console.log("radio checked", e.target.value);
      setValue(e.target.value);
    };
  
    return (
      <>
        <Row>
          <div>
            <Search
              placeholder="조회할 회원의 이름을 입력하세요"
              onSearch={onSearch}
              style={{ width: 300 }}
            />
          </div>
          <br />
        </Row>
        <br></br>
        <br></br>
        <div>
          <Row>
            <Select
              defaultValue="상태"
              style={{
                width: 90
              }}
              onChange={handleChange}
              options={[
                {
                  value: "이용중",
                  label: "이용중"
                },
                {
                  value: "휴면고객",
                  label: "휴면고객"
                },
                {
                  value: "상담예정",
                  label: "상담예정"
                },
                {
                  value: "상담완료",
                  label: "상담완료"
                },
                {
                  value: "단순문의",
                  label: "단순문의"
                }
              ]}
            />
  
            <Select
              defaultValue="성별"
              style={{
                width: 70
              }}
              onChange={handleChange}
              options={[
                {
                  value: "남",
                  label: "남"
                },
                {
                  value: "여",
                  label: "여"
                }
              ]}
            />
            <Select
              defaultValue="연령대"
              style={{
                width: 90
              }}
              onChange={handleChange}
              options={[
                {
                  value: "10대",
                  label: "10대"
                },
                {
                  value: "20대",
                  label: "20대"
                },
                {
                  value: "30대",
                  label: "30대"
                },
                {
                  value: "40대",
                  label: "40대"
                },
                {
                  value: "50대",
                  label: "50대"
                },
                {
                  value: "60대",
                  label: "60대"
                },
                {
                  value: "70대 이상",
                  label: "70대 이상"
                }
              ]}
            />
  
            <Select
              defaultValue="회원권"
              style={{
                width: 90
              }}
              onChange={handleChange}
              options={[
                {
                  value: "M.P.T",
                  label: "M.P.T"
                },
                {
                  value: "A.P.T",
                  label: "A.P.T"
                },
                {
                  value: "입문자PT",
                  label: "입문자PT"
                }
              ]}
            />
            <Button onClick={showModal}>최근 방문일</Button>
            <Modal
              title="최근 방문일"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Row gutter={16}>
                <DatePicker onChange={onChange} />
                <Select
                  mode="tags"
                  style={{ width: 200 }}
                  placeholder="기간 선택"
                  onChange={handleChange}
                  options={options}
                />
              </Row>
            </Modal>
  
            <Select
              defaultValue="결제정보"
              style={{
                width: 100
              }}
              onChange={handleChange}
              options={[
                {
                  value: "실비",
                  label: "실비"
                },
                {
                  value: "바우처+실비",
                  label: "바우처+실비"
                },
                {
                  value: "바우처",
                  label: "바우처"
                }
              ]}
            />
  
            <Select
              defaultValue="소개정보"
              style={{
                width: 100
              }}
              onChange={handleChange}
              options={[
                {
                  value: "지인소개",
                  label: "지인소개"
                },
                {
                  value: "강사추천",
                  label: "강사추천"
                },
                {
                  value: "병원추천",
                  label: "병원추천"
                },
                {
                  value: "인터넷 검색",
                  label: "인터넷 검색"
                },
                {
                  value: "SNS",
                  label: "SNS"
                },
                {
                  value: "숨고",
                  label: "숨고"
                }
              ]}
            />
  
            <Select
              defaultValue="운동목적"
              style={{
                width: 100
              }}
              onChange={handleChange}
              options={[
                {
                  value: "근력강화",
                  label: "근력강화"
                },
                {
                  value: "체형교정",
                  label: "체형교정"
                },
                {
                  value: "신체컨디셔닝",
                  label: "신체컨디셔닝"
                },
                {
                  value: "트랜스퍼",
                  label: "트랜스퍼"
                },
                {
                  value: "건강관리",
                  label: "건강관리"
                },
                {
                  value: "운동습관형성",
                  label: "운동습관형성"
                },
                {
                  value: "통증경감",
                  label: "통증경감"
                },
                {
                  value: "체력향상",
                  label: "체력향상"
                },
                {
                  value: "일상기능회복",
                  label: "일상기능회복"
                },
                {
                  value: "전문적운동지도",
                  label: "전문적운동지도"
                },
                {
                  value: "골프트레이닝",
                  label: "골프트레이닝"
                },
                {
                  value: "기타",
                  label: "기타"
                }
              ]}
            />
  
            <Select
              defaultValue="장애유형"
              style={{
                width: 100
              }}
              onChange={handleChange}
              options={[
                {
                  value: "비장애",
                  label: "비장애"
                },
                {
                  value: "휴면고객",
                  label: "휴면고객"
                }
              ]}
            />
          </Row>
        </div>
  
        <br />
        <Row>
          <Radio.Group onChange={onChange1} value={value}>
            <Radio value={1}>전체</Radio>
            <Radio value={2}>장애 있음</Radio>
            <Radio value={3}>장애 없음</Radio>
          </Radio.Group>
        </Row>
        <br />
        <Row>
          <div className="memberTable">
            <Table
              rowSelection={{
                type: "checkbox",
                ...rowSelection
              }}
              columns={columns}
              dataSource={data}
            />
          </div>
        </Row>
      </>
    );
  };
  
  export default CustomerSearch;
  