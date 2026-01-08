
import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Users, 
  Car, 
  CheckCircle2, 
  ChevronDown, 
  Instagram, 
  Phone, 
  MessageCircle,
  AlertTriangle,
  Zap,
  CreditCard,
  UserX
} from 'lucide-react';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-navy/90 backdrop-blur-md border-b border-white/5">
    <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img 
          src="https://i.imgur.com/p1jbhCP.png" 
          alt="APVS Logo" 
          className="h-10 md:h-12 w-auto object-contain"
        />
      </div>
      <a 
        href="https://api.whatsapp.com/send?phone=5511946853920"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center gap-2 bg-gold text-navy font-bold px-6 py-2.5 rounded-full hover:bg-yellow-400 transition-all text-sm uppercase tracking-wider"
      >
        <MessageCircle size={18} />
        Falar com Consultor
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
    {/* Background Decorations */}
    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gold/10 rounded-full blur-[100px] pointer-events-none"></div>
    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div className="text-center md:text-left space-y-6 z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gold text-xs md:text-sm font-semibold uppercase tracking-widest">
          <ShieldCheck size={16} /> Proteção Veicular High-End
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
          Proteja seu patrimônio hoje <span className="text-gold">sem a burocracia</span> dos seguros tradicionais.
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-xl">
          Cobertura completa contra roubo, furto, colisão e assistência 24h em todo o Brasil. Peça uma cotação em 2 minutos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a 
            href="https://api.whatsapp.com/send?phone=5511946853920"
            className="animate-pulse-gold bg-gold text-navy font-extrabold text-lg px-8 py-5 rounded-xl flex items-center justify-center gap-3 transition-transform active:scale-95"
          >
            QUERO PROTEGER MEU VEÍCULO
            <MessageCircle size={24} />
          </a>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-4 pt-4 text-gray-500 text-sm">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map(i => (
              <img key={i} src={`https://picsum.photos/seed/${i + 10}/40/40`} className="w-8 h-8 rounded-full border-2 border-navy" alt="User" />
            ))}
          </div>
          <span>Mais de <strong>20.000</strong> famílias protegidas em São Paulo/SP.</span>
        </div>
      </div>
      <div className="relative group">
        <div className="absolute inset-0 bg-gold/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
        <img 
          src="https://i.imgur.com/IDnhaIn.jpeg" 
          alt="Lucas Vasconcelos" 
          className="relative w-full h-auto rounded-3xl shadow-2xl border border-white/10 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
        />
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/[0.08] transition-all group">
    <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const Features = () => (
  <section className="py-20 bg-black/30">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Diferenciais que nos tornam <span className="text-gold">Líderes</span></h2>
        <div className="w-20 h-1.5 bg-gold mx-auto rounded-full"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard 
          icon={UserX} 
          title="Condutor Livre" 
          description="Sem análise de perfil. Qualquer pessoa habilitada pode dirigir o veículo protegido." 
        />
        <FeatureCard 
          icon={AlertTriangle} 
          title="Sem Consulta SPC" 
          description="Aprovamos sua proteção sem consulta ao SPC ou Serasa. Inclusão para todos." 
        />
        <FeatureCard 
          icon={CreditCard} 
          title="40% Mais Barato" 
          description="Preços até 40% menores que os seguros tradicionais sem abrir mão da qualidade." 
        />
        <FeatureCard 
          icon={Clock} 
          title="Assistência 24h" 
          description="Guincho, chaveiro, troca de pneus e socorro mecânico em todo o território nacional." 
        />
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="py-20 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2 order-2 md:order-1">
        <img 
          src="https://i.imgur.com/0DBpHC9.jpeg" 
          alt="Consultor Lucas" 
          className="rounded-3xl shadow-2xl border border-white/10"
        />
      </div>
      <div className="md:w-1/2 space-y-6 order-1 md:order-2">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Sobre o Consultor</h2>
        <p className="text-xl text-gold font-semibold italic">"Segurança é sinônimo de tranquilidade."</p>
        <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
          <p>
            Sou <strong>Lucas Vasconcelos</strong>, especialista em segurança patrimonial e consultor da APVS Brasil.
          </p>
          <p>
            Meu objetivo não é apenas te vender um plano, mas garantir que você durma tranquilo sabendo que seu carro está protegido por quem entende do assunto.
          </p>
          <p>
            Com foco em atendimento humanizado e transparência, trago a solução ideal para quem busca fugir da burocracia e dos altos custos dos seguros convencionais.
          </p>
        </div>
        <div className="pt-4">
          <a 
            href="https://www.instagram.com/lucas.protecaobrasil/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-gold transition-colors font-bold text-lg"
          >
            <Instagram size={24} /> @lucas.protecaobrasil
          </a>
        </div>
      </div>
    </div>
  </section>
);

const CoverageItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-gold/30 transition-all">
    <CheckCircle2 className="text-gold shrink-0 mt-1" size={20} />
    <span className="text-gray-200">{text}</span>
  </div>
);

const Coverage = () => (
  <section className="py-20 bg-navy">
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-gradient-to-br from-navy to-slate-900 border border-white/10 rounded-[40px] p-8 md:p-16 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <ShieldCheck size={200} />
        </div>
        
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              O que entregamos é <br />
              <span className="text-gold">Proteção de Verdade.</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Nosso compromisso é cuidar do seu veículo com planos acessíveis, processos simples e suporte ágil, sempre com atendimento direto e humano.
            </p>
            <div className="grid grid-cols-1 gap-4">
              <CoverageItem text="Roubo e furto – indenização de 100% da FIPE se o veículo não for recuperado" />
              <CoverageItem text="Colisão – ajuda no conserto em caso de batida ou perda total" />
              <CoverageItem text="Incêndio – proteção total contra danos por fogo" />
              <CoverageItem text="Fenômenos da Natureza – enchente, alagamento, granizo e queda de árvore" />
              <CoverageItem text="Assistência 24h – guincho, pane elétrica/mecânica, chaveiro e pneu" />
              <CoverageItem text="Danos a Terceiros – apoio financeiro em acidentes com outros veículos" />
            </div>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
              Proteção para carros, motos e veículos de trabalho (Uber, Táxi, Truck).
            </p>
          </div>
          <div className="space-y-6">
             <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 space-y-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Zap className="text-gold" /> Por que a APVS?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Valor muito mais acessível que o seguro tradicional",
                    "Atendimento direto comigo, sem robôs",
                    "Agilidade no suporte quando você mais precisa",
                    "Transparência do início ao fim, sem letras miúdas",
                    "Facilidade na contratação via WhatsApp"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="text-green-500 shrink-0" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a 
                  href="https://api.whatsapp.com/send?phone=5511946853920"
                  className="w-full bg-gold text-navy font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-400 transition-all"
                >
                  SOLICITAR COTAÇÃO GRÁTIS
                </a>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SocialProof = () => {
  const feedbacks = [
    "https://i.imgur.com/OBmQWJT.jpeg",
    "https://i.imgur.com/ucQ5bLc.jpeg",
    "https://i.imgur.com/8Svkyp4.jpeg",
    "https://i.imgur.com/3EcaTNu.jpeg"
  ];
  
  const authority = [
    "https://i.imgur.com/qFsF0tB.jpeg",
    "https://i.imgur.com/q1ZmKRw.jpeg",
    "https://i.imgur.com/63pxB0h.jpeg",
    "https://i.imgur.com/m8arv7Y.jpeg",
    "https://i.imgur.com/QMRI14y.jpeg",
    "https://i.imgur.com/ePaFhWr.jpeg",
    "https://i.imgur.com/HOQWkIK.jpeg",
    "https://i.imgur.com/znaNfXA.jpeg",
    "https://i.imgur.com/D8Bm9bw.jpeg"
  ];

  return (
    <section className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Provas de nossa <span className="text-gold">Eficiência</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Clientes satisfeitos, indenizações pagas e autoridade no mercado de proteção veicular.</p>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-8 border-l-4 border-gold pl-4 uppercase tracking-widest">Feedbacks de Clientes</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {feedbacks.map((img, i) => (
              <img key={i} src={img} className="rounded-xl shadow-lg border border-white/10 hover:scale-105 transition-transform cursor-zoom-in" alt="Feedback" />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-8 border-l-4 border-gold pl-4 uppercase tracking-widest">Nossa Autoridade</h3>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {authority.map((img, i) => (
              <div key={i} className="break-inside-avoid">
                <img src={img} className="w-full rounded-xl shadow-lg border border-white/10 hover:opacity-80 transition-opacity" alt="Authority" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-gold transition-colors"
      >
        <span className="text-lg font-semibold">{question}</span>
        <ChevronDown size={24} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => (
  <section className="py-20">
    <div className="max-w-3xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Dúvidas Frequentes</h2>
        <p className="text-gray-500">Tudo o que você precisa saber sobre a proteção APVS.</p>
      </div>
      <div className="space-y-2">
        <FAQItem 
          question="Precisa de análise de perfil de condutor?" 
          answer="Não! Diferente dos seguros tradicionais, na APVS a proteção é do veículo. Qualquer condutor habilitado que estiver dirigindo terá cobertura, sem precisar cadastrar nomes específicos." 
        />
        <FAQItem 
          question="Aceitam carros de leilão ou rebaixados?" 
          answer="Sim! Aceitamos veículos de leilão e rebaixados, mediante inspeção prévia para verificar as condições de segurança. Consulte condições específicas para cada caso." 
        />
        <FAQItem 
          question="Como funciona o acionamento do guincho?" 
          answer="Temos uma central de atendimento 0800 exclusiva que funciona 24 horas por dia, 7 dias por semana. Em caso de necessidade, basta uma ligação ou mensagem para que o suporte seja enviado imediatamente." 
        />
        <FAQItem 
          question="A APVS é uma seguradora?" 
          answer="A APVS é uma Associação de Proteção Veicular sem fins lucrativos. Funcionamos através de ajuda mútua entre os associados, o que nos permite oferecer custos muito mais baixos mantendo coberturas de alta qualidade." 
        />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black py-16 text-gray-500 text-sm">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-12 mb-12 border-b border-white/10 pb-12">
        <div className="space-y-6">
          <img src="https://i.imgur.com/p1jbhCP.png" alt="APVS Logo" className="h-10 opacity-70" />
          <p className="max-w-xs">
            A maior e melhor associação de proteção veicular da América Latina. Protegendo seu caminho todos os dias.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs">Contatos</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><Phone size={14} /> (11) 94685-3920</li>
            <li className="flex items-center gap-2"><MapPin size={14} /> São Paulo - SP</li>
            <li className="flex items-center gap-2 hover:text-white transition-colors">
              <a href="https://www.instagram.com/lucas.protecaobrasil/" target="_blank" className="flex items-center gap-2">
                <Instagram size={14} /> Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-white font-bold uppercase tracking-widest text-xs">Consultor Responsável</h4>
          <p className="text-gray-300 font-medium">Lucas Vasconcelos</p>
          <p>CNPJ: 61.671.620/0001-47</p>
          <p className="text-[10px] leading-tight opacity-50">
            DISCLAIMER: Associação de Proteção Veicular sem fins lucrativos conforme art. 5º da CF/88 e Código Civil Brasileiro.
          </p>
        </div>
      </div>
      <div className="text-center">
        <p>&copy; {new Date().getFullYear()} APVS BRASIL E TRUCK - Lucas Vasconcelos. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

const FloatingWhatsApp = () => (
  <a 
    href="https://api.whatsapp.com/send?phone=5511946853920"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-[999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform animate-bounce active:scale-95 flex items-center justify-center"
  >
    <MessageCircle size={32} fill="white" />
  </a>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold selection:text-navy">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Coverage />
        <SocialProof />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
