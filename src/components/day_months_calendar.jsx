

import { setDate, getDay, lastDayOfMonth} from 'date-fns'
import './day.css'
import { Day } from './day'


const Days_month = ({days_month_year, date_day}) => {
 
    // let daySelect = []

  const dias = days_month_year.map(day=> day.getDate()) 
  let firstDayMonth= getDay(setDate(date_day, 1))
  //isso traz a data com o ultimo dia do mês
  let lastDayMonth = lastDayOfMonth(date_day)

  // isso traz o ultimo dia do mes 30 31 29
  let ultimoDiadoMes =lastDayMonth.getDate()

// isso forma o array com os dias do mes
let diasDoMes=[]
let showLines = ((dias.length + firstDayMonth) % 7 === 0 ) ? dias.length + firstDayMonth : 7 - (dias.length + firstDayMonth) % 7 + dias.length + firstDayMonth ;

for(let x = 0;x<showLines;x++){
    let y = 0
if(x< firstDayMonth){
    diasDoMes.push('')
}else if(x>=(ultimoDiadoMes+firstDayMonth)){    
    diasDoMes.push('')
}else{
y= x-firstDayMonth
diasDoMes.push(dias[y])
}
}

let celulas =[]
let linhas =[]
// criar as tds ou celulas da tabela
diasDoMes.map((item, index )=> celulas.push(<Day id={index} key={index}  >{item}</Day>))
      
// criar as trs ou linhas da tabela
for(let b= 0;b<6;b++){
   linhas[b]=(<tr key={b}>{celulas.splice(0,7)}</tr>)
}  
    
    return(
        <div className='container_days'>
        <table>
            <thead>
                <tr>
                    <th>Dom</th>
                    <th>Seg</th>
                    <th>Ter</th>
                    <th>Qua</th>
                    <th>Qui</th>
                    <th>Sex</th>
                    <th>Sab</th>
                </tr>           
            </thead>
            <tbody >
                {linhas}
            </tbody>
            
        </table>
        </div>
          ) 
        
}
export {Days_month}