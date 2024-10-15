import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Cart({cartItems, handleCheckout}) {
    const navigate = useNavigate()
  return (
    <section className='p-6 max-w-3xl mx-auto'>
        <h2 className='text-2xl font-bold mb-5'>Giỏ hàng của bạn</h2>
        {
            cartItems.length > 0 ? 
            <>
            <div>
            <ul className='border border-gray-300 rounded-lg divide-y divide-gray-200 '>
            {
                cartItems.map((product)=>{
                    return(
                        <li key={product.id} className=' flex justify-between p-4 font-bold'>
                            <span>{product.prdName}</span>
                            <span className='text-red-600'>{product.price} VNĐ</span>
                        </li>
                    )
                })
            } 
            </ul>
            <div className='text-end'>
            <button onClick={() => {handleCheckout()}} className='mt-5 bg-red-500 text-white font-semibold px-4 py-2 rounded-md'>Thanh toán</button>
            </div>
            </div>
            </> 
            : 
            <>
            <div className='text-xl font-semibold mb-4'>
                Giỏ hàng của bạn đang trống!
            </div>
            <button onClick={() => {navigate('/')}} className='py-2 text-white font-semibold bg-green-500 px-5 rounded-lg'>Tiếp tục mua sắm</button>
            </>
        }    
        
    </section>
  )
}