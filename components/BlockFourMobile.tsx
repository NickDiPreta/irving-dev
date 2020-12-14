import React from 'react'
import { StaticText } from './StaticText'
import { Subtitle } from './Subtitle'

interface BlockFourMobileProps {}

export const BlockFourMobile: React.FC<BlockFourMobileProps> = ({}) => {
  return (
    <div className="blockFourMobile">
      <div className="contain">
        <div className="fourVert">
          <StaticText lineOne="Build credit with rent" lineTwo="" />
          <Subtitle text="Report up to 24 months of past rent payments to instantly increase your score." />
        </div>

        <img className="rent" src="/static/rent-reporting.gif" />
      </div>

      <style jsx>{`
        @media only screen and (max-width: 600px) {
          .blockFourMobile {
            display: flex;
          }
          img {
            height: 300px;
            width: 300px;
            margin: auto;
          }
          .fourVert {
            text-align: center;
            transform: scale(0.7);
          }
          .rent {
            margin-left: 10vw;
          }
          .blockFour-mobile {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #f9f8ff;
            padding-bottom: 150px;
          }
          p {
            text-align: center;
          }
        }
      `}</style>
    </div>
  )
}
