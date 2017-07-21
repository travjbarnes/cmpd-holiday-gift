import React from 'react';

export default function Box(props) {
  return (
    <div className="box">
      {props.title &&
        <div className="box-header with-border">
          <h1 className="box-title">
            {props.title}
          </h1>
        </div>}
      <div className="box-body">
        {props.children}
      </div>
    </div>
  );
}