import footballProject from './assets/football-project.png'
import stockProject from './assets/stock-project.png'
import portfolioProject from './assets/portfolio-code.png'
function Projects() {
    return(
        <>
        <h4 id="projects">Portfolio</h4>
        <div className="projects-background">
            <div className="project-container">
                <div className="project">
                    <div className="dot red-dot"></div>
                    <div className="dot yellow-dot"></div>
                    <div className="dot green-dot"></div>
                    <hr />  
                    <p>Fantasy Football AI</p>
                    <p style={{'fontSize':'smaller'}}>Python | Django | ML</p>
                    <a href=""><img className="project-img" src={footballProject}/></a>
                    <div className="description">
                        <a href="https://github.com/rmccullough-hub/assistant-coach"><button className="code-btn">Code</button></a>
                        <a href=""><button className="site-btn">Site</button></a>
                        <section>
                        <p style={{'display':'inline'}}>Description: </p>
                        <p>
                        This small automated website curates fantasy football news stories from large content creators such as ESPN and Yahoo.
                            In addition, the site provides player projections using webscraped data and multivariate regression algorithm.
                            I am currently working to improve the prediction algorithm. Hopefully to the point where it is more precise than the predictions released by ESPN.
                        </p>
                        </section>
                    </div>
                </div>

                <div className="project">
                    <div className="dot red-dot"></div>
                    <div className="dot yellow-dot"></div>
                    <div className="dot green-dot"></div>
                    <hr />  
                    <p>Stock Ranking Algo</p>
                    <p style={{'fontSize':'smaller'}}>Python | Django | React</p>
                    <a href=""><img className="project-img" src={stockProject}/></a>
                    <div className="description">
                        <a href="https://github.com/rmccullough-hub/assistant-coach"><button className="code-btn">Code</button></a>
                        <a href=""><button className="site-btn">Site</button></a>
                        <section>
                        <p style={{'display':'inline'}}>Description: </p>
                        <p>
                            Amature investors such as myself do not have as much time as we'd like to thouroughly read financial statements the hundreds of of companies.
                            In an attempt to automate this process for myself and others, I have created an API that asseses the balance sheet, income statement, and cash flows of hundreds of companies and returns the very best of them.
                            This information is then presented on a react frontend.
                        </p>
                        </section>
                    </div>
                </div>

                <div className="project">
                    <div className="dot red-dot"></div>
                    <div className="dot yellow-dot"></div>
                    <div className="dot green-dot"></div>
                    <hr /> 
                    <p>Portfolio Website</p> 
                    <p style={{'fontSize':'smaller'}}>React | HTML | CSS</p>
                    <a href=""><img className="project-img" src={portfolioProject}/></a>
                    <div className="description">
                        <a href="https://github.com/rmccullough-hub/assistant-coach"><button className="code-btn">Code</button></a>
                        <section>
                        <p style={{'display':'inline'}}>Description: </p>
                        <p>
                            While design is not my speacialty, I am interested in making my projects presentable. Humans are visual creatures and I wouldn't want my software to be judged poorly because of the way they look.
                            I also would not want to use a template or hire someone to create a website for me, and miss an opportunity to learn more about react, html an css.
                        </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Projects;