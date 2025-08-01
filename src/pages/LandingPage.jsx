import React, { useState, useEffect } from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import {
  Code, 
  Database, 
  BarChart3, 
  Bot, 
  Cog, 
  Download, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Play,
  Star,
  Clock,
  Users,
  CheckCircle,
  MessageCircle,
  Calendar,
  TrendingUp,
  Zap,
  Globe,
  Sun,
  Moon
} from 'lucide-react';
import ImageModal from '../components/ImageModal.jsx';
import DetailsModal from '../components/DetailsModal.jsx';

const OptivekWebsite = () => {
  useDocumentTitle('OPTIVEK Systems - Soluções em Automação e Análise de Dados');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showChat, setShowChat] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('theme') !== 'light'
  );
  const [products, setProducts] = useState([]);
  const [selectedTag, setSelectedTag] = useState('Todos');
  const [selectedImages, setSelectedImages] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [paymentQRCodes, setPaymentQRCodes] = useState([]);
  const [chatMessages, setChatMessages] = useState([
    { from: 'bot', text: 'Olá! Como posso ajudar você hoje?' }
  ]);
  const [availability, setAvailability] = useState(null);
  const [isOnline, setIsOnline] = useState(false);
  const [scheduleText, setScheduleText] = useState('');

  const hexToRgba = (hex, opacity = 1) => {
    let c = hex.replace('#', '');
    if (c.length === 3) {
      c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
    }
    const num = parseInt(c, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  const buildScheduleText = (sch) => {
    if (!sch) return '';
    const weekDays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'];
    const ranges = weekDays.map((_, i) => sch[Object.keys(sch)[i]]);
    const firstRange = ranges[0] && ranges[0].length === 2 ? `${ranges[0][0]} às ${ranges[0][1]}` : null;
    const allEqual = ranges.every((r) => r && r[0] === ranges[0][0] && r[1] === ranges[0][1]);
    const parts = [];
    if (allEqual && firstRange) {
      parts.push(`Seg-Sex: ${firstRange}`);
    } else {
      ranges.forEach((r, idx) => {
        if (r && r.length === 2) parts.push(`${weekDays[idx]}: ${r[0]} às ${r[1]}`);
      });
    }
    if (sch.saturday && sch.saturday.length === 2) {
      parts.push(`Sábado: ${sch.saturday[0]} às ${sch.saturday[1]}`);
    }
    if (sch.sunday && sch.sunday.length === 2) {
      parts.push(`Domingo: ${sch.sunday[0]} às ${sch.sunday[1]}`);
    }
    return parts.join(' | ');
  };

  const handleViewDetails = (product) => {
    const url =
      product.detailsUrl ||
      product.purchaseUrl ||
      product.downloadUrl ||
      null;
    if (url && url !== '#') {
      window.open(url, '_blank');
    } else {
      setSelectedProduct(product);
    }
  };

  useEffect(() => {
    if (!availability) return;
    const checkOnline = () => {
      const now = new Date();
      const day = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Sao_Paulo',
        weekday: 'long',
      })
        .format(now)
        .toLowerCase();
      const time = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'America/Sao_Paulo',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
      })
        .format(now)
        .split(':');
      const currentMinutes = parseInt(time[0]) * 60 + parseInt(time[1]);
      const range = availability[day];
      if (range && range.length === 2) {
        const [start, end] = range;
        const startM = parseInt(start.split(':')[0]) * 60 + parseInt(start.split(':')[1]);
        const endM = parseInt(end.split(':')[0]) * 60 + parseInt(end.split(':')[1]);
        setIsOnline(currentMinutes >= startM && currentMinutes <= endM);
      } else {
        setIsOnline(false);
      }
    };
    checkOnline();
    const id = setInterval(checkOnline, 60000);
    return () => clearInterval(id);
  }, [availability]);

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Handle scroll for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'cases', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => {});

    fetch('/data/config.json')
      .then((res) => res.json())
      .then((data) => {
        const codes = [];
        if (data.payments?.pix) {
          codes.push({
            alt: data.payments.pix.alt || 'PIX',
            src: data.payments.pix.qrCode,
            hint: data.payments.pix.hint,
            bgColor: data.payments.pix.bgColor,
            bgOpacity: data.payments.pix.bgOpacity,
          });
        }
        if (data.payments?.whatsapp) {
          codes.push({
            alt: data.payments.whatsapp.alt || 'WhatsApp',
            src: data.payments.whatsapp.qrCode,
            hint: data.payments.whatsapp.hint,
            bgColor: data.payments.whatsapp.bgColor,
            bgOpacity: data.payments.whatsapp.bgOpacity,
          });
        }
        setPaymentQRCodes(codes);
        setAvailability(data.availability || null);
        setScheduleText(buildScheduleText(data.availability || null));
      })
      .catch(() => {});
  }, []);


  const technologies = [
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'Google Sheets', icon: '📊' },
    { name: 'App Script', icon: '🔧' },
    { name: 'Java', icon: '☕' },
    { name: 'C', icon: '⚙️' },
    { name: 'PostgreSQL', icon: '🗄️' },
    { name: 'Insomnia', icon: '🧪' }
  ];


  const iconMap = { Bot, Database, Cog, Zap };

  const availableTags = React.useMemo(() => {
    const tags = products.flatMap((p) => p.tags || []);
    const filtered = tags.filter((t) =>
      ['hardware', 'software'].includes(t.toLowerCase())
    );
    return ['Todos', ...Array.from(new Set(filtered))];
  }, [products]);

  const filteredProducts = React.useMemo(() => {
    if (selectedTag === 'Todos') return products;
    return products.filter((p) =>
      (p.tags || [])
        .map((t) => t.toLowerCase())
        .includes(selectedTag.toLowerCase())
    );
  }, [products, selectedTag]);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const handleOption = (option) => {
    let reply = '';
    switch (option) {
      case '💬 Tirar dúvidas sobre produtos':
        reply = 'Envie suas dúvidas para pedrosauthier.optivek@gmail.com';
        break;
      case '📱 Solicitar demonstração':
        reply = 'Agende uma demonstração pelo WhatsApp +55 46 99109-8005';
        break;
      case '🛒 Informações sobre preços':
        reply = 'Para saber mais sobre preços, entre em contato por e-mail.';
        break;
      default:
        reply = '';
    }
    setChatMessages((msgs) => [
      ...msgs,
      { from: 'user', text: option },
      { from: 'bot', text: reply },
    ]);
  };

  const ChatWidget = () => (
    <div className={`fixed bottom-6 right-6 z-50 ${showChat ? 'w-80' : 'w-auto'}`}>
      {showChat ? (
        <div className="bg-gray-900 rounded-xl border border-gray-700 shadow-2xl">
          <div className="p-4 border-b border-gray-700 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white">Suporte OPTIVEK</h4>
                <p className="text-xs text-gray-400">{isOnline ? 'Online agora' : 'Não online no momento'}</p>
              </div>
            </div>
            <button
              onClick={() => setShowChat(false)}
              className="text-gray-400 hover:text-white"
            >
              ×
            </button>
          </div>
          <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
            {chatMessages.map((m, idx) => (
              <div key={idx} className={`text-sm ${m.from === 'bot' ? 'text-gray-300' : 'text-right text-cyan-400'}`}>
                {m.text}
              </div>
            ))}
            <div className="space-y-2 mt-2">
              <button onClick={() => handleOption('💬 Tirar dúvidas sobre produtos')} className="w-full text-left p-2 hover:bg-gray-800 rounded text-sm text-gray-300">
                💬 Tirar dúvidas sobre produtos
              </button>
              <button onClick={() => handleOption('📱 Solicitar demonstração')} className="w-full text-left p-2 hover:bg-gray-800 rounded text-sm text-gray-300">
                📱 Solicitar demonstração
              </button>
              <button onClick={() => handleOption('🛒 Informações sobre preços')} className="w-full text-left p-2 hover:bg-gray-800 rounded text-sm text-gray-300">
                🛒 Informações sobre preços
              </button>
            </div>
            <div className="text-xs text-gray-500 text-center">
              {scheduleText}
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setShowChat(true)}
          className="group bg-cyan-500 hover:bg-cyan-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-cyan-500/30 animate-pulse hover:animate-none"
        >
          <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        </button>
      )}
    </div>
  );

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
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full backdrop-blur-md border-b z-40 ${
          darkMode 
            ? 'bg-black/90 border-gray-800' 
            : 'bg-white/90 border-gray-200'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="p-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-full">
                <img
                  src="/images/optivek-logo-nameless.png"
                  alt="OPTIVEK Logo"
                  className="w-10 h-10 rounded-full bg-cian p-1"
                />
              </div>
              <span className="font-bold text-xl">OPTIVEK</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Início' },
                { id: 'about', label: 'Sobre' },
                { id: 'products', label: 'Produtos' },
                { id: 'cases', label: 'Cases' },
                { id: 'contact', label: 'Contato' }
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </button>

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
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={`md:hidden py-4 border-t ${
              darkMode ? 'border-gray-800' : 'border-gray-200'
            }`}>
              {[
                { id: 'home', label: 'Início' },
                { id: 'about', label: 'Sobre' },
                { id: 'products', label: 'Produtos' },
                { id: 'cases', label: 'Cases' },
                { id: 'contact', label: 'Contato' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 px-4 text-sm font-medium transition-colors ${
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
                  <div className="p-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-full">
                    <img
                      src="/images/optivek-logo-nameless.png"
                      alt="OPTIVEK Logo"
                      className="w-20 h-20 rounded-full bg-cian p-1"
                    />
                  </div>
                  <div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                      OPTIVEK
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-2"></div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  <p className={`text-xl sm:text-2xl font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Pedro H. Sauthier
                  </p>
                  <p className="text-lg text-cyan-400 font-medium">
                    Analista de Dados e Automação
                  </p>
                  <p className={`text-lg leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Automatize com controle. Simplifique com inteligência.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button 
                    onClick={() => scrollToSection('products')}
                    className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
                  >
                    Ver Produtos
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="group px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    Entrar em Contato
                    <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </button>
                </div>

                <div className={`flex items-center gap-6 text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>{isOnline ? 'Online agora' : 'Não online no momento'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Resposta em 24h</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Statistics/Benefits */}
            <div className="lg:pl-8">
              <div className="grid grid-cols-2 gap-6">
                <div className={`group p-6 rounded-xl border transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 ${
                  darkMode 
                    ? 'bg-gray-900/50 border-gray-700 hover:border-cyan-500/50' 
                    : 'bg-white border-gray-200 hover:border-cyan-500/50 shadow-sm'
                }`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg transition-colors ${
                      darkMode 
                        ? 'bg-cyan-500/20 group-hover:bg-cyan-500/30' 
                        : 'bg-cyan-100 group-hover:bg-cyan-200'
                    }`}>
                      <Clock className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>
                  <div className={`text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>69%</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Redução de tempo em tarefas repetitivas</div>
                </div>

                <div className={`group p-6 rounded-xl border transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/10 ${
                  darkMode 
                    ? 'bg-gray-900/50 border-gray-700 hover:border-green-500/50' 
                    : 'bg-white border-gray-200 hover:border-green-500/50 shadow-sm'
                }`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg transition-colors ${
                      darkMode 
                        ? 'bg-green-500/20 group-hover:bg-green-500/30' 
                        : 'bg-green-100 group-hover:bg-green-200'
                    }`}>
                      <Users className="w-6 h-6 text-green-400" />
                    </div>
                  </div>
                  <div className={`text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>95%</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Clientes satisfeitos até o momento</div>
                </div>

                <div className={`group p-6 rounded-xl border transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 ${
                  darkMode 
                    ? 'bg-gray-900/50 border-gray-700 hover:border-blue-500/50' 
                    : 'bg-white border-gray-200 hover:border-blue-500/50 shadow-sm'
                }`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg transition-colors ${
                      darkMode 
                        ? 'bg-blue-500/20 group-hover:bg-blue-500/30' 
                        : 'bg-blue-100 group-hover:bg-blue-200'
                    }`}>
                      <Cog className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <div className={`text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>3+</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Versões futuras gratuitas garantidas</div>
                </div>

                <div className={`group p-6 rounded-xl border transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 ${
                  darkMode 
                    ? 'bg-gray-900/50 border-gray-700 hover:border-purple-500/50' 
                    : 'bg-white border-gray-200 hover:border-purple-500/50 shadow-sm'
                }`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg transition-colors ${
                      darkMode 
                        ? 'bg-purple-500/20 group-hover:bg-purple-500/30' 
                        : 'bg-purple-100 group-hover:bg-purple-200'
                    }`}>
                      <CheckCircle className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>
                  <div className={`text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Suporte</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Fora de horário comercial padrão</div>
                </div>
              </div>

              <div className={`mt-16 p-6 rounded-xl border transition-all duration-300 ${
                darkMode 
                  ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20 hover:border-cyan-500/40' 
                  : 'bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200 hover:border-cyan-300'
              }`}>
                <div className="flex items-center gap-3 mb-3">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="font-semibold text-cyan-400">Garantia Exclusiva</span>
                </div>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Controle total sobre suas ferramentas com atualizações gratuitas e suporte personalizado incluído.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 px-4 sm:px-8 md:px-12 ${
        darkMode ? 'bg-gray-900/50' : 'bg-gray-50'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Sobre</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Minha História</h3>
              <div className={`space-y-4 leading-relaxed mb-8 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <p>
                  Começei logo após o ensino médio, quando a pandemia me levou ao mundo dos códigos e telas. 
                  O que começou como um hábito para ocupar a mente, rapidamente se transformou em curiosidade 
                  e paixão pela programação.
                </p>
                <p>
                  Atualmente estudo <strong className={darkMode ? 'text-white' : 'text-gray-900'}>Análise e Desenvolvimento de Sistemas na UTFPR</strong> (turma 2023) 
                  no período noturno, para continuar trabalhando como suporte técnico na SINNC SISTEMAS e CERTA SISTEMAS.
                </p>
                <p>
                  A necessidade do dia a dia me levou a criar <strong className="text-cyan-400">soluções próprias com custo zero</strong>, 
                  onde tenho controle total sobre cada funcionalidade. Em poucos anos, acredito que terei 
                  muitos projetos refinados que qualquer profissional que já precisou de algo específico saberá apreciar.
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-green-400">Garantia Exclusiva</h4>
                <div className={`p-4 rounded-lg border ${
                  darkMode 
                    ? 'bg-gray-800/50 border-green-500/20' 
                    : 'bg-green-50 border-green-200'
                }`}>
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <CheckCircle className="w-4 h-4 text-green-400 inline mr-2" />
                    Ao comprar qualquer produto digital, você tem direito às próximas <strong>3 grandes versões </strong> 
                     e pelo menos <strong>5 versões menores</strong> sem custo adicional.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mt-6 text-2xl font-semibold mb-6 text-blue-400">Impacto Humano</h3>
              <div className={`space-y-4 leading-relaxed mb-8 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <p>
                  Meu foco não é apenas no empresarial, mas sim no <strong className={darkMode ? 'text-white' : 'text-gray-900'}>impacto humano</strong>. 
                  Quero ajudar profissionais de suporte, testes e tantos outros que não aguentam mais 
                  repetir a mesma tarefa toda hora.
                </p>
                <p>
                  Profissionais do ramo financeiro que querem um nível acima de personalização, 
                  pessoas que precisam de coleta de dados independente em sites que não aceitam 
                  testes automatizados - <strong className="text-cyan-400">eles serão realmente impactados</strong>.
                </p>
              </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className={`text-center p-3 rounded-lg border transition-all duration-300 hover:transform hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-800/30 border-gray-700 hover:border-cyan-500/50' 
                    : 'bg-gray-100 border-gray-200 hover:border-cyan-500/50'
                }`}>
                  <Code className={`w-6 h-6 mb-2 mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Python</div>
                </div>
                <div className={`text-center p-3 rounded-lg border transition-all duration-300 hover:transform hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-800/30 border-gray-700 hover:border-cyan-500/50' 
                    : 'bg-gray-100 border-gray-200 hover:border-cyan-500/50'
                }`}>
                  <Database className={`w-6 h-6 mb-2 mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Sheets</div>
                </div>
                <div className={`text-center p-3 rounded-lg border transition-all duration-300 hover:transform hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-800/30 border-gray-700 hover:border-cyan-500/50' 
                    : 'bg-gray-100 border-gray-200 hover:border-cyan-500/50'
                }`}>
                  <Cog className={`w-6 h-6 mb-2 mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>JavaScript</div>
                </div>
                <div className={`text-center p-3 rounded-lg border transition-all duration-300 hover:transform hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-800/30 border-gray-700 hover:border-cyan-500/50' 
                    : 'bg-gray-100 border-gray-200 hover:border-cyan-500/50'
                }`}>
                  <Globe className={`w-6 h-6 mb-2 mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Java</div>
                </div>
                <div className={`text-center p-3 rounded-lg border transition-all duration-300 hover:transform hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-800/30 border-gray-700 hover:border-cyan-500/50' 
                    : 'bg-gray-100 border-gray-200 hover:border-cyan-500/50'
                }`}>
                  <BarChart3 className={`w-6 h-6 mb-2 mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>PostgreSQL</div>
                </div>
                <div className={`text-center p-3 rounded-lg border transition-all duration-300 hover:transform hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-800/30 border-gray-700 hover:border-cyan-500/50' 
                    : 'bg-gray-100 border-gray-200 hover:border-cyan-500/50'
                }`}>
                  <Zap className={`w-6 h-6 mb-2 mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>App Script</div>
                </div>
                <div className={`text-center p-3 rounded-lg border transition-all duration-300 hover:transform hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-800/30 border-gray-700 hover:border-cyan-500/50' 
                    : 'bg-gray-100 border-gray-200 hover:border-cyan-500/50'
                }`}>
                  <ExternalLink className={`w-6 h-6 mb-2 mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Insomnia</div>
                </div>
                <div className={`text-center p-3 rounded-lg border transition-all duration-300 hover:transform hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-800/30 border-gray-700 hover:border-cyan-500/50' 
                    : 'bg-gray-100 border-gray-200 hover:border-cyan-500/50'
                }`}>
                  <Users className={`w-6 h-6 mb-2 mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>C</div>
                </div>
              </div>

              <div
                className={`mt-8 p-6 rounded-xl border ${
                  darkMode
                    ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20'
                    : 'bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200'
                }`}
              >
                <h4 className="font-semibold mb-4 text-cyan-400">
                  Formação & Experiência
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
                  <ul
                    className={`text-sm space-y-1 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    <li className="font-medium text-cyan-400">Pedro</li>
                    <li>• Universidade Tecnológica Federal do Paraná UTFPR</li>
                    <li>• Curso Análise e Desenvolvimento do Sistema</li>
                    <li>• 3 anos de experiência em atendimento ao cliente</li>
                    <li>• Suporte técnico SINNC SISTEMAS / CERTA SISTEMAS</li>
                    <li>• Mencionado em artigo científico</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 sm:px-8 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Produtos</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
            <p className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Soluções sob medida para profissionais que buscam controle total sobre suas ferramentas de trabalho
            </p>
          </div>

          <div className="flex justify-center gap-2 mb-8">
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                  selectedTag === tag
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-transparent shadow-lg'
                    : darkMode 
                      ? 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700'
                      : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50 hover:border-cyan-400 shadow-sm'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className={`relative p-6 flex flex-col rounded-xl border transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${
                darkMode 
                  ? `bg-gray-900/50 ${product.border} hover:border-opacity-100` 
                  : 'bg-white border-gray-200 hover:border-cyan-400 shadow-lg hover:shadow-xl'
              }`}>
                {product.isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}

                {product.isBeta && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-semibold">
                      BETA
                    </span>
                  </div>
                )}

                <div className={`p-4 bg-gradient-to-br ${product.gradient} rounded-lg mb-6 text-center`}>
                  {iconMap[product.icon] && (
                    React.createElement(iconMap[product.icon], { className: 'w-8 h-8 text-cyan-400 mb-2' })
                  )}
                  <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-400">{product.tagline}</p>
                </div>

                <p className={`mb-6 leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>{product.description}</p>

                <div className="space-y-3 mb-6 flex-grow">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className={`text-sm ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className={`text-xs mb-6 leading-relaxed ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <strong>Ideal para:</strong> {product.audience}
                </div>

                <div className="mt-auto space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">{product.price}</div>
                    {product.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">{product.originalPrice}</div>
                    )}
                    {product.savings && (
                      <div className="text-sm text-green-400">{product.savings}</div>
                    )}
                  </div>

                  <button
                    onClick={() => window.location.href = product.route}
                    className="group w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 flex items-center justify-center gap-2"
                  >
                    Ver Detalhes
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {product.images && (
                    <button
                      onClick={() => setSelectedImages(product.images)}
                      className="group w-full px-4 py-2 bg-cyan-500/10 text-cyan-300 rounded-lg hover:bg-cyan-500/20 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Ver Imagens
                    </button>
                  )}

                  {product.hasDemo && (
                    <button className="group w-full px-4 py-2 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:shadow-md hover:shadow-cyan-500/20 flex items-center justify-center gap-2">
                      <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      Demonstração
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className={`p-6 rounded-xl border max-w-2xl mx-auto ${
              darkMode 
                ? 'bg-gray-900/50 border-gray-700' 
                : 'bg-white border-gray-200 shadow-lg'
            }`}>
              <h3 className="text-lg font-semibold mb-3 text-cyan-400">Formas de Pagamento</h3>
              <div className="flex flex-wrap justify-center gap-4 mb-4">
                {paymentQRCodes.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div
                      className={`no-invert w-40 h-40 flex items-center justify-center border rounded-lg ${
                        darkMode ? 'border-gray-700' : 'border-gray-300'
                      }`}
                      style={
                        item.bgColor
                          ? { backgroundColor: hexToRgba(item.bgColor, item.bgOpacity ?? 1) }
                          : {}
                      }
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="no-invert max-w-full max-h-full object-contain"
                      />
                    </div>
                    {item.hint && (
                      <span className={`mt-1 text-xs text-center ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {item.hint}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                💡 <strong>Consultoria personalizada:</strong> Em breve ofereceremos serviços de consultoria e desenvolvimento customizado
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className={`py-16 px-4 sm:px-8 md:px-12 ${
        darkMode ? 'bg-gray-900/50' : 'bg-gray-50'
      }`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Cases de Sucesso</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`p-8 rounded-xl border ${
                darkMode 
                  ? 'bg-gray-800/50 border-gray-700' 
                  : 'bg-white border-gray-200 shadow-lg'
              }`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>Automação na SINNC Sistemas</h3>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Requisição de Insumos</p>
                  </div>
                </div>

                <div className={`space-y-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <p>
                    <strong className="text-cyan-400">Situação:</strong> 2-3 pessoas dividiam a quantidade e passavam 
                    quase um dia de trabalho inserindo dados de Excel no sistema, medicamento por medicamento.
                  </p>
                  <p>
                    <strong className="text-green-400">Solução:</strong> Implementamos automação completa com algumas 
                    horas de customização personalizada.
                  </p>
                  <p>
                    <strong className="text-blue-400">Resultado:</strong> O processo agora leva apenas 30 minutos para 
                    tratar a planilha + 2 horas para o app completar a tarefa automaticamente.
                  </p>
                </div>

                <div className={`mt-6 p-4 rounded-lg border ${
                  darkMode 
                    ? 'bg-cyan-500/10 border-cyan-500/20' 
                    : 'bg-cyan-50 border-cyan-200'
                }`}>
                  <div className="flex items-center gap-2 text-cyan-400 mb-2">
                    <Clock className="w-4 h-4" />
                    <span className="font-semibold">Economia de Tempo</span>
                  </div>
                  <div className={`text-2xl font-bold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    De 8 horas com 2 pessoas → 2h30min
                  </div>
                  <div className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Redução de 69% no tempo de trabalho</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className={`p-6 rounded-xl border ${
                darkMode 
                  ? 'bg-gray-800/50 border-gray-700' 
                  : 'bg-white border-gray-200 shadow-lg'
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-cyan-400" />
                  <h4 className={`font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>"Dica de um colega"</h4>
                </div>
                <blockquote className={`italic mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  "Meu colega que já experimentou as 2 ferramentas (App e Planilha), 
                  foi quem me incentivou a comercializar essas ferramentas. Colaborador e amigo 
                  que me motivou a transformar ideias em produtos reais."
                </blockquote>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>"Útil" - Cleverson - O Meu Colega de trabalho</span>
                </div>
              </div>

              <div className={`p-6 rounded-xl border ${
                darkMode 
                  ? 'bg-gradient-to-br from-green-500/10 to-cyan-500/10 border-green-500/20' 
                  : 'bg-gradient-to-br from-green-50 to-cyan-50 border-green-200'
              }`}>
                <h4 className="font-semibold mb-3 text-green-400">Outros Projetos</h4>
                <ul className={`space-y-2 text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Projetos especializados em destaque no portfólio
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Mencionado em artigo científico
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    TCC em desenvolvimento
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <a 
                  href="https://docs.google.com/spreadsheets/d/1kzDqb4No62976JRQyn4DwS7Dl-avvzeWQDHS5_3rbQY/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
                >
                  <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  Baixar Exemplo Gratuito
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-8 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Contato</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
            <p className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Entre em contato para tirar dúvidas, solicitar demonstração ou contratar nossos produtos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-cyan-400">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg ${
                    darkMode 
                      ? 'bg-gray-900/50 border-gray-700 hover:border-cyan-500/50 hover:shadow-cyan-500/20' 
                      : 'bg-white border-gray-200 hover:border-cyan-400 hover:shadow-cyan-400/20'
                  }`}>
                    <Mail className="w-6 h-6 text-cyan-400" />
                    <div>
                      <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Email</p>
                      <a href="mailto:pedrosauthier.optivek@gmail.com" className={`transition-colors ${
                        darkMode 
                          ? 'text-gray-300 hover:text-cyan-400' 
                          : 'text-gray-700 hover:text-cyan-500'
                      }`}>
                        pedrosauthier.optivek@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg ${
                    darkMode 
                      ? 'bg-gray-900/50 border-gray-700 hover:border-green-500/50 hover:shadow-green-500/20' 
                      : 'bg-white border-gray-200 hover:border-green-400 hover:shadow-green-400/20'
                  }`}>
                    <Phone className="w-6 h-6 text-green-400" />
                    <div>
                      <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>WhatsApp</p>
                      <a href="https://wa.me/5546991098005" className={`transition-colors ${
                        darkMode 
                          ? 'text-gray-300 hover:text-green-400' 
                          : 'text-gray-700 hover:text-green-500'
                      }`}>
                        (46) 99109-8005
                      </a>
                    </div>
                  </div>

                  <div className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg ${
                    darkMode 
                      ? 'bg-gray-900/50 border-gray-700 hover:border-blue-500/50 hover:shadow-blue-500/20' 
                      : 'bg-white border-gray-200 hover:border-blue-400 hover:shadow-blue-400/20'
                  }`}>
                    <Calendar className="w-6 h-6 text-blue-400" />
                    <div>
                      <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Horário de Atendimento</p>
                      <div className={`text-sm ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {scheduleText.split(' | ').map((t, i) => (
                          <p key={i}>{t}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-6 text-blue-400">Redes Sociais</h3>
                <div className="flex gap-4">
                  <div className="p-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
                    <a
                      href="https://www.linkedin.com/in/pedrosauthier/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex p-3 rounded-full bg-black dark:bg-gray-200 transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="w-6 h-6 text-[#0A66C2] group-hover:rotate-12 transition-transform" />
                    </a>
                  </div>
                  <div className="p-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
                    <a
                      href="https://github.com/PedroHSauthier"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex p-3 rounded-full bg-black dark:bg-gray-200 transition-all duration-300 hover:scale-110"
                    >
                      <Github className="no-invert w-6 h-6 text-white dark:text-black group-hover:rotate-12 transition-transform" />
                    </a>
                  </div>
                  <div className="p-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500">
                    <a
                      href="https://pedrohsauthier.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex p-3 rounded-full bg-black dark:bg-gray-200 transition-all duration-300 hover:scale-110"
                    >
                      <Globe className="w-6 h-6 text-cyan-400 group-hover:rotate-12 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={`p-8 rounded-xl border ${
              darkMode 
                ? 'bg-gray-900/50 border-gray-700' 
                : 'bg-white border-gray-200 shadow-lg'
            }`}>
              <h3 className="text-xl font-semibold mb-6 text-green-400">Processo de Contratação</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className={`font-medium mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>Primeiro Contato</h4>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Entre em contato por email com suas necessidades e dúvidas
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className={`font-medium mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>Análise Gratuita</h4>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Oferecemos reunião/análise gratuita para entender sua situação
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className={`font-medium mb-2 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>Solução Personalizada</h4>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Desenvolvemos a solução ideal com total controle e personalização
                    </p>
                  </div>
                </div>
              </div>

              <div className={`mt-8 p-4 rounded-lg border ${
                darkMode 
                  ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20' 
                  : 'bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200'
              }`}>
                <div className="flex items-center gap-2 text-cyan-400 mb-2">
                  <Zap className="w-4 h-4" />
                  <span className="font-semibold">Resposta Rápida</span>
                </div>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Respondemos todos os emails em até 24 horas durante nosso horário de atendimento
                </p>
              </div>
            </div>
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
            <div className="p-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-full">
              <img
                src="/images/optivek-logo-nameless.png"
                alt="OPTIVEK Logo"
                className="w-10 h-10 rounded-full bg-cian p-1"
              />
            </div>
            <span className="font-bold text-xl">OPTIVEK</span>
          </div>
          <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Pedro Henrique Sauthier Ferraz de Campos
          </p>
          <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            © 2025 OPTIVEK. Transformando repetição em automação.
          </p>
        </div>
      </footer>

      {/* Chat Widget */}
      <ChatWidget />
      {selectedImages && (
        <ImageModal images={selectedImages} onClose={() => setSelectedImages(null)} />
      )}
      {selectedProduct && (
        <DetailsModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
    </div>
  );
};

export default OptivekWebsite;
