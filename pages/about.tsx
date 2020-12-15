import React from 'react'
import { ExpandedInvestorsBlock } from '../components/about/ExpandedInvestorsBlock'
import { HeaderTextBlock } from '../components/about/HeaderTextBlock'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MobileNav } from '../components/mobile/MobileNav'
import { TwoLineHeader } from '../components/shared/TwoLineHeader'

import { main } from '../styles/home'

interface aboutProps {}

const about: React.FC<aboutProps> = ({}) => {
  return (
    <main>
      <Header title="About Perch" />
      <style jsx>{main}</style>
      <MobileNav />
      <div className="about-header">
        <TwoLineHeader
          fontSize={42}
          containerHeight={110}
          lineOne="Breaking the barriers of"
          lineTwo="traditional credit building"
        />
      </div>

      <HeaderTextBlock
        lineOne="Our"
        lineTwo="Why"
        text={[
          'The majority of young adults don’t have viable ways to start building credit. Many of them don’t know their credit score or don’t know how to improve their current one. Once they do decide to start their credit journey, they are left frustrated when told the main way to build is through having the credit products they were told they don’t yet qualify for.',

          'We knew that there were indicators other than credit card and loan payments that could be tracked to provide an assessment of creditworthiness. That’s where Perch comes in.',

          'Perch allows users to log their recurring payments—such as subscriptions or rent—as credit history to improve their credit scores immediately. We want to provide an escape from the catch-22 of credit building.',
        ]}
      />
      <HeaderTextBlock
        lineOne="Founding"
        lineTwo="Story"
        text={[
          'Our CEO, Michael Broughton, encountered this catch-22 himself when he was denied the loan he needed to cover the remaining $10,000 he owed USC for tuition. Coming from a military family of nine, he was disqualified due to family finances, a lack of a credit score, and no proof of credit history. Out of his frustration and through a LOT of research, he founded Perch.',
        ]}
      />
      <div className="investor-block-header">Our Investors</div>
      <div className="investor-block-subheader">
        <br />
        We're backed by some of the world's most notable investors.
      </div>
      <ExpandedInvestorsBlock />
      <Footer />
      <style jsx>{`
        .investor-block-header {
          font-size: 28px;
          text-align: center;
          margin-top: 100px;
        }
        .investor-block-subheader {
          font-family: Gilroy-Regular;
          font-size: 16px;
          text-align: center;
        }
        .about-header {
          text-align: center;
          margin-bottom: 75px;
          margin-top: 100px;
        }
        @media only screen and (max-width: 600px) {
          .about-header {
            margin-top: 0;
            transform: scale(0.7);
            margin-bottom: 0px;
          }
        }
      `}</style>
    </main>
  )
}

export default about
