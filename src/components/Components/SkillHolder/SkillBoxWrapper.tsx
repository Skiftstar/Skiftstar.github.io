import './style/SkillBoxWrapper.scss';

import Atom from'../../../assets/SkillPage/atom.png';
import Bash from'../../../assets/SkillPage/bash.png';
import BitBucket from'../../../assets/SkillPage/bitbucket.png';
import Confluence from'../../../assets/SkillPage/confluence.png';
import DiscordJS from'../../../assets/SkillPage/discordjs.png';
import Flask from'../../../assets/SkillPage/flask-white.png';
import Github from'../../../assets/SkillPage/github-white.png';
import Gitlab from'../../../assets/SkillPage/gitlab.png';
import IntelliJ from'../../../assets/SkillPage/intellij.png';
import Java from'../../../assets/SkillPage/java.png';
import JavaScript from'../../../assets/SkillPage/javascript.png';
import Jira from'../../../assets/SkillPage/jira.png';
import Kotlin from'../../../assets/SkillPage/kotlin.png';
import LibreOffice from'../../../assets/SkillPage/libeoffice.png';
import Linux from'../../../assets/SkillPage/linux-white.png';
import Lua from'../../../assets/SkillPage/lua.png';
import MacOS from'../../../assets/SkillPage/macos-white.png';
import MariaDB from'../../../assets/SkillPage/mariadb.png';
import Maven from'../../../assets/SkillPage/maven.png';
import MongoDB from'../../../assets/SkillPage/mongodb.png';
import MSOffice from'../../../assets/SkillPage/msoffice.png';
import MySQL from'../../../assets/SkillPage/mysql.png';
import NodeJS from'../../../assets/SkillPage/node-js.png';
import Paper from'../../../assets/SkillPage/paper.png';
import Python from'../../../assets/SkillPage/python.png';
import React from'../../../assets/SkillPage/react.png';
import Spigot from'../../../assets/SkillPage/spigot.png';
import SpringBoot from'../../../assets/SkillPage/spring_boot.png';
import TypeScript from'../../../assets/SkillPage/typescript.png';
import VSCode from'../../../assets/SkillPage/vscode.png';
import Windows from'../../../assets/SkillPage/windows.png';
import Eclipse from'../../../assets/SkillPage/eclipse.png';
import Html from'../../../assets/SkillPage/html.png';
import Css from'../../../assets/SkillPage/css.png';
import Sql from'../../../assets/SkillPage/sql.png';
import Cpp from'../../../assets/SkillPage/cpp.png';
import SkillBox from './SkillBox';


interface SkillBoxWrapperProps {
    type: string
}

interface ImgInfo {
  img: any,
  name: string
}

function SkillBoxWrapper(props: SkillBoxWrapperProps) {

  const langauges: ImgInfo[] = [
    {
      img: Bash,
      name: "Bash"
    },
    {
      img: Java,
      name: "Java"
    },
    {
      img: JavaScript,
      name: "JavaScript"
    },
    {
      img: Kotlin,
      name: "Kotlin"
    },
    {
      img: Lua,
      name: "Lua"
    },
    {
      img: Python,
      name: "Python"
    },
    {
      img: TypeScript,
      name: "TypeScript"
    },
    {
      img: Html,
      name: "HTML"
    },
    {
      img: Css,
      name: "CSS"
    },
    {
      img: Sql,
      name: "SQL"
    },
    {
      img: Cpp,
      name: "C++"
    }
  ]

  const libraries: ImgInfo[] = [
    {
      img: DiscordJS,
      name: "DiscordJS"
    },
    {
      img: Flask,
      name: "Flask"
    },
    {
      img: MariaDB,
      name: "MariaDB"
    },
    {
      img: Maven,
      name: "Maven"
    },
    {
      img: MongoDB,
      name: "MongoDB"
    },
    {
      img: MySQL,
      name: "MySQL"
    },
    {
      img: NodeJS,
      name: "NodeJS"
    },
    {
      img: Paper,
      name: "PaperMC"
    },
    {
      img: React,
      name: "React"
    },
    {
      img: Spigot,
      name: "SpigotMC"
    },
    {
      img: SpringBoot,
      name: "Spring Boot"
    }
  ]

  const software: ImgInfo[] = [
    {
      img: Atom,
      name: "Atom"
    },
    {
      img: BitBucket,
      name: "Bitbucket"
    },
    {
      img: Confluence,
      name: "Confluence"
    },
    {
      img: Github,
      name: "GitHub"
    },
    {
      img: Gitlab,
      name: "GitLab"
    },
    {
      img: IntelliJ,
      name: "IntelliJ"
    },
    {
      img: Jira,
      name: "Jira"
    },
    {
      img: LibreOffice,
      name: "Libre Office"
    },
    {
      img: Linux,
      name: "Linux"
    },
    {
      img: MacOS,
      name: "MacOS"
    },
    {
      img: MSOffice,
      name: "MS Office"
    },
    {
      img: VSCode,
      name: "VSCode"
    },
    {
      img: Windows,
      name: "Windows"
    },
    {
      img: Eclipse,
      name: "Eclipse"
    }
  ]
  
  const renderSkillBoxes = () => {
    const imgInfo: ImgInfo[] = props.type === "languages" ? langauges : (props.type === "libraries" ? libraries : software)
    imgInfo.sort(compare)

    return imgInfo.map(entry => {
      return (
        <SkillBox
          key={entry.name}
          imageSrc={entry.img}
          label={entry.name}
        />
      )
    })

  }

  const compare = ( a: ImgInfo, b: ImgInfo ) => {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }

  return (
    <div className='skillboxwrapper'>
      {renderSkillBoxes()}
    </div>
  );
}

export default SkillBoxWrapper;
