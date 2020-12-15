import React from 'react'

interface AdjectiveCardProps {
  source: string
  title: string
  subtitle: string
}

export const AdjectiveCard: React.FC<AdjectiveCardProps> = ({
  source,
  title,
  subtitle,
}) => {
  return (
    <div>
      <img src={source} />
      <p className="adjective">{title}</p>
      <p>{subtitle}</p>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;

          height: 158px;
          width: 209px;
          color: #212121;
          margin-bottom: 40px;
        }
        p {
          margin: 0px;

          text-align: center;
          font-family: 'Gilroy-Regular';
          line-height: 24px;
          font-size: 14px;
          height: 48px;
        }
        .adjective {
          height: 24px;
          text-align: center;
          font-family: 'Gilroy-Bold';
        }
      `}</style>
    </div>
  )
}
