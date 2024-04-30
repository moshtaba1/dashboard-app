import React from 'react'
import "./Features.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';



export default function Features() {
  return (
    <div className='features'>
        <div className='features-item'>
            <span className='feature-title'>Revanue</span>
            <div className="features-container">
                <span className='features-money'>$2,450</span>
                <span className='features-rate'>
                    -11.4
                    <ArrowDownwardIcon className='features-icon negative'/>
                </span>
            </div>
            <span className='features-sub'>Compared to last month</span>
        </div>
        <div className='features-item'>
            <span className='feature-title'>Sales</span>
            <div className="features-container">
                <span className='features-money'>$4,400</span>
                <span className='features-rate'>
                    -1.4
                    <ArrowDownwardIcon className='features-icon negative'/>
                </span>
            </div>
            <span className='features-sub'>Compared to last month</span>
        </div>
        <div className='features-item'>
            <span className='feature-title'>Cost</span>
            <div className="features-container">
                <span className='features-money'>$2,220</span>
                <span className='features-rate'>
                    +2.4
                    <ArrowUpwardIcon className='features-icon '/>
                </span>
            </div>
            <span className='features-sub'>Compared to last month</span>
        </div>
    </div>
  )
}
