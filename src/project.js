import heroku from './assets/heroku-logo-stroke-white.svg'
import github from './assets/github.svg'

function Project(props) {
    return (
        <div className="project">
            <div className="project-top">
                <h4 style={{'zIndex':'5','position':'absolute', 'top':'-3%'}}>{props.title}</h4>
                <a href={props.siteURL} target="_blank" rel="noopener noreferrer"><img style={{'flexBasis':'100%'}} src={heroku}/></a>
            </div>
            <div style={{'position':'absolute','width':'100%','height':'47%','top':'47%','backgroundColor':'black','zIndex':'1','opacity':'0.7','display':'flex','justifyContent':'center','alignItems':'center'}}>
                <a href={props.codeURL} target="_blank" rel="noopener noreferrer"><img style={{'flexBasis':'100%','height':'80px'}} src={github}/></a>
                <div className="tag-container">
                    <span className="tag">{props.tags[0]}</span>
                    <span className="tag">{props.tags[1]}</span>
                    <span className="tag">{props.tags[2]}</span>
                    <span className="tag">{props.tags[3]}</span>
                </div>
            </div>
            <img id="site-img" src={props.site}/>
            <img id="code-img" src={props.code}/>
        </div>
    );
}

export default Project;