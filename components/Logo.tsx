import React from 'react'

interface LogoProps {}

export const Logo: React.FC<LogoProps> = () => {
  return (
    <div>
      <img src="/static/perchlogo.svg" />

      <style jsx>{`
        img {
          height: 24px;
          width: 87px;
        }
      `}</style>
    </div>
  )
}
