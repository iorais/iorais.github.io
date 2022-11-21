import React from 'react';
import "./Footer.css"
import { SocialIcon } from 'react-social-icons';


export default function Footer() {
    return ( 
        <div>
            <foot className="foot">
                <SocialIcon url="https://linkedin.com/in/isaacorais" fgColor="#ffffff" />
                <SocialIcon url="https://github.com/iorais" fgColor="#ffffff" />
                <a className="font-syncopate">
                    Contact Me: isaacorais2002@gmail.com
                </a>
            </foot>
        </div>   
    )
}