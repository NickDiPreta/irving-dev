import React, { useState, useRef } from 'react'
import Chevron from './Chevron'

interface AccordionTabProps {
  title: string
  text: string
}

export const AccordionTab: React.FC<AccordionTabProps> = ({ title, text }) => {
  const [setActive, setActiveState] = useState('')
  const [setHeight, setHeightState] = useState('0px')
  const [setRotate, setRotateState] = useState('>')

  const content = useRef(null)

  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '')
    setHeightState(
      setActive === 'active'
        ? '0px'
        : ''.concat(content.current.scrollHeight, 'px')
    )
    setRotateState(setActive === 'active' ? '>' : 'X')
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion__title">{title}</p>
        <div>{setRotate}</div>
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
      <style jsx>{`
        /* Style the accordion section */
        .accordion__section {
          display: flex;
          flex-direction: column;
          border-radius: 5px;
        }

        /* Style the buttons that are used to open and close the accordion panel */
        .accordion {
          background-color: #eee;
          border-radius: 5px;
          margin-top: 5px;
          color: #444;
          cursor: pointer;
          padding: 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: none;
          outline: none;
          transition: background-color 0.6s ease;
        }

        /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
        .accordion:hover,
        .active {
          background-color: #ccc;
          border-top: 2px solid #907cff;
          border-left: 2px solid #907cff;
          border-right: 2px solid #907cff;
        }

        /* Style the accordion content title */
        .accordion__title {
          font-family: 'Open Sans', sans-serif;
          font-weight: 600;
          font-size: 14px;
          text-align: left;
        }

        /* Style the accordion chevron icon */
        .accordion__icon {
          margin-left: auto;
          transition: transform 0.6s ease;
        }

        /* Style to rotate icon when state is active */
        .accordion__icon rotate {
          transform: rotate(90deg);
        }

        /* Style the accordion content panel. Note: hidden by default */
        .accordion__content {
          background-color: white;
          overflow: auto;
          transition: max-height 0.6s ease;
          border-right: 2px solid #907cff;
          border-left: 2px solid #907cff;
          border-radius: 5px;
        }

        /* Style the accordion content text */
        .accordion__text {
          font-family: 'Open Sans', sans-serif;
          font-weight: 400;
          font-size: 14px;
          border-bottom: 2px solid #907cff;
          padding: 18px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  )
}
