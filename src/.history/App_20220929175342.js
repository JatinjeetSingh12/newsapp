import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default function App() {
  const  size = 5;
  const  apikey = '26fd3a8b82f14d0a8394d95169631e3f';
  
  const [progress,setprogress] = useState(0);
  
  const 

  return (
    <>
     <BrowserRouter >
          <Navbar  />
          <LoadingBar color='#f11946' progress={progress} />
          <Routes>
            <Route path='/' element={<News setprogress={setprogress}  apikey={apikey}  key="general" pagesize={size} category="general" />} />
            <Route path='/about' element={<News setprogress={setprogress} apikey={apikey}  key="general" pagesize={size} category="general" />} />
            <Route path='/sports' element={<News setprogress={setprogress} apikey={apikey} key="sports"  pagesize={size} category="sports" />} />
            <Route path='/technology' element={<News setprogress={setprogress} apikey={apikey}  key="technology" pagesize={size} category="technology" />} />
            <Route path='/business' element={<News setprogress={setprogress} apikey={apikey}  key="business" pagesize={size} category="business" />} />
            <Route path='/science' element={<News setprogress={setprogress} apikey={apikey}  key="science" pagesize={size} category="science" />} />
            <Route path='/entertainment' element={<News setprogress={setprogress} apikey={apikey}  key="entertainment" pagesize={size} category="entertainment" />} />
          </Routes>
        </BrowserRouter> 
    </>
  )
}
