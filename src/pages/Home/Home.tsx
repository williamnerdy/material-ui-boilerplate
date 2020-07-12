import React from 'react'
import { useQuery } from 'react-query'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Loading from 'components/Loading'
import Product from 'components/Product'
import { getProducts } from 'services/products'
import { QUERY_STATUS } from 'constants/http'

const HomePage = () => {
  const { status, data, error } = useQuery('products', getProducts)

  if (status === QUERY_STATUS.LOADING) {
    return <Loading />
  }

  if (status === QUERY_STATUS.ERROR) {
    return <div>{error?.message}</div>
  }

  return (
    <Container>
      <Grid container spacing={3}>
        {data?.map((product) => (
          <Grid key={product.id} md={3} item>
            <Product
              id={product.id}
              image={`http://placeimg.com/400/400?i=${product.id}`}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default HomePage
