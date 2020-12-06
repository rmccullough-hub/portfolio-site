import python from './assets/Python-logo-notext.svg'
import cpp from './assets/cpp_logo.png'
import react from './assets/React-icon.png'
import css3 from './assets/css3.png'
import html from './assets/HTML5_Badge_512.png'
import javascript from './assets/javascript.png'
function About() {
    return (
        <div id="about" className="about-section">
            <div className="about-container">
                <div style={{'width':'450px', 'padding':'80px'}}>
                    <h2> Skills</h2>
                    <section>
                    <p style={{'color':'white'}}>Programming Languages</p>
                        <img className="python-logo" src={python} alt="Python"/>
                        <img className="cpp-logo" src={cpp} alt="C++"/>
                        <img className="javascript-logo" src={javascript} alt="JavaScript" />
                    </section>
                    <section style={{'position':'relative', 'display':'flex','justifyContent':'center','alignItems':'center'}}>
                        <p style={{'color':'white'}}>Web Technologies</p>
                        <img className="react-logo"  src={react} alt="react" />
                        <img className="html-logo" src={html} alt="HTML"/>
                        <img className="css-logo"  src={css3} alt="CSS" />
                    </section>
                </div>
                <div style={{'width':'450px', 'padding':'80px', 'marginBottom':'2rem'}}>
                    <h2>About</h2>
                    <p style={{'color':'white'}}>
                        I was born and raised in San Diego. Other than coding, my interests include investing, reading, and surfing.
                        I am currently studying Economics at San Diego State University. 
                        A primary goal of mine is to understand how I can utilize machine learning and data science to model and predict various economic phenomena.
                        This skill appears to be increasingly useful to businesses. 
                        Achienving it would make me useful to businesses, and better prepare me for starting a company of my own. 
                        My favorite books are Lessons for Corporate America, a collection of Warren Buffet essays; 12 Rules for life by Jordan B. Peterson, a compelling reminder of simple yet essential truths such as the importance of honesty and correct moral action; Behave by Robert Sapolsky an indepth esplanation of why humans act in various way.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
