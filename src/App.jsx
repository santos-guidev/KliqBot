import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, Bot, Clock, Users, CheckCircle, Star, ArrowRight, Phone, Mail, Globe } from 'lucide-react';
import './App.css';

// Importando as imagens
import chatbotWhatsapp1 from './assets/E7ayHoIUE28v.jpg';
import chatbotWhatsapp2 from './assets/UBYrPcV3VybO.webp';
import chatbotInterface from './assets/nmjHGvWXvu81.png';
import atendimentoCliente from './assets/n5XJWgBryri4.jpeg';
import planosServico from './assets/planos_servico.png';

const Header = () => (
  <header className="bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg">
    <div className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bot className="h-8 w-8" />
          <h1 className="text-2xl font-bold">CliqBot</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-green-200 transition-colors">Início</a>
          <a href="#solucao" className="hover:text-green-200 transition-colors">Solução</a>
          <a href="#beneficios" className="hover:text-green-200 transition-colors">Benefícios</a>
          <a href="#planos" className="hover:text-green-200 transition-colors">Planos</a>
          <a href="#contato" className="hover:text-green-200 transition-colors">Contato</a>
        </nav>
        <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors">
          Demonstração Gratuita
        </button>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section id="home" className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center">
        <motion.div 
          className="lg:w-1/2 mb-10 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Chatbot de Atendimento Automático no 
            <span className="text-green-600"> WhatsApp</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transforme seu atendimento com IA. Disponível 24h para o seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center">
              <MessageCircle className="mr-2 h-5 w-5" />
              Começar Agora
            </button>
            <button className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Ver Demonstração
            </button>
          </div>
        </motion.div>
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src={chatbotWhatsapp2} 
            alt="Chatbot WhatsApp" 
            className="rounded-lg shadow-2xl max-w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section className="bg-white py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { number: "99%", label: "Smartphones com WhatsApp no Brasil" },
          { number: "24/7", label: "Disponibilidade do atendimento" },
          { number: "35%", label: "Redução no tempo de resposta" },
          { number: "85%", label: "Satisfação dos clientes" }
        ].map((stat, index) => (
          <motion.div 
            key={index}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
            <div className="text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Problems = () => (
  <section className="bg-gray-50 py-20">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Problemas que Resolvemos</h2>
        <p className="text-xl text-gray-600">Desafios comuns que as empresas enfrentam no atendimento ao cliente</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <Clock className="h-12 w-12 text-red-500" />,
            title: "Atendimento Fora do Horário",
            description: "Clientes mandam mensagens quando não há equipe disponível"
          },
          {
            icon: <Users className="h-12 w-12 text-red-500" />,
            title: "Perguntas Repetitivas",
            description: "Equipes gastam tempo com as mesmas perguntas básicas"
          },
          {
            icon: <MessageCircle className="h-12 w-12 text-red-500" />,
            title: "Perda de Leads",
            description: "Potenciais clientes desistem sem resposta rápida"
          },
          {
            icon: <ArrowRight className="h-12 w-12 text-red-500" />,
            title: "Dificuldade em Escalar",
            description: "Impossível aumentar equipe proporcionalmente ao crescimento"
          }
        ].map((problem, index) => (
          <motion.div 
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{problem.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{problem.title}</h3>
            <p className="text-gray-600">{problem.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section id="solucao" className="bg-white py-20">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center">
        <motion.div 
          className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Nossa Solução</h2>
          <div className="space-y-6">
            {[
              {
                icon: <Bot className="h-6 w-6 text-green-600" />,
                title: "Atendimento Automático com IA",
                description: "Chatbot inteligente que entende perguntas em linguagem natural"
              },
              {
                icon: <Clock className="h-6 w-6 text-green-600" />,
                title: "Disponibilidade 24/7",
                description: "Atendimento automático a qualquer hora do dia"
              },
              {
                icon: <Users className="h-6 w-6 text-green-600" />,
                title: "Coleta Inteligente de Leads",
                description: "Captura e qualificação automática de potenciais clientes"
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-green-600" />,
                title: "Integrações Versáteis",
                description: "Conecte com seu site, agenda, catálogo e sistemas existentes"
              }
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-lg">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img 
            src={chatbotInterface} 
            alt="Interface do Chatbot" 
            className="rounded-lg shadow-xl max-w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section id="beneficios" className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Benefícios Comprovados</h2>
        <p className="text-xl text-gray-600">Resultados reais que nossos clientes obtêm</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: <Users className="h-8 w-8" />, title: "27% Aumento na Retenção", color: "green" },
          { icon: <Clock className="h-8 w-8" />, title: "35% Redução no Tempo de Resposta", color: "blue" },
          { icon: <CheckCircle className="h-8 w-8" />, title: "40% Economia nos Custos", color: "yellow" },
          { icon: <Star className="h-8 w-8" />, title: "85% Satisfação do Cliente", color: "purple" }
        ].map((benefit, index) => (
          <motion.div 
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={`inline-flex p-3 rounded-full bg-${benefit.color}-100 text-${benefit.color}-600 mb-4`}>
              {benefit.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{benefit.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="planos" className="bg-white py-20">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Planos de Serviço</h2>
        <p className="text-xl text-gray-600">Escolha o plano ideal para o seu negócio</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: "Básico",
            price: "R$ 497",
            setup: "R$ 500",
            features: ["Respostas automáticas", "FAQ personalizado", "Coleta de leads", "Relatórios básicos"],
            color: "green",
            popular: false
          },
          {
            name: "Profissional",
            price: "R$ 997",
            setup: "R$ 1.000",
            features: ["Tudo do plano Básico", "Envio de catálogo/serviços", "Integração com CRM", "Análise de sentimento"],
            color: "blue",
            popular: true
          },
          {
            name: "Premium",
            price: "R$ 1.497",
            setup: "R$ 2.000",
            features: ["Tudo do plano Profissional", "Integrações avançadas", "Dashboard de leads", "IA generativa personalizada"],
            color: "purple",
            popular: false
          }
        ].map((plan, index) => (
          <motion.div 
            key={index}
            className={`bg-white border-2 ${plan.popular ? 'border-blue-500 shadow-xl' : 'border-gray-200'} rounded-lg p-8 relative`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Mais Popular
                </span>
              </div>
            )}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold text-green-600 mb-1">{plan.price}<span className="text-lg text-gray-600">/mês</span></div>
              <div className="text-sm text-gray-500">Taxa de Setup: {plan.setup}</div>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
              plan.popular 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}>
              Escolher Plano
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="bg-gray-50 py-20">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Como Funciona na Prática</h2>
        <p className="text-xl text-gray-600">Processo simples e eficiente</p>
      </div>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
          <div className="space-y-6">
            {[
              { step: "1", title: "Cliente inicia contato", description: "O cliente envia uma mensagem para o número de WhatsApp da sua empresa" },
              { step: "2", title: "Resposta automática instantânea", description: "O chatbot responde em segundos, identificando a intenção do cliente" },
              { step: "3", title: "Resolução ou encaminhamento", description: "O bot resolve dúvidas ou direciona para um atendente humano quando necessário" },
              { step: "4", title: "Gestão de leads", description: "Todas as interações são registradas no painel administrativo para follow-up" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img 
            src={atendimentoCliente} 
            alt="Atendimento ao Cliente" 
            className="rounded-lg shadow-xl max-w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contato" className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
        <p className="text-xl">Transforme seu atendimento hoje mesmo!</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6" />
              <div>
                <div className="font-semibold">WhatsApp</div>
                <div>(XX) XXXXX-XXXX</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6" />
              <div>
                <div className="font-semibold">E-mail</div>
                <div>contato@cliqbot.com</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Globe className="h-6 w-6" />
              <div>
                <div className="font-semibold">Website</div>
                <div>www.cliqbot.com.br</div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white text-gray-800 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Agende uma Demonstração</h3>
            <p className="mb-6">Veja como o CliqBot pode transformar seu atendimento</p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Agendar Agora
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Bot className="h-6 w-6" />
          <span className="text-xl font-bold">CliqBot</span>
        </div>
        <div className="text-center md:text-right">
          <p>&copy; 2025 CliqBot. Todos os direitos reservados.</p>
          <p className="text-sm text-gray-400">Implementação rápida em até 7 dias</p>
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <Stats />
          <Problems />
          <Solution />
          <Benefits />
          <Pricing />
          <HowItWorks />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
