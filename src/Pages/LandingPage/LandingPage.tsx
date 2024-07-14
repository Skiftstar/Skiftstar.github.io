import "./style/LandingPage.scss"
import { useTranslation } from "react-i18next"
import ProfilePic from "../../assets/LandingPage/new-new-cropped.png"
import HighlightButton from "../../components/Buttons/HighlightButton"
import React from "react"
import LanguageSelectButton from "../../components/Buttons/LanguageSelectButton"
import { getAge } from "../../util/AgeUtil"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

interface LandingPageProps {
  changePage: Function
  isMobile: boolean
}

const LandingPage = React.forwardRef((props: LandingPageProps, ref: any) => {
  const { t } = useTranslation()

  const jumpToSection = (section: string) => {
    window.location.href = `#${section}`
  }

  return (
    <div ref={ref}>
      <div className="container-landing">
        {props.isMobile && (
          <div className="landing-page-mobile-warning">
            <span>{t("MobileWarning")}</span>
          </div>
        )}
        <div className="name-picture-display">
          <div className="profile-picture-wrapper">
            <img
              alt="Profile Thumbnail"
              className="profile-picture"
              src={ProfilePic}
            />
          </div>
          <div className="name-display">
            <span className="big-text">{"Skifty"}</span>
            <span className="small-text">
              {t("LandingPageHeader").replace("{year}", `${getAge()}`)}
            </span>
            <span className="smaller-text">{t("LandingPageWelcome")}</span>
          </div>
        </div>
        <div className="button-row">
          <HighlightButton
            onClick={() => {
              if (props.isMobile) jumpToSection("aboutme-header")
              else props.changePage(1)
            }}
            label="About"
          />
          <HighlightButton
            onClick={() => {
              if (props.isMobile) jumpToSection("projects-header")
              else props.changePage(3)
            }}
            label="Projects"
          />
          <HighlightButton
            onClick={() => {
              if (props.isMobile) jumpToSection("contact-header")
              else props.changePage(-1)
            }}
            label="Contact"
          />
        </div>
        <div className="button-row">
          {/* <ToggleButton
                    onClick={() => {}}
                    label='Minigames'
                /> */}
          <LanguageSelectButton />
        </div>
      </div>

      <div className="extend-icon">
        <KeyboardArrowDownIcon />
      </div>
    </div>
  )
})

export default LandingPage
