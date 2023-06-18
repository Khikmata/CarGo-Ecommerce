import { Footer, Navbar } from '@/shared'
import './globals.css'

export const metadata = {
  title: 'CarGo',
  description: 'Cars app mockup',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
