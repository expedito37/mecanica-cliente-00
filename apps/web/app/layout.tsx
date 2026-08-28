import "./globals.css";

export const metadata = {
  title: "Oficina Mecânica em Belo Horizonte | Qualidade e Precisão",
  description:
    "Oficina mecânica em Belo Horizonte especializada em revisão, freios, motor, suspensão, troca de óleo e diagnóstico eletrônico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}