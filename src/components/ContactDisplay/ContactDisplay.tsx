import "./style/ContactDisplay.scss"

interface ContactDisplayProps {
  img: any
  label: string
  link?: string
}

function ContactDisplay(props: ContactDisplayProps) {
  return (
    <a
      className={`contact-display-container`}
      href={props.link ?? undefined}
      target="_blank"
    >
      <div className="image-container">
        <img
          className={`picture ${props.link ? "clickable" : ""}`}
          src={props.img}
        />
      </div>
      <div className="text">
        <span>{props.label}</span>
      </div>
    </a>
  )
}

export default ContactDisplay
