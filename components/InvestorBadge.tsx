import React from 'react'

interface InvestorBadgeProps {
  source: string
}

export const InvestorBadge: React.FC<InvestorBadgeProps> = ({ source }) => {
  return (
    <>
      <img src={source} />
      <style jsx>{`
        img {
          margin: 10px;
          max-width: 25%;
        }
        .break-margin {
        }
      `}</style>
    </>
  )
}
