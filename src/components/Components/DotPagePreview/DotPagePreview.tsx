import React from "react"
import "./style/DotPagePreview.scss"

type DotPagePreviewProps = {
  numPages: number
  activePage: number
}

const DotPagePreview: React.FC<DotPagePreviewProps> = ({
  numPages,
  activePage,
}) => {
  return (
    <div className="dot-wrapper">
      {Array.from({ length: numPages }, (_, i) => (
        <div key={i} className={`dot ${i === activePage ? "active" : ""}`} />
      ))}
    </div>
  )
}

export default DotPagePreview
