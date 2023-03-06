import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'
import { TRACE_OUTPUT_VERSION } from 'next/dist/shared/lib/constants'

const Landing = (props) => {
  require('dotenv').config();
  const mongokey = process.env.MONGO_API;
  var displaysuccess;
  async function verifyLogin(){
    var username = document.querySelector("[name=userUsername]").value.toString()
    var password = document.querySelector("[name=userPassword]").value.toString()
   
    const output = axios.post('https://us-east-2.aws.data.mongodb-api.com/app/data-mkrnx/endpoint/data/v1/action/findOne', 
    {
      collection: "loginCredentials", database: "BAJAsecDB", dataSource: 'Cluster0',
      filter: {
        user: username,
        password: password,
      },
    },
    {
      "Content-Type" : "application/json",
      "api-key": mongokey,
    }
    ).catch((error) => {console.log("failed")
  })
  try{
  let fromoutput = await output.catch((error) => {console.log("error")})
  let verifyUsername = fromoutput.data.document.username
  let verifyPassword = fromoutput.data.document.password;
  displaysuccess = "User logged in"
  document.location.href = "/home"
  }
  catch(err){
    displaysuccess = "login failed"

    
  }
  
  document.getElementById("displayresultSuccess").innerHTML = displaysuccess

  }
  return (
    <>
      <div className="landing-container">
        <Head>
          <title>Landing - BAJA Security</title>
          <meta property="og:title" content="Landing - BAJA Security" />
        </Head>
        <div className="landing-container1">
          <img
            alt="image"
            src="/playground_assets/asset%202%403x-700h.png"
            className="landing-image"
          />
          <span className="landing-text">Username</span>
          <span className="landing-text1">Password</span>
          <span className="landing-text2">New User?</span>
          <input
            type="text"
            id="login"
            name="userUsername"
            required
            placeholder="username"
            autoComplete="username"
            className="landing-textinput input"
          />
          <input
            type="password"
            id="login"
            name="userPassword"
            required
            maxlength="20"
            minlength="6"
            placeholder="******************"
            autoComplete="current-password"
            className="landing-textinput1 input"
          />
          <h1 id="displayresultSuccess"></h1>
          <button onClick={verifyLogin} id="submitLogin" name="Home button">
            <a  className="landing-link">Submit</a>
          </button>
          <Link  href="/new-user" id="Navigation" name="newUser">
            <a className="landing-link1">Click Here</a>
          </Link>
          
        </div>
        <div className="home-container04">
          <iframe
            src="https://www.youtube.com/embed/tgrEkag92zg"
            allow="autoplay"
            allowFullScreen
            className="home-iframe"
          ></iframe>
          <div className="home-container05">
            <div className="home-container06">
              <span className="home-text01">
                <span className="home-text02">Confidence Interval</span>
                <br></br>
              </span>
              <span className="home-text04">
                <span className="home-text05">41</span>
                <br></br>
              </span>
            </div>
            <div className="home-container07">
              <div className="home-container08">
                <span className="home-text07">Camera Controls</span>
                <div className="home-container09">
                  <img
                    alt="image"
                    src="/playground_assets/triangle-left-svgrepo-com.svg"
                    className="home-image1"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/triangle-left-svgrepo-com%20%5B1%5D.svg"
                    className="home-image2"
                  />
                </div>
              </div>
              <div className="home-container10">
                <div className="home-container11">
                  <span className="home-text08">Camera Location:</span>
                  <span className="home-text09">Lobby</span>
                </div>
                <div className="home-container12">
                  <span className="home-text10">00:00:00 00/00/00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-container13">
            <a
              href="https://www.cstx.gov/departments___city_hall/police"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link5 button"
            >
              Contact Authorities
            </a>
            <span className="home-text11">
              If the AI detects a firearm, our system will alert the security
              team through the preferred contact method as well as send the
              alert to the updates tab to the right. If an alert of a possible
              weapon threat is confirmed by a security team member, the button
              above could be used to contact proper authorities and subdue the
              threat as soon as possible. This button is here for demo purposes
              and does not currently contact actual help. the link leads to
              CSPD&apos;s website.
            </span>
          </div>
        </div>
        <footer className="home-footer">
          <span className="home-text12">Website created by BAJA Security</span>
          <img
            alt="image"
            src="/playground_assets/asset%202%403x-200h.png"
            className="home-image3"
          />
        </footer>
      </main>
      <style jsx>
        {`
          .landing-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/landing-background-1500w.png');
          }
          .landing-container1 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 540px;
            bottom: 0px;
            height: 657px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-color: var(--dl-color-logocolors-yellow);
            border-style: solid;
            border-width: 4px;
            border-radius: var(--dl-radius-radius-r75);
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .landing-image {
            top: var(--dl-space-space-fourunits);
            left: 0px;
            right: 0px;
            width: var(--dl-size-size-xxlarge);
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .landing-text {
            top: 185px;
            left: 0px;
            color: var(--dl-color-logocolors-origred);
            right: 0px;
            margin: auto;
            position: absolute;
            font-size: 24px;
            align-self: flex-start;
            text-align: center;
            font-family: Industry Medium;
            font-weight: 400;
            line-height: 1.15;
            text-transform: capitalize;
            text-decoration: none;
          }
          .landing-text1 {
            top: 291px;
            left: 0px;
            color: var(--dl-color-logocolors-origred);
            right: 0px;
            margin: auto;
            position: absolute;
            font-size: 24px;
            align-self: flex-start;
            text-align: center;
            font-family: Industry Medium;
            font-weight: 400;
            line-height: 1.15;
            text-transform: capitalize;
            text-decoration: none;
          }
          .landing-text2 {
            top: 500px;
            left: 0px;
            color: var(--dl-color-logocolors-bluedark);
            right: 0px;
            margin: auto;
            position: absolute;
            font-size: 24px;
            align-self: flex-start;
            text-align: center;
            font-family: Industry Medium;
            font-weight: 400;
            line-height: 1.15;
            text-transform: capitalize;
            text-decoration: none;
          }
          .landing-textinput {
            top: 225px;
            left: 0px;
            color: var(--dl-color-logocolors-bluedark);
            right: 0px;
            width: 230px;
            height: 32px;
            margin: auto;
            position: absolute;
            border-color: var(--dl-color-logocolors-lightblue3);
          }
          .landing-textinput1 {
            top: 334px;
            left: 0px;
            color: var(--dl-color-logocolors-bluedark);
            right: 0px;
            width: 230px;
            height: 32px;
            margin: auto;
            position: absolute;
            border-color: var(--dl-color-logocolors-lightblue3);
          }
          .landing-link {
            top: 408px;
            left: 0px;
            color: var(--dl-color-gray-white);
            right: 0px;
            width: 127px;
            height: 40px;
            margin: auto;
            position: absolute;
            font-size: 16px;
            align-self: center;
            text-align: center;
            transition: 0.3s;
            font-family: Industry Light;
            font-weight: 700;
            padding-top: 0.5rem;
            border-color: var(--dl-color-logocolors-yellow);
            border-width: 2px;
            padding-left: auto;
            border-radius: var(--dl-radius-radius-radius8);
            padding-bottom: 0.5rem;
            text-transform: none;
            text-decoration: none;
            background-color: var(--dl-color-logocolors-yellow);
          }
          .landing-link:hover {
            color: var(--dl-color-logocolors-yellow);
            background-color: var(--dl-color-gray-white);
          }
          .landing-link1 {
            left: 0px;
            color: var(--dl-color-gray-white);
            right: 0px;
            width: 127px;
            bottom: var(--dl-space-space-fourunits);
            height: 40px;
            margin: auto;
            position: absolute;
            font-size: 16px;
            align-self: center;
            text-align: center;
            transition: 0.3s;
            font-family: Industry Light;
            font-weight: 700;
            padding-top: 0.5rem;
            border-color: var(--dl-color-logocolors-yellow);
            border-width: 2px;
            padding-left: auto;
            border-radius: var(--dl-radius-radius-radius8);
            padding-bottom: 0.5rem;
            text-transform: none;
            text-decoration: none;
            background-color: var(--dl-color-logocolors-yellow);
          }
          .home-sidebar {
            width: 25%;
            height: 1188px;
            display: flex;
            z-index: 2;
            align-self: flex-end;
            overflow-x: hidden;
            transition: 0.5s;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #075874;
          }
          .home-container03 {
            width: 100%;
            height: 67px;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: flex-start;
            background-color: #064d66;
          }
          .home-text {
            top: 15px;
            left: 0px;
            color: var(--dl-color-logocolors-lightblue3);
            right: 0px;
            width: 183px;
            margin: auto;
            position: absolute;
            font-size: 32px;
            text-align: center;
            font-family: Industry Inc Base;
            font-weight: 700;
            line-height: 1.15;
            letter-spacing: 2.1px;
            text-transform: uppercase;
            text-decoration: none;
          }
          .home-icon {
            top: 14px;
            left: var(--dl-space-space-twounits);
            width: 40px;
            height: 40px;
            position: absolute;
          }
          .home-container04 {
            top: 0px;
            left: 0px;
            width: 75%;
            bottom: 0px;
            height: 1186px;
            display: flex;
            position: absolute;
            align-self: flex-start;
            margin-top: 140px;
            align-items: center;
            margin-left: auto;
            padding-top: var(--dl-space-space-twounits);
            margin-right: auto;
            padding-left: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-sixunits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-iframe {
            width: 100%;
            height: 50%;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-container05 {
            flex: 0 0 auto;
            width: 100%;
            height: 197px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-container06 {
            flex: 0 0 auto;
            width: 216px;
            height: 184px;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            margin-left: var(--dl-space-space-oneandhalfunits);
            margin-right: var(--dl-space-space-threeunits);
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
            background-color: #075874;
          }
          .home-text01 {
            top: 0px;
            left: 0px;
            right: 0px;
            margin: auto;
            position: absolute;
            font-size: 20px;
            align-self: flex-start;
            text-align: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
          }
          .home-text02 {
            color: var(--dl-color-gray-white);
          }
          .home-text04 {
            font-size: 48px;
            margin-top: var(--dl-space-space-twounits);
            font-family: Industry Inc Base;
          }
          .home-text05 {
            color: var(--dl-color-logocolors-lightblue3);
            font-size: 48px;
            font-family: Industry Inc Base;
          }
          .home-container07 {
            flex: 0 0 auto;
            width: auto;
            height: 197px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-container08 {
            flex: 0 0 auto;
            width: 199px;
            height: 183px;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            margin-right: var(--dl-space-space-threeunits);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
            background-color: #075874;
          }
          .home-text07 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .home-container09 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-halfunit);
            align-items: flex-start;
            justify-content: center;
          }
          .home-image1 {
            width: 100px;
            object-fit: cover;
          }
          .home-image2 {
            width: 100px;
            object-fit: cover;
          }
          .home-container10 {
            flex: 0 0 auto;
            width: 267px;
            height: 221px;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-logocolors-bluedark);
          }
          .home-container11 {
            width: 100%;
            height: 50%;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
            background-color: #075874;
          }
          .home-text08 {
            color: var(--dl-color-gray-white);
            font-size: 23px;
          }
          .home-text09 {
            color: var(--dl-color-logocolors-lightblue3);
            font-size: 21px;
            margin-top: var(--dl-space-space-halfunit);
          }
          .home-container12 {
            width: 100%;
            height: 52px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
            background-color: #075874;
          }
          .home-text10 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
          }
          .home-container13 {
            width: 100%;
            height: 255px;
            display: flex;
            margin-top: var(--dl-space-space-fourunits);
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: flex-start;
            background-color: #266d86;
          }
          .home-link5 {
            color: var(--dl-color-gray-white);
            width: 517px;
            height: 66px;
            font-size: 32px;
            box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.28);
            margin-top: var(--dl-space-space-threeunits);
            text-align: center;
            font-family: Industry Inc Base;
            font-weight: 700;
            line-height: 1.15;
            padding-top: 1rem;
            border-width: 0px;
            border-radius: var(--dl-radius-radius-radius8);
            padding-bottom: 1rem;
            text-transform: uppercase;
            text-decoration: none;
            background-color: var(--dl-color-logocolors-lightred);
          }
          .home-text11 {
            color: var(--dl-color-logocolors-lightblue3);
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-left: var(--dl-space-space-fourunits);
            margin-right: var(--dl-space-space-fourunits);
          }
          .home-footer {
            flex: 1;
            width: 100%;
            display: flex;
            max-width: 100%;
            min-width: 100%;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .home-image3 {
            width: var(--dl-size-size-large);
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .home-image {
              flex: 1;
            }
          }
          @media (max-width: 767px) {
            .home-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text12 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .home-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-text12 {
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Landing
