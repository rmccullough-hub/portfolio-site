import code from './assets/code.svg'
import framework from './assets/framework.svg'
import interest from './assets/interest.svg'
import triangle from './assets/triangle.svg'

function About() {
    return (
        <>
            <img className="triangle" src={triangle}/>
            <div className="about-page">
                <h4 id="about">About Me</h4>
                <div>
                    <img className="about-img"src={code}/>
                    <h6 className="about-header">Programming Languages</h6>
                    <br />
                    <p className="desc">
                        The programming languages that I use most frequently are <strong> Python, JavaScript, C++, and Golang.</strong> In addition to these technologies, I am familiar with <b>Rust and Dart.</b>
                    </p>
                </div>
                <div>
                    <img className="about-img" src={framework}/>
                    <h6 className="about-header">Frameworks</h6>
                    <br />
                    <p className="desc">
                        The backend web frameworks that I use are <strong>Django (Python) and Beego (Golang).</strong> On the frontend I use <b>React</b> for building web UIs and React Native for mobile UIs. 
                        As an alternative to React Native, I am exploring Flutter for building mobile apps.
                        For building desktop GUIs, I use C++ and <b>Qt Creator</b>. 
                    </p>
                </div>
                <div>
                    <img className="about-img" src={interest}/>
                    <h6 className="about-header">Interests</h6>
                    <br />
                    <p className="desc">
                        In my free time I like to surf, read and build small coding projects. 
                        In college I studied Economics, so naturally data science and finance are intriguing subjects to me.
                        I am open to work as a full-stack or backend developer at a medium to large company.
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;