import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, Space } from "antd";
import React from "react";
import "./PasswordSetting.css";

const PasswordSetting = () => {
  return (
    <Space direction="vertical">
      <table>
        <tr>
          <td>현재 비밀번호</td>
          <td width="2px"></td>
          <td>
            <Input.Password placeholder="input password" />
          </td>
        </tr>
        <tr>
          <td>새 비밀번호</td>
          <td width="2px"></td>
          <td>
            <Input.Password
              placeholder="input password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </td>
        </tr>
        <tr>
          <td>비밀번호 확인</td>
          <td width="8px"></td>
          <td>
            <Input.Password
              placeholder="input password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </td>
        </tr>
      </table>
    </Space>
  );
};

export default PasswordSetting;
