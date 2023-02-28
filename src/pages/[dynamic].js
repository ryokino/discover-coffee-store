import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const DynamicRoute = () => {
  const router = useRouter()
  const query = router.query.dynamics
  console.log('query', query)
  // cosnt
  return (
    <div>
      <Head>
        <title>{query}</title>
      </Head>
      <div>Hello! this is dynamic Page</div>
      <div>Page {query}</div>
    </div>
  )
}

export default DynamicRoute
