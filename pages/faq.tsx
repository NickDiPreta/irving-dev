import React from 'react'
import { AccordionTab } from '../components/faq/AccordionTab'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MobileNav } from '../components/mobile/MobileNav'
import { Navbar } from '../components/Navbar'
import { main } from '../styles/home'

interface faqProps {}

const faq: React.FC<faqProps> = ({}) => {
  return (
    <main>
      <Header title="Frequently Asked Questions" />
      <style jsx>{main}</style>
      <MobileNav />
      <div className="faq-container">
        <div className="faq-header">Frequently Asked Questions</div>
        <AccordionTab
          title="What does Perch do?"
          text="With Perch, you can build your credit through non-traditional data..."
        />
        <AccordionTab
          title="Do I need to have a credit score to use Perch?"
          text="<p>Nope! Perch works regardless of whether or not you have a credit...</p>"
        />
      </div>
      <Footer />
      <style jsx>{`
        .faq-container {
          height: 70vh;
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
