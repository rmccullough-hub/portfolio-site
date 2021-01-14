import arrow from './assets/arrow.svg'
import github from './assets/github.svg'
import linkedin from './assets/linkedin.svg'
import gmail from './assets/gmail.svg'
import {useState, useRef} from 'react'
function Navbar() {

    const [copySuccess, setCopySuccess] = useState('');
    const [show, setShow] = useState(false)

    const textAreaRef = useRef(null);

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }

    const copyToClipboard = async (e) => {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('Copied!');
        setShow(true)
        await sleep(3000)
        setShow(false)
    };

    return (
        <>
            <nav className="top-nav">
                <p id="firstX">+</p>
                <p id="secondX">+</p>
                <p id="thirdX">+</p>
                <ul>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="https://ryanm-portfolio.herokuapp.com/view-pdf/" target="_blank" rel="noopener noreferrer">Resume</a></li>
                </ul>
            </nav>
            <nav className="side-nav">
                <a href="https://github.com/rmccullough-hub" target="_blank" rel="noopener noreferrer"><img style={{'marginTop':'130px'}} className="side-nav-item" src={github} alt="github"/></a>
                <a href="https://www.linkedin.com/in/ryan-c-mccullough/" target="_blank" rel="noopener noreferrer"><img className="side-nav-item" src={linkedin} alt="linkedin"/></a>
                <img style={{'cursor':'pointer'}} onClick={copyToClipboard} className="side-nav-item" src={gmail} alt="linkedin"/>
            </nav>
            {show && <h1 style={{'color':'green','fontSize':'18px','position':'absolute','top':'-15%','left':'37%'}}>My email has been copied to your clipboard!</h1>}
            <h1>Hello, I'm Ryan. <br/> I'm a full-stack developer.</h1>
            <a href="#projects"><button className="link-to-work">Check out my work</button></a>
            <a href="#projects"><img className="arrow" src={arrow} alt="arrow"/></a>
            <form style={{'backgroundColor':'white', 'border':'none'}}>
                <textarea 
                style={{'width':'0px', 'height':'0px', 'position':'absolute','bottom':'-100%', 'opacity':'0'}}
                ref={textAreaRef}
                value='ryanmcculloughuc@gmail.com'
                />
            </form>
        </>
    );
}

export default Navbar;

