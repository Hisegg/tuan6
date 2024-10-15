import React from 'react'
import prd1 from    "../../assets/imgs/product1.png"
import prd2 from    "../../assets/imgs/product2.png"
import prd3 from    "../../assets/imgs/product3.png"
import prd4 from    "../../assets/imgs/product4.png"
import { Link } from 'react-router-dom'

import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers'
export default function Products({handleAddToCart}) {
    const products = [
        {
            id: 1, prdName: "Bàn phím cơ không dây AULA F75 Reaper Switch", price: '19999999', prdImage: prd1, description: "Bàn phím cơ không dây AULA F75 Reaper Switch là một sản phẩm với độ bền lên đến 60 triệu lần bấm và kết nối qua dây Type-C, không dây 2.4G hoặc Bluetooth."
        },
        {
            id: 2, prdName: "Bàn phím cơ E-DRA EK375 Alpha Đen Đỏ Red Switch", price: '490000000', prdImage: prd2, description: "Bàn phím cơ E-DRA EK375 Alpha Red switch sở hữu 82 nút, cấu trúc Gasket, cáp kết nối Type-C, keycaps PBT Doubleshot cực kỳ ấn tượng và dạng đèn LED Rainbow. Bên cạnh đó, chiếc bàn phím này có Switch E-DRA, trọng lượng 5g và kích thước 327 x 136 x 40mm."
        },
        {
            id: 3, prdName: "Combo bàn phím + chuột không dây AKKO MX108", price: '699999999', prdImage: prd3, description: "Combo bàn phím chuột không dây Akko MX108 sẽ là lựa chọn không nên bỏ qua dành cho những người yêu thích sự gọn gàng ngăn nắp tại khu vực bàn làm việc."
        },
        {
            id: 4, prdName: "Bàn phím cơ E-Dra không dây EK368L Alpha Red Switch", price: '7898989899', prdImage: prd4, description: "Bàn phím cơ E-Dra không dây EK368L Alpha Red Switch là bàn phím cơ kết nối linh hoạt Wireless 2.4G và Bluetooth 5.0 tối ưu hóa sự tiện lợi cho người dùng."
        }
    ]
  return (
    <section className='container mx-auto p-6'>
        <h2 className='text-2xl font-bold mb-5'>Danh sách bàn phím cơ</h2>
        <div className="grid grid-cols-4 gap-5">
            {
                products.map((product)=>{
                    return(
                        <div key={product.id} className='bg-white shadow-md rounded-lg'>
                            <img src={product.prdImage} alt={product.prdName} className='w-90 h-90 object-cover'/>
                            <h3 className='text-lg font-semibold p-5 '>{product.prdName}</h3>
                            <p className='text-red-400 font-medium p-5'>{product.price} VNĐ</p>
                            <div>
                            <Link to={`/product-detail/${product.id}`} state={{product}} className='w-80 text-center font-bold block bg-blue-500 text-white py-2 rounded-lg mb-2 mx-auto'>Chi tiết sản phẩm</Link>
                            <button onClick={() => { handleAddToCart(product)}} className='w-80 block bg-green-500 text-white text-center font-bold py-2 rounded-lg mb-2 mx-auto'>Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    </section>
  )
}
