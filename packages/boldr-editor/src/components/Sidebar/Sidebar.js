import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SideMenu from './SideMenu';
import 'setimmediate';
const styled = require('styled-components').default;
import { getSelectedBlockElement } from '../../utils/selection';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { top: 0 };
    this.onChange = this.onChange.bind(this);
  }

  getValidSidebarPlugins() {
    const plugins = [];
    for (const plugin of this.props.plugins) {
      if (!plugin.button || typeof plugin.button !== 'function') {
        continue;
      }
      plugins.push(plugin);
    }
    return plugins;
  }

  onChange(editorState) {
    this.props.onChange(editorState);
  }

  componentDidUpdate() {
    if (this.updatingPosition) {
      clearImmediate(this.updatingPosition);
    }
    this.updatingPosition = null;
    this.updatingPosition = setImmediate(() => {
      return this.setBarPosition();
    });
  }

  setBarPosition() {
    const container = ReactDOM.findDOMNode(this.refs.container);
    const element = getSelectedBlockElement();
    if (!element || !container) { return; }

    const containerTop = container.getBoundingClientRect().top - document.documentElement.clientTop;
    let top = element.getBoundingClientRect().top - 4 - containerTop;
    top = Math.max(0, Math.floor(top));

    if (this.state.top !== top) {
      this.setState({ top });
    }
  }

  render() {
    if (this.props.readOnly) { return null; }
    return (
      <Sidebar ref="container" className="ld-sidebar">
        <SidebarMenuWrapper style={ { top: `${this.state.top}px` } } className="ld-sidebar-menu-wrapper">
          <SideMenu
            uploadImageCallBack={ this.props.uploadImageCallBack }
            uploadFile={ this.props.uploadFile }
            editorState={ this.props.editorState }
            onChange={ this.onChange }
            plugins={ this.getValidSidebarPlugins() }
          />
        </SidebarMenuWrapper>
      </Sidebar>
    );
  }
}

const Sidebar = styled.div`
  position: relative;
`;

const SidebarMenuWrapper = styled.div`
  float: left;
  left: -44px;
  position: absolute;
`;
