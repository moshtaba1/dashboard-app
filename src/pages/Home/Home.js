import React from 'react'
import Features from '../../components/Features/Features'
import Chart from '../../components/Chart/Chart'
import {xAxisData} from '../../Data'
import "./Home.css"
import WidgetSm from '../../components/WidgetSm/WidgetSm'
import WidgetLg from '../../components/WidgetLg/WidgetLg'

export default function Home() {
  return (
    <div style={{width:"80%"}}>
      <Features/>
      <Chart grid title="Monthley Sale" data={xAxisData} dataKey="sale"/>
      <div className='home-widgets'>
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}
