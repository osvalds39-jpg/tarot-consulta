import { useState } from 'react';
import { SiInstagram, SiTiktok, SiYoutube, SiWhatsapp } from 'react-icons/si';
import { ArrowUpRight, Clock3, Heart, Menu, MessageCircle, Sparkles, X } from 'lucide-react';
import tarotImage from '@assets/image_1786558743490.png';

const whatsappUrl =
  'https://wa.me/?text=Ol%C3%A1!%20Quero%20agendar%20uma%20consulta%20de%20tarot%20online.';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="tarot-page">
      <header className="site-header">
        <a className="brand" href="#inicio" onClick={closeMenu} data-testid="link-brand">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span>ARCANA<br />ÍNTIMA</span>
        </a>
        <nav className={`nav-links${menuOpen ? ' open' : ''}`} aria-label="Navegação principal">
          <a href="#experiencia" onClick={closeMenu} data-testid="link-experience">A EXPERIÊNCIA</a>
          <a href="#consulta" onClick={closeMenu} data-testid="link-details">A CONSULTA</a>
          <a href="#contato" onClick={closeMenu} data-testid="link-contact">CONTATO</a>
        </nav>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer" data-testid="link-header-whatsapp">AGENDAR <ArrowUpRight size={13} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} data-testid="button-mobile-menu">
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Um encontro com a sua intuição</p>
          <h1 data-testid="text-page-title">CONSULTA<br /><em>DE TAROT</em><br />ONLINE</h1>
          <p className="hero-subtitle" data-testid="text-page-subtitle">Agende sua consulta e tenha direcionado o seu futuro</p>
          <p className="hero-note"><Sparkles size={15} /> Uma conversa cuidadosa para traduzir símbolos em caminhos possíveis.</p>
          <a className="whatsapp-cta" href={whatsappUrl} target="_blank" rel="noreferrer" data-testid="button-hero-whatsapp">
            <SiWhatsapp aria-hidden="true" /> AGENDE AQUI <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="hero-visual" aria-label="Cartas de tarot abertas junto a uma vela">
          <div className="orbit" aria-hidden="true" />
          <figure className="image-frame">
            <img src={tarotImage} alt="Cartas de tarot abertas perto de uma vela sobre tecido roxo" data-testid="img-tarot-cards" />
          </figure>
          <div className="visual-stamp" aria-hidden="true"><span>OLHE<br />PARA<br />DENTRO</span></div>
          <div className="visual-caption">CARTAS ABERTAS · CAMINHOS POSSÍVEIS</div>
        </div>
        <div className="scroll-mark" aria-hidden="true"><span className="scroll-line" /> DESÇA COM CALMA</div>
      </section>

      <section id="experiencia" className="dark-band">
        <div className="intro">
          <div>
            <p className="section-kicker">Não é sobre prever</p>
            <h2>É sobre <span>escutar</span> o que já vive em você.</h2>
          </div>
          <div>
            <p className="intro-text">O tarot não decide por você. Ele ilumina padrões, desejos e possibilidades que pedem atenção. Em um espaço seguro e sem julgamentos, a leitura vira uma pausa para respirar — e voltar a escolher com mais clareza.</p>
            <p className="quote">“As cartas não fecham portas. Elas mostram onde está a maçaneta.”</p>
            <div className="promise-grid" id="consulta">
              <article className="promise" data-testid="card-consulta-01">
                <span className="promise-number">01 — PRESENÇA</span>
                <h3>Escuta sem pressa</h3>
                <p>Seu momento é o centro da conversa. A leitura começa pela sua pergunta.</p>
              </article>
              <article className="promise" data-testid="card-consulta-02">
                <span className="promise-number">02 — LEITURA</span>
                <h3>Símbolos que traduzem</h3>
                <p>As cartas ganham sentido quando encontram a sua história, não uma fórmula pronta.</p>
              </article>
              <article className="promise" data-testid="card-consulta-03">
                <span className="promise-number">03 — DIREÇÃO</span>
                <h3>Clareza para o próximo passo</h3>
                <p>Você termina a consulta com perguntas melhores e um caminho possível em mãos.</p>
              </article>
              <article className="promise" data-testid="card-consulta-04">
                <span className="promise-number">04 — CUIDADO</span>
                <h3>Um espaço só seu</h3>
                <p>Online, reservado e acolhedor. Do jeito que uma conversa importante deve ser.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="experience">
        <div className="experience-inner">
          <div className="experience-head">
            <div>
              <p className="section-kicker">Como acontece</p>
              <h2>Uma hora para reorganizar o que importa.</h2>
            </div>
            <p>Chegue com uma pergunta, uma sensação ou apenas a vontade de entender melhor. O resto a gente descobre junto.</p>
          </div>
          <div className="steps">
            <article className="step" data-testid="step-01">
              <span className="step-index">01 / CHEGADA</span>
              <h3>Você traz o tema</h3>
              <p>Falamos sobre o que está pedindo clareza agora — amor, trabalho, escolhas ou caminhos.</p>
            </article>
            <article className="step" data-testid="step-02">
              <span className="step-index">02 / ABERTURA</span>
              <h3>As cartas respondem</h3>
              <p>A tiragem revela movimentos e possibilidades. Tudo é explicado com calma e linguagem simples.</p>
            </article>
            <article className="step" data-testid="step-03">
              <span className="step-index">03 / RETORNO</span>
              <h3>Você segue mais inteiro</h3>
              <p>Fechamos com uma síntese prática para que a leitura continue fazendo sentido depois da chamada.</p>
            </article>
          </div>
          <div className="detail-row">
            <span className="detail-pill"><Clock3 size={14} /> 60 MINUTOS</span>
            <span className="detail-pill"><MessageCircle size={14} /> VIDEOCHAMADA</span>
            <span className="detail-pill"><Heart size={14} /> TOTALMENTE RESERVADO</span>
          </div>
        </div>
      </section>

      <section className="closing" id="contato">
        <p className="section-kicker">Sua pergunta já sabe o caminho</p>
        <h2>Abra espaço para uma nova perspectiva.</h2>
        <p>Agende seu horário pelo WhatsApp. Você recebe as orientações e escolhe o melhor momento para a nossa conversa.</p>
        <a className="whatsapp-cta" href={whatsappUrl} target="_blank" rel="noreferrer" data-testid="button-footer-whatsapp">
          <SiWhatsapp aria-hidden="true" /> AGENDE AQUI <ArrowUpRight size={16} />
        </a>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">ARCANA ÍNTIMA<small>clareza para o seu próximo passo</small></div>
          <div className="socials" aria-label="Redes sociais">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" data-testid="link-instagram"><SiInstagram size={16} /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" data-testid="link-youtube"><SiYoutube size={18} /></a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok" data-testid="link-tiktok"><SiTiktok size={16} /></a>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2025 ARCANA ÍNTIMA</span><span>Uma leitura é um convite, não uma sentença.</span></div>
      </footer>
    </main>
  );
}

export default App;
