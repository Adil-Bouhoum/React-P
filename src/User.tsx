import React from 'react';
  
  function User(props){
    return (
      <div>
        <p>{props.name}</p>
        <p>Age: {props.age}</p>
        <p>Member status: {props.isMember ? "Yes" : "No"}</p>
      </div>
    );
  };
  
  export default User;