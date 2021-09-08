import brainiac from './images/brainiac.png'
import me from './images/me.JPG'
import {ListGroup, Button, Navbar} from 'react-bootstrap'
function HomePage() {
    return (
        <div>
            <div className = "introduction">
                <h1><b>Hello, I am a passionate software engineer looking for new opportunities to utilize my skills. 👨‍💻</b></h1>
            </div>
            <div className = "header">
                <h2><b>About Me</b>
                </h2>
                
            </div>
            <div className = "aboutMeInfo">
                <div className = "aboutMeText">
                <h5>I am a recent graduate of Stony Brook University where I received my B.S. in Computer Science.
                <br></br>
                <br></br>
                Feel free to reach out to me about anything technology...or fashion or music related 👖🎧</h5>
                
                <br></br>
                <h5>What I've been working with recently...</h5>
                <ListGroup variant="flush">
                    <ListGroup.Item>React.js</ListGroup.Item>
                    <ListGroup.Item>Node.js</ListGroup.Item>
                    <ListGroup.Item>Python</ListGroup.Item>
                    <ListGroup.Item>Java</ListGroup.Item>
                </ListGroup>
                </div>
                <img className = "mePhoto" src = {me} alt = "me"/>
            </div>
            <div className = "header">
                <h2><b>Experience</b></h2>
            </div>
            <div className = "experienceOne">
                <h3>
                    <b>
                        Guardian Life Insurance Company of America
                    </b>
                </h3>
                <div className = "listOne">
                <h5>
                - Collaborated with UI Design team to create new insurance claims portal interface to improve claims specialist experience
                <br></br>
                - Utilized React.js to integrate highly reusable front-end components to claims portal
                <br></br>
                - Helped facilitate company wide migration from mainframe storage to Amazon Web Service cloud storage
                <br></br>
                - Worked with insurance portal development team utilizing Agile framework and daily Scrum calls
                <br></br>
                - Created fully functioning front-end React.js web application for connecting employees and potential mentors with similar interests for annual summer intern design challenge
                </h5>
                </div>
            </div>
            <div className = "header">
                <h2><b>Projects</b></h2>
            </div>
            <div className = "project">
                <div className = "projectDesc">
                    <h3>
                        <b>
                            Brainiac
                        </b>
                        <br></br>
                        A fully customizable learning application with shareable games of Multiple Choice, Fill in the Blank, Flashcards, and Matching
                    </h3>
                </div>
                <img className = "projectPhoto" src = {brainiac} alt = "Brainiac" />
            </div>
            <div className = "project">
                <div className = "projectDesc">
                    <h3>
                        <b>
                            Spotify Profile Display
                        </b>
                    </h3>
                </div>
                {/* <img className = "projectPhoto" src = {brainiac} alt = "Brainiac" /> */}
            </div>
            
        </div>
    )
}

export default HomePage;