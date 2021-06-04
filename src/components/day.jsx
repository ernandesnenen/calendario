import { useEffect, useRef } from "react"

let selectDays = []
export const Day = ({children}) =>{
    const td = useRef(null)

    useEffect(()=>{
           if(td.current.className){
            td.current.className = 'onSelect'
           }

    })   
    function handleClick() {  
       
        if(td.current.innerText === ''){
            
        }else{

            td.current.className !== 'inSelect' ? td.current.className  = 'inSelect': td.current.className  = 'onSelect'
            if(selectDays.indexOf(td.current.innerText) === -1){
                selectDays.push(td.current.innerText)
            }else{
                selectDays.splice(selectDays.indexOf(td.current.innerText), 1)
             }

            }
           console.log(selectDays)
       }
    return (
        <td  ref={td} onClick={handleClick}> {children }</td>

    )
 }
