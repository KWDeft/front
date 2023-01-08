import React, { useState } from "react";
import "./ViewCurriDetail.css";
import axios from 'axios';
import {
    Avatar,
    Button,
    Form,
    Divider,
    Image,
    Input,
    List,
  } from "antd";
import moment from "moment";
import { Comment } from '@ant-design/compatible';
import {
    FileAddOutlined,
    SendOutlined,
    DeleteOutlined,
  } from "@ant-design/icons";
  
  const { TextArea } = Input;
  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };

  const CommentList = ({ comments }) => (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
      itemLayout="horizontal"
      renderItem={(props) => <Comment {...props} />}
    />
  );
  
  const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
      <Form.Item style={{ float: "left" }}>
        <TextArea
          showCount
          maxLength={200}
          style={{
            height: 20,
            resize: "none",
            width: 800
          }}
          onChange={onChange}
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit}>
          <SendOutlined />
        </Button>
      </Form.Item>
    </>
  );
  
  const fileList = [
    {
      uid: "-1",
      name: "이미지 이름1",
      status: "done"
    },
    {
      uid: "-2",
      name: "이미지 이름2",
      status: "done"
    }
  ];

  const ViewCurriDetail = () => {
    const [form] = Form.useForm();
    const [comments, setComments] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState("");

    const handleSubmit = async () => {
      if (!value) return;
      setSubmitting(true);

      setTimeout(() => {
        setSubmitting(false);
        setValue("");
        setComments([
          ...comments,
          {
            author: "Han Solo",
            avatar: "https://joeschmoe.io/api/v1/random",
            content: <p>{value}</p>,
            datetime: moment("2016-11-22").fromNow()
          }
        ]);
      }, 1000);
    };
    const handleChange = (e) => {
      setValue(e.target.value);
    };
  
    return (
      <>
      <Divider orientation="left" orientationMargin="0">
        장애
      </Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
      <Divider orientation="left" orientationMargin="0">
        운동 설명
      </Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
      <Divider orientation="left" orientationMargin="0">
        효과
      </Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>
      <Form>
      <Form.Item>
        <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
        </Form.Item>
  
        <Form.Item>
          <Divider orientation="left" orientationMargin="0">
            댓글
          </Divider>
          {comments.length > 0 && <CommentList comments={comments} />}
          <Comment
            avatar={
              <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
            }
            content={
              <Editor
                onChange={handleChange}
                onSubmit={handleSubmit}
                submitting={submitting}
                value={value}
              />
            }
          />
        </Form.Item>
      </Form>
    </>
    );
  };
  export default ViewCurriDetail;