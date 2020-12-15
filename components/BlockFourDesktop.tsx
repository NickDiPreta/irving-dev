import React from 'react'
import { StaticText } from './StaticText'
import { Subtitle } from './Subtitle'

interface BlockFourDesktopProps {}

export const BlockFourDesktop: React.FC<BlockFourDesktopProps> = ({}) => {
  return (
    <div className="DesktopFour">
      <img src="/static/rent-reporting.gif" />
      <div className="localright">
        <Subtitle
          alignment="center"
          text="Report up to 24 months of past rent payments to instantly increase your score."
        />
        <StaticText
          align="center"
          lineOne="Build credit with rent"
          lineTwo=""
        />
      </div>

      <style jsx>{`
        .DesktopFour {
          padding-top: -5vh;
          display: flex;
          background: #f9f8ff;
          align-items: center;
          justify-content: space-evenly;
          font-family: 'Gilroy-Medium';
          height: 705px;
          margin-right: 100px;
        }
        img {
          height: 300px;
          width: 300px;
          background: black;
          border-radius: 10px;
          margin-right: 150px;
        }
        .localright {
          display: flex;
          flex-direction: column-reverse;
          margin-right: 100px;
        }
        @media only screen and (min-width: 900px) {
          img {
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
