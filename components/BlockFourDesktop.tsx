import React from 'react'
import { StaticText } from './StaticText'
import { Subtitle } from './Subtitle'

interface BlockFourDesktopProps {}

export const BlockFourDesktop: React.FC<BlockFourDesktopProps> = ({}) => {
  return (
    <div className="DesktopFour">
      <img src="/static/rent-reporting.gif" />
      <div className="localright">
        <StaticText lineOne="Build credit with rent" lineTwo="" />
        <Subtitle text="Report up to 24 months of past rent payments to instantly increase your score." />
      </div>

      <style jsx>{`
        .DesktopFour {
          padding-top: -5vh;
          display: flex;
          background: #f9f8ff;
          max-width: 100vw;
          min-width: 800px;
          margin-left: -100px;
          align-items: center;
          font-family: 'Gilroy-Medium';
          margin-right: -25vw;
          height: 500px;
        }
        img {
          transform: scale(0.5);
          float: left;
          margin-right: -25vw;
          margin-left: -30vw;
        }
        .localright {
          display: flex;
          flex-direction: column;
          width: 30vw;
          margin: auto;
        }
        @media only screen and (min-width: 900px) {
          img {
            margin-left: -15vw;
          }
        }
        @media only screen and (min-width: 1200px) {
          img {
            margin-left: 0vw;
          }
        }
      `}</style>
    </div>
  )
}
