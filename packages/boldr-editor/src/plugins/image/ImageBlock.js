import React, { Component } from 'react';
import BlockContent from '../block/BlockContent';
import BlockInput from '../block/BlockInput';
import Block from '../block/Block';
import icons from '../../components/Buttons/';

export default class ImageBlock extends Component {
  constructor(props) {
    super(props);

    this.actions = [
      {
        key: 'delete',
        icon: icons.CloseIcon,
        action: this.props.container.remove,
      },
    ];
    this.handleCaptionChange = this.handleCaptionChange.bind(this);
  }

  handleCaptionChange(event) {
    event.stopPropagation();
    this.props.container.updateData({ caption: event.target.value });
  }

  render() {
    const ImageBlockStyle = {
      display: 'inline-block',
      maxWidth: '100%',
      verticalAlign: 'middle',
    };

    return (
      <Block { ...this.props } actions={ this.actions }>
        <BlockContent>
          <img style={ ImageBlockStyle } src={ this.props.data.src } alt="" className="ld-image-block" />
        </BlockContent>

        <BlockInput
          placeholder="Caption"
          value={ this.props.data.caption }
          onChange={ this.handleCaptionChange }
        />
      </Block>
    );
  }
}
