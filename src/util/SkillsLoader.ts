import skillsData from "../data/skills-metadata.json"

const data: {
  languages: ImgInfo[]
  libraries: ImgInfo[]
  software: ImgInfo[]
} = skillsData

export interface ImgInfo {
  img: any
  name: string
}

export type SkillType = "languages" | "libraries" | "software"

export const getSkills = (type: SkillType) => {
  const imgData: ImgInfo[] = data[type]
  return imgData.sort(compare)
}

const compare = (a: ImgInfo, b: ImgInfo) => {
  if (a.name < b.name) {
    return -1
  }
  if (a.name > b.name) {
    return 1
  }
  return 0
}
