import React, { useEffect, useState } from "react";
import useCinematicScroll from "./useCinematicScroll.js";
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  Globe2,
  Smartphone,
  LayoutTemplate,
  ShoppingBag,
  Check,
  ChevronDown,
  Send,
  ExternalLink,
  MoveUpRight,
  Instagram,
  Github,
} from "lucide-react";

const WHATSAPP = (import.meta.env.VITE_WHATSAPP_NUMBER || "5533998803892").replace(
  /\D/g,
  "",
);
const projects = [
  {
    id: "01",
    title: "Automotive Detail",
    kind: "Estética automotiva",
    type: "Landing page",
    category: "Institucional",
    url: "https://demoautomobilistica.netlify.app/",
    image: "/projects/automotiva.webp",
    className: "car",
    description:
      "Uma presença digital à altura do cuidado dedicado a cada veículo.",
  },
  {
    id: "02",
    title: "Climatiza",
    kind: "Climatização",
    type: "Landing page",
    category: "Institucional",
    url: "https://democlimatiza.netlify.app/",
    image: "/projects/climatizacao.webp",
    className: "climate",
    description:
      "Serviços, credibilidade e contato em uma experiência objetiva.",
  },
  {
    id: "03",
    title: "Movimento & Saúde",
    kind: "Fisioterapia e pilates",
    type: "Site profissional",
    category: "Institucional",
    url: "https://demo-fisio-wine.vercel.app/",
    image: "/projects/fisioterapia.webp",
    className: "physio",
    description:
      "Uma apresentação acolhedora para profissionais que cuidam de pessoas.",
  },
  {
    id: "04",
    title: "Ambiental Engenharia",
    kind: "Engenharia ambiental",
    type: "Site institucional",
    category: "Institucional",
    url: "https://demo-ambiental-engenharia.vercel.app/",
    image: "/projects/engenharia.webp",
    className: "engineering",
    description:
      "Design editorial para comunicar competência e visão de futuro.",
  },
  {
    id: "05",
    title: "Ieié Menu",
    kind: "Cardápio digital",
    type: "Aplicação web",
    category: "Aplicação",
    url: "https://web--ieie-app--nw8yr2c7byc6.code.run",
    image: "/projects/cardapio.webp",
    className: "food",
    description: "Uma experiência de pedidos com cardápio, opções e carrinho.",
  },
];
const services = [
  {
    icon: Globe2,
    number: "01",
    title: "Sites institucionais",
    desc: "Apresente seu negócio com clareza, personalidade e credibilidade.",
  },
  {
    icon: LayoutTemplate,
    number: "02",
    title: "Landing pages",
    desc: "Páginas estratégicas para transformar visitas em contatos e oportunidades.",
  },
  {
    icon: ShoppingBag,
    number: "03",
    title: "Soluções sob medida",
    desc: "Cardápios digitais, catálogos e experiências de compra ou agendamento.",
  },
  {
    icon: Smartphone,
    number: "04",
    title: "Experiência responsiva",
    desc: "Interfaces pensadas para funcionar bem em celulares, tablets e computadores.",
  },
];
const steps = [
  [
    "01",
    "Conversa",
    "Entendo seu negócio, seus objetivos e o que o site precisa resolver.",
  ],
  [
    "02",
    "Proposta",
    "Definimos escopo, investimento e prazo antes de começar.",
  ],
  [
    "03",
    "Criação",
    "Desenvolvo a experiência com a identidade e os materiais da sua marca.",
  ],
  ["04", "Lançamento", "Você aprova os detalhes e colocamos o projeto no ar."],
];
function waLink(message) {
  return WHATSAPP
    ? `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`
    : null;
}
function useReveal(dependency) {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("revealed"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [dependency]);
}
function ContactLink({
  children,
  className = "",
  message = "Olá, Luan! Conheci seu portfólio e gostaria de conversar sobre um site para meu negócio.",
  onUnavailable,
}) {
  const href = waLink(message);
  return (
    <a
      className={className}
      href={href || "#contato"}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      onClick={href ? undefined : () => onUnavailable?.()}
    >
      {children}
    </a>
  );
}
export default function App() {
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState("Todos");
  const [form, setForm] = useState({
    nome: "",
    negocio: "",
    tipo: "Site institucional",
    detalhes: "",
  });
  const [notice, setNotice] = useState("");
  useReveal(filter);
  useCinematicScroll();
  useEffect(() => {
    const close = () => setMenu(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);
  const unavailable = () => {
    setNotice(
      "Contato ainda não configurado. Adicione seu número no arquivo .env para ativar o WhatsApp.",
    );
    setTimeout(() => setNotice(""), 6000);
  };
  function sendQuote(e) {
    e.preventDefault();
    const msg = `Olá, Luan! Vim pelo seu portfólio e gostaria de um orçamento.\n\nNome: ${form.nome}\nEmpresa/negócio: ${form.negocio || "Não informado"}\nTipo de projeto: ${form.tipo}\nDetalhes: ${form.detalhes || "Podemos conversar sobre a ideia?"}`;
    const href = waLink(msg);
    if (!href) {
      unavailable();
      return;
    }
    window.open(href, "_blank", "noopener,noreferrer");
  }
  const visible =
    filter === "Todos"
      ? projects
      : projects.filter((p) => p.category === filter);
  return (
    <>
      <header className="site-header">
        <div className="header-inner container">
          <a className="logo" href="#inicio" aria-label="Luan Silva, início">
            LS<span className="logo-dot">.</span>
            <span className="logo-caption">
              LUAN SILVA
              <br />
              DESENVOLVEDOR WEB
            </span>
          </a>
          <nav
            className={menu ? "nav open" : "nav"}
            aria-label="Navegação principal"
          >
            <a onClick={() => setMenu(false)} href="#sobre">
              Sobre
            </a>
            <a onClick={() => setMenu(false)} href="#projetos">
              Projetos
            </a>
            <a onClick={() => setMenu(false)} href="#servicos">
              Serviços
            </a>
            <a onClick={() => setMenu(false)} href="#processo">
              Processo
            </a>
            <a onClick={() => setMenu(false)} href="#contato">
              Contato
            </a>
          </nav>
          <a href="#contato" className="header-cta">
            Vamos conversar <ArrowUpRight size={15} />
          </a>
          <button
            className="menu-button"
            aria-label={menu ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>
      <main>
        <section id="inicio" className="hero">
          <div className="hero-noise" />
          <div className="hero-image" />
          <div className="hero-image-overlay" />
          <div className="hero-film-frame" aria-hidden="true">
            <span>FRAME 001 / CREATIVE PORTFOLIO</span>
            <span>EST. 2026 — BRASIL</span>
          </div>
          <div className="hero-side-word" aria-hidden="true">
            LUAN SILVA / DIGITAL EXPERIENCES
          </div>
          <div className="container hero-inner">
            <div className="hero-topline">
              <span className="status-dot" /> DESENVOLVIMENTO WEB INDEPENDENTE{" "}
              <span className="topline-index">PORTFÓLIO / 2026</span>
            </div>
            <div className="hero-content">
              <div className="hero-eyebrow">
                <span className="line" /> DIGITAL COM PROPÓSITO
              </div>
              <h1>
                Seu negócio
                <br />
                merece <em>ser</em>
                <br />
                <span>
                  notado<span className="period">.</span>
                </span>
              </h1>
              <div className="hero-bottom">
                <p>
                  Crio experiências digitais que unem{" "}
                  <strong>design, estratégia e tecnologia</strong> para
                  transformar presença online em oportunidade.
                </p>
                <a
                  href="#projetos"
                  className="round-arrow"
                  aria-label="Explorar projetos"
                >
                  <ArrowRight size={25} />
                </a>
              </div>
            </div>
            <div className="hero-footer">
              <span>LUAN SILVA © 2026</span>
              <a href="#sobre">
                DESLIZE PARA EXPLORAR <ChevronDown size={15} />
              </a>
              <span>DESIGN & DESENVOLVIMENTO</span>
            </div>
          </div>
        </section>
        <section className="intro section" id="sobre">
          <div className="container intro-grid">
            <div className="section-marker" data-reveal>
              <span className="marker-circle" /> 01 / QUEM SOU
            </div>
            <div data-reveal>
              <p className="intro-lead">
                A internet está cheia de sites.
                <br />
                <span>O seu precisa fazer diferença.</span>
              </p>
              <div className="intro-bottom">
                <p>
                  Sou Luan Silva, desenvolvedor web. Ajudo negócios a construir
                  uma presença digital profissional com sites rápidos,
                  responsivos e feitos para o que realmente importa: conectar
                  sua marca às pessoas certas.
                </p>
                <a className="text-link" href="#contato">
                  Vamos tirar sua ideia do papel <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="projects section" id="projetos">
          <div className="container">
            <div className="section-marker" data-reveal>
              <span className="marker-circle" /> 02 / TRABALHOS SELECIONADOS
            </div>
            <div className="section-heading" data-reveal>
              <h2>
                Ideias que
                <br />
                <em>ganham forma.</em>
              </h2>
              <p>
                Uma seleção de projetos demonstrativos que exploram diferentes
                negócios, necessidades e experiências digitais.
              </p>
            </div>
            <div className="project-toolbar">
              <div
                className="filters"
                role="group"
                aria-label="Filtrar projetos"
              >
                {["Todos", "Institucional", "Aplicação"].map((x) => (
                  <button
                    key={x}
                    className={filter === x ? "active" : ""}
                    onClick={() => setFilter(x)}
                  >
                    {x}
                  </button>
                ))}
              </div>
              <span className="project-count">
                {String(visible.length).padStart(2, "0")} PROJETOS
              </span>
            </div>
            <div
              className="cinema-chapter"
              data-reveal
              aria-label="Capítulo dos projetos"
            >
              <span>CAPÍTULO II</span>
              <span className="cinema-chapter-line" />
              <span>
                EXPERIÊNCIAS DIGITAIS /{" "}
                {String(visible.length).padStart(2, "0")} CENAS
              </span>
            </div>
            <div className="project-grid">
              {visible.map((p, i) => (
                <a
                  className={"project-card " + p.className}
                  key={p.id}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-reveal
                  style={{ transitionDelay: `${Math.min(i, 3) * 80}ms` }}
                >
                  <div className="project-image">
                    <img
                      src={p.image}
                      alt={`Imagem conceitual de ${p.kind}`}
                      loading="lazy"
                    />
                    <div className="project-overlay" />
                    <span className="project-badge">PROJETO DEMONSTRATIVO</span>
                    <span className="project-action">
                      <ArrowUpRight size={23} />
                    </span>
                    <span className="project-image-title">{p.title}</span>
                  </div>
                  <div className="project-info">
                    <div>
                      <span className="project-index">
                        {p.id} / {p.kind.toUpperCase()}
                      </span>
                      <h3>{p.title}</h3>
                      <p>{p.description}</p>
                    </div>
                    <span className="project-type">
                      {p.type} <ExternalLink size={13} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <div className="projects-note" data-reveal>
              <span>*</span> Os projetos desta seção são demonstrações
              conceituais. As imagens de capa são ilustrativas; clique para
              explorar os sites reais em funcionamento.
            </div>
          </div>
        </section>
        <section className="statement">
          <div className="container statement-inner" data-reveal>
            <span>O QUE EU ACREDITO</span>
            <p>
              Um bom site não é só bonito.
              <br />
              Ele precisa <em>funcionar para você.</em>
            </p>
            <span className="statement-mark">✳</span>
          </div>
        </section>
        <section className="services section" id="servicos">
          <div className="container">
            <div className="section-marker" data-reveal>
              <span className="marker-circle" /> 03 / O QUE FAÇO
            </div>
            <div className="section-heading" data-reveal>
              <h2>
                Do conceito
                <br />
                <em>à presença digital.</em>
              </h2>
              <p>
                Soluções digitais com atenção aos detalhes, à experiência e aos
                objetivos de cada negócio.
              </p>
            </div>
            <div className="service-list">
              {services.map(({ icon: Icon, number, title, desc }) => (
                <div className="service-item" key={number} data-reveal>
                  <span className="service-number">{number}</span>
                  <div className="service-icon">
                    <Icon size={25} strokeWidth={1.4} />
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <ArrowUpRight className="service-arrow" size={20} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="process section" id="processo">
          <div className="container">
            <div className="section-marker" data-reveal>
              <span className="marker-circle" /> 04 / COMO FUNCIONA
            </div>
            <div className="section-heading" data-reveal>
              <h2>
                Simples. Claro.
                <br />
                <em>Do início ao fim.</em>
              </h2>
              <p>
                Sem complicação: um processo transparente para transformar sua
                ideia em algo concreto.
              </p>
            </div>
            <div className="steps">
              {steps.map(([number, title, desc]) => (
                <div className="step" key={number} data-reveal>
                  <span>{number} /</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="contact section" id="contato">
          <div className="container contact-grid">
            <div data-reveal>
              <div className="section-marker">
                <span className="marker-circle" /> 05 / VAMOS CONVERSAR
              </div>
              <h2>
                Seu próximo
                <br />
                projeto <em>começa</em>
                <br />
                aqui<span className="period">.</span>
              </h2>
              <p>
                Conte um pouco sobre sua ideia. Vou te ajudar a encontrar a
                melhor solução para o seu negócio.
              </p>
              <div className="contact-side">
                <span>DISPONÍVEL PARA NOVOS PROJETOS</span>
                <span className="status-dot" />
              </div>
            </div>
            <form className="contact-form" onSubmit={sendQuote} data-reveal>
              <div className="form-head">
                <span>INICIAR UM PROJETO</span>
                <span>01 — 04</span>
              </div>
              <label>
                Como posso te chamar?
                <input
                  required
                  maxLength="90"
                  placeholder="Seu nome"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                />
              </label>
              <label>
                Qual o nome do seu negócio?
                <input
                  maxLength="120"
                  placeholder="Nome da empresa (opcional)"
                  value={form.negocio}
                  onChange={(e) =>
                    setForm({ ...form, negocio: e.target.value })
                  }
                />
              </label>
              <label>
                O que você precisa?
                <select
                  value={form.tipo}
                  onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                >
                  <option>Site institucional</option>
                  <option>Landing page</option>
                  <option>Cardápio digital</option>
                  <option>Catálogo / agendamento</option>
                  <option>Outro projeto</option>
                </select>
              </label>
              <label>
                Me conte sua ideia
                <textarea
                  rows="3"
                  maxLength="1000"
                  placeholder="O que você gostaria de criar?"
                  value={form.detalhes}
                  onChange={(e) =>
                    setForm({ ...form, detalhes: e.target.value })
                  }
                />
              </label>
              <button type="submit" className="form-submit">
                Solicitar orçamento pelo WhatsApp <Send size={18} />
              </button>
              <small>
                Sem compromisso. O WhatsApp abrirá com sua mensagem preenchida.
              </small>
            </form>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <a className="footer-logo" href="#inicio">
              LUAN
              <br />
              SILVA<span>.</span>
            </a>
            <div>
              <span>DESENVOLVIMENTO WEB INDEPENDENTE</span>
              <p>
                Boas ideias merecem
                <br />
                uma boa presença digital.
              </p>
            </div>
            <a className="back-top" href="#inicio">
              VOLTAR AO TOPO <MoveUpRight size={16} />
            </a>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} LUAN SILVA. TODOS OS DIREITOS
              RESERVADOS.
            </span>
            <span>DESENVOLVIDO COM INTENÇÃO E CAFÉ.</span>
          </div>
        </div>
      </footer>
      {notice && (
        <div className="notice" role="status">
          <X size={16} onClick={() => setNotice("")} />
          {notice}
        </div>
      )}
    </>
  );
}
