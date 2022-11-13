import './Products.css'
import { useEffect, useState } from 'react';
const apiUrl = "https://630a1ecc324991003280d57a.mockapi.io/api/v2/sneakers"

function discountCalc(sneaker) {
  return (sneaker.price-((sneaker.discount/100)*sneaker.price)).toFixed(2)
}

const UsingFetch = () => {
  const [sneakers, setSneakers] = useState([])

  const fetchSneakers  = () => {
    fetch(apiUrl).then(response => {
        return response.json()
      }).then(list => {
        setSneakers(list)
      })
  }

  useEffect(() => {
    fetchSneakers()
  }, [setSneakers])

  return (
    <> 
      <section className='best-seller-sneakers'>
        <div className="container">
          <div className="content">
            {sneakers.map(({discount, price, description, category}) => (
                  <div className="card">
                    <div className="content-wrap">
                      { discount !== 0
                                ? (<div className="discount">{discount}{"% OFF"}</div>)
                                : (<div className="discount" style={{visibility: "hidden"}}></div>)
                            } 
                        <div className='sneaker-image'>
                          <img src="/images/sneaker.png" alt="tenis_banner" />   
                        </div>
                    </div>
                      <div className="category">{category}</div>
                      <div className="description">{description}</div>
                      <div> 
                        { discount
                          ? (<div className="firstprice">{price}<span className="price"> <span style={{visibility: "hidden"}}>.</span>  {(price-((discount/100)*price)).toFixed(2)}</span></div>)
                          : (<div className="price">{price}</div>)
                        }
                      </div>   
                  </div>
                ))
              }
          </div>
        </div>
      </section>
    </>
  )
}

export default UsingFetch
