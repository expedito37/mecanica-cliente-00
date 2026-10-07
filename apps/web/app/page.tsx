// ==========================================================
// page.tsx
// Página principal do site da mecânica (cabeçalho, hero,
// sobre, serviços, contato, mapa e botões flutuantes)
// ==========================================================

import Image from "next/image"; // otimiza as imagens e resolve o aviso do ESLint sobre <img>
import styles from "./page.module.css";
import { site } from "../config/site"; // dados do cliente (nome, whatsapp, telefone...)

// Monta o link do WhatsApp já com a mensagem codificada (acentos e espaços)
const linkWhatsapp = (mensagem: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`;

// Lista dos serviços: para adicionar ou remover um card, edite só aqui
const servicos = [
  {
    titulo: "Revisão Completa",
    descricao: "Manutenção e revisão do seu veículo.",
    mensagem: "Olá! Gostaria de agendar uma revisão completa",
  },
  {
    titulo: "Sistema de Freios",
    descricao: "Verificação e manutenção dos freios.",
    mensagem: "Olá! Gostaria de saber mais sobre o serviço de freios",
  },
  {
    titulo: "Motor",
    descricao: "Diagnóstico e manutenção do motor.",
    mensagem: "Olá! Gostaria de saber mais sobre a manutenção do motor",
  },
  {
    titulo: "Troca de Óleo",
    descricao: "Troca de óleo, alinhamento e filtros do veículo.",
    mensagem: "Olá! Gostaria de saber mais sobre troca de óleo e filtros",
  },
  {
    titulo: "Suspensão",
    descricao: "Manutenção e revisão da suspensão.",
    mensagem: "Olá! Gostaria de saber mais sobre o serviço de suspensão",
  },
  {
    titulo: "Diagnóstico Eletrônico",
    descricao: "Identificação de falhas eletrônicas e desgastes.",
    mensagem: "Olá! Gostaria de saber mais sobre diagnóstico eletrônico",
  },
];

// Imagens do carrossel (por enquanto todas usam a mesma foto)
const fotos = [
  { src: "/imgprinc.webp", alt: "Oficina mecânica" },
  { src: "/imagem1.webp", alt: "Serviço mecânico" },
  { src: "/imgprinc.webp", alt: "Carro em manutenção" },
];

// Redes sociais: os links vêm do site.ts (config do cliente).
// Só aparecem na tela se tiverem link preenchido
const redes = [
  { nome: "📘 facebook", url: site.redesSociais.facebook }, // vem do site.ts
  { nome: "📷 instagram", url: site.redesSociais.instagram }, // vem do site.ts
  { nome: "💬 WhatsApp", url: `https://wa.me/${site.whatsapp}` }, // sempre aparece
];

export default function Home() {
  return (
    <main className={styles.page}>
      {/* ---------- Cabeçalho com logo e menu ---------- */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/logo.webp"
            alt="Logo da Oficina Mecânica"
            width={50}
            height={50}
          />
          <strong>{site.nome}</strong>
        </div>

        {/* Links âncora: levam até a seção com o id correspondente */}
        <nav className={styles.nav}>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      {/* ---------- Hero: primeira tela com imagem de fundo escurecida ---------- */}
      <section
        id="inicio"
        className={styles.hero}
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url("/imgprinc.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1>Tecnologia, inovação e precisão</h1>

        <p>Excelência e qualidade para cuidar do seu veículo.</p>

        <a
          href={linkWhatsapp(
            "Olá! Gostaria de saber mais sobre os serviços da oficina."
          )}
          className={`${styles.botao} ${styles.botaoHero}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Fale conosco
        </a>
      </section>

      {/* ---------- Sobre: texto + carrossel de fotos ---------- */}
      <section id="sobre" className={styles.sobre}>
        <div className={styles.textoSobre}>
          <h2>Sobre nossa oficina</h2>

          {/* Sem <br />: o texto quebra sozinho conforme o tamanho da tela */}
          <p>
            Trabalhamos com tecnologia, precisão e experiência para oferecer
            qualidade e segurança para o seu veículo.
          </p>
        </div>

        <div className={styles.carrossel}>
          {fotos.map((foto, i) => (
            <Image
              key={i}
              src={foto.src}
              alt={foto.alt}
              width={300}
              height={250}
            />
          ))}
        </div>
      </section>

      {/* ---------- Serviços: um card para cada item da lista acima ---------- */}
      <section id="servicos" className={styles.servicos}>
        <h2>Nossos Serviços</h2>

        <div className={styles.cards}>
          {servicos.map((servico) => (
            <div key={servico.titulo} className={styles.card}>
              <h3>{servico.titulo}</h3>
              <p>{servico.descricao}</p>

              <a
                href={linkWhatsapp(servico.mensagem)}
                className={`${styles.botao} ${styles.botaoServico}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Saiba mais
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Contato: dados, redes sociais e mapa ---------- */}
      <section id="contato" className={styles.contato}>
        <div className={styles.infoContato}>
          <h2>Entre em contato</h2>

          <p>📞 {site.telefone}</p>
          {/* Cidade e estado vêm do site.ts (antes o estado estava fixo em "MG") */}
          <p>📍 {site.cidade} - {site.estado}</p>
          <p>🕐 {site.horario}</p>

          <a
            href={linkWhatsapp("Olá! Como posso ajudar")}
            className={`${styles.botao} ${styles.botaoContato}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale conosco
          </a>

          <div className={styles.redesSociais}>
            {/* filter remove as redes sem link preenchido */}
            {redes
              .filter((rede) => rede.url)
              .map((rede) => (
                <a
                  key={rede.nome}
                  href={rede.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {rede.nome}
                </a>
              ))}
          </div>
        </div>

        <div className={styles.mapa}>
          {/* title é necessário para acessibilidade (leitores de tela) */}
          <iframe
            title={`Mapa de localização - ${site.nome}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapa)}&output=embed`}
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>

      {/* ---------- Botões flutuantes ---------- */}
      <a href="#inicio" className={styles.voltarTopo}>
        ↑ Voltar ao topo
      </a>

      <a
        href={linkWhatsapp("Olá! Gostaria de mais informações sobre os serviços.")}
        className={styles.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
      >
        💬
      </a>
    </main>
  );
}