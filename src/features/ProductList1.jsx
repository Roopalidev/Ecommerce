// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchPostList } from '../redux/postSlice';

// const PostList = () => {
//     const postListData = useSelector((state) => state.post.posts)
//     const dispatch = useDispatch();
//     // useEffect(() => {
//     //     dispatch(fetchPostList());

//     // }, [dispatch])
//     const getData = () => {
//         dispatch(fetchPostList());
//     }
//   return (
//     <div>
//         <button onClick={getData}>Get postData</button>
//         <ul>
//      {postListData?.map((item) => (
//         <li key={item.id}>{item.title}</li>

//      ))}
//      </ul>
//     </div>
//   )
// }

// export default PostList
// {Object.keys(resumeData.Socials).map((key) => ( 
//   <a href={resumeData.Socials[key].link} target="_blank">
//     {resumeData.Socials[key].icon} 
//     </a>
//     ))}

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductList } from '../redux/productSlice';
import { fetchProductList1 } from '../redux/productSlice';
import { fetchProductList2 } from '../redux/productSlice';
import { fetchProductList3 } from '../redux/productSlice';
import { fetchProductList4 } from '../redux/productSlice';
import { fetchProductList5 } from '../redux/productSlice';
import { fetchProductList6 } from '../redux/productSlice';
// import './ProductList.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductList1 = () => {
  const productListData = useSelector((state) => state.product.products)
//   const productListData1 = useSelector((state) => state.product.products)
  // const productListData2 = useSelector((state) => state.product.products)
  const dispatch = useDispatch();
  // useEffect(() => {
  //     dispatch(fetchPostList());

  // }, [dispatch])
  const getData = () => {
    dispatch(fetchProductList());
  }
  const getData1 = () => {
    dispatch(fetchProductList1());
  }
  const getData2 = () => {
    dispatch(fetchProductList2());
  }
  const getData3 = () => {
    dispatch(fetchProductList3());
  }
  const getData4 = () => {
    dispatch(fetchProductList4());
  }
  const getData5 = () => {
    dispatch(fetchProductList5());
  }
  const getData6 = () => {
    dispatch(fetchProductList6());
  }
  return (

    <div className='buttons'>
      <button className='btns1' onClick={getData}>Pizza</button>
      {/* <button className='btns2' onClick={() => filterProduct('pizza')}>Pizza</button> */}
      <button className='btns2' onClick={getData1}>Sauces</button>
      <button className='btns2' onClick={getData2}>Desserts</button>
      <button className='btns2' onClick={getData3}>Pasta</button>
      <button className='btns2' onClick={getData4}>Salads</button>
      <button className='btns2' onClick={getData5}>Drinks</button>
      <button className='btns2' onClick={getData6}>Starters</button>
      <ul>
        {productListData?.map((data) => (

          <Container className='container'>
            <Row>
              <Card className='cardbody' style={{ width:'500px'}} key={data.id}>

                 <Card.Img variant="top" src={data.image}  />
                  <Card.Body>
                  <Card.Title><span >Name:</span>{data.name}</Card.Title> 
                   <Card.Text>
                     Ingredients: {data.ingredients}
                    </Card.Text> 
                    <Card.Text>
                      Price:${data.price}
                    </Card.Text> 
                    <div className='buttns'>
                    <button type="button" className="btn1s">
                           <Link to='/Products' className='nav-link'>Buy Now</Link>
                           </button>
                          
                  
                    
                    </div>
                  </Card.Body>

              </Card>
            </Row>
          </Container>


        ))}
        
       

      </ul>

    </div>
  )


}



export default ProductList1
