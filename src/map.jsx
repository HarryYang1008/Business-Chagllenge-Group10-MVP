import React,{Component} from "react";
import "./style.css";
import Slider from './Slider';

import SentimentAnalysis from "./language_analysis.js";
import greenHeart from './green_heart.png';
import usericon from './icon.png';
import dashboard_icon from './dashboard_icon.png';
import user_dash from './user_dash.png';
import heart_dash from './heart_dash.png';
import dash1 from './dash1.jpg';
import dash2 from './dash2.jpg';
import dash3 from './dash3.jpg';
import dash4 from './dash4.jpg';
import dash5 from './dash5.jpg';
import plan1 from './plan1.png';
class MapComponent extends Component {


  constructor(props) {
    super(props);
    this.state = {
      showPopup: false, // 控制弹窗状态
      showsubmitPopup: false, 
    };
  }
  
  // 显示弹窗 2 秒后自动关闭
  showPopup = () => {
    this.setState({ showPopup: true });
    setTimeout(() => {
      this.setState({ showPopup: false });
    }, 1000); // 持续 2 秒
  };

  showsubmitPopup = () => {
    this.setState({ showsubmitPopup: true });
    setTimeout(() => {
      this.setState({ showsubmitPopup: false });
    }, 1000); // 持续 2 秒
  };

  
////////////////////// PAGE Show //////////////

  showSignInpage = () => {
    const landing_page= document.getElementById('landing_page');
    landing_page.style.display = 'none';
    const sign_in_page = document.getElementById('sign_in_page');
    sign_in_page.style.display = 'block';
    const main_page= document.getElementById('mental-main');
    main_page.style.display = 'none';
  }
  showSignUppage = () => {
    const landing_page= document.getElementById('landing_page');
    landing_page.style.display = 'none';
    const sign_in_page = document.getElementById('sign_up_page');
    sign_in_page.style.display = 'block';
    const main_page= document.getElementById('mental-main');
    main_page.style.display = 'none';
  }
  back_sign = () => {
    const landing_page= document.getElementById('landing_page');
    landing_page.style.display = 'block';
    const second_layer= document.getElementById('second_layer');
    second_layer.style.display = 'none';
    const sign_in_page = document.getElementById('sign_in_page');
    sign_in_page.style.display = 'none';
    const sign_up_page = document.getElementById('sign_up_page');
    sign_up_page.style.display = 'none';
    const main_page= document.getElementById('mental-main');
    main_page.style.display = 'none';
  }

  show_main= () => {
    const main_page= document.getElementById('mental-main');
    main_page.style.display = 'block';
    const main_page_dash= document.getElementById('mental-main-page');
    main_page_dash.style.display = 'block';
    const second_layer= document.getElementById('second_layer');
    second_layer.style.display = 'none';
    const mental_dashboard= document.getElementById('mental-dashboard');
    mental_dashboard.style.display = 'none';
    const mental_profile= document.getElementById('mental-profile');
    mental_profile.style.display = 'none';
    const sign_in_page = document.getElementById('sign_in_page');
    sign_in_page.style.display = 'none';
    const sign_up_page = document.getElementById('sign_up_page');
    sign_up_page.style.display = 'none';
    const landing_page= document.getElementById('landing_page');
    landing_page.style.display = 'none';
  }

  show_main_page= () => {
    const main_page_dash= document.getElementById('mental-main-page');
    main_page_dash.style.display = 'block';
    const mental_dashboard= document.getElementById('mental-dashboard');
    mental_dashboard.style.display = 'none';
    const second_layer= document.getElementById('second_layer');
    second_layer.style.display = 'none';
    const mental_profile= document.getElementById('mental-profile');
    mental_profile.style.display = 'none';
    const sign_in_page = document.getElementById('sign_in_page');
    sign_in_page.style.display = 'none';
    const sign_up_page = document.getElementById('sign_up_page');
    sign_up_page.style.display = 'none';
    const landing_page= document.getElementById('landing_page');
    landing_page.style.display = 'none';
  }


  show_dashboard = () => {
    const mental_dashboard= document.getElementById('mental-dashboard');
    mental_dashboard.style.display = 'block';
    const mental_profile= document.getElementById('mental-profile');
    mental_profile.style.display = 'none';
    const second_layer= document.getElementById('second_layer');
    second_layer.style.display = 'none';
    const main_page= document.getElementById('mental-main-page');
    main_page.style.display = 'none';
    const sign_in_page = document.getElementById('sign_in_page');
    sign_in_page.style.display = 'none';
    const sign_up_page = document.getElementById('sign_up_page');
    sign_up_page.style.display = 'none';
    const landing_page= document.getElementById('landing_page');
    landing_page.style.display = 'none';
  }
  
