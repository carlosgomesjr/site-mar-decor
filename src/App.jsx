import { useEffect, useState } from 'react'

const whatsappUrl =
  'https://wa.me/5521984283483?text=Ola%2C%20vim%20pelo%20site%20da%20Mar%20Decor%20e%20quero%20solicitar%20um%20orcamento.'
const instagramAboutPost = 'https://www.instagram.com/reel/DYIOn-fPNKS/'

const contact = {
  phone: '(21) 98428-3483',
  email: 'mardecor.decoracoes@gmail.com',
  address: 'Av. Pref. Alcebíades Mendes, lote 06 - São José do Imbassaí, Maricá - RJ',
}

const featuredWorks = [
  {
    title: 'Piso laminado aplicado',
    label: 'Destaque principal',
    images: [
      '/assets/mardecor/piso laminado.jpg',
      '/assets/mardecor/piso laminado3.avif',
      '/assets/mardecor/piso laminado2.jpg',
    ],
    description:
      'Ambiente mais claro, acabamento limpo e leitura visual mais acolhedora para a rotina do cliente.',
  },
  {
    title: 'Persiana vertical sob medida',
    label: 'Privacidade e controle de luz',
    images: [
      '/assets/mardecor/vertical3.jpg',
      '/assets/mardecor/vertical2.jpg',
      '/assets/mardecor/vertical.jpg',
    ],
    description:
      'Instalação em ambiente real com solução direta para entrada de luz e organização do espaço.',
  },
  {
    title: 'Persiana romana',
    label: 'Volume e suavidade',
    images: [
      '/assets/mardecor/romana3.avif',
      '/assets/mardecor/romana2.avif',
      '/assets/mardecor/romana.jpg',
    ],
    description:
      'Uma opção para quem quer um resultado mais decorativo sem perder praticidade no uso diário.',
  },
]

const productCards = [
  {
    title: 'Persiana rolo',
    label: 'Controle de luz e praticidade',
    text: 'Solução discreta e funcional para ambientes que pedem conforto visual e uso prático no dia a dia.',
    images: [
      '/assets/mardecor/rolo2.jpg',
      '/assets/mardecor/rolo.jpg',
      '/assets/mardecor/rolo3.jpg',
    ],
  },
  {
    title: 'Piso vinílico',
    label: 'Renovação com mais conforto',
    text: 'Acabamento versátil para renovar o ambiente com visual atual, instalação organizada e resultado imediato.',
    images: [
      '/assets/mardecor/piso vinilico3.avif',
      '/assets/mardecor/piso vinilico2.jpg',
      '/assets/mardecor/piso vinilico.jpg',
    ],
  },
  {
    title: 'Persiana em madeira',
    label: 'Controle de luz com presença',
    text: 'Opção para quem busca um visual mais marcante, com privacidade, controle de luz e acabamento sofisticado.',
    images: [
      '/assets/mardecor/persiana madeira2.jpg',
      '/assets/mardecor/persiana madeira.jpg',
      '/assets/mardecor/persiana madeira3.jpg',
    ],
  },
  {
    title: 'Gesso 3D',
    label: 'Acabamento decorativo',
    text: 'Aplicações em gesso para valorizar paredes e composições internas com mais presença visual.',
    images: [
      '/assets/mardecor/gesso3.avif',
      '/assets/mardecor/gesso.jpg',
      '/assets/mardecor/gesso2.jpg',
    ],
  },
  {
    title: 'Teto em madeira',
    label: 'Textura e aconchego',
    text: 'Solução para quem busca um teto com mais presença estética, calor visual e acabamento marcante.',
    images: ['/assets/mardecor/teto madeira.jpg'],
  },
  {
    title: 'Papel de parede',
    label: 'Revestimento decorativo',
    text: 'Aplicação para renovar paredes com mais personalidade, textura visual e acabamento bem resolvido.',
    images: [
      '/assets/mardecor/pp2.jpg',
      '/assets/mardecor/pp.jpg',
      '/assets/mardecor/pp3.jpg',
    ],
  },
  {
    title: 'Portas sanfonadas',
    label: 'Fechamento e acabamento',
    text: 'Instalações que completam o ambiente com funcionalidade, ajuste correto e melhor acabamento final.',
    images: ['/assets/mardecor/portas2.jpg', '/assets/mardecor/portas.jpg'],
  },
  {
    title: 'Divisória Eucatex',
    label: 'Organização de ambientes',
    text: 'Estrutura para dividir ambientes com acabamento limpo e solução funcional para áreas residenciais e comerciais.',
    images: [
      '/assets/mardecor/Divisórias Eucatex1.jpg',
      '/assets/mardecor/Divisórias Eucatex2.jpg',
      '/assets/mardecor/Divisórias Eucatex3.jpg',
    ],
  },
  {
    title: 'Teto em PVC',
    label: 'Forro e composição',
    text: 'Instalação de teto em PVC para ambientes que pedem praticidade, acabamento uniforme e visual bem resolvido.',
    images: [
      '/assets/mardecor/teto dry wall.jpg',
      '/assets/mardecor/teto dry wall2.jpg',
    ],
  },
]

