import { useRouter } from 'next/router'

// esta es la pagina dinamica

export default function blogDetails() {
  const router = useRouter()

  console.log(router.query)


  const blogid = router.query.slug

  return (
    <div>blogDetails</div>
  )
}
