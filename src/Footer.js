import React from 'react';
import ReactDOM from 'react-dom';
import "./Footer.css"
import { SocialIcon } from 'react-social-icons';


export default function Footer() {
    return ( 
        <div>
            <foot className="foot">
                <SocialIcon url="https://linkedin.com/in/isaacorais" fgColor="#ffffff" />
                <SocialIcon url="https://github.com/iorais" fgColor="#ffffff" />
            </foot>
        </div>   
    )
}