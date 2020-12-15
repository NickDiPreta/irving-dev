/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react'
import { StaticText } from './StaticText'
import { Subtitle } from './Subtitle'

interface BlockFourMobileProps {}

export const BlockFourMobile: React.FC<BlockFourMobileProps> = ({}) => {
  return (
    <div className="blockFourMobile">
      <div className="contain">
        <div className="fourVert">
          <StaticText
            align="center"
            lineOne="Build credit with rent"
            lineTwo=""
          />
          <Subtitle
            alignment="center"
            text="Report up to 24 months of past rent payments to instantly increase your score."
          />
        </div>

        <img className="rent" src="/static/rent-reporting.gif" />
      </div>

      <style jsx>{`
        @media only screen and (max-width: 600px) {
          .blockFourMobile {
            display: flex;
          }
          img {
            height: 350px;
            width: 350px;
            margin: auto;
          }
          .fourVert {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: 'Gilroy-Regular';
            margin-top: 30px;
          }
          .rent {
          }
          .blockFourMobile {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #f9f8ff;
          }
          p {
          }
          .contain {
            margin: auto;
          }
        }
      `}</style>
    </div>
  )
}
