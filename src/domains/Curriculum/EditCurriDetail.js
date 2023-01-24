import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import client from '../../lib/api/client';
import {Button, Modal, Divider, Input} from 'antd';
import {useNavigate} from 'react-router-dom';
import Comments from '../../components/comment/Comment.js';
 
const EditCurriDetail = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, SetTitle] = useState("");
  const [detail, SetDetail] = useState("");
  const [content, SetContent] = useState("");
  const [effect, SetEffect] = useState("");
  const [attachment, SetAttachment] = useState("");

  const location = useLocation();
  console.log('state', location.state);
  const id = location.state.id;
  const titleOld = location.state.title;
  const detailOld = location.state.detail;
  const contentOld = location.state.content;
  const effectOld = location.state.effect;
  const attachmentOld = location.state.attachment;

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

//   const DeleteCurriculum = (e) => {
//     client.delete(`/api/course/${id}`)
//     .then(console.log('삭제 완료'));
//   };

  const DeleteCurriculum = (e) => {
    Modal.confirm({
      title: "정말로 삭제하시겠습니까?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        client.delete(`/api/course/${id}`);
      },
    });
    navigate('/curriculum');
  };

//   useEffect(() => {
//     client.get(`/api/course/comment/${id}`)
//           .then(response => {
//             if (response.data.success) {
                
//                 SetCommentLists(response.data.comments)
//             } else {
//                 alert('Failed to get comment Info')
//             }
//         })
// }, [])

  
  const onChangeImg = (e) => {
    e.preventDefault();
    const formData = new FormData();
    
    if(e.target.files){
      const attachment = e.target.files[0]
      formData.append('file',attachment)
      SetAttachment(attachment)
      console.log(attachment)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("커리큘럼 수정 성공");
  
    let body = {
      title: title,
      detail: detail,
      content: content,
      effect: effect,
      attachment: attachment,
    };
  
    client
      .put(`/api/course/${id}`, body)
      .then((res) => 
         console.log(res)
         );

     navigate('/curriculum');
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
      title : "ID",
      dataIndex: "id",
    },
  ];

  return (
    <> 
    <Divider orientation="left" orientationMargin="0">
        제목
      </Divider>
      <p>
        {titleOld}
      </p>
    <Divider orientation="left" orientationMargin="0">
        장애
      </Divider>
      <p>
        {detailOld}
      </p>
      <Divider orientation="left" orientationMargin="0">
        운동 설명
      </Divider>
      <p>
        {contentOld}
      </p>
      <Divider orientation="left" orientationMargin="0">
        효과
      </Divider>
      <p>
        {effectOld}
      </p>
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
            id = {id}
          />
        <Button type="primary" onClick={showModal}>
            수정
      </Button>
      <Modal
          title="커리큘럼 수정"
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
            id="title"
            value={title}
            onChange={titleHandler}
            placeholder={titleOld}
          />
          <Divider orientation="left" orientationMargin="0">
            장애
          </Divider>
          <Input
            autoComplete="detail"
            name="detail"
            value={detail}
            onChange={detailHandler}
            placeholder={detailOld}
          />
          <Divider orientation="left" orientationMargin="0">
            운동설명
          </Divider>
          <Input
            autoComplete="content"
            name="content"
            value={content}
            onChange={contentHandler}
            placeholder={contentOld}
          />
          <Divider orientation="left" orientationMargin="0">
            효과
          </Divider>
          <Input
            autoComplete="effect"
            name="effect"
            value={effect}
            onChange={effectHandler}
            placeholder={effectOld}
          />
          <Divider orientation="left" orientationMargin="0">
            첨부파일
          </Divider>
          <form>
            <label htmlFor="profile-upload" />
            <input 
              type="file" 
              id="profile-upload" 
              accept="image/*" 
              name="attachment"/>
          </form>
        </Modal>
        <Button onClick={DeleteCurriculum}>삭제</Button>
    </>
  );
};


export default EditCurriDetail;
