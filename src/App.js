import {  useEffect,  useState } from 'react';
import { Months_calendar } from './components/months_calendar';
import { Year_calendar } from './components/year_calendar';
import { getMonth, getYear, lastDayOfMonth, startOfMonth, setMonth, setYear, eachDayOfInterval} from 'date-fns'
import { Days_month } from './components/day_months_calendar';
import './App.css'


function App() {
   let [date, setDate ]= useState(new Date())
   let [year, setYear_c] = useState(getYear(date))   
   let [month, setMonth_c] = useState(getMonth(date))
   let [days, setDays] =useState([])
 

   
   
   
   
   useEffect(()=>{
     setDays( eachDayOfInterval({
       start: startOfMonth(date),
       end: lastDayOfMonth(date)
      }))
       
      
      
    },[month, year, date])  
  

// -------------------------------Month-------------------------------------
   function add_month(){
    if(month >= 11){
      setYear_c(year + 1)
      setMonth_c(0)
      setDate( new Date(`01/01/${year+1}`) )
    
      
      return
            
    }
    setMonth_c(month+1)
    setDate(setMonth(date, month+1)) 
    }

   function sub_month(){        
     setMonth_c(month-1)
     setDate(setMonth(date, month-1))
     
   }
// -----------------------------year-------------------------------------------
   function add_year(){
       setYear_c(year + 1)
       setDate(setYear(date, year+1))  
      }
      function sub_year(){
        setYear_c(year - 1)
        setDate(setYear(date, year-1))  
   }
// -------------------------------------------------------------------------------

 
  return (
   <div className='rootdiv'>

  
    <div className='container_calendar'>
      <div className='anomes'>       
        <Year_calendar date_year={year} add_year={add_year} sub_year={sub_year} />
        <Months_calendar date_month={month} add_month={add_month} sub_month={sub_month}  />       
      </div> 
      <div className='days'>
        <Days_month days_month_year={days} date_day={date}/>
      </div>      
    </div>
    <div className='left'>

    </div>
    </div>
     );
}

export default App;
