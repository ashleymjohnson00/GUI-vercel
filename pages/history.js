import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const History = (props) => {
  return (
    <>
      <main className="history-container">
        <Head>
          <title>History - BAJA Security</title>
          <meta property="og:title" content="History - BAJA Security" />
        </Head>
        <header className="history-container1">
          <Link href="/">
            <a className="history-link">
              <img
                id="logo"
                alt="image"
                src="/playground_assets/asset%202%403x-200h.png"
                className="history-image"
              />
            </a>
          </Link>
          <div className="history-container2">
            <Link href="/" id="homeNav" name="Home button">
              <a className="history-link1 heading2 button">Home</a>
            </Link>
            <Link href="/resources" id="resourcesNav" name="Resources button">
              <a className="history-link2 button heading2">Resources</a>
            </Link>
            <Link href="/update-info" id="updateNav" name="Update button">
              <a className="history-link3 button">Update Info</a>
            </Link>
            <Link href="/history" id="historyNav" name="History button">
              <a className="history-link4 button heading2">History</a>
            </Link>
          </div>
        </header>
        <div className="history-container3">
          <h1 className="history-text">All updates and Alerts</h1>
          <img
            alt="image"
            src="/playground_assets/untitled%20drawing%20%5B2%5D.svg"
            className="history-image1"
          />
          <img
            alt="image"
            src="/playground_assets/untitled%20drawing%20%5B2%5D.svg"
            className="history-image2"
          />
          <ul className="history-ul list">
            <li className="list-item">
              <span>Text</span>
            </li>
          </ul>
        </div>
        <footer className="history-footer">
          <span className="history-text2">
            Website created by BAJA Security
          </span>
          <img
            alt="image"
            src="/playground_assets/asset%202%403x-200h.png"
            className="history-image3"
          />
        </footer>
      </main>
      <style jsx>
        {`
          .history-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-logocolors-bluedark);
          }
          .history-container1 {
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
          .history-link {
            display: contents;
          }
          .history-image {
            top: 0px;
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
          .history-image:hover {
            opacity: 0.7;
          }
          .history-container2 {
            right: var(--dl-space-space-fourunits);
            width: 641px;
            bottom: 0px;
            height: 40px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .history-link1 {
            top: 0px;
            left: 0px;
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
          .history-link1:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-logocolors-yellow);
          }
          .history-link2 {
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
          .history-link2:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-logocolors-yellow);
          }
          .history-link3 {
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
          .history-link3:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-logocolors-yellow);
          }
          .history-link4 {
            top: 0px;
            color: var(--dl-color-gray-white);
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
            background-color: var(--dl-color-logocolors-yellow);
          }
          .history-link4:hover {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .history-container3 {
            width: 80%;
            height: 856px;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-sixunits);
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-r75);
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            background-color: var(--dl-color-gray-white);
            border-bottom-left-radius: var(--dl-radius-radius-radius8);
            border-bottom-right-radius: var(--dl-radius-radius-radius8);
          }
          .history-text {
            color: var(--dl-color-logocolors-origred);
            font-size: 32px;
            align-self: center;
            margin-top: var(--dl-space-space-fourunits);
            text-align: center;
            font-family: Industry Inc Base;
            font-weight: 700;
            line-height: 1.15;
            text-transform: uppercase;
            text-decoration: none;
          }
          .history-image1 {
            top: 81px;
            left: 102px;
            width: 100px;
            position: absolute;
            align-self: center;
            object-fit: cover;
          }
          .history-image2 {
            top: 81px;
            right: 102px;
            width: 100px;
            position: absolute;
            align-self: center;
            object-fit: cover;
          }
          .history-ul {
            flex: 1;
            width: 80%;
            height: auto;
            align-self: center;
            margin-top: var(--dl-space-space-threeunits);
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-twounits);
            list-style-type: disc;
            list-style-image: none;
            list-style-position: inside;
          }
          .history-footer {
            width: 100%;
            height: 97px;
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
          .history-image3 {
            width: var(--dl-size-size-large);
            object-fit: cover;
          }
          @media (max-width: 767px) {
            .history-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .history-text2 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .history-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .history-text2 {
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

export default History
