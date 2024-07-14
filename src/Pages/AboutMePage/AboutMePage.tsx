import "./style/AboutMePage.scss"
import { useTranslation } from "react-i18next"
import ProfilePic from "../../assets/LandingPage/new-new-cropped.png"
import React from "react"
import { getAge } from "../../util/AgeUtil"
import Accordion from "../../components/Drawer/Accordion"

const AboutMePage = React.forwardRef((_, ref: any) => {
  const { t } = useTranslation()

  const [activeDrawer, setActiveDrawer] = React.useState(0)

  const accordions = [
    {
      title: t("AboutMeTechHeader"),
      content: t("AboutMeTechContent"),
    },
    {
      title: t("AboutMeRightNowHeader"),
      content: t("AboutMeRightNowContent"),
    },
    {
      title: t("AboutMeWorkMindsetHeader"),
      content: t("AboutMeWorkMindsetContent"),
    },
    {
      title: t("AboutMeHobbiesHeader"),
      content: t("AboutMeHobbiesContent"),
    },
  ]

  return (
    <div ref={ref} className="inactive hidden">
      <div className="container-aboutme">
        <div className="aboutme-header">
          <div className="profile-picture-wrapper-aboutme">
            <img
              alt="Profile Thumbnail"
              className="profile-picture-aboutme"
              src={ProfilePic}
            />
          </div>
          <div className="title-display" id="aboutme-header">
            <span className="big-text">{t("AboutMeHeader")}</span>
          </div>
        </div>
        <div className="aboutme-intro-text">
          <span>{t("AboutMeIntro").replace("{year}", `${getAge()}`)}</span>
        </div>
        <div className="aboutme-drawers">
          {accordions.map((accordion, index) => (
            <Accordion
              key={index}
              open={activeDrawer === index}
              onClick={() =>
                setActiveDrawer(index === activeDrawer ? -1 : index)
              }
              title={accordion.title}
              content={accordion.content}
            />
          ))}
        </div>
      </div>
    </div>
  )
})

export default AboutMePage
