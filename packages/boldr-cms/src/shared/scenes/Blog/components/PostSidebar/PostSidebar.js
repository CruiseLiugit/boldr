/* @flow */
import React from 'react';
import Paper from 'material-ui/Paper';

import { Heading, Col } from '../../../../components/index';
import Author from '../Author';
import TagBlock from '../TagBlock';

const PostSidebar = (props: { tags: Array<Object>, author: Object }) => {
  const postAuthor = props.entities.users[props.author];
  const postTags = props.tags.map(id => props.listTags[id]);
  return (
    <div className="blog__sidebar">
    <Col xs={ 12 } md={ 4 } lg={ 3 }>
      <Paper zDepth={ 1 } style={ { padding: '1em', width: '250px' } }>
        <Heading size={ 2 } color="#1F2439">Author</Heading>
        <Author { ...postAuthor } />
      </Paper>
      <Paper zDepth={ 1 } style={ { padding: '1em', marginTop: '25px', width: '250px' } }>
        <Heading size={ 2 } color="#1F2439">Tags</Heading>
        <TagBlock tags={ postTags } />
      </Paper>
    </Col>
  </div>
  );
};

export default PostSidebar;
