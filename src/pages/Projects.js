import "./Project.css";
import Projectcard from "../components/Projectcard";
import {Element} from "react-scroll";

export default function Projects() {
    const projectList = [
        {
            title: "PB&J (Park, Bus, and Jam)",
            link: "https://devpost.com/software/app-h2mex7",
            video: "https://www.youtube.com/embed/GFKy2b_VfmI?si=aPYVwL8iNwYGn9wX",
            description: " PB&J designs a full trip including commuting to a parking space and taking public transit to your concert venue. This mobile app won 3rd out of over 300 participants at INRIX Hack 2023."
        },
        {
            title: "Vertical Profiler (AUV)",
            link: "https://www.linkedin.com/feed/update/urn:li:activity:7109300367397425152/",
            video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7109300133057495040",
            description: "Over the summer of 2023, I helped develop an autonmous vertical profiler with a PI controller. It dives to user-specified depths to collect data."
        },
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
                <h1 className="font-syncopate"><blu><strong>Projects</strong></blu></h1>
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