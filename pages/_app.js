// pages/_app.js
import '../style.css'       // Your global CSS
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Your main page component */}
      <Component {...pageProps} />

      {/* Vercel Analytics */}
      <Analytics />

      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </>
  )
}

export default MyApp
