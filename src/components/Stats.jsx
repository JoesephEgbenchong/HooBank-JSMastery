import React from 'react'
import styles from '../styles'
import { stats } from '../constants'

export default function Stats() {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat, index) => (
      <div key={stat.id} className={`flex flex-row justify-start flex-1 items-center m-3`}>
        <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>
          {stat.value}
        </h4>
        <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient ml-2 uppercase'>
          {stat.title}
        </p>
        {/** {index === stats.length-1 ? " " : <div className='h-[10px] border border-white ml-10 hidden md:block'></div>} */}
      </div>
      ))}
    </section>
  )
}
