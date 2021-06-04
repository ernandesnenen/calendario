
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import './month.css'
const Months_calendar = ({date_month, add_month, sub_month}) => {

  const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Desembro']  
  
    
    return(
        <div className='container_month'>
          
            <button onClick={sub_month}>
            {date_month >=1 &&
                <FiChevronLeft />}
            </button>
          
            <div className='mes'>
                {meses[date_month]}
            </div>
         

            <button onClick={add_month}>
               
                <FiChevronRight /> 
            </button>
         
        </div>
    )

}
export {Months_calendar}