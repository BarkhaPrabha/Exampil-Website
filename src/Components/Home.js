import React, { useState } from 'react'
import logo1 from './image/icon1.png';
import logo2 from './image/icon2.jpg';
// import logo4 from './image/cloud2.png';

const Home = () => {

    const [clicked, isClicked] = useState("click");

    const [formData, setFormData] = useState({
       name: '',
       contact: '',
       email: '',
      });
    
      const [errors, setErrors] = useState({
        name: '',
        contact: '',
        email: '',
      });
    
      const handleChange = (e) => {
        const { name,value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit= (e) => {
        e.preventDefault();
        validateForm();
      };
    
      const validateForm = () => {
        const newErrors = {};
    
        if (!formData.name) {
          newErrors.name = 'Name is required';
        }
    
        if (!formData.email) {
          newErrors.email = 'Email is required';
        } else if (!isValidEmail(formData.email)) {
          newErrors.email = 'Invalid email address';
        }
    
        setErrors(newErrors);
    
        if (Object.keys(newErrors).length === 0) {
          alert('Form submitted successfully!');
        }
      };
      
      const isValidEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
      };
  return (
    <>
    <section className="bg">
        <div className="title">
            <div className="container duplicate">
                <div className="flex ">
                    <div className="Main common">
                        <div>
                            <h2>Crack your goal with <br></br>India's toppers</h2>
                            <p>Over 1Lakhs learners trust us for their preparation<br></br>
                            .....................................................................................</p>
                        </div>
                    </div>
                    <form id="form" onSubmit={handleSubmit}>
                        <div className="content common"> 

                            <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} className="col" required/>
                            <input  type="tel" placeholder="Contact" name="contact" value={formData.contact} maxlength="10" pattern="/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i" onChange={handleChange} required className="col" id="contactNumber"/>
                            <input type="email" placeholder="Email ID"  name="email" value={formData.email} onChange={handleChange} className="col"/>
                            <span className="error">{errors.email}</span>
                            <div className="radio-container">
                                <div className="radio-btn" onClick={() => { isClicked("click");}}>
                                    <input type="radio"  value={clicked} name="clicked" checked={clicked === "click"} /><span>NEET</span>
                                </div>
                                <div className="radio-btn" onClick={() => { isClicked("isClick"); }} >
                                    <input type="radio" value={clicked} name="clicked" checked={clicked === "isClick"}/><span>JEE </span>
                                </div>
                            </div>
                        
                        <button className="login-btn">Align a Topper</button>
                        </div>
                    </form>
                </div>
                <div className="cloud-d">
                  <div className="clouds2">
                    <svg width="0" height="0">
                      <filter id="filter-last">
                          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="4"/>
                          <feDisplacementMap  in="SourceGraphic" scale="50" />
                      </filter>
                    </svg>
                </div>
                  <div className ="clouds">
                    <svg width="0" height="0">
                      <filter id="filter-back">
                          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3"/>
                          <feDisplacementMap  in="SourceGraphic" scale="30" />
                      </filter>
                    </svg>
                  </div>
                  <div className="clouds1">
                    <svg width="0" height="0">
                      <filter id="filter-mid">
                          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="4"/>
                          <feDisplacementMap  in="SourceGraphic" scale="50" />
                      </filter>
                    </svg>
                  </div>
                </div>
            </div>  
        </div>
    </section>
    <section>
        <div className="container">
            <div className="head ">
                <h2>Your Academic Progress is Now <br></br>OUR Responsibility</h2>
                <div className="title1">
                    <div className="box ">
                        <div className="sub"><h3>NEET</h3></div>
                        <div className="para">
                            <strong>Personlised learning app to learn <br></br>anytime, anywhere</strong>
                        </div>
                        <img src={logo2} style={{height: "160px"}}/>
                    </div>
                    <div className="box ">
                        <div className="sub box-1"><h3>JEE</h3></div>
                        <div className="para"><strong>Comprehensive learning program for <br></br>JEE preparation</strong></div>
                        <img src={logo1} style={{height: "160px"}}/>
                    </div>
                </div>
            </div>
        </div>
          
    </section>
    </>
  )
}

export default Home;
