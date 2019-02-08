import React, { Component } from 'react';

const App = () => {
  const profiles =[
    { name: "Taro", age: 30},
    { name: "Hanako", age:29},
    { name: "Noname"}
  ] 
    return (
      <div>
        {
          profiles.map((profile, index) => {
            return <User name = {profile.name} age = {profile.age} key={index}/>
          })
        }
      </div>
    )
}

const User = (props) => {
  return <div>Hi {props.name} age {props.age}</div>
}

User.defaultProps ={
  age:1
}
export default App;
