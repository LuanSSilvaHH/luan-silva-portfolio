import React, { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X, MoveUpRight } from "lucide-react";

const WHATSAPP = (import.meta.env.VITE_WHATSAPP_NUMBER || "5533998803892").replace(/\D/g, "");
const projects = [
  {
    id:"01", hero:"/projects/hero-car.webp", title:"NOIR Auto Studio", small:"NOIR", category:"Institucional",
    kind:"Estética automotiva", type:"Landing page", image:"/projects/automotiva.webp",
    url:"https://demoautomobilistica.netlify.app/",
    tagline:"O detalhe muda tudo.",
    description:"Uma identidade digital de impacto, feita para transmitir a precisão e o cuidado do detalhamento automotivo.",
    color:"#c5b089"
  },
  {
    id:"02", hero:"/projects/hero-clima.webp", title:"Leal Climatização", small:"LEAL", category:"Institucional",
    kind:"Climatização", type:"Landing page", image:"/projects/climatizacao.webp",
    url:"https://democlimatiza.netlify.app/",
    tagline:"Conforto em outra dimensão.",
    description:"Uma presença profissional que transforma serviços técnicos em uma experiência clara, visual e confiável.",
    color:"#8ab9be"
  },
  {
    id:"03", hero:"/projects/hero-fisio.webp", title:"VittaFisio", small:"VITTA", category:"Institucional",
    kind:"Fisioterapia e pilates", type:"Site profissional", image:"/projects/fisioterapia.webp",
    url:"https://demo-fisio-wine.vercel.app/",
    tagline:"Movimento com propósito.",
    description:"Um universo editorial acolhedor para valorizar pessoas, movimento e cuidado em cada interação.",
    color:"#d8b8ac"
  },
  {
    id:"04", hero:"/projects/hero-eng.webp", title:"PRUMO Engenharia Civil", small:"PRUMO", category:"Institucional",
    kind:"Engenharia civil", type:"Site interativo", image:"/projects/engenharia.webp",
    url:"https://demo-engenharia-civil.vercel.app/",
    tagline:"Ideias que ganham estrutura.",
    description:"Composição arquitetônica, navegação intencional e linguagem visual para uma engenharia contemporânea.",
    color:"#c1b8a9"
  },
  {
    id:"05", title:"Lanche do IEIÉ", small:"IEIÉ", category:"Aplicação",
    kind:"Hamburgueria", type:"Aplicação web", image:"/projects/cardapio.webp",
    url:"https://web--ieie-app--nw8yr2c7byc6.code.run/",
    tagline:"O sabor também é digital.",
    description:"Cardápio digital com personalidade, personalização de pedidos e um jeito diferente de pedir comida.",
    color:"#ddae75"
  }
];
const services = [
  ["01","Sites de presença","Sites institucionais feitos para transformar sua identidade em uma experiência memorável."],
  ["02","Landing pages","Narrativas visuais que apresentam seu serviço com clareza e levam à próxima ação."],
  ["03","Experiências sob medida","Catálogos, cardápios, reservas e ferramentas digitais criadas para cada necessidade."],
  ["04","Design responsivo","Um cuidado especial com cada tela — do primeiro toque no celular ao monitor grande."]
];
const steps = [
  ["01","A conversa","Entendo o negócio e o que precisa ser resolvido."],
  ["02","A direção","Alinhamos referências, escopo, investimento e prazo."],
  ["03","A criação","Design e desenvolvimento tomam forma em conjunto."],
  ["04","A estreia","Você aprova os detalhes e o projeto vai ao ar."]
];
const waLink = message => WHATSAPP ? "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(message) : "#contato";
function SectionLabel({number,children,light=false}) {
  return <span className={"dc-section-label"+(light?" light":"")}><span>{number}</span> / {children}</span>;
}
export default function DirectorCut() {
  const [menu,setMenu]=useState(false);
  const [active,setActive]=useState(0);
  const [filter,setFilter]=useState("Todos");
  const [form,setForm]=useState({nome:"",negocio:"",tipo:"Site institucional",detalhes:""});
  const [notice,setNotice]=useState("");
  const selection=projects[active];
  const visible=filter==="Todos"?projects:projects.filter(p=>p.category===filter);
  useEffect(()=>{
    const close=()=>setMenu(false);
    window.addEventListener("hashchange",close);
    return()=>window.removeEventListener("hashchange",close);
  },[]);
  useEffect(()=>{
    const els=[...document.querySelectorAll(".dc-reveal")];
    if(!("IntersectionObserver" in window)) return;
    const io=new IntersectionObserver(entries=>{
      entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("dc-in");io.unobserve(e.target)}});
    },{threshold:.05,rootMargin:"0px 0px 70px 0px"});
    els.forEach(el=>io.observe(el));
    return()=>io.disconnect();
  },[filter]);
  function submit(e){
    e.preventDefault();
    if(!form.nome.trim()){setNotice("Informe seu nome antes de continuar.");return;}
    const msg="Olá, Luan! Vim pelo seu portfólio e gostaria de um orçamento.\n\nNome: "+form.nome+"\nEmpresa/negócio: "+(form.negocio||"Não informado")+"\nTipo de projeto: "+form.tipo+"\nDetalhes: "+(form.detalhes||"Podemos conversar sobre a ideia?");
    if(!WHATSAPP){setNotice("O WhatsApp ainda não está configurado.");return;}
    window.open(waLink(msg),"_blank","noopener,noreferrer");
  }
  return <>
    <a href="#principal" className="dc-skip">Pular para o conteúdo</a>
    <header className="dc-nav">
      <div className="dc-nav-inner">
        <a className="dc-brand" href="#inicio" onClick={()=>setMenu(false)} aria-label="Luan Silva — início">
          <span className="dc-brand-mark">L<span>S</span><b>.</b></span>
          <span className="dc-brand-title">LUAN SILVA <small>DESIGN & DESENVOLVIMENTO</small></span>
        </a>
        <nav id="dc-main-navigation" className={"dc-links"+(menu?" dc-open":"")} aria-label="Navegação principal">
          <a href="#sobre" onClick={()=>setMenu(false)}>Estúdio</a>
          <a href="#projetos" onClick={()=>setMenu(false)}>Projetos</a>
          <a href="#servicos" onClick={()=>setMenu(false)}>O que faço</a>
          <a href="#processo" onClick={()=>setMenu(false)}>Processo</a>
          <a href="#contato" onClick={()=>setMenu(false)}>Contato</a>
        </nav>
        <a className="dc-nav-action" href="#contato">Iniciar um projeto <ArrowUpRight size={16}/></a>
        <button type="button" className="dc-menu" aria-label={menu?"Fechar menu":"Abrir menu"} aria-expanded={menu} aria-controls="dc-main-navigation" onClick={()=>setMenu(!menu)}>{menu?<X size={26}/>:<Menu size={26}/>}</button>
      </div>
    </header>

    <main id="principal">
      <section className="dc-hero" id="inicio" aria-label="Apresentação">
        <div className="dc-hero-background" aria-hidden="true">
          <img key={selection.id} src={selection.hero || selection.image} alt="" fetchPriority="high"/>
        </div>
        <div className="dc-hero-lines" aria-hidden="true"/>
        <div className="dc-hero-inner dc-wrap">
          <div className="dc-hero-super"><span><i/> INDEPENDENT DIGITAL STUDIO</span><span>VOL. 01 — 2026</span></div>
          <div className="dc-hero-content">
            <span className="dc-kicker"><span className="dc-kicker-line"/> CRIATIVIDADE COM PROPÓSITO</span>
            <h1>O comum<br/>não deixa<br/><em>marcas<span>.</span></em></h1>
            <p>Eu crio sites autorais para negócios que querem ser lembrados. Design com personalidade. Tecnologia que funciona.</p>
            <div className="dc-hero-cta">
              <a className="dc-filled-link" href="#projetos">Explorar projetos <ArrowUpRight size={21}/></a>
              <a className="dc-ghost-link" href="#contato">Vamos criar algo <ArrowUpRight size={17}/></a>
            </div>
          </div>
          <a className="dc-hero-now" href={selection.url} target="_blank" rel="noopener noreferrer" aria-label={"Abrir projeto "+selection.title}>
            <span className="dc-hero-now-bar"><span>EM CARTAZ</span><span>0{active+1} / 05</span></span>
            <strong>{selection.small}</strong>
            <span>{selection.kind} <ArrowUpRight size={15}/></span>
          </a>
          <div className="dc-hero-bottom">
            <a className="dc-scrollcue" href="#sobre"><span className="dc-scroll-track"><span/></span> DESCUBRA MAIS</a>
            <span>DESIGN & DESENVOLVIMENTO WEB — BRASIL</span>
          </div>
        </div>
        <div className="dc-film-selector" aria-label="Escolha um projeto para visualizar em destaque">
          {projects.map((p,i)=><button className={"dc-film-thumb"+(i===active?" selected":"")} type="button" key={p.id} onClick={()=>setActive(i)} aria-pressed={active===i} aria-label={"Ver "+p.title+" na abertura"}>
            <img src={p.image} alt="" loading={i>1?"lazy":"eager"}/>
            <span><b>{p.id}</b>{p.small}</span>
          </button>)}
        </div>
      </section>

      <section className="dc-intro" id="sobre">
        <div className="dc-wrap dc-intro-top"><SectionLabel number="01">A FILOSOFIA</SectionLabel><span>BEYOND THE ORDINARY / 2026</span></div>
        <div className="dc-wrap dc-intro-grid">
          <div className="dc-intro-head dc-reveal"><span className="dc-intro-asterisk">✳</span><h2>O seu site<br/>não precisa ser<br/><em>só mais um.</em></h2></div>
          <div className="dc-intro-aside dc-reveal">
            <span className="dc-mini-line"/>
            <p>Sou Luan Silva, desenvolvedor web. Acredito que uma boa presença digital começa pela forma como a sua marca é percebida — e continua na facilidade de usar cada detalhe.</p>
            <a href="#contato">Vamos tirar sua ideia do papel <ArrowUpRight size={19}/></a>
          </div>
        </div>
        <div className="dc-intro-footer dc-wrap"><span>IDENTIDADE, NÃO FÓRMULA.</span><span>ESTÉTICA + PROPÓSITO</span></div>
      </section>

      <section className="dc-portfolio" id="projetos">
        <div className="dc-wrap dc-portfolio-heading">
          <SectionLabel number="02" light>PROJETOS SELECIONADOS</SectionLabel>
          <div className="dc-portfolio-title-row dc-reveal">
            <h2>Histórias<br/><em>em pixels.</em></h2>
            <p>Uma coleção de estudos e experiências digitais. Cada projeto com a sua própria linguagem e um objetivo diferente.</p>
          </div>
          <div className="dc-portfolio-filters" role="group" aria-label="Filtrar projetos">
            <div>{["Todos","Institucional","Aplicação"].map(f=><button type="button" key={f} className={filter===f?"active":""} aria-pressed={filter===f} onClick={()=>setFilter(f)}>{f}</button>)}</div>
            <span>{String(visible.length).padStart(2,"0")} / PROJETOS</span>
          </div>
        </div>
        <div className="dc-scenes">
          {visible.map((p,i)=><article className={"dc-scene scene-"+p.id+" dc-reveal"} key={p.id} style={{"--accent":p.color}}>
            <div className="dc-scene-picture">
              <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={"Abrir demonstração de "+p.title}>
                <img src={p.image} alt={"Captura real da demonstração "+p.title} loading="lazy"/>
                <span className="dc-scene-dark"/>
                <span className="dc-scene-picture-top"><span>SELECTED WORK / {p.id}</span><span>WEB EXPERIENCE</span></span>
                <span className="dc-scene-open"><ArrowUpRight size={26}/></span>
                <span className="dc-scene-picture-bottom">{p.tagline}</span>
              </a>
            </div>
            <div className="dc-scene-details">
              <span className="dc-scene-number">/{p.id}</span>
              <div><span className="dc-scene-type">{p.kind} · {p.type}</span><h3>{p.title}</h3><p>{p.description}</p></div>
              <a href={p.url} target="_blank" rel="noopener noreferrer">Ver projeto ao vivo <ArrowUpRight size={20}/></a>
            </div>
          </article>)}
        </div>
        <div className="dc-wrap dc-portfolio-end"><p>* Projetos demonstrativos, não trabalhos contratados. As imagens mostram os sites publicados.</p><a href="#contato">O próximo pode ser o seu <ArrowUpRight size={20}/></a></div>
      </section>

      <div className="dc-interlude" aria-label="Frase de direção criativa">
        <div className="dc-interlude-track" aria-hidden="true"><span>IDEIAS QUE MERECEM SER VISTAS <i>✳</i> DESIGN FOR THE FEELING <i>✳</i> IDEIAS QUE MERECEM SER VISTAS <i>✳</i> DESIGN FOR THE FEELING <i>✳</i></span></div>
      </div>

      <section className="dc-capabilities" id="servicos">
        <div className="dc-wrap">
          <div className="dc-capabilities-head">
            <SectionLabel number="03">O QUE EU FAÇO</SectionLabel>
            <div className="dc-reveal"><h2>O que sua<br/>marca <em>precisa?</em></h2><p>Não é sobre colocar tudo em uma página. É sobre fazer as escolhas certas para quem vai usar.</p></div>
          </div>
          <div className="dc-service-list">
            {services.map(([num,title,desc])=><div className="dc-service-row dc-reveal" key={num}>
              <span className="dc-service-num">{num}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <ArrowUpRight className="dc-service-icon" size={25} strokeWidth={1.25}/>
            </div>)}
          </div>
        </div>
      </section>

      <section className="dc-process" id="processo">
        <div className="dc-wrap">
          <div className="dc-process-top">
            <SectionLabel number="04" light>O PROCESSO</SectionLabel>
            <span>FROM CONCEPT TO LAUNCH</span>
          </div>
          <h2 className="dc-reveal">Toda boa história<br/>tem um <em>começo.</em></h2>
          <div className="dc-timeline">
            {steps.map(([number,title,description])=><div className="dc-timeline-step dc-reveal" key={number}>
              <span>{number} / 04</span>
              <b className="dc-timeline-point"/>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>)}
          </div>
        </div>
      </section>

      <section className="dc-contact" id="contato">
        <div className="dc-wrap">
          <div className="dc-contact-heading"><SectionLabel number="05">O PRÓXIMO CAPÍTULO</SectionLabel><span>LET'S MAKE SOMETHING MATTER.</span></div>
          <div className="dc-contact-grid">
            <div className="dc-contact-copy dc-reveal">
              <h2>E se a próxima<br/>grande ideia<br/>for <em>a sua?</em></h2>
              <p>Me conte o que você quer construir. Eu ajudo a transformar a ideia em uma presença digital que faça sentido para a sua marca.</p>
              <a className="dc-contact-direct" href={waLink("Olá, Luan! Conheci seu portfólio e gostaria de conversar sobre um projeto.")} target="_blank" rel="noopener noreferrer">Prefere conversar direto? <ArrowUpRight size={20}/></a>
              <span className="dc-contact-availability"><i/> DISPONÍVEL PARA NOVOS PROJETOS</span>
            </div>
            <form className="dc-contact-form dc-reveal" onSubmit={submit}>
              <div className="dc-form-head"><span>SEU PROJETO COMEÇA AQUI</span><span>01 — 04</span></div>
              <label htmlFor="dc-nome">Como posso te chamar?<input id="dc-nome" required maxLength="90" placeholder="Seu nome" autoComplete="name" value={form.nome} onChange={e=>setForm({...form,nome:e.target.value})}/></label>
              <label htmlFor="dc-negocio">Qual o nome do seu negócio?<input id="dc-negocio" maxLength="120" placeholder="Empresa ou marca (opcional)" value={form.negocio} onChange={e=>setForm({...form,negocio:e.target.value})}/></label>
              <label htmlFor="dc-tipo">O que você precisa?<select id="dc-tipo" value={form.tipo} onChange={e=>setForm({...form,tipo:e.target.value})}>
                <option>Site institucional</option><option>Landing page</option><option>Cardápio digital</option><option>Catálogo / agendamento</option><option>Outro projeto</option>
              </select></label>
              <label htmlFor="dc-detalhes">Me conta um pouco da sua ideia<textarea id="dc-detalhes" rows="3" maxLength="1000" placeholder="Como você imagina esse projeto?" value={form.detalhes} onChange={e=>setForm({...form,detalhes:e.target.value})}/></label>
              <button className="dc-form-submit" type="submit">Solicitar orçamento <ArrowUpRight size={21}/></button>
              <small>Sem compromisso. Seu WhatsApp abrirá com a mensagem pronta.</small>
            </form>
          </div>
        </div>
      </section>
    </main>

    <footer className="dc-footer">
      <div className="dc-wrap">
        <div className="dc-footer-main">
          <a href="#inicio" className="dc-footer-brand">LUAN<br/><em>SILVA.</em></a>
          <div><span>CRIAÇÃO DIGITAL COM INTENÇÃO</span><p>Boas ideias merecem<br/>uma presença à altura.</p></div>
          <a className="dc-back-top" href="#inicio">VOLTAR AO TOPO <MoveUpRight size={17}/></a>
        </div>
        <div className="dc-footer-bottom"><span>© {new Date().getFullYear()} LUAN SILVA</span><span>FEITO COM CUIDADO, NÃO COM PRESSA.</span><span>BRASIL — ONLINE</span></div>
      </div>
    </footer>
    {notice&&<div className="dc-notice" role="status"><span>{notice}</span><button type="button" onClick={()=>setNotice("")} aria-label="Fechar aviso"><X size={17}/></button></div>}
  </>;
}

