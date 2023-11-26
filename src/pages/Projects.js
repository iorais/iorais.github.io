import "./Project.css";
import Projectcard from "../components/Projectcard";
import {Element} from "react-scroll";

export default function Projects() {
    const projectList = [
        {   title: "NestNotifications", 
            link: "https://devpost.com/software/nestnotifications",
            video: "https://www.youtube.com/embed/39aNTYJP-SQ?rel=0&controls=0",
            description: "My team and I created a location sharing mobile app with a Flutter frontend and Flask backend. We made it to the finals and placed 4th out of over 200 participants at INRIX Hack 2022."
        },
        {   title: "Chess", 
            link: "https://studio.code.org/projects/applab/PytrwcA-1kHTsWuHPw6mt1aRKfvBBnu_dVIV1eSF8c0",
            video: "https://youtube.com/embed/QRhHHW0mFVU?rel=0&controls=0",
            description: "I recreated the classic strategy board game in code.org app lab with JavaScript. This project won 2nd in the ACM Summer Challenge 2022."
        }
    ];

    return ( 
        <Element name="Projects" className="proj">
                <h1 className="font-audiowide">Projects</h1>
                <div className="proj">
                    {projectList.map((project) => (
                        <Projectcard
                            title={project.title}
                            link={project.link}
                            video={project.video}
                            description={project.description}
                        />
                    ))}
                </div>
        </Element>
    )
}