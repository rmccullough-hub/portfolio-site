function Contact() {
    return (
        <div id="contact" className="contact-container">
            <div className="project" style={{'width':'600px', 'height':'500px', 'backgroundColor':'lightgrey'}}>
                <div className="dot red-dot"></div>
                <div className="dot yellow-dot"></div>
                <div className="dot green-dot"></div>
                <hr />  
                <p style={{'fontSize':'25px'}}>Contact Me!</p>
                <form>
                    <div className='form-control'>
                        <label htmlFor='email'>Email </label>
                        <input
                        type='email'
                        id='email'
                        name='email'
                        //   value={person.email}
                        //   onChange={handleChange}
                        />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='subject'>Subject </label>
                        <input
                        type='text'
                        id='subject'
                        name='subject'
                        //   value={person.firstName}
                        //   onChange={handleChange}
                        />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='message'>Message </label>
                        <textarea
                        style={{'width':'400px', 'height':'150px'}}
                        type='text'
                        id='message'
                        name='message'
                        //   value={person.age}
                        //   onChange={handleChange}
                        />
                    </div>
                    <button type='submit' className='btn'>
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact