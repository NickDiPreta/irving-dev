import { AnimatePresence, useCycle } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AdjectiveBlock } from '../components/AdjectiveBlock'
import { BlockFourDesktop } from '../components/BlockFourDesktop'
import { BlockFourMobile } from '../components/BlockFourMobile'
import { FeaturedIn } from '../components/FeaturedIn'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { HomePageTitle } from '../components/HomePageTitle'
import { InvestorsBlock } from '../components/InvestorsBlock'
import { HomepageNav } from '../components/mobile/HompageNav'
import { OverviewBlock } from '../components/OverviewBlock'
import RevolvingText from '../components/RevolvingText'
import { StaticText } from '../components/StaticText'
import { Subtitle } from '../components/Subtitle'
import { main } from '../styles/home'

const Home = (): JSX.Element => {
  useEffect(() => {
    window.addEventListener('resize', setDesktop(window.innerWidth > 600))
    return () =>
      window.removeEventListener('resize', setDesktop(window.innerWidth > 600))
  })

  const metaTitle = 'Perch Credit'
  const [text, cycleText] = useCycle(
    'Rent',
    'Netflix',
    'Hulu',
    'Spotify',
    'Apple Music',
    'Amazon'
  )
  const [show, setShow] = useState(true)
  const [dropdown, setDropdown] = useState(false)
  const [button, setButton] = useState(false)
  const [isDesktop, setDesktop] = useState(false)

  const handleClick = () => {
    setDropdown(!dropdown)
  }

  const handleCycle = () => {
    cycleText()
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 1500)
  }

  useEffect(() => {
    handleCycle()
  }, [])

  return (
    <div>
      <Header title={metaTitle} />
      <div className="outer-container">
        <main>
          <style jsx>{main}</style>

          <HomepageNav
            setButton={setButton}
            handleClick={handleClick}
            setButton={setButton}
          />
          {dropdown ? (
            <div className="dropmenu-home">
              <ul className="options-dropdown">
                <div className="nav-top">
                  <div className="nav-logo">
                    <img src="static/perchlogo.svg" />
                  </div>

                  <img
                    onClick={handleClick}
                    className="x-icon pointer"
                    src="static/x-mark.svg"
                  />
                </div>

                <Link href="/about">
                  <li className="pointer">About</li>
                </Link>
                <Link href="faq">
                  <li className="pointer">FAQ</li>
                </Link>
                <li className="drop-menu pointer">
                  <Link href="https://apps.apple.com/us/app/perch-credit/id1516209753">
                    <button>Get Perch</button>
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            ''
          )}
          <div className="blocks">
            <div className="blockOne">
              <div className="left-one">
                <HomePageTitle />
                <AnimatePresence onExitComplete={() => handleCycle()}>
                  {show && <RevolvingText text={text} />}
                </AnimatePresence>
                <Subtitle
                  alignment="left"
                  text="Use recurring expenses to boost your credit score instantly with Perch."
                />
                <Link href="https://apps.apple.com/us/app/perch-credit/id1516209753">
                  <img
                    className="app-store-logo"
                    src="/static/app-store-logo.svg"
                  />
                </Link>
              </div>
              <div className="right-one">
                <img src="/static/asset1.png" />
              </div>
            </div>
            {button ? (
              <div className="button-container">
                <Link href="https://apps.apple.com/us/app/perch-credit/id1516209753">
                  <button className="sticky-button">Get Perch</button>
                </Link>
              </div>
            ) : (
              ''
            )}

            <div className="blockTwo">
              <OverviewBlock
                imageHeight={74}
                imageWidth={60}
                image="/static/setup-icon.svg"
                text="Quick & Easy Setup"
                subtext="Start your credit building journey in as little as 5 minutes"
              />
              <OverviewBlock
                imageHeight={53}
                imageWidth={105}
                image="/static/credit-icon.svg"
                text="Automate credit building"
                subtext="Increase your score month to month without changing your lifestyle"
              />
              <OverviewBlock
                imageHeight={50}
                imageWidth={69}
                image="/static/secure-icon.svg"
                text="Keep all your data safe"
                subtext="We secure all sensitive information using 256-bit encryption"
              />
            </div>
            <FeaturedIn />
            <div className="blockThree">
              <div className="left-two">
                <StaticText
                  align="center;"
                  lineOne="Build credit with"
                  lineTwo="subscriptions"
                />
                <Subtitle
                  alignment="center"
                  text="Perch allows you to build your credit using your recurring expenses like Netflix, Hulu, Spotify, and Apple Music."
                />
              </div>
              <div className="right-two">
                <img src="/static/Frame.svg" />
              </div>
            </div>

            {isDesktop ? <BlockFourDesktop /> : <BlockFourMobile />}
          </div>
          <InvestorsBlock />
          <div className="SFF-Block">
            <span>Safe. Fast. Free.</span>
            <br />
            <AdjectiveBlock />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default Home
