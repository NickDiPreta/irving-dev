import React from 'react'

interface SubtitleProps {
  text: string
  alignment: string
}

export const Subtitle: React.FC<SubtitleProps> = ({ text, alignment }) => {
  return (
    <p>
      {text}
      <style jsx>{`
        p {
          font-family: 'Gilroy-Regular', sans-serif;
          width: 100%;
          font-weight: normal;
          color: #212121;
          float: left;

          font-size: 16px;
          line-height: 27px;
          width: 291px;
        }
        @media only screen and (max-width: 600px) {
          p {
            margin-top: 13px;
            font-size: 14px;
            width: 261px;
            text-align: ${alignment};
            line-height: 22.4px;
          }
        }
      `}</style>
    </p>
  )
}
