import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Database, Smartphone, Brain, Zap } from 'lucide-react';

// NOTE: In a real React project, you'd typically manage fonts via an index.html link or Tailwind config.
// Since this is a single file, keeping the vanilla JS approach to load the font.
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = ['Full Stack Developer', 'AI Engineer', 'Problem Solver', 'Tech Enthusiast'];

  useEffect(() => {
    document.documentElement.style.fontFamily = "'Poppins', sans-serif";
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // --- Tawk.to Script Integration (FIXED) ---
  useEffect(() => {
    // Prevent loading multiple times
    if (window.Tawk_API) return; 

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];

    s1.async = true;
    s1.src = 'https://embed.tawk.to/68c3c7490b3548192e857fc2/1j81f3ddi'; // Your updated ID
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');

    // Insert the script into the document to initialize the chat widget
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    } else {
      document.head.appendChild(s1);
    }

    // Optional: Cleanup function if the component unmounts (rarely needed for chat widgets)
    return () => {
        // You might consider a more robust removal if the component truly unmounts
    };
  }, []);
  // ---------------------------------

  // Typing animation
  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;
    const currentRole = roles[roleIndex];

    const typingInterval = setInterval(() => {
      if (currentIndex < currentRole.length) {
        currentText += currentRole[currentIndex];
        setTypedText(currentText);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          const deletingInterval = setInterval(() => {
            if (currentText.length > 0) {
              currentText = currentText.slice(0, -1);
              setTypedText(currentText);
            } else {
              clearInterval(deletingInterval);
              setRoleIndex((prev) => (prev + 1) % roles.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [roleIndex]);

  const projects = [
      {
        title: "E-waste exchange platform",
        description: "Initial version built in 24-hour hackathon.",
        tech: ["html", "css", "js","tawk.to ai"],
        image: "assets\projects images\e-waste.png",
        live_demo_url: "https://e-waste-ex.netlify.app//", // Renamed for clarity
        github_url: "https://github.com/HYVIKAS6/E-waste-exchange-platform-.git", // Added a placeholder for GitHub
        notes: "Now working on a React JS version."
      },
      {
        title: 'AI Chatbot Platform',
        description: 'Intelligent conversational AI with NLP capabilities',
        tech: ['Python', 'TensorFlow', 'React'],
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
        live_demo_url: '#', // Placeholder
        github_url: 'https://github.com/vikashy/ai-chatbot', // Placeholder
      },
      {
        title: 'E-Commerce Dashboard',
        description: 'Real-time analytics and inventory management',
        tech: ['React', 'Node.js', 'MongoDB'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
        live_demo_url: '#', // Placeholder
        github_url: 'https://github.com/vikashy/ecom-dashboard', // Placeholder
      },
      {
        title: 'Mobile Fitness App',
        description: 'Cross-platform fitness tracking application',
        tech: ['React Native', 'Firebase', 'Android'],
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop',
        live_demo_url: '#', // Placeholder
        github_url: 'https://github.com/vikashy/mobile-fitness-app', // Placeholder
      },
      {
        title: 'ML Image Classifier',
        description: 'Deep learning model for image recognition',
        tech: ['Python', 'PyTorch', 'OpenCV'],
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop',
        live_demo_url: '#', // Placeholder
        github_url: 'https://github.com/vikashy/ml-image-classifier', // Placeholder
      },
      {
        title: 'Task Management SaaS',
        description: 'Collaborative project management platform',
        tech: ['React', 'Tailwind', 'PostgreSQL'],
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
        live_demo_url: '#', // Placeholder
        github_url: 'https://github.com/vikashy/task-management-saas', // Placeholder
      },
      {
        title: 'Voice Assistant',
        description: 'Smart voice-controlled personal assistant',
        tech: ['Python', 'Speech API', 'AI/ML'],
        image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=500&fit=crop',
        live_demo_url: '#', // Placeholder
        github_url: 'https://github.com/vikashy/voice-assistant', // Placeholder
      }
  ];

  const skills = [
    { name: 'HTML/CSS', level: 95, icon: Code, color: 'from-cyan-400 to-blue-500' },
    { name: 'JavaScript', level: 90, icon: Code, color: 'from-yellow-400 to-orange-500' },
    { name: 'React', level: 88, icon: Code, color: 'from-blue-400 to-cyan-500' },
    { name: 'Tailwind CSS', level: 92, icon: Code, color: 'from-teal-400 to-emerald-500' },
    { name: 'Python', level: 85, icon: Code, color: 'from-blue-500 to-indigo-600' },
    { name: 'AI/ML', level: 80, icon: Brain, color: 'from-purple-400 to-pink-500' },
    { name: 'Android', level: 75, icon: Smartphone, color: 'from-green-400 to-lime-500' },
    { name: 'Database', level: 82, icon: Database, color: 'from-orange-400 to-red-500' }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    // Enhanced particles canvas: DPR scaling, mouse repulsion, and parallax
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let w = window.innerWidth;
    let h = window.innerHeight;
    let dpr = Math.max(1, window.devicePixelRatio || 1);
    function setSize() {
      w = window.innerWidth; h = window.innerHeight;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    setSize();

    const particles = [];
    const density = Math.max(40, Math.floor((w * h) / 70000));

    function rand(min, max) { return Math.random() * (max - min) + min; }

    for (let i = 0; i < density; i++) {
      particles.push({
        x: rand(0, w),
        y: rand(0, h),
        vx: rand(-0.45, 0.45),
        vy: rand(-0.25, 0.25),
        r: rand(0.8, 2.4),
        hue: Math.floor(rand(190, 260)),
        ox: 0, oy: 0
      });
    }

    const mouse = { x: -9999, y: -9999, r: Math.max(80, Math.min(220, (w + h) / 10)) };

    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left);
      mouse.y = (e.clientY - rect.top);
    }
    function onLeave() { mouse.x = -9999; mouse.y = -9999; }

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);

    let raf = null;
    function step() {
      ctx.clearRect(0, 0, w, h);

      // draw subtle radial glow behind (for depth)
      const g = ctx.createRadialGradient(w * 0.1, h * 0.1, 0, w * 0.1, h * 0.1, Math.max(w, h) * 0.6);
      g.addColorStop(0, darkMode ? 'rgba(56,189,248,0.02)' : 'rgba(59,130,246,0.02)');
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g; ctx.fillRect(0,0,w,h);

      // update + draw particles
      for (let p of particles) {
        // slight parallax based on position
        const px = p.x + Math.sin((p.x + p.y) / 400) * 0.6;
        const py = p.y + Math.cos((p.x - p.y) / 500) * 0.6;

        // mouse repulsion
        const dx = p.x - mouse.x; const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (mouse.x > -900 && dist < mouse.r) {
          const force = (1 - dist / mouse.r) * 0.9;
          const ang = Math.atan2(dy, dx);
          p.vx += Math.cos(ang) * force * 0.6;
          p.vy += Math.sin(ang) * force * 0.6;
        }

        // friction and gentle velocity
        p.vx *= 0.985; p.vy *= 0.985;
        p.x += p.vx; p.y += p.vy;

        // wrap
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;

        ctx.beginPath();
        ctx.fillStyle = `hsla(${p.hue}, 85%, ${darkMode ? '62%' : '52%'}, 0.12)`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fill();
      }

      // lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i+1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 120) {
            ctx.strokeStyle = `hsla(${(a.hue+b.hue)/2},80%,${darkMode ? '55%' : '45%'}, ${0.045 * (1 - d/120)})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(step);
    }

    step();

    function onResize() { dpr = Math.max(1, window.devicePixelRatio || 1); setSize(); }
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <canvas id="particles-canvas" className="particles-canvas" aria-hidden="true"></canvas>
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-blue-400/10 via-cyan-500/10 to-teal-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-lg ${darkMode ? 'bg-gray-900/80 border-b border-cyan-500/20' : 'bg-white/80 border-b border-gray-200'} transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
              <Zap className="w-10 h-10 text-cyan-400 animate-floaty" />
              <div className="flex flex-col leading-tight">
                <span className={`text-lg md:text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Vikas</span>
                <small className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>HY</small>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`relative group ${darkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-blue-600'} transition-colors font-medium`}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${darkMode ? 'bg-cyan-500/20 text-cyan-400' : 'bg-blue-100 text-blue-600'} hover:scale-110 transition-transform`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800/95' : 'bg-white/95'} backdrop-blur-lg`}>
            <div className="px-4 py-4 space-y-3">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-4 py-2 rounded-lg ${darkMode ? 'hover:bg-cyan-500/20 text-gray-300' : 'hover:bg-blue-50 text-gray-700'} transition-colors`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className={`text-4xl md:text-6xl font-extrabold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} animate-slide-up`}>
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Vikas HY</span> 👋
            </h1>
            <div className="h-12 mb-8">
              <p className={`text-2xl md:text-3xl font-semibold ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                {typedText}<span className="animate-pulse">|</span>
              </p>
            </div>
            <p className={`text-lg md:text-xl mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Crafting innovative solutions with code, AI, and creativity. Transforming ideas into reality.
            </p>
          </div>
            <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg shadow-cyan-500/50 btn-fancy"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-4 ${darkMode ? 'bg-gray-800 border-2 border-cyan-500/50 hover:border-cyan-500' : 'bg-white border-2 border-blue-500 hover:border-blue-600'} rounded-full font-semibold btn-fancy`}
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                {/* shrink-to-fit: keeps the whole image visible inside the circular frame */}
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-2xl bg-white dark:bg-gray-800 flex items-center justify-center">
                  <img
                    src="https://github.com/user-attachments/assets/196dfbd0-064e-49e5-a5f7-fe4c18625a93"
                    alt="Vikas HY"
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://github.com/user-attachments/assets/196dfbd0-064e-49e5-a5f7-fe4c18625a93'; }}
                    className="w-full h-full object-contain"
                    style={{ objectPosition: '50% 40%' }}
                  />
                </div>
              </div>
            </div>
            <div className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} space-y-4`}>
              <p className="text-lg leading-relaxed">
                Hi, I'm <span className="font-semibold text-cyan-400">Vikas HY</span>. I completed my schooling at <span className="font-semibold">Bhagya Jyothi High School</span> and my PUC at <span className="font-semibold"> PU College</span>.
              </p>
              <p className="text-lg leading-relaxed">
                I'm passionate about <span className="font-semibold text-blue-400">Full Stack Development</span> and <span className="font-semibold text-purple-400">AI Engineering</span>, and I'm graduating from <span className="font-semibold">MIT</span>.
              </p>
              <p className="text-lg leading-relaxed">
                I love building innovative solutions that merge creativity with cutting-edge technology. My journey in tech is driven by curiosity and a passion for solving real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              // Changed the surrounding div to an anchor tag to make the whole card clickable
              <a
                key={index}
                href={project.live_demo_url || project.github_url || '#'} // Use Live Demo or GitHub or fallback
                target="_blank"
                rel="noopener noreferrer"
                className={`group card-hover ${darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white border-gray-200'} border rounded-2xl overflow-hidden block`} // Added 'block' for full anchor width/height
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'} animate-slide-up`}>
                    {project.title}
                  </h3>
                  <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'} animate-slide-up`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-sm rounded-full ${darkMode ? 'bg-cyan-500/20 text-cyan-400' : 'bg-blue-100 text-blue-600'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Changed the button to an inner element that keeps the same appearance */}
                  <span className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </span>
                  {/* Optional: Add a GitHub link for a secondary action */}
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()} // Prevent card click when clicking this link
                      className="mt-2 inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Source Code</span>
                    </a>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Technical <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Icon className="w-6 h-6 text-cyan-400" />
                      <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-cyan-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className={`h-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 shadow-lg`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className={`${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200'} border rounded-2xl p-8`}>
              <div className="space-y-6">
                <div>
                  <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:ring-2 focus:ring-cyan-500 outline-none transition-all`}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:ring-2 focus:ring-cyan-500 outline-none transition-all`}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                  <textarea
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:ring-2 focus:ring-cyan-500 outline-none transition-all`}
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  onClick={(e) => e.preventDefault()}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white rounded-lg font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80 hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                {/* NOTE: You should replace the placeholder URLs with your actual links */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-4 ${darkMode ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-white hover:bg-gray-50'} p-4 rounded-xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20`}
                >
                  <Github className="w-8 h-8 text-cyan-400" />
                  <div>
                    <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>GitHub</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>@vikashy</p>
                  </div>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-4 ${darkMode ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-white hover:bg-gray-50'} p-4 rounded-xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20`}
                >
                  <Linkedin className="w-8 h-8 text-blue-500" />
                  <div>
                    <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>LinkedIn</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Vikas HY</p>
                  </div>
                </a>
                <a
                  href="mailto:vikas@example.com"
                  className={`flex items-center space-x-4 ${darkMode ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-white hover:bg-gray-50'} p-4 rounded-xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20`}
                >
                  <Mail className="w-8 h-8 text-purple-500" />
                  <div>
                    <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Email</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>hyvikas6@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-800/50 border-t border-gray-700' : 'bg-white border-t border-gray-200'} py-8`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2025 Vikas HY. Built with <span className="text-red-500">♥</span> using React & Tailwind 
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;