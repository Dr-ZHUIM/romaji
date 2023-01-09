import React, { FC, forwardRef, useRef } from "react";
import { isJapanese } from "wanakana";

const Translator = forwardRef<string, any>((props, ref) => {

    const inputRef = useRef<HTMLAreaElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (typeof ref != "function" && ref != null && ref.current) {
            ref.current = e.target.value;
            console.log('ref.current', ref.current)
        }
    }

    return (
        <>
            <p>{props.title}</p>
            <textarea style={{fontSize: "24px", fontFamily: "Int"}} {...props} onChange={handleChange} ref={inputRef}  cols={70} rows={40}></textarea>
        </>
    )
})

export default Translator;