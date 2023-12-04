import './style/ContactDisplay.scss'; 

interface ContactDisplayProps {
    img: any,
    label: string,
    link?: string
}

function ContactDisplay(props: ContactDisplayProps) {

    const openInNewTab = (url: string) => {
        window.open(url, "_blank", "noreferrer")
    }

  return (
        <div className={`contact-display-container`} onClick={() => {if (props.link) openInNewTab(props.link)}}>
            <div className='image-container'>
                <img className={`picture ${props.link ? 'clickable' : ''}`} src={props.img}/>
            </div>
            <div className='text'>
                <span>{props.label}</span>
            </div>
        </div>
  );
}

export default ContactDisplay;
