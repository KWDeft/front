import {
    Avatar,
    Button,
    Form,
    Input,
    List,
    Divider,
    Upload,
  } from "antd";
  import { Comment } from '@ant-design/compatible';
  import React, { useState } from "react";
  import moment from "moment";
  import "./ViewCurriDetail.css";
  import {
    FileAddOutlined,
    SendOutlined,
    DeleteOutlined,
  } from "@ant-design/icons";
  import axios from 'axios';
  import ImgCrop from 'antd-img-crop';
  
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
  
  const WriteCurriDetail = () => {
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
      <Form form={form} layout="vertical">
        <Form.Item>
          <Divider orientation="left" orientationMargin="0">
            장애
          </Divider>
          <TextArea
            showCount
            maxLength={500}
            style={{
              height: 150,
              resize: "none"
            }}
            onChange={onChange}
            placeholder="장애에 대한 내용 작성"
          />
        </Form.Item>
  
        <Form.Item>
          <Divider orientation="left" orientationMargin="0">
            운동 설명
          </Divider>
          <TextArea
            showCount
            maxLength={2000}
            style={{
              height: 500,
              resize: "none"
            }}
            onChange={onChange}
            placeholder="운동 설명에 대한 내용 작성"
          />
        </Form.Item>
  
        <Form.Item>
          <Divider orientation="left" orientationMargin="0">
            효과
          </Divider>
          <TextArea
            showCount
            maxLength={1000}
            style={{
              height: 200,
              resize: "none"
            }}
            onChange={onChange}
            placeholder="효과에 대한 내용 작성"
          />
        </Form.Item>
  
        <Form.Item>
          <Divider orientation="left" orientationMargin="0">
            첨부 파일
            <FileAddOutlined style={{ marginRight: "100x" }} />
            <DeleteOutlined />
          </Divider>
  
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            defaultFileList={[...fileList]}
          ></Upload>
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
      <Button>취소</Button>
      <Button>저장</Button>
      </Form>
      </>
    );
  };
  export default WriteCurriDetail;