import Link from 'next/link'
import React from 'react'
import { Logo } from './Logo'

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <Logo />
      </div>
      <div className="footer-links">
        <ul>
          Resources
          <Link href="/privacy-policy">
            <span>Privacy Policy</span>
          </Link>
          <Link href="/terms-of-service">
            <span>Terms of Service</span>
          </Link>
          <Link href="/press">
            <span>Press</span>
          </Link>
        </ul>
        <ul>
          Company
          <Link href="/about">
            <span>About</span>
          </Link>
          <Link href="/frequently-asked-questions">
            <span>FAQ</span>
          </Link>
        </ul>
        <ul className="social-icons">
          Social
          <Link href="https://www.facebook.com/perchcredit">
            <img src="/static/social-icons/facebook-icon.png" />
          </Link>
          <Link href="https://twitter.com/perchcredit/perchcredit">
            <img src="/static/social-icons/twitter.png" />
          </Link>
          <Link href="https://www.linkedin.com/company/perch-credit">
            <img src="/static/social-icons/linkedin.png" />
          </Link>
          <Link href="https://www.instagram.com/perch.credit/">
            <img src="/static/social-icons/instagram.png" />
          </Link>
        </ul>
      </div>
      <style jsx>{`
        .footer-container {
          height: 366px;
          display: flex;
          background: #f9f8ff;
          width: 100vw;
          margin-left: -100px;
          padding-left: 100px;
          padding-right: 100px;
          padding-top: 100px;
          justify-content: space-between;
        }
        .footer-logo {
          height: 100px;
          width: 100px;
        }
        ul {
          display: flex;
          flex-direction: column;
        }
        .footer-links {
          display: flex;
          width: 50%;
          justify-content: space-between;
        }
        .footer-links > ul {
          line-height: 30px;
        }
        .footer-links > ul > span {
          font-family: Gilroy-Regular;
        }
        .footer-links > ul > img {
          margin-top: 10px;
        }
        .social-icons {
          img {
            height: 19px;
            width: 19px;
          }
        }
        @media only screen and (max-width: 600px) {
          .footer-container {
            width: 100%;
            position: absolute;
            height: 40vh;
            padding: 0px;
          }
          .footer-links > ul {
            padding-top: 20px;
            height: 20%;
            font-size: 0.4em;
            line-height: 15px;
          }
          .footer-links {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-logo {
            display: none;
          }
          .footer-links > ul > img {
            margin: 0px;
          }
          .social-icons {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            height: fit-content;
          }
        }
      `}</style>
    </div>
  )
}
