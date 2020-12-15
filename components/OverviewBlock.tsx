import React from 'react'

interface OverviewBlockProps {
  image: string
  text: string
  subtext: string
  imageHeight: number
  imageWidth: number
}

export const OverviewBlock: React.FC<OverviewBlockProps> = ({
  image,
  text,
  subtext,
  imageHeight,
  imageWidth,
}) => {
  return (
    <div className="block-wrapper">
      <div className="mobile-wrapper">
        <div className="image-spacer">
          <img src={image} />
        </div>
        <p className="block-text">{text}</p>
        <p className="block-subtext">{subtext}</p>
      </div>

      <style jsx>{`
        .block-wrapper {
          margin-right: 79px;
          height: 257px;
          width: 304px;
          margin: auto;
        }
        .mobile-wrapper {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: left;
          color: #212121;
        }
        img {
          height: ${imageHeight}px;
          width: ${imageWidth}px;
        }
        .image-spacer {
          height: 118px;
        }
        p {
          width: 245px;
          height: 92px;
          margin: 0px;
          line-height: 170%;
        }
        .block-text {
          font-family: 'Gilroy-Regular';
          font-size: 20px;
          font-weight: 600;
          word-wrap: break-word;
          height: 32px;
          width: 245px;
          margin-bottom: 17px;
        }

        .block-subtext {
          height: 92px;
          width: 245px;
          font-family: 'Gilroy-Regular';
          font-size: 16px;
          font-weight: 400;
          word-wrap: break-word;
        }

        @media only screen and (max-width: 760px) {
          .block-text {
            font-size: 14px;
          }
          .block-subtext {
            font-size: 12px;
          }
        }

        @media only screen and (max-width: 600px) {
          .block-wrapper {
            margin: auto;
            width: 288px;
            height: 160px;
            margin-left: 54px;
            margin-top: 20px;
            margin-bottom: 30px;
          }
          .mobile-wrapper {
            height: 160px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: left;
          }
          .image-spacer {
            height: ${imageHeight};
          }
          .block-text {
            height: 21px;
            width: 177px;
            font-size: 14px;
            line-height: 24px;
          }
          .block-subtext {
            height: 48px;
            width: 288px;
          }
        }
        @media only screen and (min-width: 600px) {
        }
      `}</style>
    </div>
  )
}
