import React from "react"
import "./style/DotPagePreview.scss"

type DotPagePreviewProps = {
  numPages: number
  activePage: number
  fading: boolean
}

const DotPagePreview: React.FC<DotPagePreviewProps> = ({
  numPages,
  activePage,
  fading,
}) => {
  return (
    <div className="dot-wrapper">
      {Array.from({ length: numPages }, (_, i) => (
        <div
          key={i}
          className={`dot ${i === activePage ? "active" : ""} ${
            fading ? "fade-out" : ""
          }`}
        />
      ))}
    </div>
  )
}

export default DotPagePreview
