import Link from 'next/link'
import React from 'react'
import { Logo } from './Logo'

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav>
      <div className="left">
        <a href="/">
          <Logo />
        </a>
      </div>
      <div className="right">
        <span>
          <Link href="/about">About</Link>
        </span>
        <span>
          <Link href="/faq">FAQ</Link>
        </span>
        <Link href="/signup">
          <button>Get Started</button>
        </Link>
      </div>
      <style jsx>{`
        nav {
          height: 112px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: black;
          font-size: 16px;
          font-weight: 500;
        }
        span {
          color: black;
        }
        button {
          color: black;
          background-color: #907cff;
          border-style: none;
          border-radius: 5px;
          color: white;
          height: 39px;
          width: 131px;
          font-size: 16px;
        }
        .left {
          width: 50%;
        }
        .right {
          display: flex;
          width: 50%;
          justify-content: space-around;
          align-items: center;
        }
        @media only screen and (max-width: 600px) {
          nav {
            position: absolute;
            top: 0;

            width: 50vw;
          }
        }
      `}</style>
    </nav>
  )
}
