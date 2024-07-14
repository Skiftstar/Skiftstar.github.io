import './style/SkillBox.scss'; 

interface SkillBoxProps {
    imageSrc: any,
    label: string
}

function SkillBox(props: SkillBoxProps) {

  return (
    <div className='skillbox-container'>
        <div className='image-container'>
            <img className='image' src={props.imageSrc}/>
        </div>
        <div className='text'>
            <span>{props.label}</span>
        </div>
    </div>
  );
}

export default SkillBox;
