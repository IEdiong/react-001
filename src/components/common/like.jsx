import React from 'react';

const Like = (props) => {
  let classes = 'fa fa-heart';
  if (!props.like) classes += '-o';

  return <i className={classes} style={{ cursor: 'pointer' }} aria-hidden='true' onClick={props.handleClick}></i>;
};

export default Like;
