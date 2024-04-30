import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import "./WidgetSm.css"
import { newUser } from "../../Data"

export default function WidgetSm() {
  return (
    <div className='widget-sm'>
        <span className='widget-sm-title'>New Join Members</span>
        <ul className="widget-sm-list">
            {newUser.map ( user => (
            <li key={user.id} className="widget-sm-item">
               <img src={user.img} className='widget-sm-img'/>
                <div className='widget-sm-user'>
                    <span className="widget-sm-username">{user.username}</span>
                    <span className="widget-sm-user-title">{user.title}</span>
                </div>
                <button className='widget-sm-btn'>
                    <VisibilityIcon className='widget-sm-btn-icon'/>
                </button>
            </li>
            ))}
        </ul>
    </div>
  )
}
