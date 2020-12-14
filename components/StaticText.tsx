import React from 'react'

interface StaticTextProps {
  lineOne: string
  lineTwo: string
}

export const StaticText: React.FC<StaticTextProps> = ({ lineOne, lineTwo }) => {
  return (
    <p>
      {lineOne}
      <br />
      {lineTwo}
      <style jsx>{`
        p {
          color: #212121;
          font-size: 42px;
        }
        @media only screen and (max-width: 767px) {
          p {
          }
        }
      `}</style>
    </p>
  )
}
