import React from "react"
import "./style/DotPagePreview.scss"

type DotPagePreviewProps = {
  numPages: number
  activePage: number
  fading: boolean
  changePage: Function
}

const DotPagePreview: React.FC<DotPagePreviewProps> = ({
  numPages,
  activePage,
  fading,
  changePage
}) => {
  return (
    <div className="dot-wrapper">
      {Array.from({ length: numPages }, (_, i) => (
        <div
          key={i}
          className={`dot ${i === activePage ? "active" : ""} ${
            fading ? "fade-out" : ""
          }`}
          onClick={() => changePage(i + 1)}
        />
      ))}
    </div>
  )
}

export default DotPagePreview
