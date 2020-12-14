import React from 'react'
import { TextBlockRight } from '../shared/TextBlockRight'
import { TwoLineHeader } from '../shared/TwoLineHeader'

interface HeaderTextBlockProps {
  lineOne: string
  lineTwo: string
  text: Array<string>
}

export const HeaderTextBlock: React.FC<HeaderTextBlockProps> = ({
  lineOne,
  lineTwo,
  text,
}) => {
  return (
    <div className="HTB-wrapper">
      <div className="left-third">
        <TwoLineHeader
          fontSize={28}
          lineOne={lineOne}
          lineTwo={lineTwo}
          containerHeight={50}
        />
      </div>
      <div className="right-two-thirds">
        <TextBlockRight
          text={text}
          fontSize={16}
          fontWeight={400}
          fontFamily="Gilroy-Regular"
        />
      </div>
      <style jsx>{`
        .HTB-wrapper {
          display: flex;
          margin-bottom: 75px;
        }
        .left-third {
          width: 33%;
          margin-left: 50px;
          padding-top: 15px;
        }
        .right-two-thirds {
          width: 60%;
          margin-right: 50px;
        }
        @media only screen and (max-width: 600px) {
          .left-third {
            margin: 0;
            margin-bottom: 20px;
            max-width: 10vw;
          }
          .HTB-wrapper {
          }
          .right-two-thirds {
            width: 80vw;
            margin: auto;
            margin-left: 20px;
          }
        }
      `}</style>
    </div>
  )
}
