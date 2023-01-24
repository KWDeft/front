import React, {useCallback, useEffect, useState} from "react";
import client from '../../lib/api/client';
import moment from 'moment';
import {Input, Button} from 'antd';
import { useSelector } from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import "./Comment.scss";
import { TextField } from "../../../node_modules/@material-ui/core/index";

const Comment = () => {
    const location = useLocation();
    const courseId = location.state.id;
    const navigate = useNavigate();
    const [commentList, setCommentList] = useState([]);
    // 입력한 댓글 내용
    const [content, setContent] = useState("");
    const { user } = useSelector(({ user }) => ({ user: user.user }));
    const userId = user.username;

    const { TextArea } = Input;
    
    useEffect(() => {
       getCommentList();
    }, []);

    const getCommentList = async () => {
        client.get(`/api/course/comment/${courseId}`).then(
            res => {
                setCommentList(
                res.data.map(row => ({
                  userId: row.userId,
                  content: row.content,
                }))
              );
            }
          );
    };
    
    const submit = (e) => {
        e.preventDefault();

        let body = {
            content: content,
            userId: userId,
            courseId: courseId
        }

        client.post('/api/course/comment', body)
        .then((res) => 
        console.log(res)
        );
        alert("댓글 등록 완료");
        window.location.reload();
    };

    console.log(commentList)

    return ( 
        <div className="comments-wrapper">
            <div className="comments-header">
                {/* <TextField
                    className="comments-header-testarea"
                    onChange={(e) => {
                        setUserId(e.target.value)
                    }}
                    placeholder= "아이디를 입력해주세요"
                /> */}
                <TextField
                    className="comments-header-testarea"
                    onChange={(e) => {
                        setContent(e.target.value)
                    }}
                    placeholder= "댓글을 입력해주세요"
                />
                {content !== "" ? (
                    <Button onClick={submit}>등록하기</Button>
                ): (
                    <Button disabled={true}>
                        등록하기
                    </Button>
                )}
            </div>
            <div className="comments-body">
                {commentList.map((item, index) => (
                    <div key={index} className="comments-comment">
                        <div className="comment-username-date">
                            <div className = "comment-date">
                                {moment(item.created).add(9, "hour").format('YYYY-MM-DD HH:mm:ss')}
                            </div>
                        </div>
                        <div className="comment-content">{item.content}</div>
                        <div className="comment-username">{item.userId}</div>
                    </div>
                ))}

            </div>
        </div>
    );
  };
  
  export default Comment;
  