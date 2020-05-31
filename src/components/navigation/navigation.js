import React from "react"
import NavButton from "./navbutton"
import {
  JournalIcon,
  LinkedinIcon,
  GithubIcon,
  ResumeIcon,
  InstagramIcon,
  YoutubeIcon,
  TwitterIcon,
  FacebookIcon,
} from "../../utils/icon-library"
import styles from "./navigation.component.scss"

const Navigation = () => (
  <nav>
    <ul>
      <li className="expanded-item">
        <NavButton
          icon={<JournalIcon role="presentation" />}
          href="http://gewton.me/journal/"
          label="Journal"
          target="_self"
        />
      </li>
      <li>
        <NavButton
          icon={<LinkedinIcon role="presentation" />}
          href="https://linkedin.com/in/gewton"
          label="Linkedin"
        />
      </li>
      <li>
        <NavButton
          icon={<GithubIcon role="presentation" />}
          href="https://github.com/bluefoot"
          label="Github"
        />
      </li>
      <li className="expanded-item last">
        <NavButton
          icon={<ResumeIcon role="presentation" />}
          href="/gewton_resume.pdf"
          label="Resume"
        />
      </li>
      <li role="presentation" className="line-break"></li>
      <li>
        <NavButton
          icon={<InstagramIcon role="presentation" />}
          href="https://instagram.com/gewtont/"
          label="Instagram"
        />
      </li>
      <li>
        <NavButton
          icon={<YoutubeIcon role="presentation" />}
          href="https://www.youtube.com/user/gewtonj/"
          label="Youtube"
        />
      </li>
      <li>
        <NavButton
          icon={<TwitterIcon role="presentation" />}
          href="https://twitter.com/gewton"
          label="Twitter"
        />
      </li>
      <li>
        <NavButton
          icon={<FacebookIcon role="presentation" />}
          href="https://www.facebook.com/gewton/"
          label="Facebook"
        />
      </li>
    </ul>
  </nav>
)

export default Navigation
