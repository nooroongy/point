import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Test from "./routes/Test";
import Test2 from "./routes/Test2";
import './css/common.css'
import { ACTION } from "./components/store";
import { connect } from "react-redux";
import { useEffect } from "react";
import { FB_DB } from "./components/_firebase";

function App({todoList,connectTodoDB}) {
  console.log(todoList)

  useEffect(()=>{
    FB_DB.get('todoList').then(res => {
      // connectTodoDB(res.filter(data => data.uid === user.uid))
      connectTodoDB(res)
    })
  },[])
  return (
    <div className="App">
        <BrowserRouter>
          {/* <Header isLogedIn={isLogedIn} /> */}
          <Routes>
            <Route path='/*' element={<Home todoList={todoList}/>}></Route>
            <Route path='/test' element={<Test />}></Route>
            <Route path='/test2' element={<Test2 />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

function mapDispatchProps(dispatch) {
  return {
    setUser: (user) => dispatch(ACTION.setUser(user)),
    connectTodoDB: (user) => dispatch(ACTION.setTodo(user)),
  }
}

function mapStateToProps(state){
    const {user,todoList} = state;
    return({user,todoList})
}

export default connect(mapStateToProps, mapDispatchProps)(App);
