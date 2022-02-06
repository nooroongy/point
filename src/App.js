import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Test from "./routes/Test";
import './css/common.css'
import { ACTION } from "./components/store";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { FB_AUTH, FB_DB } from "./components/_firebase";
import Header from "./components/Header";
import Auth from "./routes/Auth";
import Record from "./routes/Record";

function App({ todoList, connectTodoDB, setUser,connectPoint,connectHistory}) {
  const [isLogedIn, setIsLogedIn] = useState(false); // 로그인중인지


  useEffect(() => {
    //로그인시 user정보 세팅
    FB_AUTH.authChange(user => {
      //user정보가 있을때
      if (user) {
        setIsLogedIn(true);
        const { displayName, uid, email } = user;
        setUser({ displayName, uid, email })

        //todoList DB에 연결
        FB_DB.get('todoList').then(res => {
          connectTodoDB(res.filter(data => data.uid === user.uid))
        })
        //point DB에 연결
        FB_DB.get('point').then(res => {
          connectPoint(res.filter(data => data.uid === user.uid)[0])
          if(res.filter(data => data.uid === user.uid).length===0){
            FB_DB.add("point", {
              uid: user.uid,
              point: 0
          })
          }
        })
        //history DB에 연결
        FB_DB.get('history').then(res => {
          connectHistory(res.filter(data => data.uid === user.uid))
        })
      }
      //user정보가 없을 때
      else { setIsLogedIn(false); }
    })


  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        {isLogedIn ?
        <Routes>
          <Route path='/*' element={<Home />}></Route>
          <Route path='/test' element={<Test />}></Route>
          <Route path='/record' element={<Record />}></Route>
        </Routes>
        :
        <Auth />}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

function mapDispatchProps(dispatch) {
  return {
    setUser: (user) => dispatch(ACTION.setUser(user)),
    connectTodoDB: (user) => dispatch(ACTION.setTodo(user)),
    connectPoint: (user) => dispatch(ACTION.setPoint(user)),
    connectHistory: (user) => dispatch(ACTION.setHistory(user)),
  }
}

function mapStateToProps(state) {
  const { user, todoList,point,todayPoint } = state;
  return ({ user, todoList,point,todayPoint })
}

export default connect(mapStateToProps, mapDispatchProps)(App);
