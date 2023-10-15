import React, { useState } from 'react';
function WordCounter() {
    const [text, setText] = useState('');
    const handleTextChange = (e) => {
        setText(e.target.value);
    };
    const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
    const containerStyle = {
        padding: '20px',
        border: '5px solid #ccc',
        borderRadius: '10px',
        width: '80%',  
        margin: '0 auto', 
        textalign: 'center'
      };
    const textareastyle={
        width:'40%',
        border: '3px solid #ccc'
      }
    return (
        <div style={containerStyle}>
            <div>
                <div>
                    <h2>Responsive Paragraph Word Counter</h2>
                </div>
                <textarea
                    placeholder="Enter your text here..."
                    rows="6"
                    onChange={handleTextChange}
                    value={text}
                    style={textareastyle}
                />
                <p>Word Count: {wordCount}</p>
            </div>
        </div>
    );
}
export default WordCounter;