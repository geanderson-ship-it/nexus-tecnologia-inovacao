import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  ArrowRight, 
  CheckCircle, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  UserCheck,
  LayoutGrid,
  MessageCircle,
  Sparkles,
  Factory,
  Scale,
  GraduationCap,
  Building2,
  Lock,
  Users,
  ShoppingBag
} from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-between overflow-x-hidden selection:bg-amber-500 selection:text-black relative">
      {/* Background Premium Ambar Exclusive (Conforme solicitado pela Diretoria Ivoni) */}
      <div className="fixed inset-0 -z-20 bg-black pointer-events-none" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.75)_0%,rgba(245,158,11,0.22)_45%,rgba(0,0,0,1)_120%)] pointer-events-none" />

      {/* Top Header */}
      <header className="border-b border-amber-500/30 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-400 via-amber-500 to-yellow-600 flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-105 transition">
              <Cpu className="w-6 h-6 text-black font-bold" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-white block leading-none">
                NEXUS
              </span>
              <span className="text-[11px] font-bold tracking-widest text-amber-300 uppercase">
                Tecnologia & Inovação
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-white">
            <a href="#vitrine" className="hover:text-amber-300 transition flex items-center space-x-1">
              <span>Vitrine de Soluções</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-amber-500 text-black font-extrabold uppercase">Vendas</span>
            </a>
            <a href="#diferenciais" className="hover:text-amber-300 transition">Diferenciais Soberanos</a>
            <a href="#sobre" className="hover:text-amber-300 transition">Sobre & Governança</a>
            <a href="#contato" className="hover:text-amber-300 transition">Contato</a>
          </nav>

          <a
            href="https://wa.me/5551999029371?text=Ol%C3%A1%20Diretoria%20Nexus!%20Gostaria%20de%20solicitar%20uma%20demonstra%C3%A7%C3%A3o%20da%20vitrine%20de%20solu%C3%A7%C3%B5es%20da%20Holding."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-black text-sm font-extrabold hover:brightness-110 shadow-lg shadow-amber-500/30 transition flex items-center space-x-2"
          >
            <span>Solicitar Demonstração VIP</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-amber-500/50 bg-black/70 backdrop-blur-md text-white text-xs font-bold mb-8 shadow-[0_0_20px_rgba(245,158,11,0.25)]">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span className="tracking-wide uppercase text-[11px]">Vitrine Tecnológica Oficial • Nexus Holding Group</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-tight drop-shadow-lg">
            Inteligência Soberana, Tecnologia & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400">
              Soluções Prontas para o seu Negócio
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-10 leading-relaxed font-medium drop-shadow">
            A <strong>Nexus Tecnologia e Inovação</strong> é o canal comercial e operacional exclusivo da <strong>Nexus Holding Group</strong>. Aqui você contrata, implementa e capacita sua empresa com a vanguarda mundial em inteligência artificial e automação executiva.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#vitrine"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-black font-black hover:brightness-110 transition shadow-xl shadow-amber-500/35 flex items-center justify-center space-x-2 text-base"
            >
              <LayoutGrid className="w-5 h-5 text-black" />
              <span>Explorar Vitrine de Soluções</span>
            </a>
            <a
              href="https://wa.me/5551999029371?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20a%20Diretoria%20Comercial%20da%20Nexus%20Tecnologia."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-amber-500/50 bg-black/70 hover:bg-amber-950/40 text-white font-bold transition flex items-center justify-center space-x-2 text-base backdrop-blur-sm"
            >
              <MessageCircle className="w-5 h-5 text-amber-400" />
              <span>Falar com a Diretoria</span>
            </a>
          </div>

        </div>
      </section>

      {/* VITRINE DE SOLUÇÕES DA HOLDING (SHOWROOM OFICIAL DE VENDAS) */}
      <section id="vitrine" className="py-24 px-6 border-t border-amber-500/30 bg-black/50 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-amber-500/40 bg-amber-950/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
              <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
              <span>Catálogo de Soluções Soberanas</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
              Vitrine Oficial de Soluções Comerciais
            </h2>
            <p className="text-base md:text-lg text-white max-w-2xl mx-auto font-normal">
              Tecnologias proprietárias da <strong>Nexus Holding Group</strong> comercializadas, implantadas e faturadas com agilidade operacional e segurança jurídica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* CARD 1: NEXUS AI CONCIERGE & YARA */}
            <div className="p-8 md:p-10 rounded-3xl border border-amber-500/40 bg-black/80 hover:border-amber-400 transition duration-300 flex flex-col justify-between group shadow-[0_0_45px_-10px_rgba(245,158,11,0.28)] backdrop-blur-md">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-amber-950/80 border border-amber-500/50 flex items-center justify-center text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.25)] group-hover:scale-105 transition">
                    <Sparkles className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500/20 border border-amber-500/50 text-amber-300 uppercase tracking-wide">
                    Hospitalidade 5★ & Cidades
                  </span>
                </div>
                
                <h3 className="text-2xl font-black text-white mb-2">Nexus AI Concierge & Yara</h3>
                <p className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-4">
                  Embaixadora Virtual Multilíngue • 50+ Idiomas • Integração PMS
                </p>
                <p className="text-sm md:text-base text-white leading-relaxed mb-6 font-normal">
                  Ecossistema soberano de hospitalidade inteligente para resorts, hotéis de luxo, secretarias de turismo e eventos globais. Atendimento 24/7 por voz e tela interativa, unificado diretamente ao sistema de gestão hoteleira (PMS).
                </p>

                <ul className="space-y-3 text-sm text-white mb-8">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">Integração nativa com sistemas PMS, housekeeping e serviços internos.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">Comunicação instantânea e fluente em mais de 50 idiomas com sotaque nativo.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">Aumento mensurável de vendas diretas, passeios e consumo de serviços do resort.</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://wa.me/5551999029371?text=Ol%C3%A1!%20Gostaria%20de%20uma%20demonstra%C3%A7%C3%A3o%20comercial%20do%20Nexus%20AI%20Concierge%20e%20Embaixadora%20Yara."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-extrabold hover:brightness-110 transition flex items-center justify-center space-x-2 text-sm shadow-md"
              >
                <span>Contratar / Agendar Demo do Concierge</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </a>
            </div>

            {/* CARD 2: NEXUS EMPRESAS */}
            <div className="p-8 md:p-10 rounded-3xl border border-amber-500/40 bg-black/80 hover:border-amber-400 transition duration-300 flex flex-col justify-between group shadow-[0_0_45px_-10px_rgba(245,158,11,0.28)] backdrop-blur-md">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-amber-950/80 border border-amber-500/50 flex items-center justify-center text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.25)] group-hover:scale-105 transition">
                    <Factory className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500/20 border border-amber-500/50 text-amber-300 uppercase tracking-wide">
                    Indústria 4.0 & Manufatura
                  </span>
                </div>
                
                <h3 className="text-2xl font-black text-white mb-2">Nexus Empresas (PPCP & Suprimentos)</h3>
                <p className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-4">
                  Planejamento de Produção • Compras Preditivas • Chão de Fábrica
                </p>
                <p className="text-sm md:text-base text-white leading-relaxed mb-6 font-normal">
                  Suíte inteligente para indústrias e distribuidoras. Controle preditivo de materiais, balanceamento automático de ordens de produção, redução de paradas de máquina e inteligência de cotações com fornecedores.
                </p>

                <ul className="space-y-3 text-sm text-white mb-8">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">PPCP inteligente: eliminação de gargalos e sincronização precisa de recursos.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">Módulo de Suprimentos: cálculo de estoque de segurança e compras antecipadas.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">Implantação estruturada com retorno de investimento comprovado no caixa.</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://wa.me/5551999029371?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20a%20su%C3%ADte%20Nexus%20Empresas%20(PPCP%20e%20Suprimentos)%20para%20minha%20empresa."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-extrabold hover:brightness-110 transition flex items-center justify-center space-x-2 text-sm shadow-md"
              >
                <span>Solicitar Apresentação Industrial</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </a>
            </div>

            {/* CARD 3: NEXUS PACTUM */}
            <div className="p-8 md:p-10 rounded-3xl border border-amber-500/40 bg-black/80 hover:border-amber-400 transition duration-300 flex flex-col justify-between group shadow-[0_0_45px_-10px_rgba(245,158,11,0.28)] backdrop-blur-md">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-amber-950/80 border border-amber-500/50 flex items-center justify-center text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.25)] group-hover:scale-105 transition">
                    <Scale className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500/20 border border-amber-500/50 text-amber-300 uppercase tracking-wide">
                    Legaltech, Due Diligence & M&A
                  </span>
                </div>
                
                <h3 className="text-2xl font-black text-white mb-2">Nexus Pactum</h3>
                <p className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-4">
                  Auditoria Contratual • Análise de Riscos • Compliance Avançado
                </p>
                <p className="text-sm md:text-base text-white leading-relaxed mb-6 font-normal">
                  Plataforma neural para escritórios jurídicos de prestígio, fundos de investimento e diretorias de compliance. Varre e audita contratos complexos em segundos, apontando vulnerabilidades, multas desproporcionais e riscos ocultos.
                </p>

                <ul className="space-y-3 text-sm text-white mb-8">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">Due Diligence ultrarrápida para transações imobiliárias e societárias de alto valor.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">Soberania absoluta: dados processados com criptografia e isolamento total.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">Modelos analíticos customizáveis para as regras contratuais da sua holding.</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://wa.me/5551999029371?text=Ol%C3%A1!%20Gostaria%20de%20uma%20demonstra%C3%A7%C3%A3o%20do%20Nexus%20Pactum%20para%20an%C3%A1lise%20jur%C3%ADdica%20e%20contratual."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-extrabold hover:brightness-110 transition flex items-center justify-center space-x-2 text-sm shadow-md"
              >
                <span>Conhecer o Nexus Pactum</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </a>
            </div>

            {/* CARD 4: ACADEMIA NEXUS */}
            <div className="p-8 md:p-10 rounded-3xl border border-amber-500/40 bg-black/80 hover:border-amber-400 transition duration-300 flex flex-col justify-between group shadow-[0_0_45px_-10px_rgba(245,158,11,0.28)] backdrop-blur-md">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-amber-950/80 border border-amber-500/50 flex items-center justify-center text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.25)] group-hover:scale-105 transition">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-500/20 border border-amber-500/50 text-amber-300 uppercase tracking-wide">
                    CNAE 85.99-6-03 • Treinamento em Informática
                  </span>
                </div>
                
                <h3 className="text-2xl font-black text-white mb-2">Academia Nexus & Capacitação Executiva</h3>
                <p className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-4">
                  Formação de Lideranças • Adoção Prática de IA • Informática Avançada
                </p>
                <p className="text-sm md:text-base text-white leading-relaxed mb-6 font-normal">
                  Programas presenciais e imersivos para preparar diretorias e equipes no uso produtivo de ferramentas de IA generativa, automações no fluxo de trabalho e governança digital corporativa.
                </p>

                <ul className="space-y-3 text-sm text-white mb-8">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">Treinamento corporativo com emissão de nota fiscal e comprovação curricular.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">Capacitação focada em aumento imediato de produtividade e redução de retrabalho.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">Módulos para diretores, gerentes, secretárias executivas e operadores técnicos.</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://wa.me/5551999029371?text=Ol%C3%A1!%20Gostaria%20de%20contratar%20um%20treinamento%20corporativo%20em%20IA%20e%20tecnologia%20para%20minha%20equipe."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-extrabold hover:brightness-110 transition flex items-center justify-center space-x-2 text-sm shadow-md"
              >
                <span>Contratar Treinamento Corporativo</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* DIFERENCIAIS SOBERANOS & POR QUE CONTRATAR */}
      <section id="diferenciais" className="py-24 px-6 border-t border-amber-500/30">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold tracking-widest text-amber-300 uppercase mb-3">Segurança Operacional</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Por Que a Nexus Tecnologia é o Veículo Perfeito para o seu Negócio?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-2xl border border-amber-500/40 bg-black/80 shadow-[0_0_45px_-10px_rgba(245,158,11,0.28)] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-500/50 flex items-center justify-center text-amber-400 mb-6">
                  <Building2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Faturamento & CNPJ Ativo</h4>
                <p className="text-sm text-white leading-relaxed font-normal">
                  Contratação formal com emissão imediata de notas fiscais, contrato de prestação de serviços com validade jurídica nacional e respaldo contábil rigoroso.
                </p>
              </div>
              <div className="pt-6 border-t border-amber-500/20 text-xs font-semibold text-amber-300">
                CNPJ: 69.042.151/0001-09 • Receita Federal
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-amber-500/40 bg-black/80 shadow-[0_0_45px_-10px_rgba(245,158,11,0.28)] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-500/50 flex items-center justify-center text-amber-400 mb-6">
                  <Lock className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Soberania Total de Dados</h4>
                <p className="text-sm text-white leading-relaxed font-normal">
                  Diferente de soluções comuns que vazam informações empresariais para servidores públicos, nossas IAs operam em servidores privados (On-Premise ou Nuvem Dedicada), garantindo sigilo corporativo absoluto.
                </p>
              </div>
              <div className="pt-6 border-t border-amber-500/20 text-xs font-semibold text-amber-300">
                Conformidade LGPD & Criptografia Ponta a Ponta
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-amber-500/40 bg-black/80 shadow-[0_0_45px_-10px_rgba(245,158,11,0.28)] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-950/80 border border-amber-500/50 flex items-center justify-center text-amber-400 mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Atendimento C-Level & Humanizado</h4>
                <p className="text-sm text-white leading-relaxed font-normal">
                  Acompanhamento direto da diretoria executiva, garantindo que a implantação das soluções gere retorno financeiro tangível e capacitação efetiva para seus colaboradores.
                </p>
              </div>
              <div className="pt-6 border-t border-amber-500/20 text-xs font-semibold text-amber-300">
                Suporte Executivo & Consultivo
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Liderança Executiva & Governança (Ivoni Severo Schuh) */}
      <section id="sobre" className="py-24 px-6 border-t border-amber-500/30 relative">
        <div id="governanca" className="absolute -top-10" />
        <div className="max-w-5xl mx-auto bg-black/85 p-8 md:p-12 rounded-3xl border border-amber-500/40 flex flex-col md:flex-row items-center gap-10 shadow-[0_0_70px_-15px_rgba(245,158,11,0.38)] backdrop-blur-md">
          
          {/* Foto Executiva Oficial Ivoni Severo Schuh */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden border-2 border-amber-500/60 shadow-2xl shadow-amber-500/30 flex-shrink-0 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/ivoni_severo_schuh.jpg" 
              alt="Ivoni Severo Schuh - Diretoria Comercial & Operacional Nexus Tecnologia e Inovação" 
              className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 py-1 px-2.5 rounded-lg bg-black/75 backdrop-blur-md border border-amber-500/40 text-center">
              <span className="text-[10px] font-bold tracking-widest text-amber-300 uppercase">Diretoria Executiva</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-bold tracking-widest text-amber-300 uppercase block mb-2">
              Diretoria Comercial & Operacional
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              Ivoni Severo Schuh
            </h3>
            <p className="text-white text-sm md:text-base leading-relaxed mb-6 font-normal">
              À frente da <strong>Nexus Tecnologia e Inovação</strong> e Co-fundadora & Diretora Executiva da <strong>Nexus Holding Group</strong>, lidera as operações comerciais de expansão, relacionamento com clientes estratégicos, estruturação de propostas B2B e programas de capacitação profissional em todo o Brasil.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-bold text-white">
              <span className="px-3.5 py-1.5 rounded-lg bg-black/80 border border-amber-500/40 text-amber-300">CNPJ: 69.042.151/0001-09</span>
              <span className="px-3.5 py-1.5 rounded-lg bg-black/80 border border-amber-500/40 text-amber-300">Mato Leitão • Rio Grande do Sul</span>
              <span className="px-3.5 py-1.5 rounded-lg bg-amber-950/70 border border-amber-500/60 text-amber-300">Empresa Ativa na Receita Federal</span>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé & Contatos */}
      <footer id="contato" className="border-t border-amber-500/30 bg-black/95 py-16 px-6 text-sm text-white backdrop-blur-md">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          <div>
            <span className="text-lg font-black text-white block mb-2">NEXUS TECNOLOGIA E INOVAÇÃO</span>
            <p className="text-xs text-amber-300 mb-4 font-mono font-bold">69.042.151 IVONI SEVERO SCHUH • CNPJ: 69.042.151/0001-09</p>
            <p className="text-xs text-white leading-relaxed font-normal">
              Vitrine comercial oficial, faturamento e representação de soluções soberanas do ecossistema <strong>Nexus Holding Group</strong>.
            </p>
          </div>

          <div>
            <span className="text-sm font-bold text-white block mb-4">Canais Oficiais de Atendimento</span>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-400" />
                <a href="mailto:ivonisevero4@gmail.com" className="hover:text-amber-300 transition text-white font-medium">ivonisevero4@gmail.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-400" />
                <a href="https://wa.me/5551999029371" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition text-white font-medium">(51) 99902-9371 (WhatsApp Diretoria)</a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span className="text-white font-medium">Rua Alceu Goerck, 1237, Centro, Mato Leitão - RS</span>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-sm font-bold text-white block mb-4">Ecossistema & Domínio</span>
            <ul className="space-y-3 text-xs">
              <li>
                <a href="https://nexusholdinggroup.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition flex items-center space-x-1.5 text-white font-medium">
                  <span>Portal Oficial Nexus Holding Group</span>
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                </a>
              </li>
              <li className="text-white font-medium">
                Domínio Oficial: <span className="text-amber-300 font-mono font-bold">nexustecnologiaeinovacao.com.br</span>
              </li>
              <li className="text-white/80 text-[11px] pt-2">
                Emissão direta de Notas Fiscais e Contratos sob a Lei Brasileira.
              </li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-amber-500/30 flex flex-col sm:flex-row items-center justify-between text-xs text-white gap-4">
          <span>© 2026 Nexus Tecnologia e Inovação. Todos os direitos reservados.</span>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-white font-bold">Padrão Nexus Exclusive • Ativo em Produção</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
