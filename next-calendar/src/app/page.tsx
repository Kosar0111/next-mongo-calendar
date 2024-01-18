import { Landing } from '@/components/landing/Landing'
import Layout from '@/components/layout/Layout'
import Schedule from '@/components/schedule/Schedule'

export default function Home() {
  let isAuth = false
  return (
    <div>
      <Layout />
      {isAuth ? <Landing /> : <Schedule />}
    </div>
  )
}
