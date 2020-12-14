import React from 'react'
import Head from 'next/head'

interface HeaderProps {
  title: string
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/static/perchlogo.svg" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1.0, minimum-scale=1.0,width=device-width"
        />
        <meta
          name="description"
          content="Build credit fast- all it takes is paying your rent. We'll handle the rest."
        />
      </Head>
    </div>
  )
}
