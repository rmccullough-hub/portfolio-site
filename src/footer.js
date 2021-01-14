import contact from './assets/contact.svg'
import info from './assets/info.svg'
import {useState} from 'react'

function Footer() {
    // ConnorTij458kiqJM!BR!
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [messageSent, setMessageSent] = useState(false);

    const getCookie = (name) => {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        var csrftoken = getCookie('csrftoken')
        if (subject && email) {
          const p = { id: new Date().getTime().toString(), 'subject':subject, 'email':email, 'message':message };
          
          fetch('https://ryanm-portfolio.herokuapp.com/email/', {
            method:'POST',
            headers:{
              'Content-type':'application/json',
              'X-CSRFToken':csrftoken,
            },
            body:JSON.stringify(p)
          }).catch(function(error){
            console.log('ERROR:', error)
          })
    
              setSubject('');
              setEmail('');
              setMessage('')
              setMessageSent(true)
              setTimeout(()=>setMessageSent(false), 4000)
            } else {
              console.log('empty values');
            }
          };

    return (
        <>
        <img id="contact" src={contact}/>
        <h6 id="insta">mccullough.09</h6>
        <h6 id="phone-num">(619) - 788 - 1451</h6>
        <h6 id="address">San Diego, CA 92117</h6>
        <footer>
            <form onSubmit={handleSubmit}>
                {!messageSent ? <h5>Contact Me</h5> : <h5>Message Sent</h5>}
                <input 
                style={{'marginTop':'70px'}} 
                type="email" 
                id="email" 
                name="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email"
                />
                <input 
                type="text" 
                placeholder="Subject"
                id="subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                />
                <textarea 
                placeholder="Message"
                type="text"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button type="submit" className="form-btn">SEND</button>
            </form>
        </footer>
        </>
    );
}

export default Footer;