import React, { useState, useEffect } from 'react'
import { Logo } from '../Logo'
import Link from 'next/link'

interface MobileNavProps {
  handleClick: () => void

  setButton: (value: React.SetStateAction<boolean>) => void
}

export const HomepageNav: React.FC<MobileNavProps> = ({
  handleClick,
  setButton,
}) => {
  const [lastScroll, setLastScroll] = useState(-5)
  const [navbar, setNavbar] = useState(false)

  // window.addEventListener('resize', showButton)

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  })

  const changeBackground = () => {
    if (scrollY > lastScroll && scrollY > 50) {
      setNavbar(true)
      setButton(true)
    }
    if (scrollY < lastScroll) {
      setNavbar(false)
      setButton(false)
    }
    setLastScroll(scrollY)
  }

  return (
    <>
      <nav className={navbar ? 'active' : ''}>
        <div className="hamburger-container">
          <div className="nav-left">
            <div className="nav-logo">
              <a href="/">
                <Logo />
              </a>
            </div>
          </div>
          <div className="burger-icon" onClick={handleClick}>
            <img src="/static/burger-menu.png" />
          </div>
        </div>

        <div className="nav-right">
          <ul>
            <li>
              <Link href="/about">
                <span className="white-link">About</span>
              </Link>
            </li>
            <li>
              <Link href="/faq">
                <span className="white-link">FAQ</span>
              </Link>
            </li>
            <li>
              <Link href="/signup">
                <button>Get Started</button>
              </Link>
            </li>
          </ul>
        </div>

        <style jsx>
          {`
            @media only screen and (min-width: 600px) {
              ul {
                font-size: 0.8em;
                width: 60vw;
              }
              .burger-icon {
                display: none;
              }

              nav {
                width: 100vw;
                margin-top: 1vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                font-family: Gilroy-Regular;
                z-index: 2000;
              }
              .nav-left {
                display: flex;
                align-items: center;
                width: 50vw;
                height: 10vw;
              }
              .nav-right {
                display: none;
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
                margin-left: 2vw;
              }
              button {
                background-color: #907cff;
                border-style: none;
                border: 1px solid white;
                border-radius: 5px;
                color: white;
                height: 39px;
                font-size: 1em;
                cursor: pointer;
                padding-left: 20px;
                padding-right: 20px;
              }

              ul {
                width: 50vw;
                display: flex;
                align-items: center;
                justify-content: flex-end;
              }
            }
            @media only screen and (max-width: 600px) {
              .dropdown {
                width: 100vw;
                z-index: 2000;
              }
              nav {
                width: 110vw;
                background: white;
                height: 7.5vh;
                display: flex;
                align-items: center;
                box-shadow: 0px 2px 5px #e2e2e5;
                position: fixed;
                z-index: 2000;
              }
              nav.active {
                display: none;
              }
              .hamburger-container {
                padding: 2vh;
                width: 100vw;
                display: flex;
                justify-content: space-between;
                align-items: center;
              }
              .hamburger {
              }
              .white-link {
                color: white;
              }
              .nav-logo {
                width: 15vw;
                text-align: justify;
              }
              ul {
                display: none;
              }
            }
          `}
        </style>
      </nav>
    </>
  )
}
