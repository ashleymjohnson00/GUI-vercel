import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const NewUser = (props) => {
  return (
    <>
      <div className="new-user-container">
        <Head>
          <title>New-User - BAJA Security</title>
          <meta property="og:title" content="New-User - BAJA Security" />
        </Head>
        <div className="new-user-container1">
          <img
            alt="image"
            src="/playground_assets/asset%202%403x-700h.png"
            className="new-user-image"
          />
          <span className="new-user-text">Create Username</span>
          <span className="new-user-text1">Retype Password</span>
          <span className="new-user-text2">Create Password</span>
          <input
            type="text"
            id="newUsername"
            name="username"
            required
            placeholder="username"
            autoComplete="username"
            className="new-user-textinput input"
          />
          <input
            type="password"
            id="passResubmit"
            name="password"
            maxlength="20"
            minlength="6"
            placeholder="******************"
            autoComplete="new-password"
            className="new-user-textinput1 input"
          />
          <input
            type="password"
            id="newUserpassword"
            name="password"
            required
            maxlength="20"
            minlength="6"
            placeholder="******************"
            autoComplete="new-password"
            className="new-user-textinput2 input"
          />
          <Link href="/landing" id="Navigation" name="newUsersubmit">
            <a className="new-user-link">Submit</a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .new-user-container {
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
          .new-user-container1 {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 540px;
            bottom: 0px;
            height: 657px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: var(--dl-color-logocolors-yellow);
            border-style: solid;
            border-width: 4px;
            border-radius: var(--dl-radius-radius-r75);
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .new-user-image {
            top: var(--dl-space-space-fourunits);
            left: 0px;
            right: 0px;
            width: var(--dl-size-size-xxlarge);
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .new-user-text {
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
          .new-user-text1 {
            top: 404px;
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
          .new-user-text2 {
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
          .new-user-textinput {
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
          .new-user-textinput1 {
            top: 447px;
            left: 153px;
            color: var(--dl-color-logocolors-bluedark);
            width: 230px;
            height: 32px;
            margin: auto;
            position: absolute;
            border-color: var(--dl-color-logocolors-lightblue3);
          }
          .new-user-textinput2 {
            top: 334px;
            left: 153px;
            color: var(--dl-color-logocolors-bluedark);
            width: 230px;
            height: 32px;
            margin: auto;
            position: absolute;
            border-color: var(--dl-color-logocolors-lightblue3);
          }
          .new-user-link {
            top: 504px;
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
          .new-user-link:hover {
            color: var(--dl-color-logocolors-yellow);
            background-color: var(--dl-color-gray-white);
          }
        `}
      </style>
    </>
  )
}

export default NewUser
