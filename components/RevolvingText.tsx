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
            font-size: 42px;
          }
          @media only screen and (max-width: 600px) {
            .homepage-p {
              margin: 0px;
              font-size: 24px;
              line-height: 31px;
              font-family: 'Gilroy-Bold', sans-serif;
            }
          }
        `}</style>
      </p>
    </motion.div>
  )
}

export default RevolvingText