const methodologySteps = [
  {
    step: '01',
    title: 'Curadoria e seleção',
    text: 'Entendemos sua necessidade, as suas preferências e apresentamos nossas melhores opções para o seu ambiente.',
    image: '/assets/mardecor/etapa1.jpg',
    imagePosition: 'center 38%',
  },
  {
    step: '02',
    title: 'Medição no local',
    text: 'Nosso técnico vai ao local e tira as medidas corretas para que possamos entregar a melhor solução e com o acabamento personalizado.',
    image: '/assets/mardecor/etapa2.jpg',
    imagePosition: 'center 45%',
  },
  {
    step: '03',
    title: 'Entrega e instalação',
    text: 'Entregamos os materiais e instalamos sempre com foco em entregar um resultado limpo, confiável e com o máximo de qualidade.',
    image: '/assets/mardecor/etapa3.jpeg',
    imagePosition: 'center 42%',
  },
]

const testimonials = [
  {
    name: 'Patrícia Souza',
    quote:
      'Superou minhas expectativas, excelente atendimento, prazo de entrega antes do esperado. Sem contar no capricho da instalação sem fazer nenhuma sujeira.',
  },
  {
    name: 'Juliana Rodrigues',
    quote:
      'Prestação de serviço com excelência, desde o atendimento pelo WhatsApp até o processo de instalação. O cuidado em limpar, varrer e organizar me surpreendeu.',
  },
  {
    name: 'Michel Castro',
    quote:
      'Trabalho de excelência com qualidade, preço justo e cumpre o prazo. Recomendo.',
  },
  {
    name: 'Juliana Soares',
    quote:
      'Ótimo atendimento, que começou no WhatsApp até a escolha do tecido e, para finalizar, a instalação foi realizada antes do prazo final.',
  },
  {
    name: 'Claudio Jose Leite Ubaldo',
    quote:
      'Trabalho feito com esmero dentro do prazo, com profissionalismo e excelente atendimento. Recomendo a todos o trabalho deles.',
  },
  {
    name: 'Raoni Roque',
    quote:
      'Meu serviço ficou perfeito, a instalação foi muito rápida, a obra limpa e o acabamento impecável. Recomendo.',
  },
  {
    name: 'Lorena Araujo Morais',
    quote:
      'Excelente atendimento e produto. Veio aqui em casa na hora marcada, fez um bom serviço e ainda deixou tudo limpo no final.',
  },
  {
    name: 'Josiane Freitas',
    quote:
      'Atendimento de excelência. Da fase da escolha até a instalação o atendimento foi nota 10.',
  },
  {
    name: 'Ygor Guimaraes',
    quote:
      'Excelente atendimento e um ótimo profissional, só tenho elogios a fazer pelo serviço.',
  },
  {
    name: 'Flavio Nazario',
    quote:
      'Ótima, profissionalismo em primeiro lugar, entregou serviço antes do prazo. Recomendado.',
  },
  {
    name: 'Leonor Mendonca',
    quote:
      'Muito boa, excelente serviço. Martins é uma pessoa de confiança, nota 10.',
  },
  {
    name: 'Valquiria Correa',
    quote:
      'Gostei muito do serviço e do atendimento pontual. Muito obrigada pelo belo trabalho.',
  },
  {
    name: 'Melissa Vianna',
    quote:
      'Colocaram forro PVC aqui em casa e ficou top demais. Trabalho incrível e excelente profissional.',
  },
  {
    name: 'Bruna Cardoso',
    quote:
      'Atendimento ótimo e caprichoso. Entrega antes do prazo previsto. Recomendo.',
  },
  {
    name: 'Lucilene Baptista',
    quote:
      'Entrega feita antes do prazo, serviço de excelência, tudo com muito carinho e perfeição.',
  },
  {
    name: 'Renato Silva Porto',
    quote:
      'A montagem da persiana vertical foi muito bem feita, com organização e limpeza. Só tenho elogios.',
  },
]

