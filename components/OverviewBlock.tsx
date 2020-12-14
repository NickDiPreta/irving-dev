import React from 'react'

interface OverviewBlockProps {
  image: string
  text: string
  subtext: string
}

export const OverviewBlock: React.FC<OverviewBlockProps> = ({
  image,
  text,
  subtext,
}) => {
  return (
    <div className="block-wrapper">
      <div className="mobile-wrapper">
        <p>
          <img src={image} />
        </p>
        <p className="block-text">{text}</p>
      </div>
      <p className="block-subtext">{subtext}</p>
      <style jsx>{`
        div {
          height: 304px;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: baseline;
          color: #212121;
          word-wrap: break-word;
          margin: auto;
        }
        p {
          width: 257px;
          height: 3vh;
        }
        .block-text {
          font-family: 'Gilroy-Regular';
          font-size: 18px;
          font-weight: 600;
          word-wrap: break-word;
        }

        .block-subtext {
          font-family: 'Gilroy-Regular';
          font-size: 16px;
          font-weight: 400;
          margin-left: 15vw;
          word-wrap: break-word;
        }
        @media only screen and (min-width: 600px) and (max-width: 700px) {
          .block-text {
            font-size: 1.2em;
          }
        }

        @media only screen and (max-width: 600px) {
          .block-wrapper {
            width: 100vw;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          }
          .block-subtext {
            word-wrap: break-word;
          }
          .mobile-wrapper {
            margin-bottom: -1vh;
          }
        }
      `}</style>
    </div>
  )
}
