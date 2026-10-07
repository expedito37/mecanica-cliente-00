// ==========================================================
// next.config.js
// Configuração do Next.js do site (imagens e segurança básica)
// ==========================================================

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove o cabeçalho "X-Powered-By: Next.js" das respostas do servidor
  poweredByHeader: false,

  images: {
    // Formatos que o <Image> gera automaticamente (mais leves que JPG/PNG)
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;