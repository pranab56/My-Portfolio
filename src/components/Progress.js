import React from 'react';


const Progress = ({value,max}) => {
  
    return (
        <div>
          <progress class="progress progress-warning max-w-md" value={value} max={max}></progress>
        </div>
    );
    
};




export default Progress;
