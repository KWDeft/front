import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import client from '../../lib/api/client';

function Comment(props) {
  const courseId = props.courseId;
  const [commentValue, setcommentValue] = useState('');
  const user = useSelector((state) => state.user);
  const [userId, setUserId] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setcommentValue(e.target.value);
  };

  const userIdHandler = (e) => {
    e.preventDefault();
    setUserId(e.target.value);
  };

  const onsubmit = (event) => {
    event.preventDefault();
    const variables = {
      content: commentValue,
      userId: userId,
      courseId: "63c58d3868301456009d2f14",
    };
    client.post('/api/course/comment', variables).then((response) => {
      if (response.data.success) {
        console.log(response.data.result);
      } else {
        alert('커멘트를 저장하지 못했습니다.');
      }
    });
  };
  return (
    <div>
      <br />
      <p>Replies</p>
      <hr />

      {/* Comment Lists */}

      {/* Root Comment Form */}

      <form style={{ display: 'flex' }} onSubmit={onsubmit}>
        <input
          name="userId"
          value={userId}
          onChange={userIdHandler}
        />  
        <textarea
          style={{ width: '100%', borderRadius: '5px' }}
          onChange={handleChange}
          value={commentValue}
          name="content"
          placeholder="코멘트를 작성해 주세요"
        />
        <br />
        <button style={{ width: '20%', height: '52px' }} onClick={onsubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Comment;