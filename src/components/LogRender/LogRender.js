import shallowCompare from 'react-addons-shallow-compare';
import { logger } from 'csssr-school-utils';
import { Component } from 'react';

class LogRender extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    logger.call(this, this.constructor.name, nextProps, nextState);

    return shallowCompare(this, nextProps, nextState);
  }
}

export default LogRender;
