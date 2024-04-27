
import { useState } from 'react';
import './App.css';

function App() {
  let [pstatus, setPstatus] = useState(false)
  let [menuStatus, setMenuStatus] = useState(false)
  return (
    <div className='App' >
      <button className='micon' onClick={()=>setMenuStatus(!menuStatus)}>
      {
      menuStatus ? 
       <span>&times;</span>
       :
       <span>&#9776;</span>
      }
      </button>
      
      <div className={`menu ${menuStatus ? 'activeMenu' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Courses</li>
          <li>Gallery</li> 
          <li>Contact us</li>
        </ul>
      </div>
       {/* Hide and show password logic */}
      <input type={pstatus ? "text" : 'password'}></input> <button onClick={()=>setPstatus(!pstatus)}>{pstatus ? "Hide" : 'Show'}</button>
      
    </div>
  );
}

export default App;
