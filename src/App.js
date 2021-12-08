import Home from "./pages/home/Home";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Post from "./pages/post/Post";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/post" element={<Post/>}/>
      </Routes>
    </Router>
      
    
  );
}

export default App;
