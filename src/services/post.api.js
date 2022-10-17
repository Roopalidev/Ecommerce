
export const getProductList = async () => {
    const res = await fetch("https://gunter-food-api.herokuapp.com/pizza");
    console.log({res}); 
    return await res.json();
}
// export const getProductLists = async () => {
//     const res = await fetch('https://gunter-food-api.herokuapp.com/pizza',
//       {
//           method: 'POST',
//           body: JSON.stringify({
//             title: 'onion pizza',
//             price: 799
            
//           }),
//           headers: {
//             'Content-type': 'multipart/form-data',
//           },
//       })
//       .then(response => response.json())
//       .then(json => console.log(json))
//     }
// export const getProductList7 = async () => {
//     const res = await fetch('https://gunter-food-api.herokuapp.com/pizza',
//     {
//         method: 'DELETE',
//     })
//     .then(response => response.json())
//     .then(json => console.log(json))
//     console.log({res});
//     return await res.json();
// }

//     }
export const getProductList1 = async () => {
    const res = await fetch("https://gunter-food-api.herokuapp.com/sauces");
    console.log({res});
    return await res.json();
}
export const getProductList2 = async () => {
    const res = await fetch("https://gunter-food-api.herokuapp.com/dessert");
    console.log({res});
    return await res.json();
}
export const getProductList3 = async () => {
    const res = await fetch("https://gunter-food-api.herokuapp.com/pasta");
    console.log({res});
    return await res.json();
}
export const getProductList4 = async () => {
    const res = await fetch("https://gunter-food-api.herokuapp.com/salads");
    console.log({res});
    return await res.json();
}
export const getProductList5 = async () => {
    const res = await fetch("https://gunter-food-api.herokuapp.com/drinks");
    console.log({res});
    return await res.json();
}
export const getProductList6 = async () => {
    const res = await fetch("https://gunter-food-api.herokuapp.com/sides");
    console.log({res});
    return await res.json();
}

