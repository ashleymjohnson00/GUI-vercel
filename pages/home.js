import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios'
import { useToasts } from "react-toast-notifications";
import { useState, useEffect} from "react";
import { useRouter } from 'next/router';




const Home = (props) => {
  async function addUpdateTime(time){
    // const location = document.getElementById("alert-container")
    // const updateTime = document.createElement('div')
    // updateTime.className = 'home-text01'
    // updateTime.innerText = time
    // location.insertAdjacentElement('afterbegin', updateTime)
  
  }

  function timeout(delay) {
    return new Promise( res=> setTimeout(res,delay))
  }

  async function addUpdateConfidence(confidence,time){
    

    const locationOfNewUpdate = document.getElementById("Updates-Sidebar")
    const newUpdateBlock = document.createElement('div')
    const updateConfidence = document.createElement('div')
    const updateTime = document.createElement('div')

    newUpdateBlock.id = "alert-container1"
    newUpdateBlock.className = "jsx-e7eb81543aeba56e home-container04 textarea"
    updateConfidence.className = 'jsx-e7eb81543aeba56e'
    updateConfidence.innerText = confidence
    updateTime.className = 'home-text01'
    updateTime.innerText = time
    console.log('current time',timestamp)

    console.log("current confidence",confidence)
    locationOfNewUpdate.insertAdjacentElement('beforeend', newUpdateBlock)
    newUpdateBlock.insertAdjacentElement('beforeend', updateConfidence)
    newUpdateBlock.insertAdjacentElement('afterbegin', updateTime)
    console.log('test to see', timestamp)
  }

  const router = useRouter();
  const { addToast } = useToasts();
  const previousConfidence = ""
  const timestamp1 = ""
  const [ConfidenceInterval, setData] = useState([{}]);
  useEffect(() => {
     const interval = setInterval(() => {
     const getCI = fetch("https://bajaserver-ashleymjohnson00-baja.vercel.app/Threats",{
     }).then(
      res => res.text()
    ).then(ConfidenceInterval => {
      const splitFetch = ConfidenceInterval.split(',')
      console.log("split fetch",splitFetch)
      setData(ConfidenceInterval)
      if(ConfidenceInterval != previousConfidence){
        addToast("Warning: Threat Detected!", { appearance: "error" })
        addUpdateConfidence(splitFetch[0], splitFetch[1])
        global.time = splitFetch[1]
        
      }
      previousConfidence = ConfidenceInterval
     

    }).catch(err => console.log("Failed to reach server"))
  }, 500);
},[])
  const [timestamp, setTs] = useState([{}]);
  useEffect(() => {
      const getTs = fetch("https://bajaserver-ashleymjohnson00-baja.vercel.app/timestamp").then(
      res => res.text()
    ).then(timestamp => {
      setTs(timestamp)
    }).catch(err => console.log("Failed to reach server"))
    
   },[]
  )
 
  
  return (
    <>
      <main className="home-container">
        <Head>
          <title>Home - BAJA Security</title>
          <meta property="og:title" content="Home - BAJA Security" />
        </Head>
        <header className="home-container01">
          <Link href="/home">
            <a className="home-link">
              <img
                id="logo"
                alt="image"
                src="/playground_assets/asset%202%403x-200h.png"
                className="home-image"
              />
            </a>
          </Link>
          <div className="home-container02">
            <Link href="/home" id="homeNav" name="Home button">
              <a className="home-link1">Home</a>
            </Link>
            <Link href="/resources" id="resourceNav" name="Resources button">
              <a className="home-link2 button heading2">Resources</a>
            </Link>
            {/* <Link href="/history" id="historyNav" name="History button">
              <a className="home-link3 heading2 button">History</a>
            </Link> */}
            <Link href="/update-info" id="updateNav" name="Update button">
              <a className="home-link4 button">Update Info</a>
            </Link>
          </div>
        </header>
        <div id="Updates-Sidebar" className="home-sidebar">
          <div className="home-container03">
            <h1 className="home-text">Updates</h1>
          </div>
          <div id="alert-container" className="home-container04 textarea" style={{display: 'none'}}>
            <span className="home-text02">
              <span>{timestamp.slice(1,30)}</span>
              <br></br>
              <span>Threat Detected</span>
              <br></br>
              <span>Confidence Interval : {ConfidenceInterval.slice(2,4)}%</span>
              <br></br>
            </span>
          </div>
        </div>
        <div className="home-container05">
          <iframe
            src="https://bajaserver-ashleymjohnson00-baja.vercel.app/image"
            allowFullScreen
            className="home-iframe"
          ></iframe>
          <div className="home-container06">
            <div className="home-container07">
              <span className="home-text07">
                <span className="home-text08">Confidence Interval</span>
                <br></br>
              </span>
              <span className="home-text10">
                <span className="home-text11">{ConfidenceInterval.slice(1,3)}%</span>
                <br></br>
              </span>
            </div>
            <div className="home-container08">
              <div className="home-container09">
                <span className="home-text13">Alert Controls</span>
                <div className="home-container10">
                  <button onClick={addUpdateConfidence}>
                    test
                  </button>
                </div>
              </div>
              <div className="home-container11">
                <div className="home-container12">
                  <span className="home-text14">Camera Location:</span>
                  <span className="home-text15">Lobby</span>
                </div>
                <div className="home-container13">
                  <span className="home-text16">{}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-container14">
            <a
              href="https://www.cstx.gov/departments___city_hall/police"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link5 button"
            >
              Contact Authorities
            </a>
            <span className="home-text17">
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
          <span className="home-text18">Website created by BAJA Security</span>
          <img
            alt="image"
            src="/playground_assets/asset%202%403x-200h.png"
            className="home-image3"
          />
        </footer>
      </main>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-logocolors-bluedark);
          }
          .home-container01 {
            width: 100%;
            height: 140px;
            display: flex;
            position: relative;
            align-items: center;
            border-radius: var(--dl-radius-radius-r75);
            justify-content: center;
            background-color: #ffffff;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
          .home-link {
            display: contents;
          }
          .home-image {
            top: 0px;
            flex: 1;
            left: 0px;
            width: var(--dl-size-size-xxxlarge);
            bottom: 0px;
            margin: auto;
            position: absolute;
            object-fit: cover;
            transition: 0.3s;
            padding-left: var(--dl-space-space-fourunits);
            text-decoration: none;
          }
          .home-image:hover {
            opacity: 0.7;
          }
          .home-container02 {
            right: var(--dl-space-space-fourunits);
            width: 472px;
            bottom: 0px;
            height: 40px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .home-link1 {
            top: 0px;
            left: 0px;
            color: var(--dl-color-gray-white);
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
          .home-link1:hover {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .home-link2 {
            top: 0px;
            left: 173px;
            color: var(--dl-color-logocolors-yellow);
            width: 127px;
            height: 40px;
            margin: auto;
            position: absolute;
            align-self: center;
            text-align: center;
            transition: 0.3s;
            border-color: var(--dl-color-logocolors-yellow);
            border-width: 2px;
            padding-left: auto;
            border-radius: var(--dl-radius-radius-radius8);
            background-color: var(--dl-color-gray-white);
          }
          .home-link2:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-logocolors-yellow);
          }
          .home-link3 {
            top: 0px;
            color: var(--dl-color-logocolors-yellow);
            right: 172px;
            width: 127px;
            height: 40px;
            margin: auto;
            position: absolute;
            align-self: center;
            text-align: center;
            transition: 0.3s;
            border-color: var(--dl-color-logocolors-yellow);
            border-width: 2px;
            padding-left: auto;
            border-radius: var(--dl-radius-radius-radius8);
            background-color: var(--dl-color-gray-white);
          }
          .home-link3:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-logocolors-yellow);
          }
          .home-link4 {
            top: 0px;
            color: var(--dl-color-logocolors-yellow);
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
            border-color: var(--dl-color-logocolors-yellow);
            border-width: 2px;
            padding-left: auto;
            border-radius: var(--dl-radius-radius-radius8);
            text-transform: none;
            text-decoration: none;
            background-color: var(--dl-color-gray-white);
          }
          .home-link4:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-logocolors-yellow);
          }
          .home-sidebar {
            width: 25%;
            height: 1600px;
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
            z-index: 100;
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
          .home-container04 {
            flex: 0 0 auto;
            width: 92%;
            height: 100px;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            position: relative;
            margin-top: var(--dl-space-space-unit);
            transition: 0.3s;
            align-items: center;
            margin-left: var(--dl-space-space-unit);
            border-width: 0px;
            margin-right: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: flex-end;
            background-color: var(--dl-color-logocolors-lightblue1);
          }
          .home-container04:hover {
            box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.45);
          }
          .home-text01 {
            top: 0px;
            left: 0px;
            color: var(--dl-color-logocolors-lightblue3);
            right: 0px;
            margin: var(--dl-space-space-halfunit);
            position: absolute;
            font-size: 18px;
            text-align: center;
          }
          .home-text02 {
            left: 0px;
            color: var(--dl-color-logocolors-lightblue3);
            right: 0px;
            bottom: 0px;
            margin: var(--dl-space-space-unit);
            position: absolute;
            font-size: 18px;
            text-align: center;
          }
          .home-container05 {
            top: 0px;
            left: 0px;
            width: 75%;
            bottom: 0px;
            height: 1600px;
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
            width: 1050px;
            height: 1100px;
            border-radius: var(--dl-radius-radius-radius8);
            border-color: #266d86;
            border-width: 10px;
          }
          .home-container06 {
            flex: 0 0 auto;
            width: 100%;
            height: 197px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-container07 {
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
          .home-text07 {
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
          .home-text08 {
            color: var(--dl-color-gray-white);
          }
          .home-text10 {
            font-size: 48px;
            margin-top: var(--dl-space-space-twounits);
            font-family: Industry Inc Base;
          }
          .home-text11 {
            color: var(--dl-color-logocolors-lightblue3);
            font-size: 48px;
            font-family: Industry Inc Base;
          }
          .home-container08 {
            flex: 0 0 auto;
            width: auto;
            height: 197px;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-container09 {
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
          .home-text13 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .home-container10 {
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
          .home-container11 {
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
          .home-container12 {
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
          .home-text14 {
            color: var(--dl-color-gray-white);
            font-size: 23px;
          }
          .home-text15 {
            color: var(--dl-color-logocolors-lightblue3);
            font-size: 21px;
            margin-top: var(--dl-space-space-halfunit);
          }
          .home-container13 {
            width: 115%;
            height: 52px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: center;
            background-color: #075874;
          }
          .home-text16 {
            color: var(--dl-color-gray-white);
            font-size: 20px;
          }
          .home-container14 {
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
          .home-text17 {
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
            .home-text18 {
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
            .home-text18 {
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

export default Home