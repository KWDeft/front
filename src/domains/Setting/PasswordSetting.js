import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, Space } from "antd";
import { useSelector, useDispatch } from 'react-redux';
import { changeField } from '../../modules/auth';
import React from "react";
import "./PasswordSetting.css";


const PasswordSetting = () => {
  
  // 인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
  };

  return (
    <Space direction="vertical">
      
      <table>
      <tbody>
            <tr>
              <td>아이디</td>
              <td width="2px"></td>
              <td>
                <Input.Password 
                autoComplete="username"
                name="username"
                onChange={onChange}
                placeholder="input password" />
              </td>
            </tr>
            <tr>
              <td>현재 비밀번호</td>
              <td width="2px"></td>
              <td>
                <Input.Password
                autoComplete="password_old"
                name="password_old"
                onChange={onChange}
                placeholder="input password_old" />
              </td>
            </tr>
            <tr>
              <td>새 비밀번호</td>
              <td width="2px"></td>
              <td>
                <Input.Password
                  autoComplete="password_new"
                  name="password_new"
                  onChange={onChange}
                  placeholder="input password_new"
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
                  autoComplete="password_check"
                  name="password_check"
                  onChange={onChange}
                  placeholder="input password_check"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </td>
            </tr>
        </tbody>
      </table>
    </Space>
  );
};

export default PasswordSetting;