  show_profile = () => {
    const mental_profile= document.getElementById('mental-profile');
    mental_profile.style.display = 'block';
    const second_layer= document.getElementById('second_layer');
    second_layer.style.display = 'none';
    const mental_dashboard= document.getElementById('mental-dashboard');
    mental_dashboard.style.display = 'none';
    const main_page= document.getElementById('mental-main-page');
    main_page.style.display = 'none';
    const sign_in_page = document.getElementById('sign_in_page');
    sign_in_page.style.display = 'none';
    const sign_up_page = document.getElementById('sign_up_page');
    sign_up_page.style.display = 'none';
    const landing_page= document.getElementById('landing_page');
    landing_page.style.display = 'none';
  }

  show_contact_page = () => {
    const second_layer= document.getElementById('second_layer');
    second_layer.style.display = 'block';
    const contact_us_page= document.getElementById('contact-us-detailed');
    contact_us_page.style.display = 'block';
    const historypage= document.getElementById('historypage');
    historypage.style.display = 'none';
    const change_subscription = document.getElementById('change_subscription');
    change_subscription.style.display = 'none';
    const ManagePage=document.getElementById('Manage_Page');
    ManagePage.style.display = 'none';
    const mental_profile= document.getElementById('mental-profile');
    mental_profile.style.display = 'none';
    const mental_dashboard= document.getElementById('mental-dashboard');
    mental_dashboard.style.display = 'none';
    const main_page= document.getElementById('mental-main-page');
    main_page.style.display = 'none';
    const sign_in_page = document.getElementById('sign_in_page');
    sign_in_page.style.display = 'none';
    const sign_up_page = document.getElementById('sign_up_page');
    sign_up_page.style.display = 'none';
    const landing_page= document.getElementById('landing_page');
    landing_page.style.display = 'none';
  }

  show_Manage_page = () => {
    const second_layer= document.getElementById('second_layer');
    second_layer.style.display = 'block';
    const ManagePage=document.getElementById('Manage_Page');
    ManagePage.style.display = 'block';
    const historypage= document.getElementById('historypage');
    historypage.style.display = 'none';
    const contact_us_page= document.getElementById('contact-us-detailed');
    contact_us_page.style.display = 'none';
    const change_subscription = document.getElementById('change_subscription');
    change_subscription.style.display = 'none';
    const mental_profile= document.getElementById('mental-profile');
    mental_profile.style.display = 'none';
    const mental_dashboard= document.getElementById('mental-dashboard');
    mental_dashboard.style.display = 'none';
    const main_page= document.getElementById('mental-main-page');
    main_page.style.display = 'none';
    const sign_in_page = document.getElementById('sign_in_page');
    sign_in_page.style.display = 'none';
    const sign_up_page = document.getElementById('sign_up_page');
    sign_up_page.style.display = 'none';
    const landing_page= document.getElementById('landing_page');
    landing_page.style.display = 'none';
  }

  show_subscription_page = () => {
    const change_subscription = document.getElementById('change_subscription');
    change_subscription.style.display = 'block';
    const second_layer= document.getElementById('second_layer');
    second_layer.style.display = 'block';
    const historypage= document.getElementById('historypage');
    historypage.style.display = 'none';
    const ManagePage=document.getElementById('Manage_Page');
    ManagePage.style.display = 'none';
    const contact_us_page= document.getElementById('contact-us-detailed');
    contact_us_page.style.display = 'none';
    const mental_profile= document.getElementById('mental-profile');
    mental_profile.style.display = 'none';
    const mental_dashboard= document.getElementById('mental-dashboard');
    mental_dashboard.style.display = 'none';
    const main_page= document.getElementById('mental-main-page');
    main_page.style.display = 'none';
    const sign_in_page = document.getElementById('sign_in_page');
    sign_in_page.style.display = 'none';
    const sign_up_page = document.getElementById('sign_up_page');
    sign_up_page.style.display = 'none';
    const landing_page= document.getElementById('landing_page');
    landing_page.style.display = 'none';
  }

