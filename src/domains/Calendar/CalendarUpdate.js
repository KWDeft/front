import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, Space, Checkbox, Form } from "antd";
import React from "react";
import "./CalendarUpdate.css";

const CalendarUpdate = () => {
  return (
    <Space direction="vertical">
      <table>
        <tr>
          <b>회원 정보</b>
        </tr>
        <tr>
          <td>회원번호</td>
          <td>290</td>
        </tr>
        <tr>
          <td>이름</td>
          <td>곰도리</td>
        </tr>
        <tr>
          <td>장애 유형</td>
          <td>척수장애</td>
        </tr>
        <tr>
          <td>전화번호</td>
          <td>010-1234-5678</td>
        </tr>
        <tr>
          <td>코치</td>
          <td>문하늘</td>
        </tr>
      </table>

      <table>
        <tr>
          <b>일정</b>
        </tr>
        <tr>
          <td>수업 일시</td>
          <td></td>
        </tr>
      </table>

      <table>
        <tr>
          <Form.Item>
            <Form.Item name="study_remember" valuePropName="checked" noStyle>
              <Checkbox>수업 완료</Checkbox>
            </Form.Item>
          </Form.Item>
        </tr>
        <tr></tr>
      </table>
      
    </Space>
  );
};

export default CalendarUpdate;
