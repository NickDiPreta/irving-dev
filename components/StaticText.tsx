import React from 'react'

interface StaticTextProps {
  lineOne: string
  lineTwo: string
  align: string
}

export const StaticText: React.FC<StaticTextProps> = ({
  lineOne,
  lineTwo,
  align,
}) => {
  return (
    <p>
      {lineOne}
      <br />
      {lineTwo}
      <style jsx>{`
        p {
          color: #212121;
          font-size: 34px;
          font-weight: 600;
        }
        @media only screen and (max-width: 767px) {
          p {
            text-align: ${align};
            font-size: 24px;
            width: 261px;
            font-weight: 600;
          }
        }
      `}</style>
    </p>
  )
}
