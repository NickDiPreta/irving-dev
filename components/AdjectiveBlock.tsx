import React from 'react'
import { AdjectiveCard } from './AdjectiveCard'

export const AdjectiveBlock = () => {
  return (
    <div>
      <AdjectiveCard
        source="/static/adjective-icons/safe.svg"
        title="Safe"
        subtitle="Supported by Transport Layer Security (TLS) and military-grade encryption."
      />
      <AdjectiveCard
        source="/static/adjective-icons/fast.svg"
        title="Fast"
        subtitle="See a reflection on your credit score within 30 days."
      />
      <AdjectiveCard
        source="/static/adjective-icons/free.svg"
        title="Free"
        subtitle="We believe credit building shouldn’t cost you."
      />
      <style jsx>{`
        div {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 5vh;
        }
      `}</style>
    </div>
  )
}
