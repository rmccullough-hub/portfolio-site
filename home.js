
function Home() {
    var bits = []
    for(var i = 0; i < 30; i++) {
        var listOfNumbers = '';
        for(var e = 0; e < 8; e++){
        var topPosition = Math.round((Math.random() * 100))
        if (topPosition >= 88){
            topPosition -= 3
        }
        topPosition = topPosition.toString() + '%'
        var leftPosition = Math.round((Math.random() * 100)).toString() + '%'
        listOfNumbers += Math.round(Math.random()).toString();
        }
        bits.push({bit:listOfNumbers, top:topPosition, left:leftPosition})
        console.log({bit:listOfNumbers, top:topPosition, left:leftPosition})
    }

    var key = 0

    const getKey = () => {
        return key++
    }

    
    return (
    <div className="home"> 
        <div className="header">
            <h1 style={{'zIndex':'5'}}>Hello, I'm Ryan</h1>
            <h3 style={{'zIndex':'5'}}>A student and software developer</h3>
        </div>
        <a href="#projects"><i className="arrow"></i></a>
        <div className="bits-container">
            {bits.map((bit)=>{
            return<p className="bit" key={getKey()} style={{'position':'absolute','top':bit.top, 'left':bit.left, 'zIndex':'1'}}>{bit.bit}</p>;
            })}
        </div>
    </div>
    );
}

export default Home;