import './globals.css'
 
export const metadata = {
  title: 'REWER - Digital Agency',
  description: 'Transforming Ideas into Digital Reality',

}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}