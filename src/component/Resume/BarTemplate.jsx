
import { useState } from 'react';
import ProgressBar from './ProgressBar';

const BarTemplate = ({title,persent}) => {
    const [count ,setCount] = useState(0)
    const progressCount = (count) =>{
        setCount(count)
    }
    return (
        <div>
            <div className='text-white'>
               <div className='flex justify-between items-center'>
                <span> {title}</span>
                <span>{count}%</span>
               </div>
                <ProgressBar skillLevel={persent} name='Html' progressCount={progressCount}/>
            </div>
        </div>
    );
};

export default BarTemplate;