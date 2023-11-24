import "./Projectcard.css";
import { AiOutlineLink } from 'react-icons/ai';

export default function Projectcard(props) {
    const title = props.title;
    const link = props.link;
    const video = props.video;
    const description = props.description;

    return ( 
        <div> 
            <div className="proj">
                <card>
                    <p1 className="font-syncopate"> {title} </p1>
                    <a href={link}> 
                        <AiOutlineLink className="link"/> 
                    </a>
                    <iframe className="preview" allowFullScreen src={video} />
                    <div className="description">
                        <p2 className="font-roboto"> {description} </p2>
                    </div>
                </card>
            </div>
        </div>
    )
}