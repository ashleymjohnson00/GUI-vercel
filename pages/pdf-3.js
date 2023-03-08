import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Pdf3 = (props) => {
  return (
    <>
      <main className="pdf3-container">
        <Head>
          <title>Pdf-3 - BAJA Security</title>
          <meta property="og:title" content="Pdf-3 - BAJA Security" />
        </Head>
        <header className="pdf3-container1">
          <Link href="/home">
            <a className="pdf3-link">
              <img
                id="logo"
                alt="image"
                src="/playground_assets/asset%202%403x-200h.png"
                className="pdf3-image"
              />
            </a>
          </Link>
          <div className="pdf3-container2">
            <Link href="/home" id="homeNav" name="Home button">
              <a className="pdf3-link1 button heading2">Home</a>
            </Link>
            <Link href="/resources" id="resourcesNav" name="Resources button">
              <a className="pdf3-link2 heading2 button">Resources</a>
            </Link>
            <Link href="/history" id="historyNav" name="Rsources button">
              <a className="pdf3-link3 button heading2">History</a>
            </Link>
            <Link href="/update-info" id="updateNav" name="Update button">
              <a className="pdf3-link4 button heading2">Update Info</a>
            </Link>
          </div>
        </header>
        <header className="pdf3-container3">
          <div className="pdf3-container4">
            <Link href="/resources" id="pdf-0Nav" name="pdf-0 button">
              <a className="pdf3-link5 heading2 button">Assembly Manual</a>
            </Link>
            <Link href="/pdf-2" id="pdf-2Nav" name="pdf-2 button">
              <a className="pdf3-link6 heading2 button">Other Doc</a>
            </Link>
            <Link href="/pdf-3" id="pdf-3Nav" name="pdf-3 button">
              <a className="pdf3-link7 heading2 button">Other Doc</a>
            </Link>
            <Link href="/pdf-1" id="pdf-1Nav" name="pdf-1 button">
              <a className="pdf3-link8 heading2 button">User Manual</a>
            </Link>
          </div>
        </header>
        <div className="pdf3-container5">
          <iframe
            id="pdf-2"
            src="https://www.africau.edu/images/default/sample.pdf"
            className="pdf3-iframe"
          ></iframe>
        </div>
        <footer className="pdf3-footer">
          <span className="pdf3-text">Website created by BAJA Security</span>
          <img
            alt="image"
            src="/playground_assets/asset%202%403x-200h.png"
            className="pdf3-image1"
          />
        </footer>
      </main>
      <style jsx>
        {`
          .pdf3-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-logocolors-bluedark);
          }
          .pdf3-container1 {
            width: 100%;
            height: 140px;
            display: flex;
            z-index: 100;
            position: relative;
            align-items: center;
            border-radius: var(--dl-radius-radius-r75);
            justify-content: center;
            background-color: #ffffff;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
          .pdf3-link {
            display: contents;
          }
          .pdf3-image {
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
          .pdf3-image:hover {
            opacity: 0.7;
          }
          .pdf3-container2 {
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
          .pdf3-link1 {
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
          .pdf3-link1:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-logocolors-yellow);
          }
          .pdf3-link2 {
            top: 0px;
            left: 173px;
            color: var(--dl-color-gray-white);
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
          .pdf3-link2:hover {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .pdf3-link3 {
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
          .pdf3-link3:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-logocolors-yellow);
          }
          .pdf3-link4 {
            top: 0px;
            color: var(--dl-color-logocolors-yellow);
            right: 0px;
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
          .pdf3-link4:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-logocolors-yellow);
          }
          .pdf3-container3 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 265px;
            display: flex;
            z-index: 99;
            position: absolute;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-r75);
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            background-color: var(--dl-color-logocolors-origred);
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
          .pdf3-container4 {
            right: 0px;
            width: 1002px;
            bottom: 0px;
            height: 40px;
            display: flex;
            position: absolute;
            align-self: flex-end;
            align-items: center;
            margin-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .pdf3-link5 {
            top: 0px;
            left: 84px;
            color: var(--dl-color-gray-white);
            width: 187px;
            height: 40px;
            margin: auto;
            position: absolute;
            align-self: center;
            text-align: center;
            transition: 0.3s;
            border-color: var(--dl-color-gray-white);
            border-width: 2px;
            padding-left: auto;
            border-radius: var(--dl-radius-radius-radius8);
            background-color: var(--dl-color-logocolors-origred);
          }
          .pdf3-link5:hover {
            color: var(--dl-color-logocolors-origred);
            background-color: var(--dl-color-gray-white);
          }
          .pdf3-link6 {
            top: 1px;
            left: 576px;
            color: var(--dl-color-gray-white);
            width: 187px;
            height: 40px;
            margin: auto;
            position: absolute;
            align-self: center;
            text-align: center;
            transition: 0.3s;
            border-color: var(--dl-color-gray-white);
            border-width: 2px;
            padding-left: auto;
            border-radius: var(--dl-radius-radius-radius8);
            background-color: var(--dl-color-logocolors-origred);
          }
          .pdf3-link6:hover {
            color: var(--dl-color-logocolors-origred);
            background-color: var(--dl-color-gray-white);
          }
          .pdf3-link7 {
            top: 2px;
            color: var(--dl-color-logocolors-origred);
            right: -2px;
            width: 187px;
            height: 40px;
            margin: auto;
            position: absolute;
            align-self: center;
            text-align: center;
            transition: 0.3s;
            border-color: var(--dl-color-gray-white);
            border-width: 2px;
            padding-left: auto;
            border-radius: var(--dl-radius-radius-radius8);
            background-color: var(--dl-color-gray-white);
          }
          .pdf3-link7:hover {
            box-shadow: 5px 5px 10px 0px rgba(74, 0, 0, 0.47);
          }
          .pdf3-link8 {
            top: 0px;
            left: 329px;
            color: var(--dl-color-gray-white);
            width: 187px;
            height: 40px;
            margin: auto;
            position: absolute;
            align-self: center;
            text-align: center;
            transition: 0.3s;
            border-color: var(--dl-color-gray-white);
            border-width: 2px;
            padding-left: auto;
            border-radius: var(--dl-radius-radius-radius8);
            background-color: var(--dl-color-logocolors-origred);
          }
          .pdf3-link8:hover {
            color: var(--dl-color-logocolors-origred);
            background-color: var(--dl-color-gray-white);
          }
          .pdf3-container5 {
            width: 100%;
            height: var(--dl-size-size-maxwidth);
            display: flex;
            margin-top: 125px;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-logocolors-bluedark);
          }
          .pdf3-iframe {
            flex: 1;
            width: 995px;
            height: 100%;
            margin-top: var(--dl-space-space-fiveunits);
            padding-top: 3px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .pdf3-footer {
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
          .pdf3-image1 {
            width: var(--dl-size-size-large);
            object-fit: cover;
          }
          @media (max-width: 767px) {
            .pdf3-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .pdf3-text {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .pdf3-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .pdf3-text {
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

export default Pdf3
