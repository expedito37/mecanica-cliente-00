// ==========================================================
// site.ts
// Dados do cliente: é o único arquivo que muda de um cliente
// para outro (nome, contatos, redes sociais e localização)
// ==========================================================

export const site = {
  // Nome que aparece no cabeçalho e no título do mapa
  nome: "OFICINA MECÂNICA",

  // Contatos
  telefone: "(31) 99999-9999",
  whatsapp: "5531996218382", // só números, com 55 + DDD

  // Localização (cidade e estado separados para a página montar "Cidade - UF")
  cidade: "Belo Horizonte",
  estado: "MG",
  horario: "Segunda a sexta: 08:00 às 18:00",

  // Redes sociais: use o link COMPLETO (com https://)
  // Deixe "" para a rede não aparecer no site
  redesSociais: {
    facebook: "https://www.facebook.com", // troque pelo perfil real do cliente
    instagram: "https://www.instagram.com", // troque pelo perfil real do cliente
  },

  // Texto que o Google Maps usa para achar o local no mapa
  mapa: "Serra Verde, Belo Horizonte - MG",
};