  show_history_page = () => {
    const historypage= document.getElementById('historypage');
    historypage.style.display = 'block';
    const change_subscription = document.getElementById('change_subscription');
    change_subscription.style.display = 'none';
    const second_layer= document.getElementById('second_layer');
    second_layer.style.display = 'block';
    const ManagePage=document.getElementById('Manage_Page');
    ManagePage.style.display = 'none';
    const contact_us_page= document.getElementById('contact-us-detailed');
    contact_us_page.style.display = 'none';
    const mental_profile= document.getElementById('mental-profile');
    mental_profile.style.display = 'none';
    const mental_dashboard= document.getElementById('mental-dashboard');
    mental_dashboard.style.display = 'none';
    const main_page= document.getElementById('mental-main-page');
    main_page.style.display = 'none';
    const sign_in_page = document.getElementById('sign_in_page');
    sign_in_page.style.display = 'none';
    const sign_up_page = document.getElementById('sign_up_page');
    sign_up_page.style.display = 'none';
    const landing_page= document.getElementById('landing_page');
    landing_page.style.display = 'none';
  }
  
///////////////////////////////////////////////////////////////////////////////////////////////



  render() {
    return (
      <div>

{/* <!------------------------ Landing Page--------------------------------------------------------------> */}
        <div className="landing_page" id = "landing_page">
          <div id="landing_title">HAVEN</div>

          <div>
            <img id= "green_heart"
                src={greenHeart}
                alt="Green Heart"
              />
            <button className="landing_bottom" id="sign_up" onClick={this.showSignUppage }>Sign Up</button>
            <button className="landing_bottom" id="sign_in" onClick={this.showSignInpage}>Sign In</button>
            <button className="landing_bottom" id="skip"onClick={this.show_main }>Skip & Trail</button>
          </div>
        </div>

{/* <!------------------------ Sign In Page-----------------------------------------------------------------> */}
        <div className="sign_in_page" id="sign_in_page">
          <buttom className="back_botton" id="back_sign_in"onClick={this.back_sign }>back</buttom>
          <div className="Sign_main">
            <div id="landing_title">HAVEN</div>
            <div>
              <img id= "green_heart"
                  src={usericon}
                  alt="Green Heart"
                />
              <form id="username-form">
                <label for="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  required
                  minlength="3"
                  maxlength="20"
                  pattern="^[a-zA-Z0-9_]+$"
                  autocomplete="off"
                />
              </form>
              <form id="username-form">
                <label for="username">password:</label>
                <input
                  type="text"
                  id="password"
                  name="username"
                  placeholder="Enter your password"
                  required
                  minlength="3"
                  maxlength="20"
                  pattern="^[a-zA-Z0-9_]+$"
                  autocomplete="off"
                />
              </form>
              <form>
                <button type="submit" onClick={this.show_main }>log me in</button>
              </form>
            </div>
             
          </div>
        </div>

{/* <!------------------------ Sign Up Page----------------------------------------------------------------> */}
        <div className="sign_up_page" id="sign_up_page">
          <buttom className="back_botton" id="back_sign_in"onClick={this.back_sign }>back</buttom>
          <div className="Sign_main">
            <div id="landing_title">HAVEN</div>
            <div>
              <img id= "green_heart"
                  src={usericon}
                  alt="Green Heart"
                />
              <form id="username-form">
                <label for="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  required
                  minlength="3"
                  maxlength="20"
                  pattern="^[a-zA-Z0-9_]+$"
                  autocomplete="off"
                />
              </form>
              <form id="username-form">
                <label for="username">Email:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your Email"
                  required
                  minlength="3"
                  maxlength="20"
                  pattern="^[a-zA-Z0-9_]+$"
                  autocomplete="off"
                />
              </form>
              <form id="username-form">
                <label for="username">password:</label>
                <input
                  type="text"
                  id="password"
                  name="username"
                  placeholder="Enter your password"
                  required
                  minlength="3"
                  maxlength="20"
                  pattern="^[a-zA-Z0-9_]+$"
                  autocomplete="off"
                />
              </form>
              <form id="username-form">
                <label for="username">re-enter password:</label>
                <input
                  type="text"
                  id="password"
                  name="username"
                  placeholder="Enter your password"
                  required
                  minlength="3"
                  maxlength="20"
                  pattern="^[a-zA-Z0-9_]+$"
                  autocomplete="off"
                />
              </form>
              <form>
                <button type="submit" onClick={this.show_main }>submit</button>
              </form>
            </div>
             
          </div>
        </div>

      <div>
        {/* <!------------------------------ Main Page of Application----------------------------------------------------------------> */}
        <div className="mental-main" id="mental-main">
          <buttom className="top-bar" id="top-bar" onClick={this.back_sign}>HAVEN</buttom>
          {/*--------------------------------- Bottom Bar ------------------------------- */}
          <div className="bottom_bar" id="bottom_bar">
            <button id = "main-button" onClick={this.show_main_page }>
              <div>
                <img id= "dash-icon"
                  src={heart_dash}
                  alt="main"
                />
              </div>
              Main
            </button>
            <button id = "dashboard-button" onClick={this.show_dashboard}>
              <div>
                <img id= "dash-icon"
                  src={dashboard_icon}
                  alt="main"
                />
              </div>
              Dashboard
            </button>
            <button id = "profile-button" onClick={this.show_profile}>
              <div>
              <img id= "dash-icon"
                  src={user_dash}
                  alt="main"
              />
              </div>
              Profile
            </button>
          </div>
          {/*--------------------------------- main page contain ------------------------------- */}
          <div className="mental-main-page" id="mental-main-page">
              
            <div className="card">
              <h2 className="card-title">Meditation exercise</h2>
              <div className="exercise-list">
                <div className="exercise-item" onClick={this.showPopup}>
                  <span>Emotional Regulation Practice</span>
                  <div className="icon">⚡</div> 
                </div>
                <div className="exercise-item" onClick={this.showPopup}>
                  <span>Loving-Kindness Meditation</span>
                  <i className="icon">⭐</i> 
                </div>
                <div className="exercise-item" onClick={this.showPopup}>
                  <span>Mindful Breathing</span>
                  <div className="icon">🔥</div>
                </div>
              </div>
            </div>

            <div className="card" id = "">
              <h2 className="card-title">Therapy Informations</h2>
              <div className="exercise-list">
                <div className="exercise-item" onClick={this.showPopup}>
                  <span>Probody Physical Therapy</span>
                  <div className="icon">❤️</div> 
                </div>
                <div className="exercise-item" onClick={this.showPopup}>
                  <span>Revive counseling and wellness center</span>
                  <div className="icon">🤗</div> 
                </div>
                <div className="exercise-item" onClick={this.showPopup}>
                  <span>Boston Physical Therapy & Wellness</span>
                  <div className="icon">😺</div>
                </div>
              </div>
            </div>
              
            <div className="card-news" id="NEWS">
              <h2 className="card-news-title">NEWS</h2>
              <Slider />
            </div>
          </div>
          {/*------------------------------- mental data dashboard page ------------------------ */}
          <div className="mental-dashbord" id="mental-dashboard">
            <h2>Emotional Data</h2>
            <div className="card-container">
                
                <div className="dashboard-large-card" onClick={this.showPopup}>
                  <img className="dashimg" src={dash1} alt="Green Heart"></img>
                </div>

                <div className="dashboard-card" onClick={this.showPopup}>
                  <img className="dashimg" src={dash2} alt="Green Heart"></img>
                </div>

                <div className="dashboard-card" onClick={this.showPopup}>
                  <img className="dashimg" src={dash3} alt="Green Heart"></img>
                </div>

               
              </div>
              <div>
                  <SentimentAnalysis />
                </div>
              
          </div>
          {/*-------------------------------- user profile  page --------------------------------------------
          # contain the Entry for the Below menu item:
           Mange My Account/ Change Subscription / Mental Assesement History / Contack Us /  */}
          <div className="mental-profile" id="mental-profile">
            <div>

              <div id="profile-title">
                <img src={usericon} alt="User Avatar" class="profile-avatar" />
                <span class="profile-id">User12345</span>
              </div>

              <div id="profile-menu">
                <button class="menu-item" onClick ={this.show_Manage_page}>Manage My Account</button>
                <button class="menu-item"  onClick ={this.show_subscription_page}>Change Subscription</button>
                <button class="menu-item" onClick={this.show_history_page}>Mental Assesement History</button>
                <button class="menu-item" onClick = {this.show_contact_page}>Contact Us</button>
              </div>

            </div>
          </div>

        </div>


        {/*---------------------------------- 2nd layer of User Main page  ----------------------------------------------------------------> */}
        <div className = "second_layer" id="second_layer">

          <div id="contact-us-detailed">
            
            <form id="username-form">
              <label for="username">Put your suggest or message here:</label>
              <textarea
                id="user-contact-message"
                name="username"
                placeholder="Input your message here"
                required
                minlength="3"
                pattern="^[a-zA-Z0-9_]+$"
                autocomplete="off"
              ></textarea>
            </form>

            <form id="username-form">
              <label for="username">Email:</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your contact E-mail"
                required
                minlength="3"
                pattern="^[a-zA-Z0-9_]+$"
                  autocomplete="off"
              />
              </form>
              
                  <button  onClick={this.showsubmitPopup}>submit</button>
              
            
          </div>
            
          
          <div className="Manage Page" id="Manage_Page">
            <div className="Sign_main">
              <div>
                <img id= "green_heart"
                    src={usericon}
                    alt="Green Heart"
                  />
                <form id="username-form">
                  <label for="username">Change Username:</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="User 123456"
                    required
                    minlength="3"
                    maxlength="20"
                    pattern="^[a-zA-Z0-9_]+$"
                    autocomplete="off"
                  />
                </form>
                <form id="username-form">
                  <label for="username">Change Email:</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="123@gmail.com"
                    required
                    minlength="3"
                    maxlength="20"
                    pattern="^[a-zA-Z0-9_]+$"
                    autocomplete="off"
                  />
                </form>
                <form id="username-form">
                  <label for="username">Change password:</label>
                  <input
                    type="text"
                    id="password"
                    name="username"
                    placeholder="Enter your new password"
                    required
                    minlength="3"
                    maxlength="20"
                    pattern="^[a-zA-Z0-9_]+$"
                    autocomplete="off"
                  />
                </form>
                <form id="username-form">
                  <label for="username">re-enter new password:</label>
                  <input
                    type="text"
                    id="password"
                    name="username"
                    placeholder="Enter your new password"
                    required
                    minlength="3"
                    maxlength="20"
                    pattern="^[a-zA-Z0-9_]+$"
                    autocomplete="off"
                  />
                </form>
                <form>
                  <button type="submit" onClick={this.show_main }>submit</button>
                </form>
              </div>
              
            </div>
          </div>
            
          <div className="change_suscription" id="change_subscription">
            
              <div className="card-container">
              <h2>Your Current Plan</h2>
              <div className="Plan-large-card">
              <img className="dashimg" src={plan1} alt="User Avatar" />
              </div>
              <h2>Other Plans</h2>
              <div className="Plan-large-card">
               Plan 2
              </div>
              <div className="Plan-large-card">
                Plan 3
              </div>
            </div>
              
          </div>
            
            <div class="historypage" id="historypage">
            <h2>Your Assesement History</h2>
            <div className="card">
              <h2 className="card-title">12/15/2024</h2>
              <div className="exercise-list">
                <div className="exercise-item" onClick={this.showPopup}>
                  <span>Gratitude Journaling</span>
                  <div className="icon" >⚡</div> 
                </div>
                <div className="exercise-item" onClick={this.showPopup}>
                  <span>Emotion Identification</span>
                  <i className="icon">⭐</i> 
                </div>
                <div className="exercise-item" onClick={this.showPopup}>
                  <span>Loving-Kindness Meditation</span>
                  <div className="icon">🔥</div>
                </div>
              </div>
              </div>
              <div className="card">
              <h2 className="card-title">12/14/2024</h2>
              <div className="exercise-list">
                <div className="exercise-item" onClick={this.showPopup}>
                  <span> Emotional Regulation Practice</span>
                  <div className="icon">⚡</div> 
                </div>
                <div className="exercise-item" onClick={this.showPopup}>
                  <span>Compassionate Letter Writing</span>
                  <i className="icon">⭐</i> 
                </div>
                <div className="exercise-item" onClick={this.showPopup}>
                  <span>Mindful Breathing</span>
                  <div className="icon">🔥</div>
                </div>
              </div>
            </div>
          </div>
              

          

        </div>

        
      </div>
      {this.state.showPopup && (
        <div
          style={{
            position: "fixed",
            bottom: "30%",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#333",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "10px",
            fontSize: "16px",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
            zIndex: 1000,
          }}
        >
          Coming Soon
        </div>
        )}
        {this.state.showsubmitPopup && (
        <div
          style={{
            position: "fixed",
            bottom: "30%",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#333",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "10px",
            fontSize: "16px",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
            zIndex: 1000,
          }}
        >
          submit sucess
        </div>
      )}
        
      </div>
    );
  }
}

export default MapComponent;
