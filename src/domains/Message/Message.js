import { Tabs } from "antd";
import React, { useState } from "react";
import SendMsg from "./SendMsg.js";
import SentMessage from "./SentMessage.js";
import SpamNum from "./SpamNum.js";

const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: "1",
    label: `메시지 전송`,
    children: <SendMsg />
  },
  {
    key: "2",
    label: `보낸 메시지`,
    children: <SentMessage />
  },
  {
    key: "3",
    label: `수신 거부 번호`,
    children: <SpamNum />
  }
];

const Message = () => {
  return (
    <>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  );
};

export default Message;
