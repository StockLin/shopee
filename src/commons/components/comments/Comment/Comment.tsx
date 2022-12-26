import React, { useState, createElement } from 'react';
import moment from "moment";
import { Avatar, Comment as AntdComment } from 'antd';
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import Tooltip from 'antd/es/tooltip';

export interface IComment {
  id: string | number,
  avatar: string,
  content: string,
  createdBy: string,
  createdAt: string,
  images?: string[],
  rates?: number
}

const Comment: React.FC<IComment> = ({ id, avatar = '', content = '', createdBy, createdAt }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState<string | null>(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];

  return (
    <AntdComment
      key={id}
      actions={actions}
      author={createdBy}
      avatar={<Avatar src={avatar} alt={createdBy} />}
      content={content}
      datetime={
        <Tooltip title={createdAt}>
          <span>{moment(createdAt, 'YYYY-MM-DD').fromNow()}</span>
        </Tooltip>
      }
    />
  )
}

export default Comment;