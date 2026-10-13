import React, {useEffect, useRef, useState} from "react";
import {ArrowUpRight, ArrowDown, ArrowUp, Menu, X, Pause, Play} from "lucide-react";

const number=(import.meta.env.VITE_WHATSAPP_NUMBER||"5533998803892").replace(/\D/g,"");
const whatsapp=text=>"https://wa.me/"+number+"?text="+encodeURIComponent(text);
const projects=[
{id:"noir",n:"01",name:"NOIR Auto Studio",short:"NOIR",sector:"Estética automotiva",type:"Institucional",url:"https://demoautomobilistica.netlify.app/",shot:"automotiva",hero:"car"},
{id:"leal",n:"02",name:"Leal Climatização",short:"LEAL",sector:"Climatização",type:"Institucional",url:"https://democlimatiza.netlify.app/",shot:"climatizacao",hero:"clima"},
{id:"vitta",n:"03",name:"VittaFisio",short:"VITTA",sector:"Fisioterapia e pilates",type:"Institucional",url:"https://demo-fisio-wine.vercel.app/",shot:"fisioterapia",hero:"fisio"},
{id:"prumo",n:"04",name:"PRUMO Engenharia Civil",short:"PRUMO",sector:"Engenharia civil",type:"Institucional",url:"https://demo-engenharia-civil.vercel.app/",shot:"engenharia",hero:"eng"},
{id:"ieie",n:"05",name:"Lanche do IEIÉ",short:"IEIÉ",sector:"Cardápio digital",type:"Aplicação",url:"https://web--ieie-app--nw8yr2c7byc6.code.run/",shot:"cardapio",hero:"ieie"}
];
function Demo({p,label="Abrir demonstração"}){return <a className="demo-link" href={p.url} target="_blank" rel="noopener noreferrer">{label}<ArrowUpRight size={22}/><span className="sr-only"> de {p.name} (nova aba)</span></a>}
function Shot({p,className=""}){return <figure className={"site-shot "+className}><div aria-hidden="true"><span>● ● ●</span><span>{p.name}</span><ArrowUpRight size={12}/></div><img src={"/projects/"+p.shot+".webp"} alt={"Prévia do site "+p.name} loading="lazy" width="1440" height="900"/></figure>}
function Label({children}){return <p className="eyebrow">{children}</p>}
function SceneTop({p}){return <div className="scene-top"><span>{p.n} / {p.sector}</span><span>Estudo demonstrativo</span></div>}
export default function Cinema(){
 const [menu,setMenu]=useState(false),[filter,setFilter]=useState("Todos"),[active,setActive]=useState(""),[selectedIndex,setSelectedIndex]=useState(""),[paused,setPaused]=useState(false);
 const opening=useRef(null),toggle=useRef(null);
 useEffect(()=>{const saved=localStorage.getItem("portfolio-motion");setPaused(saved==="off");},[]);
 useEffect(()=>{document.documentElement.dataset.motion=paused?"off":"on";localStorage.setItem("portfolio-motion",paused?"off":"on");},[paused]);
 useEffect(()=>{const close=e=>{if(e.key==="Escape"&&menu){setMenu(false);toggle.current?.focus()}};document.addEventListener("keydown",close);return()=>document.removeEventListener("keydown",close)},[menu]);
 useEffect(()=>{
  const mq=matchMedia("(prefers-reduced-motion: reduce)");let frame=0;
  const update=()=>{frame=0;const node=opening.current;if(!node)return;const rect=node.getBoundingClientRect();const progress=Math.max(0,Math.min(1,-rect.top/Math.max(1,rect.height-innerHeight)));node.style.setProperty("--journey",mq.matches||paused?0:progress);};
  const scroll=()=>{if(!frame)frame=requestAnimationFrame(update)};scroll();window.addEventListener("scroll",scroll,{passive:true});window.addEventListener("resize",scroll);mq.addEventListener("change",scroll);
  const observer=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting)setActive(e.target.id)},{rootMargin:"-20% 0px -50% 0px",threshold:0});
  document.querySelectorAll("[data-project]").forEach(el=>observer.observe(el));
  return()=>{cancelAnimationFrame(frame);window.removeEventListener("scroll",scroll);window.removeEventListener("resize",scroll);mq.removeEventListener("change",scroll);observer.disconnect()};
 },[paused]);
 const close=()=>setMenu(false);
 function submit(e){e.preventDefault();const data=new FormData(e.currentTarget);const nome=String(data.get("nome")||"").trim();if(!nome){e.currentTarget.elements.nome.focus();return}
 window.open(whatsapp("Olá, Luan! Vim pelo seu portfólio e gostaria de conversar sobre um projeto.\n\nNome: "+nome+"\nNegócio: "+(data.get("negocio")||"Não informado")+"\nTipo: "+data.get("tipo")+"\nIdeia: "+(data.get("ideia")||"Vamos conversar?")),"_blank","noopener,noreferrer")}
 return <>
 <a className="skip-link" href="#principal">Pular para o conteúdo</a>
 <header className="masthead">
  <a className="wordmark" href="#inicio" onClick={close} aria-label="Luan Silva, início">luan silva<span>®</span></a>
  <span className="masthead-note">Design & desenvolvimento independente</span>
  <a className="header-contact" href="#contato">Vamos conversar <ArrowUpRight size={17}/></a>
  <button className="motion-toggle" onClick={()=>setPaused(!paused)} aria-pressed={paused} aria-label={paused?"Ativar animações":"Pausar animações"}>{paused?<Play size={17}/>:<Pause size={17}/>}</button>
  <button ref={toggle} className="menu-toggle" aria-controls="navigation" aria-expanded={menu} aria-label={menu?"Fechar menu":"Abrir menu"} onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
  <nav id="navigation" className="navigation" hidden={!menu} aria-label="Navegação principal">
   {[["projetos","Os projetos"],["sobre","Quem cria"],["servicos","O que faço"],["processo","O processo"],["contato","Vamos conversar"]].map(([id,title],i)=><a key={id} href={"#"+id} onClick={close}><small>0{i+1}</small>{title}<ArrowUpRight/></a>)}
  </nav>
 </header>
 <main id="principal">
 <section id="inicio" className="opening" ref={opening} aria-labelledby="opening-title">
  <div className="opening-stage">
   <div className="opening-top"><Label>Portfólio independente / 2026</Label><span>Minas Gerais, Brasil</span></div>
   <div className="depth-lines" aria-hidden="true"><i/><i/><i/></div>
   <div className="opening-title"><Label>Uma ideia pode levar você</Label><h1 id="opening-title">Além <em>da tela.</em></h1><p>Design que desperta. Código que realiza.<br/>Experiências digitais por Luan Silva.</p></div>
   <div className="film-portal" aria-hidden="true">
    <div className="portal-panel portal-left"><img src="/projects/hero-fisio.webp" alt="" width="1500" height="1000"/></div>
    <div className="portal-panel portal-main"><img src="/projects/hero-car.webp" alt="" fetchPriority="high" width="1500" height="1000"/><span>01 — NOIR AUTO STUDIO</span></div>
    <div className="portal-panel portal-right"><img src="/projects/hero-ieie.webp" alt="" width="1500" height="1000"/></div>
    <span className="portal-caption">Cinco projetos. Cinco universos.</span>
   </div>
   <div className="opening-bottom"><a className="enter-link" href="#projetos"><span>Entre nas histórias</span><ArrowDown size={21}/></a><p>Sites, identidades digitais<br/>e aplicações sob medida.</p><span className="opening-index">01 — 05</span></div>
  </div>
 </section>
 <section className="project-index" id="projetos">
  <div className="index-heading"><Label>A coleção / cinco demonstrações</Label><h2>Escolha um<br/><em>universo.</em></h2><p>Projetos de estudo que exploram diferentes negócios, linguagens e possibilidades para a web.</p></div>
  <div className="index-list"><div className="filters" role="group" aria-label="Filtrar índice de projetos">{["Todos","Institucional","Aplicação"].map(f=><button key={f} aria-pressed={filter===f} onClick={()=>setFilter(f)}>{f}</button>)}</div>
  {projects.filter(p=>filter==="Todos"||p.type===filter).map(p=><div className={"index-card"+(selectedIndex===p.id?" is-selected":"")} key={p.id}>
   <img className="index-card-photo" src={"/projects/hero-"+p.hero+".webp"} alt="" loading="lazy" width="1500" height="1000"/>
   <div className="index-card-shade" aria-hidden="true"/>
   <button type="button" className="index-card-trigger" aria-expanded={selectedIndex===p.id} aria-controls={"index-details-"+p.id} onClick={()=>setSelectedIndex(selectedIndex===p.id?"":p.id)}>
    <span className="index-card-number">{p.n}</span><span className="index-card-copy"><strong>{p.name}</strong><small>{p.sector}</small></span><ArrowDown className="index-card-arrow" size={22}/>
   </button>
   <div id={"index-details-"+p.id} className="index-card-details" hidden={selectedIndex!==p.id}>
    <span>UMA EXPERIÊNCIA / {p.type.toUpperCase()}</span>
    <div><a href={"#"+p.id}>Explorar capítulo <ArrowDown size={18}/></a><a href={p.url} target="_blank" rel="noopener noreferrer">Abrir site <ArrowUpRight size={18}/></a></div>
   </div>
  </div>)}</div>
 </section>
 <nav className="scene-rail" aria-label="Atalhos dos projetos">{projects.map(p=><a key={p.id} href={"#"+p.id} aria-label={p.name} aria-current={active===p.id?"location":undefined}><span>{p.n}</span><b>{p.short}</b></a>)}</nav>
 <article className="scene scene-noir" id="noir" data-project>
  <img className="noir-background" src="/projects/hero-car.webp" alt="Automóvel preto em uma oficina de detalhamento" width="1500" height="1000" loading="lazy"/>
  <div className="noir-shade"/><SceneTop p={projects[0]}/>
  <div className="noir-title"><Label>NOIR Auto Studio</Label><h2>O detalhe<br/>é <em>tudo.</em></h2></div>
  <div className="noir-bottom"><span className="noir-monogram" aria-hidden="true">N°01</span><div><p>Luz, contraste e precisão.<br/>Uma vitrine digital para quem cuida de cada detalhe.</p><Demo p={projects[0]}/></div></div>
  <details className="project-inside"><summary>Veja a interface <span>+</span></summary><Shot p={projects[0]}/></details>
 </article>
 <article className="scene scene-leal" id="leal" data-project>
  <SceneTop p={projects[1]}/>
  <div className="leal-layout"><div className="leal-copy"><Label>Leal Climatização</Label><h2>Respire.<br/>O resto,<br/><em>flui.</em></h2><p>Uma experiência leve para apresentar soluções técnicas com clareza. O conforto começa antes do primeiro contato.</p><Demo p={projects[1]}/></div>
  <div className="leal-visual"><div className="air-orbit" aria-hidden="true"><i/><i/><i/></div><img className="leal-photo" src="/projects/hero-clima.webp" alt="Profissional de climatização apresentado no projeto Leal" loading="lazy" width="1500" height="1000"/><Shot p={projects[1]}/><span className="visual-note">Clareza em cada ponto de contato.</span></div></div>
 </article>
 <article className="scene scene-vitta" id="vitta" data-project>
  <SceneTop p={projects[2]}/><div className="vitta-layout">
  <div className="vitta-visual"><span className="vitta-orbit" aria-hidden="true"/><img src="/projects/hero-fisio.webp" alt="Movimento e cuidado no projeto de fisioterapia" loading="lazy" width="1500" height="1000"/><span className="vitta-seal">CORPO • CUIDADO • MOVIMENTO</span></div>
  <div className="vitta-copy"><Label>VittaFisio / fisioterapia e pilates</Label><h2>Feito para<br/><em>sentir.</em></h2><p>Espaço para respirar. Tempo para acolher. Uma presença digital que aproxima o cuidado das pessoas.</p><Demo p={projects[2]}/><details className="project-inside"><summary>Veja a interface <span>+</span></summary><Shot p={projects[2]}/></details></div></div>
 </article>
 <article className="scene scene-prumo" id="prumo" data-project>
  <SceneTop p={projects[3]}/><div className="prumo-heading"><h2>PRU<span>MO.</span></h2><div><Label>Engenharia civil</Label><p>Estrutura para ideias.<br/>Presença para construir.</p></div></div>
  <div className="prumo-grid"><div className="prumo-portrait"><img src="/projects/hero-eng.webp" alt="Obra de engenharia civil vista de cima" loading="lazy" width="1500" height="1000"/><span>01 / A perspectiva</span></div><div className="prumo-interface"><Shot p={projects[3]}/><div className="prumo-copy"><p>Uma composição precisa, com navegação lateral e hierarquia arquitetônica. Cada elemento tem seu lugar.</p><Demo p={projects[3]}/></div></div></div>
 </article>
 <article className="scene scene-ieie" id="ieie" data-project>
  <SceneTop p={projects[4]}/><div className="ieie-heading"><Label>Lanche do IEIÉ / aplicação web</Label><h2>Deu <em>fome?</em></h2></div>
  <div className="ieie-layout"><div className="ieie-photo"><img src="/projects/hero-ieie.webp" alt="Hambúrguer do cardápio demonstrativo Lanche do IEIÉ" loading="lazy" width="1500" height="1000"/><span className="ieie-stamp">ABRA.<br/>ESCOLHA.<br/>PEÇA.</span></div><div className="ieie-copy"><p className="ieie-statement">Personalidade<br/>até no pedido.</p><p>Um cardápio que dá vontade de explorar. Escolha seu lanche, personalize os adicionais e monte seu pedido.</p><Demo p={projects[4]} label="Explorar o cardápio"/><details className="project-inside"><summary>Veja a interface <span>+</span></summary><Shot p={projects[4]}/></details></div></div>
 </article>
 <section className="studio" id="sobre"><div className="studio-top"><Label>Por trás das experiências</Label><span>Design + desenvolvimento</span></div><h2>Um olhar curioso.<br/><em>As mãos no código.</em></h2><div className="studio-about"><span className="studio-signature">Luan<br/>Silva.</span><div><p>Sou Luan Silva, desenvolvedor web em Minas Gerais. Transformo ideias em sites que têm identidade e são fáceis de usar.</p><p>Da primeira conversa ao último ajuste, cuido do visual e do desenvolvimento. Para o seu negócio se apresentar do jeito que merece.</p></div></div>
 <div id="servicos" className="services"><Label>O que podemos construir</Label>{[["01","Sites institucionais","Uma presença clara e profissional para o seu negócio."],["02","Landing pages","Uma página dedicada a apresentar e valorizar sua oferta."],["03","Aplicações sob medida","Cardápios, catálogos e ferramentas para facilitar o dia a dia."]].map(([n,title,desc])=><div className="service" key={n}><span>{n}</span><h3>{title}</h3><p>{desc}</p></div>)}</div></section>
 <section className="process" id="processo"><Label>Da conversa à estreia</Label><h2>Você acompanha<br/><em>cada capítulo.</em></h2><ol>{[["Conversa","Entendo sua ideia, seu negócio e o que precisa funcionar."],["Direção","Combinamos o visual, o escopo, o investimento e o prazo."],["Construção","Design e código ganham forma, com espaço para seus ajustes."],["Estreia","Após sua aprovação, preparamos o projeto para ir ao ar."]].map(([title,desc],i)=><li key={title}><span>0{i+1}</span><h3>{title}</h3><p>{desc}</p></li>)}</ol></section>
 <section className="contact" id="contato"><div className="contact-copy"><Label>O próximo projeto pode ser o seu</Label><h2>Vamos fazer<br/><em>acontecer.</em><span>↗</span></h2><p>Tem uma ideia? Me conta.<br/>A primeira conversa é sem compromisso.</p><a className="direct-link" href={whatsapp("Olá, Luan! Conheci seu portfólio e gostaria de conversar sobre um projeto.")} target="_blank" rel="noopener noreferrer">Conversar direto no WhatsApp <ArrowUpRight size={20}/></a></div>
 <form onSubmit={submit}><Label>Me conte o que você imagina</Label><label htmlFor="nome">Seu nome<input id="nome" name="nome" autoComplete="name" placeholder="Como posso te chamar?" required maxLength="90"/></label><label htmlFor="negocio">Seu negócio <small>(opcional)</small><input id="negocio" name="negocio" autoComplete="organization" placeholder="Empresa ou marca" maxLength="120"/></label><label htmlFor="tipo">O que você precisa?<select id="tipo" name="tipo"><option>Site institucional</option><option>Landing page</option><option>Cardápio digital</option><option>Catálogo / agendamento</option><option>Outro projeto</option></select></label><label htmlFor="ideia">Sua ideia <small>(opcional)</small><textarea id="ideia" name="ideia" rows="2" maxLength="1000" placeholder="O que vamos criar juntos?"/></label><button type="submit">Continuar no WhatsApp <ArrowUpRight size={20}/></button><p className="form-note">Abre o WhatsApp com a mensagem pronta. Você revisa antes de enviar.</p></form></section>
 </main>
 <footer><a className="footer-brand" href="#inicio">luan silva<span>®</span></a><div><span>© {new Date().getFullYear()} Luan Silva</span><span>Design independente. Minas Gerais, Brasil.</span><a href="#inicio">Voltar ao início <ArrowUp size={16}/></a></div></footer>
 </>;
}
