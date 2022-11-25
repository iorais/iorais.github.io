import "./Project.css";
import "./assets/chess.mp4";
import { AiOutlineLink } from 'react-icons/ai';


export default function Projects() {
    return ( 
        <div className="proj">
            <h1 className="font-audiowide">Projects</h1>
            
            <div className="proj">
                <card>
                    <iframe className="preview" allowFullScreen
                        src="https://www.youtube.com/embed/39aNTYJP-SQ?rel=0&controls=0">
                    </iframe>
                    <div className="description">
                        <p1 className="font-syncopate">
                            <blu>Nest</blu>Notifcations
                        </p1>
                        <a href="https://devpost.com/software/nestnotifications">
                            <AiOutlineLink className="link"/>
                        </a>
                        <br/><br/>
                        <p2 className="font-roboto">
                        Location apps like findMy and Life360 are advertised for
                            safety.
                            Often times, apps like these cause parents to peer into 
                            their teen's social life, causing a toxic relationship.
                            This can also lead the teen to turn off the app all
                            together.
                            <br/><br/> 
                            My team and I wanted to create a location sharing app that
                            still emphasizes safety while prioritizing our users' 
                            privacy. NestNotifcations puts more control in the hands of
                            our users.
                            <br/><br/>
                            This mobile app was developed for my very first hackathon. 
                            We were only able to finish within the time constraints 
                            because of our communication.
                        </p2>
                    </div>
                </card>
                <card>
                <iframe className="preview" allowFullScreen
                        src="https://youtube.com/embed/QRhHHW0mFVU?rel=0&controls=0">
                </iframe>
                    <div className="description">
                        <p1 className="font-syncopate">
                            <blu>Chess</blu>
                        </p1>
                        <a href="https://studio.code.org/projects/applab/PytrwcA-1kHTsWuHPw6mt1aRKfvBBnu_dVIV1eSF8c0">
                            <AiOutlineLink className="link"/>
                        </a>
                        <br/><br/>
                        <p2 className="font-roboto">
                           Chess
                            <br/><br/> 
                           I made chess
                            <br/><br/>
                            This is chess
                        </p2>
                    </div>
                </card>
            </div>
        </div>  
    )
}