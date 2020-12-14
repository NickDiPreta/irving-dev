import React from 'react'

interface TwoLineHeaderProps {
  fontSize: number
  lineOne: string
  lineTwo: string
  containerHeight?: number
  containerWidth?: number | string
}

export const TwoLineHeader: React.FC<TwoLineHeaderProps> = ({
  fontSize,
  lineOne,
  lineTwo,
  containerHeight,
  containerWidth,
}) => {
  return (
    <div className="TwoLineHeader-container">
      <p>{lineOne}</p>
      <p>{lineTwo}</p>
      <style jsx>{`
        .TwoLineHeader-container {
          height: ${containerHeight}px;
          width: ${containerWidth}px;
        }
        p {
          font-size: ${fontSize}px;
          margin: 0;
        }
        @media only screen and (max-width: 600px) {
          .TwoLineHeader-container {
            width: 100vw;
          }
          p {
            font-size: ${fontSize * 0.7}px;
          }
        }
      `}</style>
    </div>
  )
}
