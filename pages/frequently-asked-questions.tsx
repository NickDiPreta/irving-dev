import React, { useEffect, useState } from 'react'
import { AccordionTab } from '../components/faq/AccordionTab'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MobileNav } from '../components/mobile/MobileNav'
import { main } from '../styles/home'

interface faqProps {}

const faq: React.FC<faqProps> = ({}) => {
  useEffect(() => {
    window.addEventListener('resize', setDesktop(window.innerWidth > 600))
    return () =>
      window.removeEventListener('resize', setDesktop(window.innerWidth > 600))
  })

  const [show, setShow] = useState(true)
  const [dropdown, setDropdown] = useState(false)
  const [button, setButton] = useState(false)
  const [isDesktop, setDesktop] = useState(false)

  const handleClick = () => {
    setDropdown(!dropdown)
  }

  const handleCycle = () => {
    setShow(true)
    setTimeout(() => {
      setShow(false)
    }, 1500)
  }

  useEffect(() => {
    handleCycle()
  }, [])

  return (
    <main>
      <Header title="Frequently Asked Questions" />
      <style jsx>{main}</style>
      <Header title="About Perch" />
      <style jsx>{main}</style>
      <MobileNav />
      <div className="faq-container">
        <div className="faq-header">Frequently Asked Questions</div>
        <AccordionTab
          title="How does Perch work?"
          text="We help young adults build their credit using non-traditional data - such as rent, Netflix, utilities, and more - for free! Our mission is to teach financial literacy and help people jumpstart their credit score."
        />
        <AccordionTab
          title="Does signing up affect my credit?"
          text="No, signing up does not affect your credit score. "
        />
        <AccordionTab
          title="How do I contact Perch Customer Support? "
          text="Feel free to reach out with any questions to support@getperch.app"
        />
        <AccordionTab
          title="Can I still use Perch if my credit score is already good?"
          text="Of course — continuing to report recurring payments will keep benefitting you, although you might see a less drastic score improvement compared to someone who has a low score or a lack of credit history. You can also use Perch for other purposes, like maintaining your savings goals and tracking expenses. Plus, you can expect us to continue rolling out improvements and features, so why not stick around?  "
        />
        <AccordionTab
          title="Is linking my bank account secure?"
          text="We use Plaid's API (it's the same service you use to connect your bank account to apps like Venmo and Acorns) in our services. So rest assured, your account information will be safe and secure. You can read more about how they handle your data here.
          "
        />
        <AccordionTab
          title="Someone else (a guarantor) pays for my rent. Can I still improve my credit score?"
          text="As long as your rent is being paid with funds from your bank account, you can still improve your credit score. For example, if your guarantor transfers rent money into your account every month and you use that money to pay your rent, we can still report these recurring payments. If you pay your rent directly from your guarantors bank account, then we can't report that as your data to credit bureaus.
          "
        />
      </div>
      <Footer />
      <style jsx>{`
        .faq-container {
          height: 100vh;
        }
        .faq-header {
          font-size: 28px;
          margin-top: 20px;
          margin-bottom: 20px;
          margin-left: 10px;
        }
      `}</style>
    </main>
  )
}

export default faq
