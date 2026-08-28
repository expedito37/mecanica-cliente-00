import styles from "./page.module.css";
import {site} from "../config/site";


export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/imgprinc.webp" alt="Logo da Oficina Mecânica" />

          <strong>{site.nome}</strong>
        </div>

        <nav className={styles.nav}>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>
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
        <h1>A Tecnologia certa inovação e precisão</h1>

        <p>Excelência e qualidade para cuidar do seu veículo.</p>

        <a
        href={`https://wa.me/${site.whatsapp}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20oficina.`}
          className={`${styles.botao} ${styles.botaoHero}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Fale conosco
        </a>
      </section>

      <section id="sobre" className={styles.sobre}>
        <div className={styles.textoSobre}>
          <h2>Sobre nossa oficina</h2>

          <p>
            Trabalhamos com tecnologia, precisão
            <br />
            e experiência para oferecer qualidade
            <br />e segurança para o seu veículo.
          </p>
        </div>

        <div className={styles.carrossel}>
          <img src="/imgprinc.webp" alt="Oficina mecânica" />
          <img src="/imgprinc.webp" alt="Serviço mecânico" />
          <img src="/imgprinc.webp" alt="Carro em manutenção" />
        </div>
      </section>

      <section id="servicos" className={styles.servicos}>
        <h2>Nossos Serviços</h2>

        <div className={styles.cards}>
          
          <div className={styles.card}>
            <h3>Revisão Completa</h3>
            <p>Manutenção e revisão do seu veículo.</p>

            <a
              href={`https://wa.me/${site.whatsapp}?text=Olá!%20Gostaria%20de%20agendar%20uma%20revisão%20completa`}
              className={`${styles.botao} ${styles.botaoServico}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Saiba mais
            </a>
          </div>
          
          <div className={styles.card}>
            <h3>Sistema de Freios</h3>
            <p>Verificação e manutenção dos freios.</p>

            <a
              href={`https://wa.me/${site.whatsapp}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20freios`}
              className={`${styles.botao} ${styles.botaoServico}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Saiba mais
            </a>
          </div>
          
          <div className={styles.card}>
            <h3>Motor</h3>
            <p>Diagnóstico e manutenção do motor.</p>

            <a
              href={`https://wa.me/${site.whatsapp}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20manutenção%20do%20motor`}
              className={`${styles.botao} ${styles.botaoServico}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Saiba mais
            </a>
          </div>
          
          <div className={styles.card}>
            <h3>Troca de Óleo</h3>
            <p>Troca de óleo, alinhamento e filtros do veículo.</p>

            <a
              href={`https://wa.me/${site.whatsapp}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20troca%20de%20óleo%20e%20filtros`}
              className={`${styles.botao} ${styles.botaoServico}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Saiba mais
            </a>
          </div>
          
          <div className={styles.card}>
            <h3>Suspensão</h3>
            <p>Manutenção e revisão da suspensão.</p>

            <a
              href={`https://wa.me/${site.whatsapp}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20suspensão`}
              className={`${styles.botao} ${styles.botaoServico}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Saiba mais
            </a>
          </div>
        
          <div className={styles.card}>
            <h3>Diagnóstico Eletrônico</h3>
            <p>Identificação de falhas eletrônicas e desgastes.</p>

            <a
              href={`https://wa.me/${site.whatsapp}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20diagnóstico%20eletrônico`}
              className={`${styles.botao} ${styles.botaoServico}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Saiba mais
            </a>
          </div>
        </div>
      </section>

      <section id="contato" className={styles.contato}>
        <div className={styles.infoContato}>
          <h2>Entre em contato</h2>

          <p>📞 {site.telefone}</p>
          <p>📍{site.cidade} - MG</p>
          <p>🕐{site.horario}</p>

          <a
            href={`https://wa.me/${site.whatsapp}?text=Olá!%20Como%20posso%20ajudar`}
            className={`${styles.botao} ${styles.botaoContato}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale conosco
          </a>

          <div className={styles.redesSociais}>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              📘 facebook
            </a>

            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              📷 instagram
            </a>

            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>

        <div className={styles.mapa}>
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapa)}&output=embed`}
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>

      <a href="#inicio" className={styles.voltarTopo}>
        ↑ Voltar ao topo
      </a>

      <a
        href={`https://wa.me/${site.whatsapp}?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços.`}
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
