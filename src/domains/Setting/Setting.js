import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import PasswordSetting from './PasswordSetting.js';
import './Setting.css';

const Setting = () => {
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
      <div id='settingBox'>
          <h3>비밀번호 재설정</h3>
          <Button type="default" onClick={showModal}>
            변경하기
          </Button>
          <Modal title="비밀번호 재설정" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <PasswordSetting />
          </Modal>
      </div>
    </>
  );
};

export default Setting;