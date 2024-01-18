import { FC } from 'react'

export const Landing: FC = () => {
  return (
    <div
      style={{
        height: '92vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
      }}
    >
      <h1 style={{ textAlign: 'center', fontSize: '2rem' }}>
        If you want to see Your Daily Calendar is here, you have to log in!
      </h1>
    </div>
  )
}
