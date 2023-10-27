import React from 'react'

function IconText(props) {
  const { icon, text } = props;

    return (
      <div className="d-flex gap-3 justify-content-center-mobile align-items-center">
        <img className="mb-2" src={icon} alt="icon" />
        <p>{text}</p>
      </div>
    );
}

export default IconText
