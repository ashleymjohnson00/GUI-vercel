import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const UpdateInfo = (props) => {
  return (
    <>
      <main className="update-info-container">
        <Head>
          <title>Update-Info - BAJA Security</title>
          <meta property="og:title" content="Update-Info - BAJA Security" />
        </Head>
        <header className="update-info-container01">
          <Link href="/">
            <a className="update-info-link">
              <img
                alt="image"
                src="/playground_assets/asset%202%403x-200h.png"
                className="update-info-image"
              />
            </a>
          </Link>
          <div className="update-info-container02">
            <Link href="/" id="Navigation" name="Home button">
              <a className="update-info-link1 button heading2">Home</a>
            </Link>
            <Link href="/resources" id="Navigation" name="Home button">
              <a className="update-info-link2 button heading2">Resources</a>
            </Link>
            <Link href="/history" id="Navigation" name="Home button">
              <a className="update-info-link3 button heading2">History</a>
            </Link>
            <Link href="/update-info" id="Navigation" name="Home button">
              <a className="update-info-link4 heading2 button">Update Info</a>
            </Link>
          </div>
        </header>
        <div className="update-info-container03">
          <div className="update-info-container04">
            <h1 className="update-info-text">
              <span className="Heading"> Up</span>
              <span>date Alert Information</span>
            </h1>
            <img
              alt="image"
              src="/playground_assets/untitled%20drawing%20%5B2%5D.svg"
              className="update-info-image1"
            />
            <img
              alt="image"
              src="/playground_assets/untitled%20drawing%20%5B2%5D.svg"
              className="update-info-image2"
            />
            <span className="update-info-text03">
              Update Phone Number or Email to be Alerted at
            </span>
            <span className="update-info-text04">
              Update Confidence Interval to be Alerted at (1 - 100%)
            </span>
            <Link href="/update-info" name="alert submit button">
              <a className="update-info-link5 button heading2">Save</a>
            </Link>
            <input
              type="number"
              max="100"
              min="0"
              name="confidence interval"
              step="1"
              placeholder="XX %"
              className="update-info-textinput input"
            />
            <div className="update-info-container05">
              <div className="update-info-container06">
                <div className="update-info-container07">
                  <span className="update-info-text05">
                    <span className="update-info-text06">Email</span>
                    <span>:</span>
                  </span>
                  <input
                    type="email"
                    name="update-email"
                    placeholder="youremail@email.com"
                    className="update-info-textinput1 input"
                  />
                </div>
                <span className="update-info-text08">Phone Number:</span>
                <input
                  type="tel"
                  name="update-phone"
                  placeholder="XXX-XXX-XXXX"
                  className="update-info-textinput2 input"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="update-info-container08">
          <h1 className="update-info-text09">
            <span className="Heading"> Up</span>
            <span>date camera Information</span>
          </h1>
          <img
            alt="image"
            src="/playground_assets/untitled%20drawing%20%5B2%5D.svg"
            className="update-info-image3"
          />
          <img
            alt="image"
            src="/playground_assets/untitled%20drawing%20%5B2%5D.svg"
            className="update-info-image4"
          />
          <span className="update-info-text12">Update Camera Location</span>
          <span className="update-info-text13">Update Time Zone</span>
          <Link href="/update-info" name="camera info submit button">
            <a className="update-info-link6 heading2 button">Save</a>
          </Link>
          <div className="update-info-container09">
            <select
              id="cameraSelect"
              name="Camera Selection"
              className="update-info-select SecondaryText"
            >
              <option value="Camera-1" selected>
                Camera #1
              </option>
            </select>
            <input
              type="text"
              id="selectCamLoc"
              name="Selected Camera Location"
              placeholder="West Hallway"
              className="update-info-textinput3 input"
            />
          </div>
          <select
            id="timezone"
            name="Time Zone Select"
            className="update-info-select1 SecondaryText"
          >
            <option value="GMT-6" selected>
              Central Standard Time (GMT-6)
            </option>
            <option value="GMT-7">Mountain Standard Time (GMT-7)</option>
            <option value="GMT-8">Pacific Standard Time (GMT-8)</option>
            <option value="GMT-9">Alaska Standard Time (GMT-9)</option>
            <option value="GMT-10">
              Hawaii-Aleutian Standard Time (GMT-10)
            </option>
            <option value="GMT-5">Eastern Standard Time (GMT-5)</option>
          </select>
        </div>
        <div className="update-info-container10">
          <h1 className="update-info-text14">
            <span className="Heading"> Up</span>
            <span>date user&apos;s Information</span>
          </h1>
          <img
            alt="image"
            src="/playground_assets/untitled%20drawing%20%5B2%5D.svg"
            className="update-info-image5"
          />
          <img
            alt="image"
            src="/playground_assets/untitled%20drawing%20%5B2%5D.svg"
            className="update-info-image6"
          />
          <span className="update-info-text17">Update User Password</span>
          <Link href="/update-info" name="password submit button">
            <a className="update-info-link7 button heading2">Save</a>
          </Link>
          <div className="update-info-container11">
            <span className="update-info-text18">Current Password:</span>
            <input
              type="password"
              name="userPass"
              maxlength="20"
              minlength="6"
              placeholder="*************"
              autoComplete="current-password"
              className="update-info-textinput4 input"
            />
          </div>
          <div className="update-info-container12">
            <span className="update-info-text19">Updated Password:</span>
            <input
              type="password"
              name="userPass"
              maxlength="20"
              minlength="6"
              placeholder="*************"
              autoComplete="new-password"
              className="update-info-textinput5 input"
            />
          </div>
          <div className="update-info-container13">
            <span className="update-info-text20">Re-type Password:</span>
            <input
              type="password"
              name="userPass"
              maxlength="20"
              minlength="6"
              placeholder="*************"
              autoComplete="new-password"
              className="update-info-textinput6 input"
            />
          </div>
        </div>
        <footer className="update-info-footer">
          <span className="update-info-text21">
            Website created by BAJA Security
          </span>
          <img
            alt="image"
            src="/playground_assets/asset%202%403x-200h.png"
            className="update-info-image7"
          />
        </footer>
      </main>
      <style jsx>
        {`
          .update-info-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-logocolors-bluedark);
          }
          .update-info-container01 {
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
          .update-info-link {
            display: contents;
          }
          .update-info-image {
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
          .update-info-image:hover {
            opacity: 0.7;
          }
          .update-info-container02 {
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
          .update-info-link1 {
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
          .update-info-link1:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-logocolors-yellow);
          }
          .update-info-link2 {
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
          .update-info-link2:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-logocolors-yellow);
          }
          .update-info-link3 {
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
          .update-info-link3:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-logocolors-yellow);
          }
          .update-info-link4 {
            top: 0px;
            color: var(--dl-color-gray-white);
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
            background-color: var(--dl-color-logocolors-yellow);
          }
          .update-info-link4:hover {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .update-info-container03 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .update-info-container04 {
            width: 907px;
            height: 441px;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            border-color: var(--dl-color-logocolors-yellow);
            border-style: solid;
            border-width: 4px;
            border-radius: var(--dl-radius-radius-r75);
            flex-direction: column;
            justify-content: flex-end;
            background-color: var(--dl-color-gray-white);
          }
          .update-info-text {
            top: var(--dl-space-space-threeunits);
            left: 0px;
            color: var(--dl-color-logocolors-origred);
            right: 0px;
            margin: auto;
            position: absolute;
            font-size: 32px;
            text-align: center;
            font-family: Industry Inc Base;
            font-weight: 700;
            line-height: 1.15;
            text-transform: uppercase;
            text-decoration: none;
          }
          .update-info-image1 {
            top: 70px;
            right: var(--dl-space-space-sixunits);
            width: 100px;
            position: absolute;
            object-fit: cover;
          }
          .update-info-image2 {
            top: 70px;
            left: var(--dl-space-space-sixunits);
            width: 100px;
            position: absolute;
            object-fit: cover;
          }
          .update-info-text03 {
            top: 115px;
            left: 0px;
            color: var(--dl-color-logocolors-bluedark);
            right: 0px;
            margin: auto;
            position: absolute;
            font-size: 19px;
            text-align: center;
            font-family: Industry Light;
            font-weight: 700;
            text-transform: none;
            text-decoration: none;
          }
          .update-info-text04 {
            top: 240px;
            left: 0px;
            color: var(--dl-color-logocolors-bluedark);
            right: 0px;
            margin: auto;
            position: absolute;
            font-size: 19px;
            text-align: center;
            font-family: Industry Light;
            font-weight: 700;
            text-transform: none;
            text-decoration: none;
          }
          .update-info-link5 {
            left: 0px;
            color: var(--dl-color-logocolors-origred);
            right: 0px;
            width: 323px;
            bottom: var(--dl-space-space-threeunits);
            height: 31px;
            margin: auto;
            position: absolute;
            align-self: center;
            text-align: center;
            padding-top: 3px;
            border-color: var(--dl-color-logocolors-origred);
            border-width: 2px;
            padding-left: auto;
            border-radius: var(--dl-radius-radius-radius8);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: var(--dl-color-gray-white);
          }
          .update-info-link5:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-logocolors-origred);
          }
          .update-info-textinput {
            top: 294px;
            left: 0px;
            color: var(--dl-color-logocolors-bluedark);
            right: 0px;
            width: 156px;
            height: 26px;
            margin: auto;
            position: absolute;
            font-size: 17px;
            text-align: center;
            margin-left: auto;
            padding-top: 4px;
            border-color: var(--dl-color-logocolors-bluedark);
            padding-left: 40px;
          }
          .update-info-container05 {
            top: 176px;
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: auto;
            height: auto;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: flex-start;
            justify-content: center;
          }
          .update-info-container06 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .update-info-container07 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .update-info-text05 {
            color: var(--dl-color-logocolors-bluedark);
            font-size: 21px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .update-info-text06 {
            font-size: 19px;
          }
          .update-info-textinput1 {
            color: var(--dl-color-logocolors-bluedark);
            height: 28px;
            font-size: 17px;
            border-color: var(--dl-color-logocolors-bluedark);
            margin-right: var(--dl-space-space-threeunits);
            padding-bottom: 12px;
          }
          .update-info-text08 {
            color: var(--dl-color-logocolors-bluedark);
            font-size: 19px;
            margin-right: var(--dl-space-space-unit);
          }
          .update-info-textinput2 {
            color: var(--dl-color-logocolors-bluedark);
            height: 28px;
            font-size: 17px;
            border-color: var(--dl-color-logocolors-bluedark);
            margin-right: 0px;
            padding-bottom: 10px;
          }
          .update-info-container08 {
            width: 907px;
            height: 441px;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            border-color: var(--dl-color-logocolors-yellow);
            border-style: solid;
            border-width: 4px;
            border-radius: var(--dl-radius-radius-r75);
            flex-direction: column;
            justify-content: flex-end;
            background-color: var(--dl-color-gray-white);
          }
          .update-info-text09 {
            top: var(--dl-space-space-threeunits);
            left: 0px;
            color: var(--dl-color-logocolors-origred);
            right: 0px;
            margin: auto;
            position: absolute;
            font-size: 32px;
            text-align: center;
            font-family: Industry Inc Base;
            font-weight: 700;
            line-height: 1.15;
            text-transform: uppercase;
            text-decoration: none;
          }
          .update-info-image3 {
            top: 70px;
            right: var(--dl-space-space-sixunits);
            width: 100px;
            position: absolute;
            object-fit: cover;
          }
          .update-info-image4 {
            top: 70px;
            left: var(--dl-space-space-sixunits);
            width: 100px;
            position: absolute;
            object-fit: cover;
          }
          .update-info-text12 {
            top: 116px;
            left: 0px;
            color: var(--dl-color-logocolors-bluedark);
            right: 0px;
            margin: auto;
            position: absolute;
            font-size: 19px;
            text-align: center;
            font-family: Industry Light;
            font-weight: 700;
            text-transform: none;
            text-decoration: none;
          }
          .update-info-text13 {
            top: 238px;
            left: 0px;
            color: var(--dl-color-logocolors-bluedark);
            right: 0px;
            margin: auto;
            position: absolute;
            font-size: 19px;
            text-align: center;
            font-family: Industry Light;
            font-weight: 700;
            text-transform: none;
            text-decoration: none;
          }
          .update-info-link6 {
            left: 0px;
            color: var(--dl-color-logocolors-origred);
            right: 0px;
            width: 323px;
            bottom: var(--dl-space-space-threeunits);
            height: 31px;
            margin: auto;
            position: absolute;
            align-self: center;
            text-align: center;
            transition: 0.3s;
            padding-top: 3px;
            border-color: var(--dl-color-logocolors-origred);
            border-width: 2px;
            padding-left: auto;
            border-radius: var(--dl-radius-radius-radius8);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: var(--dl-color-gray-white);
          }
          .update-info-link6:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-logocolors-origred);
          }
          .update-info-container09 {
            top: 170px;
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: auto;
            height: auto;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: flex-start;
            justify-content: center;
          }
          .update-info-select {
            width: 146px;
            border-color: var(--dl-color-logocolors-bluedark);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            padding-bottom: 3px;
          }
          .update-info-textinput3 {
            color: var(--dl-color-logocolors-bluedark);
            height: 25px;
            font-size: 17px;
            margin-left: var(--dl-space-space-twounits);
            padding-top: 5px;
            border-color: var(--dl-color-logocolors-bluedark);
          }
          .update-info-select1 {
            top: 288px;
            left: 292px;
            position: absolute;
            border-color: var(--dl-color-logocolors-bluedark);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
          }
          .update-info-container10 {
            width: 907px;
            height: 441px;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            border-color: var(--dl-color-logocolors-yellow);
            border-style: solid;
            border-width: 4px;
            border-radius: var(--dl-radius-radius-r75);
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .update-info-text14 {
            top: var(--dl-space-space-threeunits);
            left: 0px;
            color: var(--dl-color-logocolors-origred);
            right: 0px;
            margin: auto;
            position: absolute;
            font-size: 32px;
            text-align: center;
            font-family: Industry Inc Base;
            font-weight: 700;
            line-height: 1.15;
            text-transform: uppercase;
            text-decoration: none;
          }
          .update-info-image5 {
            top: 70px;
            right: var(--dl-space-space-sixunits);
            width: 100px;
            position: absolute;
            object-fit: cover;
          }
          .update-info-image6 {
            top: 70px;
            left: var(--dl-space-space-sixunits);
            width: 100px;
            position: absolute;
            object-fit: cover;
          }
          .update-info-text17 {
            top: 116px;
            left: 0px;
            color: var(--dl-color-logocolors-bluedark);
            right: 0px;
            margin: auto;
            position: absolute;
            font-size: 19px;
            text-align: center;
            font-family: Industry Light;
            font-weight: 700;
            text-transform: none;
            text-decoration: none;
          }
          .update-info-link7 {
            left: 0px;
            color: var(--dl-color-logocolors-origred);
            right: 0px;
            width: 323px;
            bottom: var(--dl-space-space-threeunits);
            height: 31px;
            margin: auto;
            position: absolute;
            align-self: center;
            text-align: center;
            transition: 0.3s;
            padding-top: 3px;
            border-color: var(--dl-color-logocolors-origred);
            border-width: 2px;
            padding-left: auto;
            border-radius: var(--dl-radius-radius-radius8);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: var(--dl-color-gray-white);
          }
          .update-info-link7:hover {
            color: var(--dl-color-gray-white);
            background-color: var(--dl-color-logocolors-origred);
          }
          .update-info-container11 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            margin-top: var(--dl-space-space-threeunits);
            align-items: center;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
          }
          .update-info-text18 {
            color: var(--dl-color-logocolors-bluedark);
            font-size: 19px;
            text-align: center;
            padding-right: var(--dl-space-space-unit);
          }
          .update-info-textinput4 {
            color: var(--dl-color-logocolors-bluedark);
            height: 27px;
            border-color: var(--dl-color-logocolors-bluedark);
          }
          .update-info-container12 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
          }
          .update-info-text19 {
            color: var(--dl-color-logocolors-bluedark);
            font-size: 19px;
            text-align: center;
            padding-right: var(--dl-space-space-unit);
          }
          .update-info-textinput5 {
            color: var(--dl-color-logocolors-bluedark);
            height: 27px;
            border-color: var(--dl-color-logocolors-bluedark);
          }
          .update-info-container13 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .update-info-text20 {
            color: var(--dl-color-logocolors-bluedark);
            font-size: 19px;
            text-align: center;
            padding-right: var(--dl-space-space-unit);
          }
          .update-info-textinput6 {
            color: var(--dl-color-logocolors-bluedark);
            height: 27px;
            border-color: var(--dl-color-logocolors-bluedark);
          }
          .update-info-footer {
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
          .update-info-image7 {
            width: var(--dl-size-size-large);
            object-fit: cover;
          }
          @media (max-width: 767px) {
            .update-info-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .update-info-text21 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .update-info-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .update-info-text21 {
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

export default UpdateInfo
