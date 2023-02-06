import React,{useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

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
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', width: '100%', height: '100vh'}}>
      <h2>시작 페이지</h2>
      { isLogin && <button onClick={onClickLogoutHandler}> 로그아웃 </button> }
      { !isLogin && <button onClick={onClickLoginHandler}> 로그인 </button> }
    </div>
  )
}

export default LandingPage