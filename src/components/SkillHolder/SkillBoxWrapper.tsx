import "./style/SkillBoxWrapper.scss"
import SkillBox from "./SkillBox"
import { getSkills, ImgInfo, SkillType } from "../../util/SkillsLoader"

interface SkillBoxWrapperProps {
  type: SkillType
}

function SkillBoxWrapper(props: SkillBoxWrapperProps) {
  const renderSkillBoxes = () => {
    const imgInfo: ImgInfo[] = getSkills(props.type)

    return imgInfo.map((entry) => {
      return (
        <SkillBox key={entry.name} imageSrc={entry.img} label={entry.name} />
      )
    })
  }

  return <div className="skillboxwrapper">{renderSkillBoxes()}</div>
}

export default SkillBoxWrapper
