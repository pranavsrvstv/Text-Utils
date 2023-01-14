import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked");
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("success","Converted to Uppercase");
        

    }
    const handleLoClick=()=>{
        //console.log("Uppercase was clicked");
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("success","Converted to Lowercase");

    }
    const handlecopy=()=>{
        navigator.clipboard.writeText(text.value);
        props.showAlert("success","Copied to Clipboard");



    }
    const getEmailfromtext=()=>{
        let myEmail=text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
       // setText(myEmail);
       console.log(myEmail);
       props.showAlert("success","Fetched email in console");
    }
    const handleOnChange=(event)=>{
        //console.log("OnChange was clicked");
        setText(event.target.value);// this will allow us to type in the text area , when we type handleOnchange is called, then from handleonchange text is updated, textarea value is text ,which is changed

       

    }
  
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent == "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML = "Speak"){
                window.speechSynthesis.cancel()
            }
        }
        props.showAlert("success","Speak is enabled");
    }
   
    
    return (
        <>
        <div className='my-2'>
        <h1  className="my-2" style={{color:(props.mode=='light')?'black':'white'}}>{props.heading}</h1>
            <div className="mb-3" >
                
                
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3" style={{backgroundColor:(props.mode=='light')?'white':'#99C6E3'}}></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert To UpperCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To LowerCase</button>
            <button type="submit" onClick={speak} className="btn btn-warning mx-1 my-1" id="toggle">Speak</button>
            <button type="submit" onClick={handlecopy} className="btn btn-warning mx-1 my-1" id="toggle">Copy</button>

            <button  onClick={getEmailfromtext} className="btn btn-primary mx-1 my-1" >GetEmail</button>
        </div>
        <div className="container my-3"  style={{color:(props.mode=='light')?'black':'white'}}>
            <h1 >Your text summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0;}).length} words and {text.length} characters</p>
            <p>Time to read: {0.008*text.split(/s+/).filter((element)=>{return element.length!==0;}).length} minutes</p>
            <h1>Preview</h1>
            <p> {text} </p>
        </div>

        </>
        
    )
}
