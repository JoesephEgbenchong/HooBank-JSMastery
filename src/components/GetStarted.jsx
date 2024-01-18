import React from 'react'
import styles from '../styles'
import { arrowUp } from '../assets'

export default function GetStarted() {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col w-[100%] h-[100%] bg-primary rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='flex font-poppins font-medium text-[18px] leading-[23px]'>
            <span className='text-gradient mr-2'>Get</span>
            <img src={arrowUp} alt='arrow up' className='w-[23px] h-[23px] object-contain' />
          </p>
        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
            <span className='text-gradient'>Started</span>
        </p>
      </div>
    </div>
  )
}