function ProductCarouselCard({ card }) {
  const [activeImage, setActiveImage] = useState(0)
  const totalImages = card.images.length

  const showPrev = () => {
    setActiveImage((current) => (current - 1 + totalImages) % totalImages)
  }

  const showNext = () => {
    setActiveImage((current) => (current + 1) % totalImages)
  }

  return (
    <article className="product-card">
      <div className="product-card-media">
        <img src={card.images[activeImage]} alt={card.title} />
        <button
          type="button"
          className="product-card-arrow product-card-arrow-left"
          onClick={showPrev}
          aria-label={`Ver foto anterior de ${card.title}`}
        >
          ‹
        </button>
        <button
          type="button"
          className="product-card-arrow product-card-arrow-right"
          onClick={showNext}
          aria-label={`Ver próxima foto de ${card.title}`}
        >
          ›
        </button>
        <div className="product-card-dots" aria-hidden="true">
          {card.images.map((image, index) => (
            <span
              key={`${image}-${index}`}
              className={`product-card-dot ${index === activeImage ? 'is-active' : ''}`}
            />
          ))}
        </div>
      </div>
      <div className="product-card-copy">
        <p>{card.label}</p>
        <h3>{card.title}</h3>
        <span>{card.text}</span>
      </div>
    </article>
  )
}

function FeaturedCarouselCard({ item, featured = false }) {
  const [activeImage, setActiveImage] = useState(0)
  const totalImages = item.images.length

  const showPrev = () => {
    setActiveImage((current) => (current - 1 + totalImages) % totalImages)
  }

  const showNext = () => {
    setActiveImage((current) => (current + 1) % totalImages)
  }

  const cardClass = featured ? 'showcase-feature' : 'showcase-mini'
  const copyClass = featured ? 'showcase-copy' : 'showcase-mini-copy'

  return (
    <article className={cardClass}>
      <div className="showcase-card-media">
        <img src={item.images[activeImage]} alt={item.title} />
        <button
          type="button"
          className="product-card-arrow product-card-arrow-left"
          onClick={showPrev}
          aria-label={`Ver foto anterior de ${item.title}`}
        >
          ‹
        </button>
        <button
          type="button"
          className="product-card-arrow product-card-arrow-right"
          onClick={showNext}
          aria-label={`Ver próxima foto de ${item.title}`}
        >
          ›
        </button>
        <div className="product-card-dots" aria-hidden="true">
          {item.images.map((image, index) => (
            <span
              key={`${image}-${index}`}
              className={`product-card-dot ${index === activeImage ? 'is-active' : ''}`}
            />
          ))}
        </div>
      </div>
      <div className={copyClass}>
        <p>{item.label}</p>
        <h3>{item.title}</h3>
        <span>{item.description}</span>
      </div>
    </article>
  )
}

