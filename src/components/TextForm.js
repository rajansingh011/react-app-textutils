import React, {useState} from 'react'

// import PropTypes from 'prop-types'

function TextForm(props) {

    const[text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase.", "success")
    }

    const handleLowerCaseClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase.", "success")
    }

    const handleClearTextClick = () => {
        setText('')
    }

    const handleCopyClipboardClick = () => {
        navigator.clipboard.writeText(text)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleRemoveExtraSpaceClick = () => {
        let textExtraSpaces = text.replace(/  +/g, ' ');
        setText(textExtraSpaces)
    }
    
    const handleConvertCamelCaseClick = () => {
        let camelCaseText = text.replace(/\s+(.)/g, function(match, index) {
            return match.toUpperCase();
          });
        setText(camelCaseText)
    }

    let fontColor,backgrounColor = '';

    if(props.mode === 'dark')
    {
        fontColor = 'white';
        backgrounColor = 'grey';
    }
    else
    {
        fontColor = 'black';
        backgrounColor = 'white';
    }

    return (
        <>
        <div className="container" style={{color : fontColor}}>
            <h1 className="fs-5">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : backgrounColor, color : fontColor}}  id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1 btn-sm fs-6" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-1 btn-sm fs-6" onClick={handleLowerCaseClick}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-1 btn-sm fs-6" onClick={handleConvertCamelCaseClick}>Convert To Camelcase</button>
            <button className="btn btn-primary mx-1 btn-sm fs-6" onClick={handleCopyClipboardClick}>Copy To Clipboard</button>
            <button className="btn btn-primary mx-1 btn-sm fs-6" onClick={handleRemoveExtraSpaceClick}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1 btn-sm fs-6" onClick={handleClearTextClick} >Clear Text</button>
        </div>
        <div className="container my-4" style={{color : fontColor}}>
            <h1 className="fs-5">Your text summary:</h1>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(" ").length} Minutes to read.</p>
            <h2 className="fs-6">Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

// TextForm.propTypes = {

// }

export default TextForm

