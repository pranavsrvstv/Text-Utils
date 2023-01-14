import React from 'react'
import { useState } from 'react'

export default function About(props) {

    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });
    // const[btnText,setbtnText]=useState('Enable Kira Mode');

    let myStyle={
        backgroundColor:props.mode==='light'?'white':'#0B3B5A',
       color: props.mode!=='light'?'white':'#0B3B5A',
       border:'2px solid black'
    }
    // const toggleStyle = () => {
    //     if (myStyle.color === 'white') {
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         //setbtnText('Enable Kira Mode');


    //     }
    //     else {
    //         setmyStyle(
    //             {
    //                 color: 'white',
    //                 backgroundColor: 'black'

    //             }
    //         )
    //         //setbtnText('Enable Light Mode');

    //     }
    // }
    return (
        <div className="container py-3 my-3" style={myStyle}>
            Project Name- Text Utils 
            <br />
            Created By- Pranav Shrivastava 
            <br />
            Github profile-
            <a href="https://github.com/pranavsrvstv/Text-Utils" style={{textDecoration:"none",color:'green',fontSize:'20px'}}>Click Here</a>
            <br />
            Description - A simple text utility app to count characters, number of words and to narrate the entered text

        </div>
    )
}