function App() {
  const [exploreOpen, setExploreOpen] = useState(false)

  useEffect(() => {
    const processEmbeds = () => window.instgrm?.Embeds?.process()
    const scriptId = 'instagram-embed-script'

    if (window.instgrm?.Embeds) {
      processEmbeds()
      return undefined
    }

    let script = document.getElementById(scriptId)

    if (!script) {
      script = document.createElement('script')
      script.id = scriptId
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      script.addEventListener('load', processEmbeds, { once: true })
      document.body.appendChild(script)
      return undefined
    }

    script.addEventListener('load', processEmbeds, { once: true })

    return () => {
      script?.removeEventListener?.('load', processEmbeds)
    }
  }, [])

  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-ink)]">
      <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-5">
        <div className="mx-auto max-w-[1380px]">
          <div className="nav-shell">
            <div className="nav-highlight" />

            <a href="#hero" className="relative z-20 flex min-w-0 items-center gap-2.5">
              <div className="nav-badge">
                <img src="/assets/mardecor/logo.avif" alt="Logo Mar Decor" className="nav-badge-logo" />
              </div>
              <div className="flex min-w-0 flex-col leading-[0.9]">
                <span className="nav-kicker">Mar Decor</span>
                <span className="nav-brand">Reformas e decorações</span>
              </div>
            </a>

            <nav className="nav-desktop">
              <a href="#showcase">Ambientes</a>
              <a href="#about">Sobre</a>
              <a href="#methodology">Processo</a>
              <a href="#contact">Contato</a>
            </nav>

            <div className="tablet-explore">
              <button
                type="button"
                className="tablet-explore-button"
                aria-label="Abrir exploração"
                aria-expanded={exploreOpen}
                aria-controls="tablet-explore-menu"
                onClick={() => setExploreOpen((value) => !value)}
              >
                <span>Explorar</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`tablet-explore-icon ${exploreOpen ? 'is-open' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div
                id="tablet-explore-menu"
                className={`tablet-explore-menu ${exploreOpen ? 'tablet-explore-menu-open' : ''}`}
              >
                <a href="#showcase" className="tablet-explore-link" onClick={() => setExploreOpen(false)}>
                  Ambientes
                </a>
                <a href="#about" className="tablet-explore-link" onClick={() => setExploreOpen(false)}>
                  Sobre
                </a>
                <a href="#methodology" className="tablet-explore-link" onClick={() => setExploreOpen(false)}>
                  Processo
                </a>
                <a href="#contact" className="tablet-explore-link" onClick={() => setExploreOpen(false)}>
                  Contato
                </a>
              </div>
            </div>

            <div className="relative z-20 hidden items-center gap-3 xl:flex">
              <div className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)] xl:flex">
                <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                Atendimento em Maricá
              </div>

              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="nav-cta">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="hero" className="hero-section">
        <img
          src="/assets/mardecor/hero.jpg"
          alt="Ambiente decorado com produto instalado pela Mar Decor"
          className="hero-bg-image"
        />
        <div className="hero-overlay" />

        <div className="hero-inner mx-auto max-w-[1380px] px-6 sm:px-8 lg:px-14">
          <div className="hero-content">
            <div className="hero-label">Mar Decor em Maricá</div>

            <h1 className="hero-title">
              <span>Mar Decor</span>
            </h1>

            <p className="hero-copy">
              Persianas, pisos, papel de parede, drywall, tetos <strong className="accent-word">personalizados</strong> e
              acabamentos <strong className="accent-word">sob medida</strong> para ambientes residenciais e comerciais
              que prezam por um alto padrão de qualidade.
            </p>

            <div className="hero-actions">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="primary-cta">
                Solicitar orçamento
              </a>
              <a href="#showcase" className="secondary-cta secondary-cta-accent">
                Nossos serviços
              </a>
            </div>
          </div>

          <div className="hero-meta">
            <div>
              <p>Atuação</p>
              <span>Residencial e comercial</span>
            </div>
            <div>
              <p>Especialidades</p>
              <span>Persianas, pisos, drywall e gesso</span>
            </div>
            <div>
              <p>Experiência</p>
              <span>+ de 10 anos no mercado</span>
            </div>
          </div>
        </div>
      </section>

      <section id="showcase" className="section-shell">
        <div className="mx-auto max-w-[1380px] px-6 py-16 sm:px-8 lg:px-14 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.36fr_1fr] lg:items-end">
            <div className="space-y-5">
              <div className="section-intro">Nossos serviços</div>
              <p className="support-copy max-w-[15rem]">
                Piso laminado, persiana vertical sob medida, persiana romana, persiana rolo,
                piso vinílico, gesso, teto em drywall, teto em madeira, papel de parede, portas
                e divisória em drywall.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="editorial-title max-w-[15ch]">
                Pensou em reformar ou decorar, na <span className="accent-word">Mar Decor</span>{' '}
                você pode confiar.
              </h2>
              <p className="editorial-copy max-w-[42rem]">
                Cada solução é pensada para melhorar o uso do espaço, valorizar o acabamento e
                entregar um resultado coerente com o estilo e a necessidade de cada cliente.
              </p>
            </div>
          </div>

          <div className="showcase-grid">
            <FeaturedCarouselCard item={featuredWorks[0]} featured />

            <div className="showcase-side">
              {featuredWorks.slice(1).map((item) => (
                <FeaturedCarouselCard key={item.title} item={item} />
              ))}
            </div>
          </div>

          <div className="product-grid">
            {productCards.map((card) => (
              <ProductCarouselCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </section>

      <section id="methodology" className="section-shell section-methodology methodology-section-accent">
        <div className="mx-auto max-w-[1380px] px-6 py-16 sm:px-8 lg:px-14 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:items-start">
            <div className="space-y-5">
              <div className="section-intro">Processo</div>
              <h2 className="editorial-title max-w-[11ch]">
                Da necessidade do cliente até a <span className="accent-word">instalação</span>{' '}
                final.
              </h2>
            </div>

            <div className="space-y-6">
              <p className="editorial-copy max-w-[42rem]">
                O processo ganha peso visual próprio e vira argumento comercial: menos improviso,
                mais clareza e mais confiança para quem está comprando.
              </p>

              <div className="method-grid">
                {methodologySteps.map((item) => (
                  <article key={item.step} className="method-card">
                    <img src={item.image} alt={item.title} style={{ objectPosition: item.imagePosition }} />
                    <div className="method-card-copy">
                      <p>Etapa {item.step}</p>
                      <h3>{item.title}</h3>
                      <span>{item.text}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="proof" className="section-shell">
        <div className="mx-auto max-w-[1380px] px-6 py-16 sm:px-8 lg:px-14 lg:py-24">
          <div className="proof-header">
            <div className="section-intro">Depoimentos</div>
            <h2 className="editorial-title max-w-[12ch]">
              Quem escolhe a <span className="accent-word">Mar Decor</span> recomenda.
            </h2>
            <p className="editorial-copy max-w-[40rem]">
              Veja o que nossos clientes estão dizendo da Mar Decor no Google sobre atendimento,
              instalação e resultado final.
            </p>
          </div>

          <div className="proof-cards-grid">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="proof-review-card">
                <div className="stars" aria-label="Avaliação de 5 estrelas">
                  ★★★★★
                </div>
                <p className="proof-review-quote">"{testimonial.quote}"</p>
                <strong className="proof-review-name">{testimonial.name}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-shell about-section">
        <div className="mx-auto max-w-[1380px] px-6 py-16 sm:px-8 lg:px-14 lg:py-24">
          <div className="about-layout">
            <div className="about-media">
              <blockquote
                className="instagram-media about-instagram-embed"
                data-instgrm-permalink={instagramAboutPost}
                data-instgrm-version="14"
              >
                <a href={instagramAboutPost} target="_blank" rel="noreferrer">
                  Ver vídeo no Instagram
                </a>
              </blockquote>
            </div>

            <div className="about-copy">
              <div className="section-intro">Sobre a empresa</div>
              <h2 className="editorial-title">
                <span className="accent-word">Requinte</span> e <span className="accent-word">qualidade</span> para
                transformar ambientes com mais cuidado.
              </h2>

              <p className="editorial-copy">
                A Mar Decor atua em reforma, decoração e acabamento, com soluções para quem quer
                valorizar o ambiente sem abrir mão de uma execução bem feita. O trabalho une
                orientação, escolha do material, medição e instalação para entregar um resultado
                coerente com o espaço de cada cliente.
              </p>

              <p className="editorial-copy">
                Mais do que apresentar produtos, a empresa entrega composição visual, privacidade,
                conforto e acabamento. É essa percepção que o site precisa reforçar: uma marca que
                cuida do ambiente como parte importante da casa ou do negócio de quem contrata.
              </p>

              <div className="about-points">
                <span>Atendimento direto</span>
                <span>Produtos sob medida</span>
                <span>Instalação com zelo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-shell">
        <div className="mx-auto max-w-[1380px] px-6 py-16 sm:px-8 lg:px-14 lg:py-24">
          <div className="contact-panel">
            <div className="grid gap-10 lg:grid-cols-[0.34fr_1fr] lg:items-end">
              <div>
                <div className="section-intro">Contato</div>
                <p className="support-copy mt-6 max-w-[15rem]">
                  Atendimento para quem quer pedir orçamento, tirar dúvidas ou entender qual
                  solução faz mais sentido para o ambiente.
                </p>
              </div>

              <div>
                <h2 className="contact-title">
                  Vamos encontrar a melhor <span className="accent-word">solução</span> para o seu
                  espaço.
                </h2>
                <p className="contact-copy">
                  Persianas, pisos, drywall, gesso e acabamentos, com atendimento local em Maricá,
                  instalação sob medida e foco em resultado final.
                </p>

                <div className="contact-actions">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="primary-cta">
                    Solicitar orçamento
                  </a>
                  <a href="#showcase" className="secondary-cta secondary-cta-accent">
                    Ver produtos
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-meta">
              <div>
                <p>WhatsApp</p>
                <span>{contact.phone}</span>
              </div>
              <div>
                <p>Email</p>
                <span>{contact.email}</span>
              </div>
              <div>
                <p>Endereço</p>
                <span>{contact.address}</span>
              </div>
            </div>

            <footer className="footer-grid">
              <div>
                <div className="footer-brand">
                  <div className="nav-badge">
                    <img src="/assets/mardecor/logo.avif" alt="Logo Mar Decor" className="nav-badge-logo" />
                  </div>
                  <div className="flex flex-col leading-[0.9]">
                    <span className="nav-kicker">Mar Decor</span>
                    <span className="nav-brand">Reformas e decorações</span>
                  </div>
                </div>
                <p className="footer-copy">
                  Soluções para ambientes residenciais e comerciais, com foco em capricho,
                  organização e bom acabamento.
                </p>
              </div>

              <div>
                <p className="footer-label">Navegação</p>
                <div className="footer-links">
                  <a href="#showcase">Ambientes</a>
                  <a href="#about">Sobre</a>
                  <a href="#methodology">Processo</a>
                  <a href="#proof">Depoimentos</a>
                </div>
              </div>

              <div>
                <p className="footer-label">Contato</p>
                <div className="footer-links">
                  <a href={whatsappUrl} target="_blank" rel="noreferrer">
                    {contact.phone}
                  </a>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  <span>{contact.address}</span>
                </div>
              </div>
            </footer>
          </div>

          <div className="footer-legal">
            <p>© 2026 Mar Decor Reformas e Decorações</p>
            <div className="footer-legal-links">
              <a href="#contact">Privacidade</a>
              <a href="#contact">Termos</a>
            </div>
          </div>

          <p className="footer-credit">Desenvolvido por Crescente Real</p>
        </div>
      </section>
    </main>
  )
}

export default App
