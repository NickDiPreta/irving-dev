import React from 'react'

interface SubtitleProps {
  text: string
}

export const Subtitle: React.FC<SubtitleProps> = ({ text }) => {
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
          margin-top: 2rem;
          margin-bottom: 2rem;
          font-size: 22px;
          line-height: 36px;
        }
      `}</style>
    </p>
  )
}
