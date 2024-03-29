import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'
import { ToastProvider, useToasts } from 'react-toast-notifications';
import { TRACE_OUTPUT_VERSION } from 'next/dist/shared/lib/constants'


const Landing = (props) => {
  require('dotenv').config();
  const { addToast } = useToasts();
  const timers = require('timers-promises')
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
  //displaysuccess = "Login Successful"
  addToast("Login Successful! :D", { appearance: "success" , autoDismiss: true, autoDismissTimeout: 2000})
  await timers.setTimeout(2500)
  document.location.href = "/home"
  }
  catch(err){
    //displaysuccess = "Login Failed"
    addToast("Login Failed. Try Again :(", { appearance: "error" , autoDismiss: true, autoDismissTimeout: 3000})
    
  }
  
  //document.getElementById("displayresult").innerHTML = displaysuccess
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
        <button 
          onClick= {() =>{verifyLogin();}}  
          id="submitLogin" 
          name="Home button"
        >
          <a className="landing-link">Submit</a>
        </button>
        <Link href="/new-user" id="Navigation" name="newUser">
          <a className="landing-link1">Click Here</a>
        </Link>
      </div>
    </div>
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
        .landing-link1:hover {
          color: var(--dl-color-logocolors-yellow);
          background-color: var(--dl-color-gray-white);
        }
      `}
    </style>
    </>
  )
      }
      export default Landing
