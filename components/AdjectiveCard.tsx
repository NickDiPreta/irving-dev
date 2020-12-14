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
          margin-top: 1vh;
          display: flex;
          flex-direction: column;

          align-items: center;
          width: 50%;
          height: 200px;
          color: #212121;
          margin-bottom: 2vh;
        }
        p {
          width: 100%;
          text-align: center;
          font-family: 'Gilroy-Regular';
        }
        .adjective {
          text-align: center;
          font-family: 'Gilroy-Bold';
        }
      `}</style>
    </div>
  )
}
