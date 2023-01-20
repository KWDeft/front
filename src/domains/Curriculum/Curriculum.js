import React, { useState, useEffect } from "react";
import "./Curriculum.css";
import { EditOutlined, DeleteOutlined, PlusOutlined} from "@ant-design/icons";
import WriteCurriDetail from "./WriteCurriDetail.js";
import ViewCurriDetail from "./ViewCurriDetail";
import {Link} from "react-router-dom";
import CurriTable from "./Table/TableMain";
import client from '../../lib/api/client';
import {
  Table,
  Modal,
  Input,
  Divider,
  Button,
} from "antd";
import Comments from "../../components/comments/Comment";
import UploadFile from "../../components/upload/UploadFile";

const Curriculum = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingCurriculum, setEditingCurriculum] = useState(null);
  const [size, setSize] = useState("large");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, SetTitle] = useState("");
  const [detail, SetDetail] = useState("");
  const [content, SetContent] = useState("");
  const [effect, SetEffect] = useState("");
  const [attachment, SetAttachment] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const titleHandler = (e) => {
    e.preventDefault();
    SetTitle(e.target.value);
  };
  
  const detailHandler = (e) =>{
    e.preventDefault();
    SetDetail(e.target.value);
  };

  const contentHandler = (e) =>{
    e.preventDefault();
    SetContent(e.target.value);
  };

  const effectHandler = (e) =>{ 
    e.preventDefault();
    SetEffect(e.target.value);
  };

  const attachmentHandler = (e) => {
    e.preventDefault();
    console.log(e.target.files[0]);
    SetAttachment(e.target.files[0]);
  };

  const [state, setstate] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await client.get("/api/course/list").then(
      res => {
        setloading(false);
        setstate(
          res.data.map(row => ({
            Title: row.title,
            Detail: row.detail,
            Content: row.content,
            Effect: row.effect,
            Attachment: row.attachment,
            id: row.id
          }))
        );
      }
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("커리큘럼 추가 성공");
  
    let body = {
      title: title,
      detail: detail,
      content: content,
      effect: effect,
    };
  
    client
      .post("/api/course/write", body)
      .then((res) => 
         console.log(res)
         );

    getData();
    };

  const columns = [
    {
      title: "Title",
      dataIndex: "Title",
    },
    {
      title: "Detail",
      dataIndex: "Detail",
    },
    {
      title: "Content",
      dataIndex: "Content",
    },
    {
      title: "Effect",
      dataIndex: "Effect",
    },
    {
      title: "View",
      dataIndex: "View",
      render: (record) => {
        return (
          <>
            
            <EditOutlined
              onClick={() => {
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteCurriculum(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    }
  ];

  const onDeleteCurriculum =  async(record) => {
    const id = record._id;
    Modal.confirm({
      title: "Are you sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        client.delete(`/api/course/${id}`, id);
      },
    });
  };

  return (
    <div>
      <br />
      {/* <CurriTable /> */}
      <ViewCurriDetail />
      <Button type="primary" onClick={showModal}>
            <PlusOutlined />
            커리큘럼 추가
      </Button>
      <Modal
          title="커리큘럼 추가"
          open={isModalOpen}
          onOk={submitHandler}
          onCancel={handleCancel}
        >
          <Divider orientation="left" orientationMargin="0">
            제목
          </Divider>
          <Input
            autoComplete="title"
            name="title"
            value={title}
            onChange={titleHandler}
          />
          <Divider orientation="left" orientationMargin="0">
            장애
          </Divider>
          <Input
            autoComplete="detail"
            name="detail"
            value={detail}
            onChange={detailHandler}
          />
          <Divider orientation="left" orientationMargin="0">
            운동설명
          </Divider>
          <Input
            autoComplete="content"
            name="content"
            value={content}
            onChange={contentHandler}
          />
          <Divider orientation="left" orientationMargin="0">
            효과
          </Divider>
          <Input
            autoComplete="effect"
            name="effect"
            value={effect}
            onChange={effectHandler}
          />
          <Divider orientation="left" orientationMargin="0">
            첨부파일
          </Divider>
          {/* <UploadFile /> */}
          <form>
            <label htmlFor="profile-upload" />
            <input 
              type="file" 
              id="profile-upload" 
              accept="image/*" 
              name="attachment"
              value={attachment}
              onChange={attachmentHandler}/>
          </form>
          <Comments
            commentsUrl="http://localhost:3004/comments"
            currentUserId="1"
          />
        </Modal>
      {loading ? (
        "Loading"
      ) : (
        <>
        <Table
          columns={columns}
          dataSource={state}
          pagination={{ pageSize: 50 }}
          scroll={{ y: 240 }}
        />
        </>
      )}
    </div>
  );
};

export default Curriculum;