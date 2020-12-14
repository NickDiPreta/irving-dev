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
          <span className="see-more"> See more</span>
        </span>
      </p>
      <ul>
        <InvestorBadge source="/static/investor-icons/y-combinator.png" />
        <InvestorBadge source="/static/investor-icons/Citi.png" />
        <InvestorBadge source="/static/investor-icons/softbank.png" />
        <InvestorBadge source="/static/investor-icons/sequoia.png" />
        <InvestorBadge source="/static/investor-icons/paypal.png" />
        <InvestorBadge source="/static/investor-icons/KleinerPerkins.png" />
      </ul>
      <style jsx>{`
        .investor-head {
          font-size: 28px;
          font-family: 'Gilroy-Medium';
        }
        .investor-body {
          font-family: 'Gilroy-Regular';
          font-size: 16px;
        }
        ul {
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .break-margin {
          display: flex;
          flex-direction: column;
        }
        .see-more {
          font-family: 'Gilroy-Bold';
        }
        @media only screen and (max-width: 600px) {
          .break-margin {
            margin: auto;
            text-align: center;
          }
          ul {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap-reverse;
          }

          .investor-body {
            width: 80%;
            margin: auto;
          }
        }
      `}</style>
    </div>
  )
}
