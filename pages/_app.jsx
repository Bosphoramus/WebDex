import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import '~/styles/globals.css'

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient()

  const Layout = Component.Layout ? Component.Layout : React.Fragment

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}

export default MyApp
