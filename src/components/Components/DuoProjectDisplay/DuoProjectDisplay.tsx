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
        <a
          className="project-image-display"
          href={projects[0].link}
          target="_blank"
        >
          <img
            className="project-image"
            src={`${process.env.PUBLIC_URL}/${projects[0].image}`}
            alt="project-thumbnail"
          />
        </a>
        <div className="project-info-display">
          <a
            className="project-title-display"
            href={projects[0].link}
            target="_blank"
            aria-label="Open project in new tab"
          >
            <span className="project-title">{t(projects[0].title)}</span>
            <div className="window-icon">
              <OpenInNewIcon />
            </div>
          </a>
          <div className="project-description-display">
            <span className="project-description">
              {t(projects[0].description)}
            </span>
          </div>
        </div>
      </div>

      {projects.length === 2 && (
        <div className="project-display right-project">
          <a
            className="project-image-display"
            href={projects[1].link}
            target="_blank"
          >
            <img
              className="project-image"
              src={`${process.env.PUBLIC_URL}/${projects[1].image}`}
              alt="project-thumbnail"
            />
          </a>
          <div className="project-info-display">
            <a
              className="project-title-display"
              href={projects[1].link}
              target="_blank"
              aria-label="Open project in new tab"
            >
              <span className="project-title">{t(projects[1].title)}</span>
              <div className="window-icon">
                <OpenInNewIcon />
              </div>
            </a>
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
