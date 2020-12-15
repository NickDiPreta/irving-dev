import React from 'react'
import { Logo } from '../Logo'
import Link from 'next/link'

interface MobileNavProps {}

export const MobileNav: React.FC<MobileNavProps> = ({}) => {
  return (
    <nav>
      <div className="nav-left">
        <div className="nav-logo">
          <a href="/">
            <Logo />
          </a>
        </div>
      </div>
      <div className="nav-right">
        <ul>
          <li className="coolhover">
            <Link href="/about">
              <span className="black-link">About</span>
            </Link>
          </li>
          <li>
            <Link href="/frequently-asked-questions">
              <span className="black-link">FAQ</span>
            </Link>
          </li>
          {/* <li>
            <Link href="/signup">
              <button>Get Started</button>
            </Link>
          </li> */}
        </ul>
      </div>
      <style jsx>
        {`
          .black-link {
            color: black;
          }
          nav {
            width: 80vw;
            margin-top: 1vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: Gilroy-Regular;
          }
          .nav-left {
            display: flex;
            align-items: center;
            width: 50vw;
            height: 10vw;
          }
          .nav-right {
            display: flex;
            justify-content: center;
            font-size: 1.5em;
            width: 40vw;
            button {
              font-size: 0.8em;
              height: 2.4em;
            }
          }

          .nav-logo {
            width: 15vw;
            text-align: justify;
          }
          li {
            list-style: none;
            cursor: pointer;
          }
          button {
            color: white;
            background-color: #907cff;
            border-style: none;
            border-radius: 5px;

            height: 39px;
            font-size: 1em;
            cursor: pointer;
          }

          ul {
            width: 50vw;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          @media only screen and (max-width: 600px) {
            nav {
              margin-left: 5vw;
              width: 90vw;
              margin-top: 2vh;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .nav-right {
              width: 80vw;
              justify-content: space-between;
            }
            ul {
              font-size: 0.8em;
              width: 60vw;
            }
            button {
              cursor: pointer;
            }
            img {
              cursor: pointer;
            }
          }
        `}
      </style>
    </nav>
  )
}
