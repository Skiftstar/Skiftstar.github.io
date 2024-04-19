import React, { useEffect, useState } from "react"
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
  changePage,
}) => {
  const [idle, setIdle] = useState(false)
  const [isMouseOver, setMouseOver] = useState(false)
  const [leaveTimer, setLeaveTimer] = useState<NodeJS.Timeout | null>(null)

  const startTimer = () => {
    const timer = setTimeout(() => {
      setIdle(true)
    }, 2000)
    return timer
  }

  useEffect(() => {
    setIdle(false)
    const timer = startTimer()

    return () => {
      clearTimeout(timer)
    }
  }, [activePage])

  return (
    <div
      className="dot-wrapper"
      onMouseEnter={() => {
        if (leaveTimer) clearTimeout(leaveTimer)
        setMouseOver(true)
      }}
      onMouseLeave={() => {
        const timer = setTimeout(() => setMouseOver(false), 500)
        setLeaveTimer(timer)
      }}
    >
      {Array.from({ length: numPages }, (_, i) => (
        <div
          key={i}
          className={`dot ${i === activePage ? "active" : ""} ${
            (fading || idle) && !isMouseOver ? "fade-out" : "fade-in"
          }`}
          onClick={() => changePage(i + 1)}
        />
      ))}
    </div>
  )
}

export default DotPagePreview
