import "./Project.css";
import "./assets/chess.mp4";
import { AiOutlineLink } from 'react-icons/ai';


export default function Projects() {
    return ( 
        <div className="proj">
            <h1 className="font-audiowide">Projects</h1>
            
            <div className="proj">
                <card>
                    <p1 className="font-syncopate">
                            <blu>Nest</blu>Notifcations
                    </p1>
                    <a href="https://devpost.com/software/nestnotifications">
                        <AiOutlineLink className="link"/>
                    </a>
                    <iframe className="preview" allowFullScreen
                        src="https://www.youtube.com/embed/39aNTYJP-SQ?rel=0&controls=0">
                    </iframe>
                    <div className="description">
                        <p2 className="font-roboto">
                            My team and I created a location sharing mobile app with a Flutter frontend and Flask backend.
                            We placed 4th out of over 200 participants at INRIX Hack 2022.
                        </p2>
                    </div>
                </card>
                <card>
                <p1 className="font-syncopate">
                    <blu>Chess</blu>
                </p1>
                <a href="https://studio.code.org/projects/applab/PytrwcA-1kHTsWuHPw6mt1aRKfvBBnu_dVIV1eSF8c0">
                    <AiOutlineLink className="link"/>
                </a>
                <iframe className="preview" allowFullScreen
                        src="https://youtube.com/embed/QRhHHW0mFVU?rel=0&controls=0">
                </iframe>
                    <div className="description">
                        <p2 className="font-roboto">
                            I recreated the classic strategy board game in code.org app lab with JavaScript.
                            This project won 2nd in the ACM Summer Challenge 2022.
                        </p2>
                    </div>
                </card>
            </div>
        </div>  
    )
}