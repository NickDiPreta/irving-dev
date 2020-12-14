import React from 'react'

interface ExpandedInvestorsBlockProps {}

export const ExpandedInvestorsBlock: React.FC<ExpandedInvestorsBlockProps> = ({}) => {
  return (
    <>
      <ul>
        <div>
          <img src="/static/investor-icons/y-combinator.png" />
        </div>

        <div>
          <img src="/static/investor-icons/Citi.png" />
        </div>

        <div>
          <img src="/static/investor-icons/softbank.png" />
        </div>

        <div>
          <img src="/static/investor-icons/sequoia.png" />
        </div>

        <div>
          <img src="/static/investor-icons/KleinerPerkins.png" />
        </div>

        <div>
          <img src="/static/investor-icons/GeneralCatalyst.png" />
        </div>

        <div>
          <img src="/static/investor-icons/paypal.png" />
        </div>

        <div>
          <img src="/static/investor-icons/backstage.png" />
        </div>

        <div>
          <img src="/static/investor-icons/blackstone.png" />
        </div>

        <div>
          <img src="/static/investor-icons/MetLife.png" />
        </div>

        <div>
          <img src="/static/investor-icons/VillageCapital.png" />
        </div>

        <div>
          <img src="/static/investor-icons/mvp_logo.png" />
        </div>
      </ul>
      <style jsx>{`
        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          margin-top: 80px;
        }
        div {
          width: 24%;
          text-align: center;
        }
        img {
          margin: 10px;
          max-width: 80%;
        }
      `}</style>
    </>
  )
}
