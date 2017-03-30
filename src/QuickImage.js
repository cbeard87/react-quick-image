/* eslint-disable indent */
import React from 'react';

const QuickImage = ({find, width, height}) => {
  return (
    <img className="quick-image" src={`https://source.unsplash.com/random/${width}x${height}?${find}`} alt={find} />
  );
};

QuickImage.defaultProps = {
  width: '800',
  height: '600'
};

QuickImage.propTypes = {
  find: React.PropTypes.string,
  width: React.PropTypes.string,
  height: React.PropTypes.string
};

export default QuickImage;
