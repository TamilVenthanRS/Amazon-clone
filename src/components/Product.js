import React from 'react'
import Productdisplay from './Productdisplay'

const Product = ({ products }) => {
  return (
    <div className=' mx-auto grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52'>
        <React.Fragment>
        {products.slice(0,4).map(({id, title, price, description, category, image}) => (
          < Productdisplay 
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
          />
          ))}
        </React.Fragment> 
       
        <img className='  md:col-span-full ' src='https://links.papareact.com/dyz' alt="mini banner"/> 

        <div className='md:col-span-2'>
        <React.Fragment>
        {products.slice(4,5).map(({id, title, price, description, category, image}) => (
          < Productdisplay 
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
          />
          ))}
        </React.Fragment> 
        </div>
 
        
        <React.Fragment>
        {products.slice(5,products.length).map(({id, title, price, description, category, image}) => (
          < Productdisplay 
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
          />
          ))}
        </React.Fragment> 
        
        

    </div>
  )
}

export default Product