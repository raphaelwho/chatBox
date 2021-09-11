import React from 'react';
import style from './Registration.css'
import Registration from './Registration.jsx';
import $ from 'jquery';

const Profile = ({type}) => {

  let btn, handleUser, addUser, getUser, updateUser;

  addUser = (data) => {


    console.log('new',data)

    $.ajax({
      url: 'http://localhost:3000/create-account',
      type: 'POST',
      data: data,
      success: (res) => {
        if (res.rowCount===1){
          console.log("success",res);
          alert("success");
        }else if (res.rowCount===0) {
          console.log("Uesrname already exists");
          alert("Uesrname already exists");
        }

      },
      error: (err) => {
        console.log('error',err);
      }
    })
    console.log('Registration! AddUser!');
    // axios.post, db.addUser
  }

  getUser = () => {
    console.log('Update! GetUser!');
    // axios.get, db.getUser
  }

  updateUser = () => {
    console.log('Update! UpdateUser!');
    // axios.put, db.updateUser
  }

  if (type === 'registration') {
    console.log('Registration!');
    btn = "Finish Registration";
    handleUser = addUser;
  }

  if (type === 'update') {
    console.log('ToUpdate!');
    btn = "Save Information";
    handleUser = getUser;
  }

  return (
    // <Registration btn={btn} addUser={addUser} getUser={getUser} updateUser={updateUser}/>
    <Registration btn={btn} handleUser={handleUser} updateUser={updateUser}/>
  );
}

export default Profile;