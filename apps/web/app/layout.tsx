// ==========================================================
// layout.tsx
// Estrutura base de todas as páginas: idioma, fonte, título
// da aba e descrição para o Google
// ==========================================================

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "../config/site"; // dados do cliente (cidade, nome...)

// Fonte carregada pelo Next (sem piscar na tela) e exposta como variável CSS
const fonte = Inter({
  subsets: ["latin"],
  variable: "--font-principal",
  display: "swap",
});

// Título e descrição vêm do site.ts: ao trocar de cliente, atualizam sozinhos
const titulo = `Oficina Mecânica em ${site.cidade} | Qualidade e Precisão`;
const descricao = `Oficina mecânica em ${site.cidade} especializada em revisão, freios, motor, suspensão, troca de óleo e diagnóstico eletrônico.`;

// Informações que o Google e as redes sociais leem do site
export const metadata: Metadata = {
  title: titulo,
  description: descricao,
  // Prévia do link quando compartilhado no WhatsApp, Facebook etc.
  openGraph: {
    title: titulo,
    description: descricao,
    locale: "pt_BR",
    type: "website",
  },
};

// Cor da barra do navegador no celular (combina com o fundo do site)
export const viewport: Viewport = {
  themeColor: "#1a1a1a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // lang="pt-BR" ajuda o Google e os leitores de tela; a classe aplica a fonte
    <html lang="pt-BR" className={fonte.variable}>
      <body>{children}</body>
    </html>
  );
}