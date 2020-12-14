import React from 'react'

interface LogoProps {}

export const Logo: React.FC<LogoProps> = ({ variant = 'regular' }) => {
  return (
    <div>
      <img src="/static/perchlogo.svg" />

      <style jsx>{`
        img {
        }
      `}</style>
    </div>
  )
}
