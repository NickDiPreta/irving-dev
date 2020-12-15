import Link from 'next/link'
import React from 'react'
import { InvestorBadge } from './InvestorBadge'

interface InvestorsBlockProps {}

export const InvestorsBlock: React.FC<InvestorsBlockProps> = ({}) => {
  return (
    <div className="break-margin">
      <p className="investor-head">Our Investors</p>
      <p className="investor-body">
        We're backed by some of the world's most notable investors.
        <span>
          <br />
          <br />
          <span className="see-more">
            <Link href="/about">See more </Link>
          </span>
        </span>
      </p>
      <ul>
        <InvestorBadge source="/static/investor-icons/y-combinator.png" />
        <InvestorBadge source="/static/investor-icons/Citi.png" />
        <InvestorBadge source="/static/investor-icons/softbank.png" />
        <InvestorBadge source="/static/investor-icons/sequoia.png" />
        <InvestorBadge source="/static/investor-icons/paypal.png" />
        <InvestorBadge source="/static/investor-icons/mvp_logo.png" />
      </ul>
      <style jsx>{`
        .investor-head {
          font-size: 28px;
          font-family: 'Gilroy-Medium';
          text-align: center;
        }
        a {
          text-decoration: none;
        }
        .investor-body {
          font-family: 'Gilroy-Regular';
          font-size: 16px;
          text-align: center;
          margin-top: -15px;
        }
        ul {
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .break-margin {
          display: flex;
          flex-direction: column;
          background-color: white;
          height: 290px;
          margin-top: 40px;
          margin-left: -100px;
          width: 100vw;
        }
        .see-more {
          font-family: 'Gilroy-Bold';
          color: black;
        }
        @media only screen and (max-width: 600px) {
          .investor-head {
            font-size: 24px;
          }
          .break-margin {
            height: 400px;
            margin: auto;
            text-align: center;
            background-color: white;
            margin-top: 60px;
            padding-bottom: 60px;
          }
          ul {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap-reverse;
            margin-top: 30px;
          }

          .investor-body {
            margin: auto;
            width: 261px;
            line-height: 27px;
          }
        }
      `}</style>
    </div>
  )
}
