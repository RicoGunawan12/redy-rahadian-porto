// SpinningText.js
import React, { useEffect } from 'react';
import '../css/spin.css';

function SpinningText() {
    useEffect(() => {
        const text = document.querySelector('.text p');
        text.innerHTML = text.innerText.split("").map((char, i) => {
            console.log(char, i);
            if (char === '.') {
               if (i === 24) {
                return `<span style="color: blue; transform: rotate(${i * 4.3}deg);">${char}</span>`;
               }
               else if (i === 52){
                return `<span style="color: green; transform: rotate(${i * 4.3}deg);">${char}</span>`;
               }
               return `<span style="color: red; transform: rotate(${i * 4.3}deg);">${char}</span>`;
            }
            return `<span style="transform: rotate(${i * 4.3}deg);">${char}</span>`;
        }).join("");
    }, []);

    return (
        <div className='circle'> {/* Circle */}
            <div className='logo'>
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="arrow-down"><path fill="white" d="M17.71,11.29a1,1,0,0,0-1.42,0L13,14.59V7a1,1,0,0,0-2,0v7.59l-3.29-3.3a1,1,0,0,0-1.42,1.42l5,5a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l5-5A1,1,0,0,0,17.71,11.29Z"></path></svg>
                
            </div> {/* Logo */}
            <div className='text'> {/* Text */}
                <p>scroll&nbsp;down <span style={{color:'red'}}>&nbsp;.&nbsp;</span> scroll&nbsp;down <span style={{color:'red'}}>&nbsp;.&nbsp;</span> scroll&nbsp;down <span style={{color:'red'}}>&nbsp;.&nbsp;</span> </p>
            </div>
        </div>
    );
}

export default SpinningText;
