import { useEffect } from "react"

const Toast = ({text,setText}:{text:String,setText:Function})=>{

    useEffect(()=>{
        if(text && text?.trim()!='') setTimeout(()=>setText(''),2000)
    },[text])

    return (
        <>
        {text &&
            <h2 className="toast">{text}</h2>
        }
        </>
    )
}

export default Toast