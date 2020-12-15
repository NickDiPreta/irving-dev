import React from 'react'

interface HomePageTitleProps {}

export const HomePageTitle: React.FC<HomePageTitleProps> = ({}) => {
  return (
    <div className="title">
      Build credit with
      <style jsx>
        {`
          .title {
            font-family: 'Gilroy-Regular';
            font-weight: 700;
            font-size: 42px;
            line-height: 35px;
            width: 351px;
            color: #212121;
          }
          @media only screen and (max-width: 600px) {
            .title {
              margin-top: 36px;
              font-size: 24px;
              font-weight: 600;
            }
          }
        `}
      </style>
    </div>
  )
}
