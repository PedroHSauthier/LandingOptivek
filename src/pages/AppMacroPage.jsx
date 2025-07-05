import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Square, 
  MousePointer2, 
  Keyboard, 
  Image, 
  FileSpreadsheet, 
  Link, 
  Zap, 
  Settings, 
  Download, 
  CheckCircle, 
  Star, 
  Clock, 
  Shield, 
  TrendingUp, 
  ArrowRight, 
  Eye, 
  Code, 
  Layers,
  Target,
  BarChart3,
  Cpu,
  Monitor,
  Globe,
  Repeat,
  X,
  Menu,
  MousePointer,
  Type,
  Move,
  RotateCcw,
  Gauge,
  FileCode,
  Palette,
  ChevronRight,
  Activity,
  Grid3x3,
  Sun,
  Moon,
  Maximize
} from 'lucide-react';

const OptivekMacroLanding = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [timeLeft, setTimeLeft] = useState(48 * 3600); // Aversão à perda - oferta limitada

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

  // Recursos principais extraídos do código real
  const coreFeatures = [
    {
      icon: MousePointer2,
      title: "Gravação Completa de Mouse",
      subtitle: "Capture Every Movement",
      description: "Sistema avançado que grava todos os tipos de interação do mouse",
      features: [
        "Cliques simples (esquerdo, direito, meio)",
        "Drag & Drop com detecção automática",
        "Movimentos do mouse com sensibilidade ajustável",
        "MouseDown e MouseUp separados",
        "Detecção de distância para diferir clique de arraste"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Keyboard,
      title: "Automação de Teclado",
      subtitle: "Smart Text Input",
      description: "Capture e reproduza qualquer entrada de teclado com precisão",
      features: [
        "Digitação de texto com velocidade configurável",
        "Hotkeys e combinações (Ctrl+C, Alt+Tab, etc.)",
        "Detecção automática de modificadores",
        "Buffer inteligente para agrupar texto",
        "Modo instantâneo ou com delay"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Image,
      title: "Reconhecimento Visual",
      subtitle: "AI-Powered Detection",
      description: "Sistema de IA para identificar elementos visuais na tela",
      features: [
        "Cache de templates para performance",
        "Variantes de resolução automáticas",
        "Captura de referência em tempo real",
        "Tolerância de cor configurável",
        "Condições de pixel RGB precisas"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FileSpreadsheet,
      title: "Integração Excel Avançada",
      subtitle: "Data-Driven Automation",
      description: "Execute macros usando dados de planilhas como variáveis dinâmicas",
      features: [
        "Leitura de arquivos .xlsx e .xls",
        "Seleção de abas específicas",
        "Índice inicial configurável",
        "Preview dos dados antes da execução",
        "Processamento linha por linha automático"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Link,
      title: "Automação em Massa",
      subtitle: "Bulk Processing",
      description: "Execute o mesmo processo em centenas de links ou URLs",
      features: [
        "Lista de links ilimitada",
        "Controle de índice inicial",
        "Progresso em tempo real",
        "Type Link - insere URL automaticamente",
        "Open Link - abre no navegador"
      ],
      color: "from-teal-500 to-blue-500"
    },
    {
      icon: Monitor,
      title: "Multi-Resolução",
      subtitle: "Universal Compatibility",
      description: "Funciona em qualquer resolução de tela automaticamente",
      features: [
        "Escalabilidade automática de coordenadas",
        "Detecção de resolução nativa",
        "Adaptação para diferentes monitores",
        "Sistema de proporção inteligente",
        "Zero configuração manual"
      ],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  // Funcionalidades técnicas avançadas
  const advancedFeatures = [
    {
      icon: Settings,
      title: "Condições Inteligentes",
      description: "Execute ações baseadas em condições específicas",
      details: [
        "Condição de Pixel - verifique cor RGB em coordenadas específicas",
        "Condição Excel - execute baseado em dados da planilha",
        "Tolerância configurável para cores",
        "Lógica condicional avançada"
      ]
    },
    {
      icon: Layers,
      title: "Sistema de Grupos",
      description: "Organize ações em grupos para melhor controle",
      details: [
        "Agrupamento hierárquico de ações",
        "Sub-ações aninhadas",
        "Controle de repetição por grupo",
        "Habilitação/desabilitação em lote"
      ]
    },
    {
      icon: Code,
      title: "Exportação Python",
      description: "Exporte seus macros como código Python executável",
      details: [
        "Código Python completo e funcional",
        "Comentários automáticos para cada ação",
        "Compatível com PyAutoGUI",
        "Modo standalone ou integrado"
      ]
    },
    {
      icon: Gauge,
      title: "Controle de Performance",
      description: "Ajuste fino de velocidade e comportamento",
      details: [
        "Velocidade de reprodução de 0.1x a 5.0x",
        "Delay customizável entre ações",
        "Repetição configurável (1 a infinito)",
        "Modo de mouse: sempre, apenas arraste ou nunca"
      ]
    }
  ];

  // Casos de uso reais
  const useCases = [
    {
      icon: BarChart3,
      title: "Preenchimento de Formulários",
      description: "Automatize preenchimento de centenas de formulários web usando dados do Excel",
      time: "De 8 horas → 30 minutos",
      color: "bg-blue-500/10 border-blue-500/20 text-blue-400"
    },
    {
      icon: Globe,
      title: "Processo de URLs em Massa",
      description: "Execute a mesma sequência de ações em milhares de links diferentes",
      time: "Processamento ilimitado",
      color: "bg-green-500/10 border-green-500/20 text-green-400"
    },
    {
      icon: Target,
      title: "Entrada de Dados Repetitivos",
      description: "Elimine digitação manual com automação inteligente de dados",
      time: "99% menos erros",
      color: "bg-purple-500/10 border-purple-500/20 text-purple-400"
    },
    {
      icon: Activity,
      title: "Testes de Interface",
      description: "Automatize testes de UI com verificação visual e condições",
      time: "Execução 24/7",
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
          
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.8; }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .animate-float-delay {
            animation: float 3s ease-in-out infinite;
            animation-delay: 1s;
          }

          .animate-pulse-slow {
            animation: pulse-slow 2s ease-in-out infinite;
          }

          .gradient-border {
            background: linear-gradient(45deg, #06b6d4, #3b82f6, #10b981);
            padding: 2px;
            border-radius: 12px;
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
                <div className="p-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <span className="font-bold text-xl">OPTIVEK</span>
                <span className="text-sm text-cyan-400 font-medium">App Macro Suite</span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                {[
                  { id: 'home', label: 'Início' },
                  { id: 'features', label: 'Recursos' },
                  { id: 'technical', label: 'Técnico' },
                  { id: 'cases', label: 'Casos de Uso' },
                  { id: 'download', label: 'Download' }
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
                  { id: 'home', label: 'Início' },
                  { id: 'features', label: 'Recursos' },
                  { id: 'technical', label: 'Técnico' },
                  { id: 'cases', label: 'Casos de Uso' },
                  { id: 'download', label: 'Download' }
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
          </div>
          
          <div className="max-w-6xl mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-left">
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
                      <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
                        <Cpu className="w-12 h-12 text-cyan-400" />
                      </div>
                    </div>
                    <div>
                      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                        App Macro Suite
                      </h1>
                      <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-2"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <p className={`text-xl sm:text-2xl font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Automação Profissional para Todos
                    </p>
                    <p className="text-lg text-cyan-400 font-medium">
                      Transforme repetição em automação
                    </p>
                    <p className={`text-lg leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      O software mais avançado para automação de processos repetitivos no Windows. 
                      Grave, edite e execute macros com precisão profissional.
                    </p>
                  </div>

                  {/* Oferta Limitada - Aversão à Perda */}
                  <div className={`p-4 rounded-lg border mb-8 ${
                    darkMode 
                      ? 'bg-red-500/10 border-red-500/20' 
                      : 'bg-red-50 border-red-200'
                  }`}>
                    <div className="flex items-center gap-2 text-red-400 mb-2">
                      <Clock className="w-4 h-4" />
                      <span className="font-semibold">Oferta Limitada</span>
                    </div>
                    <p className={`text-sm mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Últimas horas com desconto especial
                    </p>
                    <div className="text-2xl font-bold text-red-400">
                      {formatTime(timeLeft)}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => scrollToSection('download')}
                      className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 drop-shadow-glow flex items-center justify-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      Baixar Agora - R$ 35,90
                    </button>
                    <button
                      onClick={() => scrollToSection('features')}
                      className={`px-8 py-4 border font-semibold rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 ${
                        darkMode 
                          ? 'border-gray-700 text-gray-300 hover:text-white hover:border-gray-600'
                          : 'border-gray-300 text-gray-700 hover:text-gray-900 hover:border-gray-400'
                      }`}
                    >
                      <Eye className="w-5 h-5" />
                      Ver Demonstração
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Content - Visual Demo */}
              <div className="relative">
                <div className={`p-8 rounded-2xl border ${
                  darkMode 
                    ? 'bg-gray-900/50 border-gray-800' 
                    : 'bg-gray-50 border-gray-200'
                } backdrop-blur-sm`}>
                  
                  {/* Simulação de Interface */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Advanced Macro Suite</span>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <button className="p-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg font-medium hover:scale-105 transition-transform">
                        <Play className="w-5 h-5 mx-auto mb-1" />
                        Gravar
                      </button>
                      <button className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-medium hover:scale-105 transition-transform">
                        <Square className="w-5 h-5 mx-auto mb-1" />
                        Parar
                      </button>
                    </div>

                    {/* Lista de ações simuladas */}
                    <div className="space-y-2">
                      {[
                        { icon: MousePointer2, text: "Click em (450, 300)", color: "text-blue-400" },
                        { icon: Type, text: "Digite: 'texto automático'", color: "text-green-400" },
                        { icon: Move, text: "Arraste para (680, 450)", color: "text-purple-400" },
                        { icon: Keyboard, text: "Hotkey: Ctrl+S", color: "text-orange-400" }
                      ].map((action, index) => (
                        <div key={index} className={`flex items-center gap-3 p-2 rounded ${
                          darkMode ? 'bg-gray-800/50' : 'bg-white/50'
                        } hover:scale-105 transition-all duration-200`}>
                          <action.icon className={`w-4 h-4 ${action.color}`} />
                          <span className="text-sm">{action.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 sm:px-8 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Recursos <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Profissionais</span>
              </h2>
              <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Tecnologia avançada para automação sem limites
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {coreFeatures.map((feature, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className={`group p-6 rounded-xl border transition-all duration-300 hover:scale-105 cursor-pointer ${
                    darkMode 
                      ? 'bg-gray-900/50 border-gray-800 hover:border-gray-700' 
                      : 'bg-white border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
                  } ${hoveredFeature === index ? 'ring-2 ring-cyan-500/50' : ''}`}
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
                      <p className="text-sm text-cyan-400 font-medium">
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

        {/* Technical Features */}
        <section id="technical" className={`py-20 px-4 sm:px-8 md:px-12 ${
          darkMode ? 'bg-gray-900/30' : 'bg-gray-50'
        }`}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Funcionalidades <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Avançadas</span>
              </h2>
              <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Controle total sobre cada aspecto da automação
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {advancedFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-xl border transition-all duration-300 hover:scale-105 ${
                    darkMode 
                      ? 'bg-gray-800/50 border-gray-700' 
                      : 'bg-white border-gray-200 shadow-lg'
                  }`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-semibold mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className={`text-sm ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3">
                        <ChevronRight className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span className={`text-sm ${
                          darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section id="cases" className="py-20 px-4 sm:px-8 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Casos de <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Uso Reais</span>
              </h2>
              <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Veja como o App Macro Suite resolve problemas do mundo real
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                    darkMode 
                      ? 'bg-gray-900/50 border-gray-800' 
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
                        {useCase.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className={`py-20 px-4 sm:px-8 md:px-12 ${
          darkMode ? 'bg-gray-900/30' : 'bg-gray-50'
        }`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Pronto para <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Automatizar</span>?
            </h2>

            {/* Preço com Ancoragem */}
            <div className="mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className={`text-2xl line-through ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  R$ 89,90
                </span>
                <span className="text-5xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  R$ 35,90
                </span>
              </div>
              <p className="text-lg text-green-400 font-medium mb-2">
                Economia de R$ 54,00 (40% OFF)
              </p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Licença completa • Atualizações incluídas • Suporte técnico
              </p>
            </div>

            {/* Botão principal de compra */}
            <div className="space-y-4">
              <button className="w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xl font-bold rounded-lg hover:scale-105 transition-all duration-300 drop-shadow-glow flex items-center justify-center gap-3 mx-auto">
                <Download className="w-6 h-6" />
                Baixar App Macro Suite
              </button>
              
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Download seguro • Windows 10/11 • Instalação em 1 minuto
              </p>
            </div>

            {/* Garantias */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "100% Seguro", desc: "Sem vírus ou malware" },
                { icon: RotateCcw, title: "Suporte Incluído", desc: "Ajuda técnica completa" },
                { icon: Zap, title: "Atualizações", desc: "Sempre na versão mais recente" }
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
              <div className="p-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
              <span className="font-bold text-xl">OPTIVEK</span>
            </div>
            <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              App Macro Suite - Automação Profissional
            </p>
            <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              © 2025 OPTIVEK. Transformando repetição em automação.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default OptivekMacroLanding;