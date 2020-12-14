import React from 'react'

interface CallToActionProps {
  text: string
}

export const CallToAction: React.FC<CallToActionProps> = ({ text }) => {
  return (
    <div>
      <style jsx>{`
        a {
          color: #907cff;
          width: 100vw;
          font-size: 2.6rem;
          font-family: 'Gilroy-Bold', sans-serif;
          float: left;
          margin-top: 3rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
        }
        img {
          height: 100%;
          margin-left: 10vw;
        }
        @media only screen and (max-width: 767px) {
          a {
            width: 80%;
            font-size: 1.8rem;
          }
          img {
            height: 1.6rem;
            margin-left: 10vw;
          }
        }
      `}</style>
      <a
        className="typeform-share link"
        href="https://form.typeform.com/to/rkH7jDUt"
        data-mode="popup"
        target="_blank"
      >
        <p>{text}</p>
        <img className="arrow" src="/static/right-arrow.png" />
      </a>
      <script type="text/javascript" src="/static/js/form.js"></script>
    </div>
  )
}
