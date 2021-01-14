import Project from './project'
import fantasyCode from './assets/FantasyCode.png'
import fantasySite from './assets/FantasySite.png'
import stockCode from './assets/StockCode.png'
import stockSite from './assets/StockSite.png'
import portfolioCode from './assets/PortfolioCode.png'
import portfolioSite from './assets/PortfolioSite.png'

function Projects() {
    const project1 = {'title':'Fantasy Football AI', 'tags':['Python', 'Django','React','JS'],'code':fantasyCode,'site':fantasySite, 'siteURL':'https://ryanmccullough-assistantcoach.herokuapp.com/','codeURL':'https://github.com/rmccullough-hub/assistant-coach'}
    const project2 = {'title':'Stock Ranking Algo', 'tags':['Python', 'Django','React','JS'],'code':stockCode,'site':stockSite,'siteURL':'https://algo-stock-board.herokuapp.com/','codeURL':'https://github.com/rmccullough-hub/stock-ranking-algo'}
    const project3 = {'title':'Portfolio Site', 'tags':['Python', 'Django','React','JS'],'code':portfolioCode,'site':portfolioSite,'siteURL':'https://ryanm-portfolio.herokuapp.com/','codeURL':'https://github.com/rmccullough-hub/portfolio-site'}
    
    return (
        <div className="projects-page">
            <h3 id="projects">Projects</h3>
            <div className="projects-container">
                <Project {...project1}/>
                <Project {...project2}/>
                <Project {...project3}/>
            </div>
            <div className="right-bar"></div>
            <div className="bottom-bar"></div>
        </div>
    );
}

export default Projects;