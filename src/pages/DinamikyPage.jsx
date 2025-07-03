import React, { useState, useEffect } from 'react';
import { 
  BarChart3,
  PieChart,
  TrendingUp,
  Calculator,
  FileSpreadsheet,
  Target,
  Bell,
  Shield,
  Download,
  Eye,
  CheckCircle,
  Star,
  Clock,
  Zap,
  ArrowRight,
  Settings,
  Database,
  RefreshCw,
  FileText,
  Palette,
  Lock,
  AlertTriangle,
  X,
  Menu,
  DollarSign,
  Calendar,
  Layers,
  BarChart2,
  Activity,
  Cpu,
  Monitor,
  FileBarChart,
  Import,
  Gauge
} from 'lucide-react';

const OptivekPlanilhaLanding = () => {
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
      icon: Calculator,
      title: "Somas Dinâmicas Avançadas",
      subtitle: "Smart Financial Calculations",
      description: "Sistema revolucionário de somas interativas com controle visual",
      features: [
        "Criar somas dinâmicas com células clicáveis",
        "Estados: Incluída (✓), Dormente (⚬), Subtraída (−)",
        "Recálculo automático em tempo real",
        "Gerenciamento visual por cores e temas",
        "Conversão entre tipos de fórmulas"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Dashboard Interativo",
      subtitle: "Real-time Analytics",
      description: "Visualização completa das suas finanças com gráficos inteligentes",
      features: [
        "Dashboard automático por categoria",
        "Gráficos mensais, trimestrais e anuais",
        "Tendências e projeções automáticas",
        "Análise de gastos por dia/mês",
        "Métricas de performance em tempo real"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Import,
      title: "Importação de Extratos",
      subtitle: "Bank Integration",
      description: "Importe extratos bancários automaticamente para suas planilhas",
      features: [
        "Suporte a múltiplos formatos bancários",
        "Categorização automática de transações",
        "Detecção de duplicatas",
        "Mapeamento inteligente de dados",
        "Sincronização automática de saldos"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FileText,
      title: "Relatórios Personalizados",
      subtitle: "Advanced Reporting",
      description: "Gere relatórios profissionais em PDF, Excel ou envie por email",
      features: [
        "Relatórios mensais, trimestrais e anuais",
        "Exportação automática para PDF",
        "Envio por email automático",
        "Templates personalizáveis",
        "Análise de variação e tendências"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Activity,
      title: "Monitoramento Automático",
      subtitle: "System Monitoring",
      description: "Log completo de todas as alterações com rastreamento em tempo real",
      features: [
        "Log automático de todas as edições",
        "Rastreamento por usuário e timestamp",
        "Histórico detalhado de alterações",
        "Backup automático de dados",
        "Sistema de auditoria completo"
      ],
      color: "from-teal-500 to-blue-500"
    },
    {
      icon: Target,
      title: "Análise de Metas",
      subtitle: "Goal Tracking",
      description: "Defina e acompanhe metas financeiras com projeções inteligentes",
      features: [
        "Definição de metas por categoria",
        "Acompanhamento de progresso visual",
        "Projeções baseadas em histórico",
        "Alertas de desvio de meta",
        "Relatórios de performance"
      ],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  // Funcionalidades técnicas avançadas
  const advancedFeatures = [
    {
      icon: RefreshCw,
      title: "Sistema de Conversões",
      description: "Converta entre diferentes tipos de fórmulas sem perder dados",
      details: [
        "Dinâmica → SUM clássico",
        "Dinâmica → SUM_NATIVA2",
        "SUM → Dinâmica com preservação",
        "Conversão em lote para múltiplas células"
      ]
    },
    {
      icon: Palette,
      title: "Temas Personalizáveis",
      description: "Interface totalmente customizável com temas visuais",
      details: [
        "Editor de cores integrado",
        "Temas pré-definidos profissionais",
        "Cores para cada estado das somas",
        "Preview em tempo real"
      ]
    },
    {
      icon: Shield,
      title: "Backup e Segurança",
      description: "Sistema robusto de backup e proteção de dados",
      details: [
        "Backup automático agendado",
        "Proteção de faixas críticas",
        "Recuperação de configurações",
        "Log de segurança completo"
      ]
    },
    {
      icon: Bell,
      title: "Notificações Inteligentes",
      description: "Sistema avançado de alertas e notificações",
      details: [
        "Alertas de variação de saldo",
        "Notificações de metas atingidas",
        "Lembretes de backup",
        "Alertas de performance do sistema"
      ]
    }
  ];

  // Casos de uso reais
  const useCases = [
    {
      icon: DollarSign,
      title: "Gestão Financeira Pessoal",
      description: "Controle completo de receitas, despesas e investimentos pessoais",
      benefits: "Visão 360° das finanças",
      color: "bg-blue-500/10 border-blue-500/20 text-blue-400"
    },
    {
      icon: BarChart2,
      title: "Planejamento Empresarial",
      description: "Orçamento, fluxo de caixa e análise de performance empresarial",
      benefits: "Decisões baseadas em dados",
      color: "bg-green-500/10 border-green-500/20 text-green-400"
    },
    {
      icon: Calendar,
      title: "Controle Mensal Detalhado",
      description: "Acompanhe cada categoria de gasto mês a mês com precisão",
      benefits: "Controle granular de custos",
      color: "bg-purple-500/10 border-purple-500/20 text-purple-400"
    },
    {
      icon: TrendingUp,
      title: "Análise de Tendências",
      description: "Identifique padrões e tendências nos seus gastos e receitas",
      benefits: "Previsibilidade financeira",
      color: "bg-orange-500/10 border-orange-500/20 text-orange-400"
    }
  ];

  // Funcionalidades do menu
  const menuFeatures = [
    {
      category: "Gestão Financeira",
      icon: DollarSign,
      items: [
        "Preencher mês atual automaticamente",
        "Agrupar valores por categoria",
        "Relatórios mensais/trimestrais/anuais",
        "Gráficos interativos automáticos",
        "Copiar dados de planilhas antigas"
      ]
    },
    {
      category: "Somas Dinâmicas",
      icon: Calculator,
      items: [
        "Criar novas somas interativas",
        "Gerenciar somas existentes",
        "Alternar estados de células",
        "Conversores entre tipos de fórmula",
        "Exportar/importar configurações"
      ]
    },
    {
      category: "Monitoramento",
      icon: Activity,
      items: [
        "Ativar/desativar monitoramento",
        "Dashboard interativo em tempo real",
        "Relatórios completos de uso",
        "Backup automático de logs",
        "Status detalhado do sistema"
      ]
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
                    <FileSpreadsheet className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <span className="font-bold text-xl">OPTIVEK</span>
                <span className="text-sm text-cyan-400 font-medium">Sistema Financeiro</span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                {[
                  { id: 'home', label: 'Início' },
                  { id: 'features', label: 'Recursos' },
                  { id: 'technical', label: 'Avançado' },
                  { id: 'menu-overview', label: 'Funcionalidades' },
                  { id: 'download', label: 'Obter Agora' }
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
                className="p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {darkMode ? '🌞' : '🌙'}
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
                  { id: 'technical', label: 'Avançado' },
                  { id: 'menu-overview', label: 'Funcionalidades' },
                  { id: 'download', label: 'Obter Agora' }
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
                        <FileSpreadsheet className="w-12 h-12 text-cyan-400" />
                      </div>
                    </div>
                    <div>
                      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                        Sistema Financeiro
                      </h1>
                      <div className="h-1 w-40 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-2"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <p className={`text-xl sm:text-2xl font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Planilha Inteligente para Google Sheets
                    </p>
                    <p className="text-lg text-cyan-400 font-medium">
                      Gestão financeira profissional com automação avançada
                    </p>
                    <p className={`text-lg leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Sistema completo de controle financeiro com somas dinâmicas, dashboard interativo, 
                      importação de extratos e relatórios automáticos. Transforme suas finanças com tecnologia.
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
                      <span className="font-semibold">Lançamento Especial</span>
                    </div>
                    <p className={`text-sm mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Últimas horas com desconto exclusivo
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
                      Obter Sistema - R$ 49,90
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
                      Ver Funcionalidades
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
                  
                  {/* Simulação de Dashboard */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">📊 Dashboard Financeiro</span>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Cards de resumo */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <div className="text-xs text-green-400 mb-1">RECEITAS</div>
                        <div className="text-lg font-bold">R$ 8.450</div>
                      </div>
                      <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <div className="text-xs text-red-400 mb-1">DESPESAS</div>
                        <div className="text-lg font-bold">R$ 6.230</div>
                      </div>
                    </div>

                    {/* Somas dinâmicas simuladas */}
                    <div className="space-y-2">
                      <div className="text-xs font-medium mb-2">Somas Dinâmicas Ativas:</div>
                      {[
                        { name: "Alimentação", value: "R$ 1.250", status: "✓", color: "text-green-400" },
                        { name: "Transporte", value: "R$ 680", status: "⚬", color: "text-gray-400" },
                        { name: "Cartão", value: "R$ 2.100", status: "−", color: "text-red-400" }
                      ].map((item, index) => (
                        <div key={index} className={`flex items-center justify-between p-2 rounded ${
                          darkMode ? 'bg-gray-800/50' : 'bg-white/50'
                        } hover:scale-105 transition-all duration-200`}>
                          <div className="flex items-center gap-2">
                            <span className={`font-bold ${item.color}`}>{item.status}</span>
                            <span className="text-sm">{item.name}</span>
                          </div>
                          <span className="text-sm font-medium">{item.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Gráfico simulado */}
                    <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                      <div className="text-xs text-center mb-2">Tendência Mensal</div>
                      <div className="flex items-end justify-center gap-1 h-16">
                        {[40, 60, 45, 80, 65, 90, 75].map((height, index) => (
                          <div
                            key={index}
                            className="bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t w-3"
                            style={{ height: `${height}%` }}
                          ></div>
                        ))}
                      </div>
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
                Recursos <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Inteligentes</span>
              </h2>
              <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Sistema financeiro com tecnologia de ponta para Google Sheets
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
                Tecnologia profissional para gestão financeira completa
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
                        <ArrowRight className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
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

        {/* Menu Overview */}
        <section id="menu-overview" className="py-20 px-4 sm:px-8 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Sistema de <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Menus Inteligentes</span>
              </h2>
              <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Interface completa com mais de 30 funcionalidades organizadas
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {menuFeatures.map((menu, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                    darkMode 
                      ? 'bg-gray-900/50 border-gray-800' 
                      : 'bg-white border-gray-200 shadow-lg'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <menu.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className={`text-lg font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {menu.category}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {menu.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
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
                Casos de <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Uso Reais</span>
              </h2>
              <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Como o Sistema Financeiro OPTIVEK transforma sua gestão
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
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
                        {useCase.benefits}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-20 px-4 sm:px-8 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Revolucione suas <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Finanças</span>
            </h2>

            {/* Preço com Ancoragem */}
            <div className="mb-12">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className={`text-2xl line-through ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  R$ 99,90
                </span>
                <span className="text-5xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  R$ 49,90
                </span>
              </div>
              <p className="text-lg text-green-400 font-medium mb-2">
                Economia de R$ 50,00 (50% OFF)
              </p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Planilha completa • Templates incluídos • Suporte técnico • Atualizações vitalícias
              </p>
            </div>

            {/* Botão principal de compra */}
            <div className="space-y-4">
              <button className="w-full sm:w-auto px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xl font-bold rounded-lg hover:scale-105 transition-all duration-300 drop-shadow-glow flex items-center justify-center gap-3 mx-auto">
                <Download className="w-6 h-6" />
                Obter Sistema Financeiro
              </button>
              
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Google Sheets • Instalação em 2 minutos • Acesso imediato
              </p>
            </div>

            {/* Garantias */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "100% Seguro", desc: "Google Sheets oficial" },
                { icon: Zap, title: "Acesso Imediato", desc: "Download instantâneo" },
                { icon: RefreshCw, title: "Atualizações", desc: "Sempre na versão mais recente" }
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
                  <FileSpreadsheet className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
              <span className="font-bold text-xl">OPTIVEK</span>
            </div>
            <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Sistema Financeiro - Gestão Inteligente para Google Sheets
            </p>
            <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              © 2025 OPTIVEK. Transformando gestão financeira com tecnologia.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default OptivekPlanilhaLanding;