import React, { useState, useEffect } from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { 
  Package,
  Zap,
  MousePointer2, 
  Keyboard, 
  Image, 
  FileSpreadsheet, 
  Link, 
  Calculator,
  BarChart3,
  TrendingUp,
  Target,
  Bell,
  Shield,
  Download,
  Eye,
  CheckCircle,
  Star,
  Clock,
  ArrowRight,
  Settings,
  Database,
  RefreshCw,
  FileText,
  Palette,
  Lock,
  X,
  Menu,
  DollarSign,
  Calendar,
  Layers,
  Activity,
  Cpu,
  Monitor,
  FileBarChart,
  Import,
  Gauge,
  ChevronRight,
  Workflow,
  Globe,
  Repeat,
  Code,
  RotateCcw,
  Grid3x3,
  Maximize,
  Type,
  Move,
  MousePointer,
  Sun,
  Moon
} from 'lucide-react';

const OptivekPacoteCompleto = () => {
  useDocumentTitle('Pacote Completo - AppMacro + Dinamiky | OPTIVEK');
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [timeLeft, setTimeLeft] = useState(36 * 3600); // 36 horas para criar urgência
  const [selectedProduct, setSelectedProduct] = useState('combo');

  // Contador regressivo
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  // Produtos do pacote
  const packageProducts = [
    {
      id: 'macro',
      icon: Cpu,
      name: 'App Macro Suite',
      description: 'Automação profissional para Windows',
      originalPrice: 'R$ 67,90',
      features: [
        'Gravação inteligente de mouse e teclado',
        'Reconhecimento visual com IA',
        'Integração avançada com Excel',
        'Automação em massa de URLs',
        'Exportação para Python'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'planilha',
      icon: FileSpreadsheet,
      name: 'Sistema Financeiro',
      description: 'Gestão inteligente para Google Sheets',
      originalPrice: 'R$ 49,90',
      features: [
        'Somas dinâmicas interativas',
        'Dashboard automático',
        'Importação de extratos bancários',
        'Relatórios profissionais',
        'Monitoramento em tempo real'
      ],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  // Benefícios únicos do combo
  const comboAdvantages = [
    {
      icon: Workflow,
      title: "Automação Total de Finanças",
      description: "Use o Macro para automatizar entrada de dados nas planilhas financeiras",
      benefit: "Eliminação completa de trabalho manual"
    },
    {
      icon: Database,
      title: "Sincronização Perfeita",
      description: "Extratos bancários processados automaticamente via macro",
      benefit: "Atualização financeira em segundos"
    },
    {
      icon: BarChart3,
      title: "Relatórios Automatizados",
      description: "Gere e envie relatórios financeiros automaticamente",
      benefit: "Gestão 100% hands-free"
    },
    {
      icon: Target,
      title: "ROI Maximizado",
      description: "Duas ferramentas profissionais pelo preço de uma básica",
      benefit: "Economia de R$ 73,80"
    }
  ];

  // Recursos combinados (seleção dos melhores de cada produto)
  const combinedFeatures = [
    {
      icon: MousePointer2,
      title: "Automação Completa",
      subtitle: "Macro + Financeiro",
      description: "Automatize desde a coleta de dados até a geração de relatórios",
      features: [
        "Gravação inteligente de todas as ações",
        "Processamento automático de planilhas",
        "Somas dinâmicas com um clique",
        "Dashboard atualizado automaticamente",
        "Relatórios gerados e enviados sozinhos"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Inteligência Financeira",
      subtitle: "Analytics + Automation",
      description: "Sistema completo de gestão financeira com automação total",
      features: [
        "Importação automática de extratos",
        "Categorização inteligente de gastos",
        "Projeções e tendências automáticas",
        "Alertas personalizados",
        "Backup e segurança avançados"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Code,
      title: "Tecnologia Avançada",
      subtitle: "Professional Tools",
      description: "Ferramentas de nível corporativo para uso pessoal e profissional",
      features: [
        "Reconhecimento visual com IA",
        "Multi-resolução automática",
        "Exportação Python completa",
        "Temas e personalização total",
        "Monitoramento de performance"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  // Casos de uso únicos do combo
  const comboUseCases = [
    {
      icon: Globe,
      title: "Empresário Digital",
      description: "Automatize captação de leads, processamento de vendas e gestão financeira completa",
      automation: "95% menos trabalho manual",
      color: "bg-blue-500/10 border-blue-500/20 text-blue-400"
    },
    {
      icon: Calendar,
      title: "Freelancer Profissional",
      description: "Automatize propostas, contratos, faturas e controle financeiro detalhado",
      automation: "3x mais produtividade",
      color: "bg-green-500/10 border-green-500/20 text-green-400"
    },
    {
      icon: TrendingUp,
      title: "Investidor Inteligente",
      description: "Automatize coleta de dados de investimentos e análise financeira completa",
      automation: "Decisões baseadas em dados",
      color: "bg-purple-500/10 border-purple-500/20 text-purple-400"
    },
    {
      icon: Layers,
      title: "Gestor Corporativo",
      description: "Automatize processos repetitivos e tenha controle financeiro total da empresa",
      automation: "ROI comprovado em 1 semana",
      color: "bg-orange-500/10 border-orange-500/20 text-orange-400"
    }
  ];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className={`min-h-screen transition-colors duration-300 ${
        darkMode 
          ? 'bg-black text-white' 
          : 'bg-white text-gray-900'
      }`}>
        
        <style>{`
          .drop-shadow-glow {
            filter: drop-shadow(0 0 8px rgba(34, 211, 238, 0.6));
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.4); }
            50% { box-shadow: 0 0 40px rgba(34, 211, 238, 0.8); }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .animate-float-delay {
            animation: float 3s ease-in-out infinite;
            animation-delay: 1s;
          }

          .animate-pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite;
          }

          .package-glow {
            background: linear-gradient(45deg, #06b6d4, #3b82f6, #10b981, #f59e0b);
            background-size: 400% 400%;
            animation: gradient 3s ease infinite;
          }

          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>

        {/* Navigation */}
        <nav className={`fixed top-0 w-full backdrop-blur-md border-b z-40 ${
          darkMode 
            ? 'bg-black/90 border-gray-800' 
            : 'bg-white/90 border-gray-200'
        }`}>
          <div className="max-w-6xl mx-auto px-4 sm:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <div className="p-0.5 package-glow rounded-full">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <Package className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <span className="font-bold text-xl">OPTIVEK</span>
                <span className="text-sm text-cyan-400 font-medium">Pacote Completo</span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                {[
                  { id: 'home', label: 'Pacote' },
                  { id: 'combo', label: 'Combo' },
                  { id: 'features', label: 'Recursos' },
                  { id: 'cases', label: 'Casos de Uso' },
                  { id: 'pricing', label: 'Oferta' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      activeSection === item.id 
                        ? 'text-cyan-400 drop-shadow-glow' 
                        : darkMode 
                          ? 'text-gray-300 hover:text-white hover:drop-shadow-sm'
                          : 'text-gray-600 hover:text-gray-900 hover:drop-shadow-sm'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2"
              >
                {darkMode ? (
                  <Sun className="w-6 h-6 text-white" />
                ) : (
                  <Moon className="w-6 h-6 text-black" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className={`md:hidden py-4 space-y-2 border-t ${
                darkMode ? 'border-gray-800' : 'border-gray-200'
              }`}>
                {[
                  { id: 'home', label: 'Pacote' },
                  { id: 'combo', label: 'Combo' },
                  { id: 'features', label: 'Recursos' },
                  { id: 'cases', label: 'Casos de Uso' },
                  { id: 'pricing', label: 'Oferta' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                      activeSection === item.id 
                        ? 'text-cyan-400' 
                        : darkMode 
                          ? 'text-gray-300 hover:text-white'
                          : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-24 pb-16 px-4 sm:px-8 md:px-12 relative overflow-hidden min-h-screen flex items-center">
          {/* Background animated elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl animate-pulse animate-float"></div>
            <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000 animate-float-delay"></div>
            <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-green-500/10 rounded-full blur-xl animate-pulse delay-2000 animate-float"></div>
            <div className="absolute top-60 right-1/3 w-28 h-28 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-3000 animate-float"></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative">
            <div className="text-center">
              {/* Logo com efeito especial do pacote */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="p-1 package-glow rounded-full animate-pulse-glow">
                  <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center">
                    <Package className="w-16 h-16 text-cyan-400" />
                  </div>
                </div>
                <div>
                  <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
                    OPTIVEK
                  </h1>
                  <div className="h-1 w-48 package-glow rounded-full mt-2"></div>
                </div>
              </div>
              
              <div className="space-y-6 mb-12">
                <p className={`text-2xl sm:text-3xl font-bold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Pacote Completo de Automação
                </p>
                <p className="text-xl text-cyan-400 font-medium">
                  App Macro Suite + Sistema Financeiro
                </p>
                <p className={`text-lg leading-relaxed max-w-4xl mx-auto ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  A combinação perfeita para automação total: automatize qualquer processo no Windows 
                  e tenha controle financeiro profissional no Google Sheets. Duas ferramentas premium 
                  que se complementam perfeitamente.
                </p>
              </div>

              {/* Oferta Especial - Aversão à Perda Intensificada */}
              <div className={`max-w-2xl mx-auto p-6 rounded-xl border mb-12 ${
                darkMode 
                  ? 'bg-gradient-to-r from-red-900/20 to-orange-900/20 border-red-500/30' 
                  : 'bg-gradient-to-r from-red-50 to-orange-50 border-red-300'
              } animate-pulse-glow`}>
                <div className="flex items-center justify-center gap-2 text-red-400 mb-3">
                  <Clock className="w-5 h-5" />
                  <span className="font-bold text-lg">🔥 OFERTA RELÂMPAGO</span>
                </div>
                <p className={`text-sm mb-3 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Últimas horas - Pacote completo com desconto máximo
                </p>
                <div className="text-4xl font-bold text-red-400 mb-2">
                  {formatTime(timeLeft)}
                </div>
                <p className="text-sm text-orange-400 font-medium">
                  Depois volta ao preço normal de R$ 143,80
                </p>
              </div>

              {/* CTAs principais */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="px-12 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white text-xl font-bold rounded-lg hover:scale-105 transition-all duration-300 drop-shadow-glow flex items-center justify-center gap-3"
                >
                  <Package className="w-6 h-6" />
                  Garantir Pacote - R$ 44,90
                </button>
                <button
                  onClick={() => scrollToSection('combo')}
                  className={`px-8 py-5 border-2 font-semibold rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 ${
                    darkMode 
                      ? 'border-gray-600 text-gray-300 hover:text-white hover:border-gray-500'
                      : 'border-gray-400 text-gray-700 hover:text-gray-900 hover:border-gray-500'
                  }`}
                >
                  <Eye className="w-5 h-5" />
                  Ver Detalhes do Combo
                </button>
              </div>

              {/* Economia destacada */}
              <div className="mt-8 inline-block px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30">
                <span className="text-green-400 font-bold text-lg">
                  💰 Você economiza R$ 99,00 neste pacote!
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Combo Section */}
        <section id="combo" className={`py-20 px-4 sm:px-8 md:px-12 ${
          darkMode ? 'bg-gray-900/30' : 'bg-gray-50'
        }`}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                O que está <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Incluído</span>
              </h2>
              <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Duas ferramentas profissionais que trabalham em perfeita sinergia
              </p>
            </div>

            {/* Produtos do pacote */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {packageProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`p-8 rounded-xl border transition-all duration-300 hover:scale-105 ${
                    darkMode 
                      ? 'bg-gray-800/50 border-gray-700' 
                      : 'bg-white border-gray-200 shadow-lg'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${product.color} flex items-center justify-center`}>
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {product.name}
                      </h3>
                      <p className="text-cyan-400 font-medium">
                        {product.description}
                      </p>
                      <p className={`text-sm line-through ${
                        darkMode ? 'text-gray-500' : 'text-gray-400'
                      }`}>
                        Valor individual: {product.originalPrice}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {product.features.map((feature, featIndex) => (
                      <li key={featIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className={`text-sm ${
                          darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Vantagens únicas do combo */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-8">
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  Vantagens Exclusivas do Combo
                </span>
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {comboAdvantages.map((advantage, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg border transition-all duration-300 hover:scale-105 ${
                    darkMode 
                      ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/20' 
                      : 'bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <advantage.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-lg font-semibold mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {advantage.title}
                      </h4>
                      <p className={`text-sm mb-3 ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {advantage.description}
                      </p>
                      <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                        {advantage.benefit}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Combined Features */}
        <section id="features" className="py-20 px-4 sm:px-8 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Recursos <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Combinados</span>
              </h2>
              <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Quando dois sistemas profissionais trabalham juntos
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {combinedFeatures.map((feature, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className={`group p-6 rounded-xl border transition-all duration-300 hover:scale-105 cursor-pointer ${
                    darkMode 
                      ? 'bg-gray-900/50 border-gray-800 hover:border-gray-700' 
                      : 'bg-white border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
                  } ${hoveredFeature === index ? 'ring-2 ring-purple-500/50' : ''}`}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h3 className={`text-xl font-semibold mb-1 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className="text-sm text-purple-400 font-medium">
                        {feature.subtitle}
                      </p>
                    </div>

                    <p className={`text-sm ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {feature.description}
                    </p>

                    <ul className="space-y-2">
                      {feature.features.map((feat, featIndex) => (
                        <li key={featIndex} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section id="cases" className={`py-20 px-4 sm:px-8 md:px-12 ${
          darkMode ? 'bg-gray-900/30' : 'bg-gray-50'
        }`}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Casos de Uso <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Avançados</span>
              </h2>
              <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Transformações reais com o pacote completo
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {comboUseCases.map((useCase, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                    darkMode 
                      ? 'bg-gray-800/50 border-gray-700' 
                      : 'bg-white border-gray-200 shadow-lg'
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg ${useCase.color} flex items-center justify-center`}>
                      <useCase.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {useCase.title}
                      </h3>
                      <p className={`text-sm mb-3 ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {useCase.description}
                      </p>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${useCase.color}`}>
                        {useCase.automation}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 sm:px-8 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Oferta <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Especial</span>
            </h2>

            {/* Comparação de preços */}
            <div className="mb-12">
              <div className={`p-8 rounded-2xl border-2 ${
                darkMode 
                  ? 'bg-gradient-to-r from-green-900/20 to-cyan-900/20 border-green-500/30' 
                  : 'bg-gradient-to-r from-green-50 to-cyan-50 border-green-300'
              }`}>
                <div className="space-y-4">
                  {/* Preços individuais */}
                  <div className="flex items-center justify-center gap-4 text-lg">
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                      App Macro Suite: 
                    </span>
                    <span className={`line-through ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                      R$ 67,90
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-4 text-lg">
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                      Sistema Financeiro:
                    </span>
                    <span className={`line-through ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                      R$ 49,90
                    </span>
                  </div>
                  <div className="border-t border-gray-300 pt-4">
                    <div className="flex items-center justify-center gap-4 text-xl font-bold">
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                        Total separado:
                      </span>
                      <span className={`text-2xl line-through ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                        R$ 117,80
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Preço do pacote */}
              <div className="mt-8">
                <div className="flex items-center justify-center gap-6 mb-4">
                  <span className={`text-3xl line-through ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    R$ 143,90
                  </span>
                  <span className="text-6xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    R$ 44,90
                  </span>
                </div>
                <p className="text-2xl text-green-400 font-bold mb-2">
                  Economia de R$ 99,00 (69% OFF)
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Pacote completo • Licenças vitalícias • Suporte técnico • Atualizações incluídas
                </p>
              </div>
            </div>

            {/* Botão principal de compra */}
            <div className="space-y-6">
              <button className="w-full sm:w-auto px-16 py-5 bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 text-white text-2xl font-bold rounded-lg hover:scale-105 transition-all duration-300 drop-shadow-glow flex items-center justify-center gap-4 mx-auto animate-pulse-glow">
                <Package className="w-8 h-8" />
                Garantir Pacote Completo
              </button>
              
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Download instantâneo • Windows + Google Sheets • Acesso imediato
              </p>
              
              <div className="inline-block px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">
                ⚠️ Oferta válida apenas por {formatTime(timeLeft)}
              </div>
            </div>

            {/* Garantias e benefícios */}
            <div className="mt-16 grid md:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "100% Seguro", desc: "Download oficial seguro" },
                { icon: Zap, title: "Acesso Imediato", desc: "Use em 5 minutos" },
                { icon: RefreshCw, title: "Atualizações", desc: "Sempre atualizado" },
                { icon: Target, title: "ROI Garantido", desc: "Payback em 1 semana" }
              ].map((guarantee, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <guarantee.icon className="w-8 h-8 text-cyan-400 mb-2" />
                  <h4 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {guarantee.title}
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {guarantee.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`py-8 px-4 sm:px-8 md:px-12 border-t ${
          darkMode 
            ? 'bg-gray-900 border-gray-800' 
            : 'bg-gray-100 border-gray-200'
        }`}>
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-0.5 package-glow rounded-full">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <Package className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
              <span className="font-bold text-xl">OPTIVEK</span>
            </div>
            <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Pacote Completo - Automação + Gestão Financeira
            </p>
            <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              © 2025 OPTIVEK. Transformando produtividade com tecnologia avançada.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default OptivekPacoteCompleto;