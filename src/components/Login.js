/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Api from '../Api';
import './Login.css';
import SearchIcon from '@material-ui/icons/Search';

export default ({onReceive}) => {

  const handleFacebookLogin = async () => {
    let result = await Api.fbPopup();
    if (result) {
      onReceive(result.user);
    }else {
      alert("Erro!");
    }
  }

  return (
    <div className="login">
      <button  className="login--btn" onClick={handleFacebookLogin}>Logar com Facebook</button>
    </div>
  )
}