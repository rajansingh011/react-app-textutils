import React from 'react'

function Alert(props) {
  
  const captialize = (word) => {
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  
  if(typeof(props.alert.type) !== 'undefined' && typeof(props.alert.msg) !== 'undefined')
  {
    return (
      <div className="container my-2 fs-6">
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
              <strong>{captialize(props.alert.type)}</strong>: {props.alert.msg}
          </div>
      </div>
    )
  }
}

export default Alert
