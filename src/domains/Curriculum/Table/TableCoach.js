import "./TableMain.css";
import {
  Avatar,
  Table,
  Modal,
  Button,
  Form,
  Input,
  List,
  Divider,
  Upload,
} from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined, PlusOutlined} from "@ant-design/icons";
import Comments from "../../../components/comments/Comment";
import UploadFile from "../../../components/upload/UploadFile";

function TableCoach() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingCurriculum, setEditingCurriculum] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: "1",
      title: "목 스트레칭",
      detail: "거북목",
      content: "목을 풀어주는 스트레칭",
      effect: "거북목 완화",
      attatchment: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      id: "2",
      title: "목 스트레칭",
      detail: "거북목",
      content: "목을 풀어주는 스트레칭",
      effect: "거북목 완화",
      attatchment: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      id: "3",
      title: "목 스트레칭",
      detail: "거북목",
      content: "목을 풀어주는 스트레칭",
      effect: "거북목 완화",
      attatchment: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      id: "4",
      title: "목 스트레칭",
      detail: "거북목",
      content: "목을 풀어주는 스트레칭",
      effect: "거북목 완화",
      attatchment: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);
  const columns = [
    {
      key: "1",
      title: "제목",
      dataIndex: "title",
    },
    {
      key: "2",
      title: "장애",
      dataIndex: "detail",
    },
    {
      key: "3",
      title: "수정/삭제",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditCurriculum(record);
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
    },
  ];

  const onAddCurriculum = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newCurriculum = {
      id: randomNumber,
      title: "제목",
      detail: "장애",
      content: "운동설명",
      effect: "효과",
      attatchment: "첨부파일",
    };
    setDataSource((pre) => {
      return [...pre, newCurriculum];
    });
  };
  const onDeleteCurriculum = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((curriculum) => curriculum.id !== record.id);
        });
      },
    });
  };
  const onEditCurriculum = (record) => {
    setIsEditing(true);
    setEditingCurriculum({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingCurriculum(null);
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
      <UploadFile />
          <Comments
            commentsUrl="http://localhost:3004/comments"
            currentUserId="1"
          />
    </>
  );
}

export default TableCoach;