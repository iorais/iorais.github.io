import "./Resume.css";
import {Element} from "react-scroll";

export default function Resume() {
    return ( 
        <Element name="Resume" className="font-roboto">
            <h1 className="font-audiowide">Resume</h1>
            <body>
                <p><blu>EDUCATION</blu></p>
                <br/>
                <p><blu>Santa Clara University - Santa Clara, CA, US</blu></p>
                <p>B.S. Computer Science and Engineering &emsp; September 2021 - June 2025</p>
                <p>Minor Electrical and Computer Engineering &emsp; GPA: 3.7</p>
                <ul>
                    <li>Clubs: Association of Computer Machinery, Institute of Electrical and Electronics Engineers, Brazilian Jiu-Jitsu.</li>
                    <li>Awards: Dean’s List ‘21 and ‘22, 2nd ACM Summer Challenge ‘22, 4th INRIX Hack ‘22, 1st SCU Jiu-Jitsu Tournament.</li>
                    <li>Courses: Data Structures, Algorithms, OOP, Networks, Embedded Systems, Logic Design, Digital IC Design, </li>
                </ul>
                <p>ROS II One-day Workshop, Discrete Math, Linear Algebra, Probability and Statistics, Physics Electricity &amp; Magnetism.</p>
                <br/>
                <p><blu>Self-Study</blu></p>
                <ul>
                    <li>University of California Berkeley: Intro to Artificial Intelligence.</li>
                    <li>Stanford University: Machine Learning with Graphs.</li>
                </ul>
                <br/>
                <br/>
                <p><blu>SKILLS</blu></p>
                <p>Python, JavaScript, React.js, Node.js, C, C++, Arduino, ARM Assembly, Verilog, Unix/Linux, Git, Soldering.</p>
                <br/>
                <br/>
                <p><blu>PROFESSIONAL EXPERIENCE</blu></p>
                <br/>
                <p><blu>SCU Video and Image Processing Lab - Santa Clara, CA, US</blu></p>
                <p>Research Assistant &emsp; September 2023 - Present</p>
                <ul>
                    <li>Tasked with creating deep learning model for omnidirectional super resolution (enhancing 360 degree images). Working in a team of two under Dr. Ying Liu to participate in the NTIRE Challenge 2024 for omnidirectional images.</li>
                    <li>Researching state of the art algorithm development techniques in image processing/computer vision to implement and improve WS-PSNR. Learning to leverage deep learning tools such as GPU programming and TensorFlow/PyTorch.</li>
                </ul>
                <br/>
                <p><blu>SCU Robotic Systems Lab - Santa Clara, CA, US</blu></p>
                <p>Research Assistant &emsp; July 2023 - September 2023</p>
                <ul>
                    <li>Programmed state-machine-based autonomous underwater vehicle (vertical profiler) to dive for data collection w/ <u>Arduino</u>. Led software team and facilitated communication cross-functionally between mechanical team.</li>
                    <li>Integrated depth sensor and thruster for PI controller w/ <u>C++</u> in real-time. Improved error logging system for debugging and prototyping. Designed GUI for data pipeline w/ <u>Python</u>. Assisted with electronic wiring and <u>Soldering</u>.</li>
                    <li>Deployed prototype for testing and had 19 successful trials. Contributed over 100 commits to codebase and compiled comprehensive documentation. Refined robot for customer to utilize in monitoring artificial reefs.</li>
                </ul>
                <br/>
                <p><blu>Mentor Collective - Santa Clara, CA, US</blu></p>
                <p>School of Engineering Mentor &emsp; July 2023 - Present</p>
                <ul>
                    <li>Mentored two Computer Science and Engineering freshman at Santa Clara University. Provided guidance in professional development, academic planning, and effective time management abilities.</li>
                </ul>
                <br/>
                <p><blu>RadicalX -  New York, NY, US</blu></p>
                <p>Software Engineering Intern &emsp; September 2022 - November 2023</p>
                <ul>
                    <li>Managed team of interns through sprints to design interface for job listings platform over a course of 8 weeks.</li>
                    <li>Implemented features such as nav bar, homepage, and graphics based on figma design w/ <u>React.js</u>. Coordinated meetings and bridged communication gaps between frontend / backend.</li>
                </ul>
                <br/>
                <br/>
                <p><blu>PROJECTS/OPEN-SOURCE</blu></p>
                <br/>
                <p>PB&amp;J (Park Bus and Jam) — 3rd Place at INRIX Hack 2023</p>
                <ul><li>Optimized travel time to concerts w/ Flutter mobile app leveraging Ticket Master API, INRIX Parking API, and Google Maps API for transit w/ Flask backend.</li></ul>
                <br/>
                <p>CourseCalendar</p>
                <ul><li>Constructed API wrapper w/ JavaScript compiler Node.js for streamlined class scheduling by integrating Santa Clara University’s CourseAvail API and Google Calendar API enhancing data accuracy and increasing efficiency.</li></ul>
                <br/>
                <p>Nest Notifications — 4th Place at INRIX Hack 2022</p>
                <ul><li>Led team to develop a custom Flask REST API to communicate to send SMS and display INRIX’s eta polygon on a google maps user interface and incorporated API with client Flutter App (Android and IOS) and database.</li></ul>
                <br/>
                <p>Board Games — 2nd at SCU ACM’s Summer Challenge 2022</p>
                <ul><li>Developed 3 local multiplayer board games: TicTacToe, Connect4, and Chess w/JavaScript in code.org app lab.</li></ul>
            </body>
        </Element>
    )
}