import React from 'react'
import "./WidgetLg.css"
import {transActions} from "../../Data"

export default function WidgetLg() {

    const Button = ({type}) => {
        return <button className={'widget-lg-btn ' + type}>{type}</button>
    }



  return (
    <div className='widget-lg'>
        <h3 className='widget-lg-title'>Latest TransActions</h3>
        <table className="widget-lg-table">
            <tr className="widget-lg-tr">
                <th className="widget-lg-th">Customer</th>
                <th className="widget-lg-th">Date</th>
                <th className="widget-lg-th">Amout</th>
                <th className="widget-lg-th">Status</th>
            </tr>
            {transActions.map(user => (
            <tr className="widget-lg-tr" key={user.id}>
                <td className="widget-lg-user">
                    <img src={user.img}/>
                    <span className='widget-lg-name'>{user.customer}</span>
                </td>
                <td className="widget-lg-date">
                    {user.date}
                </td>
                <td className="widget-lg-amout">
                    ${user.amout}
                </td>
                <td className="widget-lg-status">
                    <Button type={user.status}/>
                </td>
            </tr>
            ))}
            
        </table>
    </div>
  )
}
