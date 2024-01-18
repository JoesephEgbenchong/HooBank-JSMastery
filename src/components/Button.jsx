import React from 'react'

export default function Button({ styles }) {
  return (
    <button type='button' className={`${styles} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] rounded-[10px] text-primary outline-none`}>
      Get Started
    </button>
  )
}
