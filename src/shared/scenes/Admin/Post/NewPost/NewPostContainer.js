/* @flow */
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import draftToHtml from 'draftjs-to-html';

import type { Post, PostImage } from '../../../../types/models';
import { createPost } from '../../../../state/modules/blog/posts';
import NewPost from './NewPost';

type Props = {
  dispatch: Function,
  postImage: PostImage,
  createPost: Function,
};

class NewPostContainer extends Component {
  constructor() {
    super();

    (this: any).handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(values: Post) {
    const postData = {
      title: values.title,
      tags: values.tags,
      excerpt: values.excerpt,
      feature_image: this.props.postImage.url || values.feature_image,
      published: values.published,
      raw_content: values.content,
      content: draftToHtml(values.content),
      meta: values.meta,
    };
    // console.log(postData)
    this.props.createPost(postData);
  }
  props: Props;

  render() {
    return (
      <NewPost
        onFormSubmit={ this.handleOnSubmit }
        postImage={ this.props.postImage }
      />
    );
  }
}

NewPostContainer.contextTypes = {
  router: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    postImage: state.attachments.postImage,
    drawer: state.boldr.ui.drawer,
  };
};
export default connect(mapStateToProps, { createPost })(NewPostContainer);
