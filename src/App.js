import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Test from "./routes/Test";
import Test2 from "./routes/Test2";
import './css/common.css'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          {/* <Header isLogedIn={isLogedIn} /> */}
          <Routes>
            <Route path='/*' element={<Home />}></Route>
            <Route path='/test' element={<Test />}></Route>
            <Route path='/test2' element={<Test2 />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
