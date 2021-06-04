
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'

import './year.css'
const Year_calendar = ({date_year,add_year,sub_year}) => {   
    
    return(
        <div className='container_year'>
            <button onClick={sub_year}>
            <FiChevronLeft />
            </button>
            <div className='ano'>
            {date_year}
            </div>
            <button onClick={add_year}>
            <FiChevronRight />
            </button>
        </div>
    )

}
export {Year_calendar}