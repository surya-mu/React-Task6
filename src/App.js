import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#about">Hobbies</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <h1>Hi There!</h1>
        <p>Name: Surya</p>
        <p>Age: 20 </p>
        <p>Location: Chennai,India</p>
      </header>
      <div className="About" id="about">
        <h2>About Me</h2>
        <p>
          Hi! I'm Surya here.
          I am a third year student at VIT Chennai,<br></br> I am currently pursuing a Virtual Internship with Ethnus, for MERN -Full Stack Development.
        </p>
      </div>
      <div className="Projects" id="projects">
        <h2>Hobbies</h2>
        
        Watching Youtube
        <br></br>
        Gaming
        <br></br>
        Football
        <br></br>
        Coding
    
      </div>
      <div className="Contact" id="contact">
        <h2>Contact Me</h2>
        <p>Feel free to reach via email:</p>
        <p>Email: <a mailto= "surya.mu2021@vitstudent.ac.in">surya.mu2021@vitstudent.ac.in</a></p>
        <p>GitHub: <a href="https://github.com/surya-mu" target="_blank" rel="noopener noreferrer">github.com/surya-mu</a></p>
      </div>
    </div>
  );
}
export default App;