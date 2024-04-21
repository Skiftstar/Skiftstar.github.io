import "./style/SkillsPage.scss"
import React, { useState } from "react"
import SkillBoxWrapper from "../../Components/SkillHolder/SkillBoxWrapper"

const SkillsPage = React.forwardRef((_, ref: any) => {
  const [box1Active, setBox1Active] = useState(true)
  const [box2Active, setBox2Active] = useState(true)
  const [box3Active, setBox3Active] = useState(true)

  return (
    <div ref={ref} className="inactive hidden">
      <div className="container">
        <div className="header">
          <div className="title-display">
            <span className="big-text">{"Skills"}</span>
          </div>
        </div>
        <div className="skill-boxes">
          <div
            className={`box ${box1Active ? "" : "blurred"}`}
            onClick={() => {
              setBox1Active(true)
            }}
          >
            <SkillBoxWrapper type="languages" />
          </div>
          <div
            className={`box ${box2Active ? "" : "blurred"}`}
            onClick={() => {
              setBox2Active(true)
            }}
          >
            <SkillBoxWrapper type="libraries" />
          </div>
          <div
            className={`box ${box3Active ? "" : "blurred"}`}
            onClick={() => {
              setBox3Active(true)
            }}
          >
            <SkillBoxWrapper type="software" />
          </div>
        </div>
      </div>
    </div>
  )
})

export default SkillsPage
