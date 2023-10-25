export interface brand {
  id : number;
  brand: string;
  }

  const products = [
    {
      id: 1,
      name: 'abc',
      brand: {
        id: 1,
        name: 1
      }
    }
  ]


  const brands = [
    { id: 1 , name: '1'},
    { id: 2 , name: '2'},
    { id: 3 , name: '3'},
  ]

  const fielteredProducts = products.filter(product => {
    return brands.some((brand) => brand.id === product.brand.id)
  })
