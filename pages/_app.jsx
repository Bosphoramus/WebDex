import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ThemeProvider } from '~/contexts/themeContext'
import '~/styles/globals.css'

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  })

  const Layout = Component.Layout ? Component.Layout : React.Fragment

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
