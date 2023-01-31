import React, { useState, useEffect } from "react";
import "./Curriculum.css";
import {useNavigate} from 'react-router';
import { PlusOutlined} from "@ant-design/icons";
import client from '../../lib/api/client';
import {
  Table,
  Modal,
  Input,
  Divider,
  Button,
} from "antd";
import { useSelector } from "react-redux";

const Curriculum = () => {
  const { auth } = useSelector(({ auth }) => ({ auth: auth.auth }))

  const [size, setSize] = useState("large");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, SetTitle] = useState("");
  const [detail, SetDetail] = useState("");
  const [content, SetContent] = useState("");
  const [effect, SetEffect] = useState("");
  const [attachment, SetAttachment] = useState("");
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10);
  const navigate = useNavigate();

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
            id: row._id
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
      key: "1",
      title: "Title",
      dataIndex: "Title",
    },
    {
      key: "2",
      title: "Detail",
      dataIndex: "Detail",
    },
    {
      key: "3",
      title: "Content",
      dataIndex: "Content",
    },
    {
      key: "4",
      title: "Effect",
      dataIndex: "Effect",
    },
    // {
    //   title : "ID",
    //   dataIndex: "id",
    // },
  ];

  return (
    <div>
      <br />
      {
        auth.role === 'admin'
        ? 
      <Button type="primary" onClick={showModal}>
            <PlusOutlined />
            커리큘럼 추가
      </Button>
      : <></>
      }
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
        </Modal>
      {loading ? (
        "Loading"
      ) : (
        <>
        <Table
          columns={columns}
          dataSource={state}
          pagination={{ 
            current:page,
            pageSize: pageSize,
            total:500,
            onChange: (page,pageSize)=>{
              setPage(page);
              setPageSize(pageSize)
            }
           }}
          onRow={(record, index) => {
            const title = record.Title;
            const detail = record.Detail;
            const content = record.Content;
            const effect = record.Effect;
            const attachment = record.Attachment;
            const id = record.id;
            return {
              onClick: (e) => {
                if (auth.role === "admin") {
                console.log(id);
                navigate('/curriculum/edit', {
                    state: {
                      title: title,
                      detail: detail,
                      content: content,
                      effect: effect,
                      attachment: attachment,
                      id: id
                    },
                  });
                } else {
                  console.log(`${id} only admin edit`)
                }
              }
            };
          }}
        />
        </>
      )}
    </div>
  );
};

export default Curriculum;