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
          <img src="/static/featured-in/creditcardscom.png" />
        </li>

        <li>
          <img src="/static/featured-in/TC.png" />
        </li>
        <li>
          <img src="/static/featured-in/HuffPost.png" />
        </li>
        <li>
          <img src="/static/featured-in/business-insider.svg" />
        </li>
        <li>
          <img src="/static/featured-in/businessdot.png" />
        </li>
        <style jsx>{`
          ul {
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          .break-margin {
            width: 110vw;
            margin-left: -15vw;
            background: #f9f8fc;
            height: 177px;
          }
          li {
            list-style: none;
          }
          @media only screen and (max-width: 600px) {
            .break-margin {
              margin: 0;
              padding: 0;
              padding-top: 50px;
              margin-top: 10px;
              height: fit-content;
              padding-bottom: 50px;
              padding-right: 50px;
            }
            ul {
              flex-wrap: wrap;
              flex-direction: row;
              width: 100vw;
            }
            li {
              height: 50%;
              list-style: none;
              margin: 10px;
            }
            li > img {
              width: fit-content;
            }
          }
        `}</style>
      </ul>
    </div>
  )
}
