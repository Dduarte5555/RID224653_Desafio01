import { useEffect, useMemo, useState } from "react";
import "./styles.css";

const PROJECTS = [
  {
    id: 1,
    title: "COMPILADOR - GO",
    desc:
      "Construção de compilador para Go: análise léxica, sintática e semântica, além de geração de código.",
    link: "https://github.com/Dduarte5555/LogComp-APS",
  },
  {
    id: 2,
    title: "COMPUTAÇÃO EM NUVEM - ELB",
    desc:
      "Infraestrutura AWS com Elastic Load Balancer (ELB) usando Terraform.",
    link: "https://github.com/Dduarte5555/Projeto-ComputacaoEmNuvem-ELB",
  },
  {
    id: 3,
    title: "JOGO VR DE PESCA - UNITY",
    desc: "Desenvolvimento de um jogo de pesca VR, o qual você se locomove em um barco e explore as 3 regiões",
    link: "https://github.com/Eduardoarcunha/vr-final-project",
  },
];

const YEARS = [
  {
    year: "2020–2025",
    text: "Insper — Graduação em Engenharia da Computação.",
  },
  {
    year: "Fev–Jun/2024",
    text: "TCC: NPCs com IA em jogo multiplayer (Unity, ML-Agents, Reinforcement Learning). Certificado de Excelência (Falconi).",
  },
  {
    year: "Ago/2024–Abr/2025",
    text: "QA Pix (C6Bank): testes funcionais/exploratórios/automatizados (Robot Framework, Postman, BrowserStack).",
  },
  {
    year: "Abr/2025–Atual",
    text: "Backend Jr (Conta Global): microserviços Kotlin/Spring, APIs REST, testes, CI/CD, AWS, Docker/K8s.",
  },
];

export default function App() {
  const sectionIds = useMemo(() => ["projetos", "tecnologias", "sobre"], []);
  const [active, setActive] = useState("projetos");

  useEffect(() => {
    const onScroll = () => {
      const offset = 90; // altura do header
      const y = window.scrollY + offset;

      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (y >= el.offsetTop) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 84;
    const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="page">
      {/* HEADER */}
      <header className="header">
        <div className="container header__inner">
          <nav className="nav">
            <button
              className={`nav__link ${active === "projetos" ? "is-active" : ""}`}
              onClick={() => scrollTo("projetos")}
            >
              Projetos
            </button>
            <button
              className={`nav__link ${active === "tecnologias" ? "is-active" : ""}`}
              onClick={() => scrollTo("tecnologias")}
            >
              Tecnologias
            </button>
            <button
              className={`nav__link ${active === "sobre" ? "is-active" : ""}`}
              onClick={() => scrollTo("sobre")}
            >
              Sobre mim
            </button>
          </nav>

          <div className="header__icons">
            <a
              className="iconBtn"
              href="https://www.linkedin.com/in/diogo-duarte-31886328a/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="container hero__inner">
          <h1>Diogo dos Reis Duarte</h1>
          <p>
             Desenvolvedor Backend Jr (Conta Global) | Engenharia da Computação (Insper) | Microserviços | AWS | PostgreSQL | Docker/Kubernetes
          </p>
          <button className="btn" onClick={() => scrollTo("sobre")}>
            Saber mais
          </button>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="section">
        <div className="container">
          <h2 className="sectionTitle">Projetos</h2>

          <div className="grid">
            {PROJECTS.map((p) => (
              <article className="card" key={p.id}>
                <h3 className="card__title">{p.title}</h3>
                <p className="card__text">{p.desc}</p>
                <a className="btn btn--small" href={p.link} target="_blank" rel="noreferrer">
                  Clique aqui
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TECNOLOGIAS */}
      <section id="tecnologias" className="section">
        <div className="container">
          <h2 className="sectionTitle">Tecnologias</h2>
          <div className="techRow">
            {[
              "Kotlin", "Spring Boot", "PostgreSQL", "Redis",
              "Docker", "Kubernetes", "AWS", "Terraform",
              "Python", "C#", "Java", "JavaScript", "SQL", "MongoDB"
            ].map((t) => (
              <span className="pill" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE MIM */}
      <section id="sobre" className="section">
        <div className="container">
          <h2 className="sectionTitle">Sobre mim</h2>

          <div className="timeline">
            {YEARS.map((y) => (
              <div className="timeline__col" key={y.year}>
                <div className="timeline__year">{y.year}</div>
                <p className="timeline__text">{y.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__block">
            <div className="footer__label">Meu contato:</div>
            <div className="footer__value">+55 11 99882-7001</div>
          </div>

          <div className="footer__block">
            <div className="footer__label">Email:</div>
            <div className="footer__value">diogo.reis.duarte@hotmail.com</div>
          </div>

          <div className="footer__icons">
            {/* LinkedIn (esquerda) */}
            <a
              className="iconBtn"
              href="https://www.linkedin.com/in/diogo-duarte-31886328a/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>

            {/* GitHub (direita) */}
            <a
              className="iconBtn"
              href="https://github.com/Dduarte5555"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              ⌂
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}