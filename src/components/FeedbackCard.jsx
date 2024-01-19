import React from 'react'
import { quotes } from '../assets'
import styles from '../styles'


export default function FeedbackCard({content, name, title, img}) {
  return (
    <div className='flex flex-col py-12 px-10 rounded-[20px] justify-between max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card '>
      <img src={quotes} alt='double_quotes' className='w-[42px] h-[27px] object-contain' />
      <p className={`font-poppins font-normal text-white text-[18px] leading-[32px] max-w-[290px] my-10`}>
        {content}
      </p>

      <div className='flex flex-row items-center'>
        <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full' />

        <div className='flex flex-col ml-4'>
          <h4 className='text-white font-poppins font-semibold text-[20px] leading-[32px]'>{name}</h4>
          <p className='text-dimWhite font-poppins font-normal text-[16px] leading-[24px]'>{title}</p>
        </div>
      </div>
    </div>
  )
}
