import { useState } from "react"
import "./style/Accordion.scss"

const Accordion = ({
  open,
  onClick,
  title,
  content,
}: {
  open: boolean
  onClick: () => void
  title: string
  content: string
}) => {

  return (
    <div className={`accordion ${open ? "open" : "closed"}`}>
      <div className="accordion-header" onClick={onClick}>
        <span className="accordion-title">{title}</span>
        <div className="arrow">&#9662;</div>
      </div>
      <div className={`accordion-content ${open ? "open" : ""}`}>
        {content}
      </div>
    </div>
  )
}

export default Accordion
