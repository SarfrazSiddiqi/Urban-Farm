import React from 'react'
import './BestSeller.css'


import {inNum} from '../../../actions/index'
import { useDispatch } from 'react-redux'

const bestSellerList = [
    {
        id: 1,
        name: 'Aloe Vera',
        img: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloejuvenna_45_1.png?v=1661329460&width=550',
        newPrice: 300,
        oldPrice: 400,
    },
    {
        id: 2,
        name: 'Snake Plant',
        img: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/fittoniagreennew_45.png?v=1662822948&width=550',
        newPrice: 700,
        oldPrice: 849,
    },
    {
        id: 3,
        name: 'Money Plant',
        img: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/philodendronbrokenheart_45_1.png?v=1661318401&width=550',
        newPrice: 100,
        oldPrice: 150,
    },
    {
        id: 4,
        name: 'Groot',
        img: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/crassulagreenmini_45.png?v=1661335319&width=550',
        newPrice: 2000,
        oldPrice: 2500,
    },
    // {
    //     id: 5,
    //     name: 'Tulsi',
    //     img: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloejuvenna_45_1.png?v=1661329460&width=550',
    //     newPrice: 300,
    //     oldPrice: 400,
    // },
    // {
    //     id: 6,
    //     name: 'Hibiscus',
    //     img: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloejuvenna_45_1.png?v=1661329460&width=550',
    //     newPrice: 300,
    //     oldPrice: 400,
    // },
    // {
    //     id: 7,
    //     name: 'Rose',
    //     img: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloejuvenna_45_1.png?v=1661329460&width=550',
    //     newPrice: 300,
    //     oldPrice: 400,
    // },
    // {
    //     id: 8,
    //     name: 'Cactus',
    //     img: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloejuvenna_45_1.png?v=1661329460&width=550',
    //     newPrice: 300,
    //     oldPrice: 400,
    // },
    // {
    //     id: 9,
    //     name: 'Succelents',
    //     img: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloejuvenna_45_1.png?v=1661329460&width=550',
    //     newPrice: 300,
    //     oldPrice: 400,
    // },
    // {
    //     id: 10,
    //     name: 'Bonsai',
    //     img: 'https://cdn.shopify.com/s/files/1/0579/7924/0580/products/aloejuvenna_45_1.png?v=1661329460&width=550',
    //     newPrice: 300,
    //     oldPrice: 400,
    // }
]


function BestSeller() {
   const dispatch = useDispatch()
  return (
    <div className='home-bestseller-container'>
        <p className='section-heading'>
            <img src='https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Bestseller-1_2x_9a883cf1-58ba-4c74-badf-f02924575b68_small.png?v=1656416175' alt='' />
            Best Sellers
        </p>
        <div className='home-bestseller-list'>
            {
                bestSellerList.map((item) => (
                        <div key={item.id} className="home-bestseller-item">
                            <img src={item.img} alt={item.name} />
                            <div className='item-body'>
                                <p className='plantName'>{item.name}</p>
                                <div className='price'>
                                    <p className='oldPrice'>₹{item.oldPrice}</p>
                                    <p className='newPrice'>₹{item.newPrice}</p>
                                </div>
                            </div>
                            <div className='addToCart' onClick={()=>dispatch(inNum())}>
                                Add to Cart
                            </div>
                        </div>
                    )
                )
            }
        </div>
    </div>
  )
}

export default BestSeller