import { useTranslation } from "react-i18next"
import { ProjectData } from "../../../util/ProjectLoader"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import "./style/DuoProjectDisplay.scss"

const DuoProjectDisplay = ({ projects }: { projects: ProjectData[] }) => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer")
  }

  const { t } = useTranslation()

  return (
    <div>
      <div className="project-display left-project">
        <div className="project-image-display">
          <img
            className="project-image"
            src={`${process.env.PUBLIC_URL}/${projects[0].image}`}
            alt="project-thumbnail"
            onClick={() => openInNewTab(projects[0].link)}
          />
          <div className="languages-display"></div>
        </div>
        <div className="project-info-display">
          <div
            className="project-title-display"
            onClick={() => openInNewTab(projects[0].link)}
          >
            <span className="project-title">{t(projects[0].title)}</span>
            <div className="window-icon">
              <OpenInNewIcon />
            </div>
          </div>
          <div className="project-description-display">
            <span className="project-description">
              {t(projects[0].description)}
            </span>
          </div>
        </div>
      </div>

      {projects.length === 2 && (
        <div className="project-display right-project">
          <div className="project-image-display">
            <img
              className="project-image"
              src={`${process.env.PUBLIC_URL}/${projects[1].image}`}
              alt="project-thumbnail"
              onClick={() => openInNewTab(projects[1].link)}
            />
            <div className="languages-display"></div>
          </div>
          <div className="project-info-display">
            <div
              className="project-title-display"
              onClick={() => openInNewTab(projects[1].link)}
            >
              <span className="project-title">{t(projects[1].title)}</span>
              <div className="window-icon">
                <OpenInNewIcon />
              </div>
            </div>
            <div className="project-description-display">
              <span className="project-description">
                {t(projects[1].description)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DuoProjectDisplay
