import { useRouter } from 'next/router'
import Link from 'next/link'

const CoffeeStore = () => {
  const router = useRouter()
  console.log('router', router)


  return (
    <div>
      <h1>Coffee Store {router.query.id}</h1>
      <Link href='/'>Back to Home</Link>
      <Link href='/coffee-store/dynamics'>Back to Dynamics Page</Link>
    </div>
  )
}

export default CoffeeStore
