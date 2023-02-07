import React,{useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Button } from "antd";

function LandingPage() {
  useEffect(() => {
    axios.get('/api/hello')
    .then(response => console.log(response))
  }, [])
  let isLogin = useCookies()[0].x_auth ? true : false;
  console.log(isLogin);

  const navigate = useNavigate();
  const onClickLogoutHandler = () => {
    axios.get('/api/users/logout')
        .then(response => {
          if(response.data.success){
            navigate('/login');
          }else{
            alert('로그아웃 실패');
          }
        })
  }

  const onClickLoginHandler = () => {
    navigate('/login');
  }

  return (
    <div>
      <h2>시작 페이지</h2>
      <br/>
      { isLogin && <Button onClick={onClickLogoutHandler}> 로그아웃 </Button> }
      { !isLogin && <Button onClick={onClickLoginHandler}> 로그인 </Button> }
    </div>
  )
}

export default LandingPage