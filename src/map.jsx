import React, { Component } from "react";
import "leaflet/dist/leaflet.css";
import "./style.css";
import greenHeart from './green_heart.png';
import usericon from './icon.png';
import dashboard_icon from './dashboard_icon.png';
import user_dash from './user_dash.png';
import heart_dash from './heart_dash.png';
class MapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      geojsonLayer: null, // Store the GeoJSON layer
    };
    this.mapContainerRef = React.createRef();
    this.mapInitialized = false; // Track if the map has been initialized
  }
  
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
        <>
          {/* <!-- Import the LEAFLET CSS filr here--> */}
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
            integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
            crossOrigin=""
          />
          {/* <!-- Make sure you put this AFTER Leaflet's CSS --> */}
          <script
            src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
            integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
            crossOrigin=""
          ></script>
        </>

{/* <!------------------------ Landing Page--------------------------------------------------------------> */}
        <div className="landing_page" id = "landing_page">
          <div id="landing_title">MENTAL APP</div>

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
            <div id="landing_title">MENTAL APP</div>
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
            <div id="landing_title">MENTAL APP</div>
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
          <buttom className="back_botton" id="back_sign_in" onClick={this.back_sign}>back</buttom>
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
            <div>
              this is the main page of the application 
            </div>
          </div>
          {/*------------------------------- mental data dashboard page ------------------------ */}
          <div className="mental-dashbord" id="mental-dashboard">
            <div>
              this is the dashboard of user's emotional data
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
                <button class="menu-item">Manage My Account</button>
                <button class="menu-item">Change Subscription</button>
                <button class="menu-item">Mental Assesement History</button>
                <button class="menu-item" onClick = {this.show_contact_page}>Contact Us</button>
              </div>

            </div>
          </div>

        </div>


        {/*---------------------------------- 2nd layer of User Main page  ----------------------------------------------------------------> */}
        <div className = "second_layer" id="second_layer">
          2nd layer
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
            
          </div>

        </div>

        
        </div>
      </div>
    );
  }
}

export default MapComponent;
