import React from 'react'
import Product from './Product'
import './Home.css'
function Home() {
  return (
    <div>
      <div className="home"></div>
      <div className="home__container">
        <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="home__image" />

        <div className="home__row">
            <Product
                id="123123" 
                title="Apple iPhone 14 Pro Max 256GB Gold"
                price ={11.96}
                rating={4}
                image="https://m.media-amazon.com/images/I/71T5NVOgbpL._AC_UY327_FMwebp_QL65_.jpg" alt="product__image" />
            <Product 
                id="147147" 
                title="Targus 15.6 Geolite Essential TSS98401GL Laptop Case"
                price ={33}
                rating={4}
                image="https://m.media-amazon.com/images/I/91JUXU4v1TL._SX679_.jpg" alt="product__image" />
        </div>
        <div className="home__row">
        <Product 
            id="258258" 
            title="Amazon Basics Multipurpose Foldable Laptop Table with Cup Holder, Brown"
            price ={23}
            rating={3}
            image="https://m.media-amazon.com/images/I/71o7JQm59sL._AC_UY327_FMwebp_QL65_.jpg" alt="product__image" />
        <Product 
            id="369369" 
            title="Redmi 80 cm (32 inches) Android 11 Series HD Ready Smart LED TV | L32M6-RA/L32M7-RA (Black)"
            price ={25}
            rating={3}
            image="https://m.media-amazon.com/images/I/71L-lTQnJiL._AC_UY327_FMwebp_QL65_.jpg" alt="product__image" 
      />
        <Product 
          id="456456" 
          title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)"
          price ={35}
          rating={3}
          image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY327_FMwebp_QL65_.jpg" alt="product__image"
        />
        </div>
        <div className="home__row">
        <Product 
            id="789789" 
            title="Memory: How To Develop, Train, And Use It
            by William Walker Atkinson "
            price ={38}
            rating={5}
            image="https://m.media-amazon.com/images/I/71Kb2dJCxWL._AC_UY327_FMwebp_QL65_.jpg" alt="product__image"
          />
        <Product 
           id="789789" 
            title="Samsung 23 L Solo Microwave Oven (MS23A301TAK/TL, Black, Auto Cook)"
            price ={38}
            rating={5}
            image="https://m.media-amazon.com/images/I/710GdqOStIL._AC_UY327_FMwebp_QL65_.jpg" alt="product__image"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
