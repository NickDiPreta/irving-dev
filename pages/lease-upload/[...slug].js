import { useRouter } from 'next/router'
import { Header } from '../../components/Header'

const Comment = () => {
  const router = useRouter()
  const slug = router.query.slug || []

  return (
    <>
      <Header />
      <h1>UserID: {slug.join('/')}</h1>
      <h1>LeaseID: {slug.join('/')}</h1>
    </>
  )
}

export default Comment
