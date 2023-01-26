import { Badge, Calendar, Button, Modal } from "antd";
import React, { useState, useEffect } from "react";
import "./CalendarMain.css";
import { PlusOutlined } from "@ant-design/icons";
import NewCalendar from "./NewCalendar.js";
import client from '../../lib/api/client';

//메인은 관리자용
const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: "warning",
          content: "홍길동"
        },
        {
          type: "success",
          content: "곰도리"
        }
      ];
      break;
    case 10:
      listData = [
        {
          type: "warning",
          content: "홍길동"
        },
        {
          type: "success",
          content: "곰도리"
        },
        {
          type: "error",
          content: "문하늘"
        }
      ];
      break;
    case 15:
      listData = [
        {
          type: "warning",
          content: "홍길동"
        },
        {
          type: "success",
          content: "곰도리"
        },
        {
          type: "error",
          content: "문하늘"
        },
        {
          type: "error",
          content: "문하늘"
        },
        {
          type: "error",
          content: "문하늘"
        },
        {
          type: "error",
          content: "문하늘"
        }
      ];
      break;
    default:
  }
  return listData || [];
};
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};
const CalendarMain = () => {
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

  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  
  // const [stateSchedule, setstateSchedule] = useState({});
  // useEffect(() => {
  //   client
  //     .get('/api/schedule/admin/list')
  //     .then(d => {
  //       let schedule = d.date;
  //       setstateSchedule({
  //         id: id,
  //       })
  //     })
  // }, []);


  return (
    <>
      <h1>일정</h1>
      <div className="calDiv1">
        <Button type="primary" onClick={showModal}>
          <PlusOutlined /> 일정 추가
        </Button>
        <Modal
          title="일정 추가"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={1000}
        >
          <NewCalendar />
        </Modal>
      </div>
      <Calendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
    </>
  );
};

export default CalendarMain;
