import React from 'react'

interface FeaturedInProps {}

export const FeaturedIn: React.FC<FeaturedInProps> = ({}) => {
  return (
    <div className="featured-container">
      <ul className="break-margin">
        <li>
          <img src="/static/featured-in/forbes.png" />
        </li>
        <li>
          <img src="/static/featured-in/HuffPost.png" />
        </li>

        <li>
          <img src="/static/featured-in/business-insider.svg" />
        </li>

        <li>
          <img src="/static/featured-in/TC.png" />
        </li>

        <li>
          <img src="/static/featured-in/creditcardscom.png" />
        </li>

        <li>
          <img src="/static/featured-in/businessdot.png" />
        </li>
        <style jsx>{`
          ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 177px;
          }
          .break-margin {
            background: #f9f8fc;
            height: 177px;
          }
          li {
            list-style: none;
            height: 20px;
          }
          @media only screen and (max-width: 1000px) {
            .break-margin {
              height: 120px;
              padding-right: 30px;
              padding-left: 30px;
            }
            ul {
              flex-direction: row;
              flex-wrap: wrap;
            }
            li {
              list-style: none;
            }
            li > img {
              height: 19px;
            }
          }
        `}</style>
      </ul>
    </div>
  )
}
