import Sidebar from '@/components/Sidebar'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
