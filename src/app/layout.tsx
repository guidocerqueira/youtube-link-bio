import './globals.css'

export const metadata = {
  title: 'Olá, eu sou Guido Cerqueira',
  description: 'Aqui você encontra alguns links para as minhas redes sociais e meus conteúdos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="h-full min-h-screen bg-gradient-to-tr from-purple-400 to-purple-800">{children}</body>
    </html>
  )
}
