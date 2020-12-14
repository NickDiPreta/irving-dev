import React from 'react'
import { motion } from 'framer-motion'

interface RevolvingTextProps {
  text: string
}

const RevolvingText: React.FC<RevolvingTextProps> = ({ text }) => {
  return (
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25,
      }}
      exit={{ x: '150vw' }}
    >
      <p className="homepage-p">
        {text}
        <style jsx>{`
          .homepage-p {
            color: #907cff;
            font-family: 'Gilroy-Bold', sans-serif;
            font-size: 3.6rem;
            margin-top: -20px;
            margin-bottom: -10px;
          }
          @media only screen and (max-width: 767px) {
            .homepage-p {
              font-size: 3.2rem;
              font-family: Gilroy-Bold, sans-serif;
            }
          }
        `}</style>
      </p>
    </motion.div>
  )
}

export default RevolvingText
