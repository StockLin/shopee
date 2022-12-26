import React from 'react';
import styles from './CommentList.module.css';
import { List } from 'antd';
import Comment, { IComment } from '../Comment/Comment';

interface IProps {
  comments: IComment[]
}

const CommentList: React.FC<IProps> = ({ comments = [] }) => {
  return (
    <List
      className={styles['comment-list']}
      // loading={initLoading}
      itemLayout="horizontal"
      // loadMore={loadMore}
      dataSource={comments}
      renderItem={item => (
        <List.Item>
          <Comment {...item} />
        </List.Item>
      )}
    />
  )
}

export default CommentList;