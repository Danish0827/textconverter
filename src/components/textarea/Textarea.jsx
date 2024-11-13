import { useState } from "react"

export const Textarea = ({ heading }) => {
    const [text, setText] = useState('Danish')

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleCaClick = () => {
        let newText = text
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ");
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <div className="container">
                <div className="col-md-12 dark:text-white">
                    {/* <h1 className="my-3 text-3xl font-semibold">Your Text Summary</h1> */}

                    {/* <p className="my-2">{0.008 * text.split(" ").length} Minutes</p> */}
                </div>
                <div className="my-3">
                    <div className="flex mb-3">
                        <h1 className='w-1/2 mb-2 font-semibold dark:text-white'>{heading}</h1>
                        <p className="w-1/2 text-right dark:text-white">{text.split(" ").length} Words {text.length} Character</p>
                    </div>
                    <textarea className="form-control mb-3 dark:bg-slate-500 dark:text-white dark:outline-none" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                    <button className="btn btn-primary dark:border-none dark:bg-slate-500 mr-2 mb-3" onClick={handleUpClick}> CONVERT TO UPPERCASE</button>
                    <button className="btn btn-primary dark:border-none dark:bg-slate-500 mr-2 mb-3" onClick={handleLoClick}> CONVERT TO LOWERCASE</button>
                    <button className="btn btn-primary dark:border-none dark:bg-slate-500 mr-2 mb-3" onClick={handleCaClick}> CONVERT TO CAPITALIZE</button>

                </div>
            </div>
            <div className="container">
                <div className="row">

                    <div className="col-md-12 dark:text-white">
                        <h2 className="my-3 text-3xl font-semibold"> Preview</h2>
                        <p className="break-words">{text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

Textarea.defaultProps = {
    heading: "Enter text here",
}
