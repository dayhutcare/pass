// Global variables
let currentPage = 'home';
let isMenuOpen = false;
let particles = [];
let canvas, ctx;
let animationFrame;
let currentDay = 'day1';
let currentFilter = 'all';

// Segments data
const segments = [
    {
        id: 1,
        icon: '⚛️',
        title: 'Quantum Computing',
        description: 'Explore quantum mechanics and computational breakthroughs',
        price: 1500,
        originalPrice: 2000,
        duration: '3 hours',
        level: 'Advanced',
        participants: 50,
        color: 'blue-gradient',
        features: ['Quantum algorithms', 'Hands-on lab', 'Expert mentorship', 'Certificate']
    },
    {
        id: 2,
        icon: '🔬',
        title: 'Biotechnology',
        description: 'Genetic engineering and medical research innovations',
        price: 1200,
        originalPrice: 1600,
        duration: '4 hours',
        level: 'Intermediate',
        participants: 75,
        color: 'green-gradient',
        features: ['DNA analysis', 'Lab experiments', 'Research methods', 'Industry insights']
    },
    {
        id: 3,
        icon: '🚀',
        title: 'Space Technology',
        description: 'Satellite systems and space exploration advances',
        price: 1800,
        originalPrice: 2400,
        duration: '5 hours',
        level: 'Advanced',
        participants: 40,
        color: 'purple-gradient',
        features: ['Satellite design', 'Mission planning', 'Space simulation', 'NASA collaboration']
    },
    {
        id: 4,
        icon: '🤖',
        title: 'AI & Machine Learning',
        description: 'Artificial intelligence and deep learning applications',
        price: 1400,
        originalPrice: 1800,
        duration: '6 hours',
        level: 'Intermediate',
        participants: 100,
        color: 'blue-gradient',
        features: ['Neural networks', 'Model training', 'Real projects', 'Industry tools']
    },
    {
        id: 5,
        icon: '🧠',
        title: 'Neuroscience',
        description: 'Brain research and cognitive science breakthroughs',
        price: 1300,
        originalPrice: 1700,
        duration: '4 hours',
        level: 'Advanced',
        participants: 60,
        color: 'pink-gradient',
        features: ['Brain imaging', 'Cognitive tests', 'Research data', 'Expert panels']
    },
    {
        id: 6,
        icon: '🧬',
        title: 'Genetics & CRISPR',
        description: 'Gene editing and molecular biology techniques',
        price: 1600,
        originalPrice: 2100,
        duration: '5 hours',
        level: 'Advanced',
        participants: 45,
        color: 'orange-gradient',
        features: ['Gene editing', 'CRISPR tools', 'Lab practice', 'Ethics discussion']
    },
    {
        id: 7,
        icon: '⚡',
        title: 'Renewable Energy',
        description: 'Solar, wind, and sustainable energy solutions',
        price: 1100,
        originalPrice: 1500,
        duration: '3 hours',
        level: 'Beginner',
        participants: 80,
        color: 'yellow-gradient',
        features: ['Solar panels', 'Wind turbines', 'Energy storage', 'Sustainability']
    },
    {
        id: 8,
        icon: '🌍',
        title: 'Climate Science',
        description: 'Environmental research and climate change solutions',
        price: 1000,
        originalPrice: 1400,
        duration: '4 hours',
        level: 'Intermediate',
        participants: 90,
        color: 'green-gradient',
        features: ['Climate modeling', 'Data analysis', 'Field research', 'Policy insights']
    },
    {
        id: 9,
        icon: '🧪',
        title: 'Materials Science',
        description: 'Advanced materials and nanotechnology applications',
        price: 1350,
        originalPrice: 1750,
        duration: '4 hours',
        level: 'Advanced',
        participants: 55,
        color: 'purple-gradient',
        features: ['Nanomaterials', 'Lab synthesis', 'Testing methods', 'Applications']
    },
    {
        id: 10,
        icon: '📊',
        title: 'Mathematical Modeling',
        description: 'Complex systems and computational mathematics',
        price: 900,
        originalPrice: 1200,
        duration: '3 hours',
        level: 'Intermediate',
        participants: 70,
        color: 'blue-gradient',
        features: ['Modeling techniques', 'Simulation tools', 'Real problems', 'Software training']
    }
];

// News articles data
const newsArticles = [
    {
        id: 2,
        title: 'Nobel Laureate Dr. Jennifer Doudna to Keynote CRISPR Workshop',
        excerpt: 'The pioneer of CRISPR gene-editing technology will lead an exclusive workshop on genetic engineering breakthroughs.',
        author: 'Prof. Ahmed Hassan',
        date: '2024-12-12',
        readTime: '3 min read',
        category: 'Speaker Announcement',
        color: 'green-gradient',
        tags: ['CRISPR', 'Genetics', 'Nobel Prize']
    },
    {
        id: 3,
        title: 'Quantum Computing Lab Opens Early Registration',
        excerpt: 'Limited seats available for hands-on quantum computing experience with IBM Quantum Network.',
        author: 'Dr. Fatima Khan',
        date: '2024-12-10',
        readTime: '4 min read',
        category: 'Registration',
        color: 'blue-gradient',
        tags: ['Quantum', 'IBM', 'Computing']
    },
    {
        id: 4,
        title: 'Space Technology Segment Features NASA Collaboration',
        excerpt: 'Exclusive satellite imagery analysis workshop with NASA Goddard Space Flight Center scientists.',
        author: 'Dr. Rashid Ali',
        date: '2024-12-08',
        readTime: '6 min read',
        category: 'Collaboration',
        color: 'purple-gradient',
        tags: ['NASA', 'Space', 'Satellites']
    },
    {
        id: 5,
        title: 'Student Innovation Challenge Launches with $50K Prize Pool',
        excerpt: 'Young innovators compete for substantial prizes in climate technology and sustainable development.',
        author: 'Innovation Committee',
        date: '2024-12-05',
        readTime: '4 min read',
        category: 'Competition',
        color: 'orange-gradient',
        tags: ['Students', 'Innovation', 'Climate']
    },
    {
        id: 6,
        title: 'Biotechnology Segment Introduces Lab-Grown Meat Demonstration',
        excerpt: 'Cutting-edge cellular agriculture technology showcased by leading biotech startups.',
        author: 'Dr. Nusrat Jahan',
        date: '2024-12-03',
        readTime: '5 min read',
        category: 'Innovation',
        color: 'green-gradient',
        tags: ['Biotech', 'Food Tech', 'Sustainability']
    },
    {
        id: 7,
        title: 'International Participation Reaches Record High',
        excerpt: 'Over 25 countries confirmed participation, making ISTARC 2025 the most globally diverse edition.',
        author: 'International Relations',
        date: '2024-12-01',
        readTime: '3 min read',
        category: 'Participation',
        color: 'blue-gradient',
        tags: ['International', 'Global', 'Participation']
    }
];

// Schedule data
const scheduleData = {
    day1: [
        {
            id: 1,
            time: '08:00 - 09:00',
            title: 'Registration & Welcome Coffee',
            type: 'networking',
            speaker: 'ISTARC Team',
            location: 'Main Lobby',
            capacity: 500,
            description: 'Check-in, badge collection, and networking breakfast',
            icon: '☕',
            featured: false
        },
        {
            id: 2,
            time: '09:00 - 10:30',
            title: 'Opening Ceremony & Keynote',
            type: 'keynote',
            speaker: 'Dr. Michio Kaku',
            location: 'Main Auditorium',
            capacity: 1000,
            description: 'The Future of Science: From Quantum Computing to Space Colonization',
            icon: '⭐',
            featured: true
        },
        {
            id: 3,
            time: '10:30 - 11:00',
            title: 'Coffee Break & Networking',
            type: 'networking',
            speaker: 'All Participants',
            location: 'Exhibition Hall',
            capacity: 500,
            description: 'Refreshments and informal networking session',
            icon: '☕',
            featured: false
        },
        {
            id: 4,
            time: '11:00 - 12:30',
            title: 'Quantum Computing Fundamentals',
            type: 'workshop',
            speaker: 'Dr. John Preskill',
            location: 'Tech Lab A',
            capacity: 50,
            description: 'Hands-on introduction to quantum algorithms and programming',
            icon: '🔬',
            featured: true
        },
        {
            id: 5,
            time: '11:00 - 12:30',
            title: 'CRISPR Gene Editing Workshop',
            type: 'workshop',
            speaker: 'Dr. Jennifer Doudna',
            location: 'Bio Lab B',
            capacity: 40,
            description: 'Practical gene editing techniques and ethical considerations',
            icon: '🧬',
            featured: true
        }
    ],
    day2: [
        {
            id: 11,
            time: '09:00 - 10:30',
            title: 'Biotechnology Breakthroughs',
            type: 'keynote',
            speaker: 'Dr. Craig Venter',
            location: 'Main Auditorium',
            capacity: 1000,
            description: 'Synthetic biology and the future of medicine',
            icon: '⭐',
            featured: true
        },
        {
            id: 12,
            time: '10:30 - 11:00',
            title: 'Morning Break',
            type: 'networking',
            speaker: 'All Participants',
            location: 'Exhibition Hall',
            capacity: 500,
            description: 'Coffee and exhibition viewing',
            icon: '☕',
            featured: false
        },
        {
            id: 13,
            time: '11:00 - 12:30',
            title: 'Machine Learning Workshop',
            type: 'workshop',
            speaker: 'Google AI Team',
            location: 'Tech Lab A',
            capacity: 60,
            description: 'Deep learning with TensorFlow and practical applications',
            icon: '🤖',
            featured: true
        }
    ],
    day3: [
        {
            id: 20,
            time: '09:00 - 10:30',
            title: 'Future of Technology',
            type: 'keynote',
            speaker: 'Dr. Fei-Fei Li',
            location: 'Main Auditorium',
            capacity: 1000,
            description: 'AI, computer vision, and human-centered technology',
            icon: '⭐',
            featured: true
        },
        {
            id: 21,
            time: '10:30 - 11:00',
            title: 'Final Break',
            type: 'networking',
            speaker: 'All Participants',
            location: 'Exhibition Hall',
            capacity: 500,
            description: 'Last networking opportunity',
            icon: '☕',
            featured: false
        },
        {
            id: 22,
            time: '15:00 - 16:30',
            title: 'Closing Ceremony & Awards',
            type: 'ceremony',
            speaker: 'ISTARC Leadership',
            location: 'Main Auditorium',
            capacity: 1000,
            description: 'Final presentations, awards, and closing remarks',
            icon: '🏆',
            featured: true
        }
    ]
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    initializeBackground();
    renderSegments();
    renderNews();
    renderSchedule();
    updateNavigation();
    
    // Add smooth animations to elements
    animateOnScroll();
}

function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.addEventListener('click', handleNavigation);
    });

    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Modal events
    const modal = document.getElementById('segment-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }

    // Schedule controls
    setupScheduleControls();

    // Contact form
    setupContactForm();

    // Resize events
    window.addEventListener('resize', debounce(handleResize, 100));
}

function setupScheduleControls() {
    // Day buttons
    document.querySelectorAll('.day-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentDay = this.getAttribute('data-day');
            renderSchedule();
        });
    });

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.getAttribute('data-filter');
            renderSchedule();
        });
    });

    // Search input
    const searchInput = document.getElementById('schedule-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            renderSchedule();
        });
    }
}

function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Handle form submission
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
}

function handleNavigation(e) {
    e.preventDefault();
    const page = e.target.getAttribute('data-page');
    showPage(page);
    
    // Close mobile menu if open
    if (isMenuOpen) {
        toggleMobileMenu();
    }
}

function showPage(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });

    // Show selected page
    const targetPage = document.getElementById(page);
    if (targetPage) {
        targetPage.classList.add('active');
        targetPage.classList.add('fade-in');
        currentPage = page;
        updateNavigation();
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Update URL hash
        window.location.hash = page;
    }
}

function updateNavigation() {
    // Update active nav links
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.add('active');
        }
    });
}

function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        mobileNav.classList.add('active');
        mobileMenuBtn.classList.add('active');
    } else {
        mobileNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    }
}

function handleScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

function handleResize() {
    if (canvas && ctx) {
        resizeCanvas();
    }
}

// Background Animation
function initializeBackground() {
    canvas = document.getElementById('background-canvas');
    ctx = canvas.getContext('2d');
    
    if (!canvas || !ctx) return;

    // Optimize canvas settings
    ctx.imageSmoothingEnabled = false;
    
    resizeCanvas();
    initializeParticles();
    startAnimation();
}

function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    
    ctx.scale(dpr, dpr);
    ctx.imageSmoothingEnabled = false;
}

function initializeParticles() {
    const symbols = [
        '∑', '∫', '∂', '∇', '∞', 'π', 'α', 'β', 'γ', 'δ', 'θ', 'λ', 'μ', 'σ', 'φ', 'ω',
        'E=mc²', 'F=ma', 'DNA', 'RNA', 'ATP', 'CO₂', 'H₂O',
        '√', '∛', '∝', '≈', '≠', '≤', '≥', '±', '∈', '∉', '∪', '∩',
        'sin', 'cos', 'tan', 'log', 'ln', 'Σ', 'Π', '∆',
        '⚛', '🧬', '⚗', '🔬', '⚡', '🌌', '💫', '⭐',
        '0', '1', 'x', 'y', 'z', 'AI', 'ML'
    ];

    const colors = [
        'rgba(147, 51, 234, ',
        'rgba(236, 72, 153, ',
        'rgba(59, 130, 246, ',
        'rgba(16, 185, 129, ',
        'rgba(245, 158, 11, ',
        'rgba(34, 197, 94, ',
        'rgba(168, 85, 247, ',
        'rgba(14, 165, 233, '
    ];

    particles = [];
    const particleCount = 60; // Reduced for performance

    for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle(symbols, colors));
    }
}

function createParticle(symbols, colors) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: Math.random() * rect.width,
        y: rect.height + 50,
        vx: (Math.random() - 0.5) * 1,
        vy: -Math.random() * 2 - 0.5,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        size: Math.random() * 12 + 6,
        opacity: Math.random() * 0.2 + 0.05,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 1500 + 800
    };
}

function startAnimation() {
    let lastTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    function animate(currentTime) {
        if (currentTime - lastTime < frameInterval) {
            animationFrame = requestAnimationFrame(animate);
            return;
        }
        
        lastTime = currentTime;
        updateAndDrawParticles();
        animationFrame = requestAnimationFrame(animate);
    }

    animationFrame = requestAnimationFrame(animate);
}

function updateAndDrawParticles() {
    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);

    const symbols = [
        '∑', '∫', '∂', '∇', '∞', 'π', 'α', 'β', 'γ', 'δ', 'θ', 'λ', 'μ', 'σ', 'φ', 'ω',
        'E=mc²', 'F=ma', 'DNA', 'RNA', 'ATP', 'CO₂', 'H₂O',
        '√', '∛', '∝', '≈', '≠', '≤', '≥', '±', '∈', '∉', '∪', '∩',
        'sin', 'cos', 'tan', 'log', 'ln', 'Σ', 'Π', '∆',
        '⚛', '🧬', '⚗', '🔬', '⚡', '🌌', '💫', '⭐',
        '0', '1', 'x', 'y', 'z', 'AI', 'ML'
    ];

    const colors = [
        'rgba(147, 51, 234, ',
        'rgba(236, 72, 153, ',
        'rgba(59, 130, 246, ',
        'rgba(16, 185, 129, ',
        'rgba(245, 158, 11, ',
        'rgba(34, 197, 94, ',
        'rgba(168, 85, 247, ',
        'rgba(14, 165, 233, '
    ];

    for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;
        particle.life++;

        // Calculate opacity
        const lifeFactor = 1 - (particle.life / particle.maxLife);
        const currentOpacity = particle.opacity * lifeFactor;

        // Remove and replace dead particles
        if (particle.y < -50 || particle.life >= particle.maxLife || currentOpacity <= 0) {
            particles[i] = createParticle(symbols, colors);
            continue;
        }

        // Skip very transparent particles
        if (currentOpacity < 0.01) continue;

        // Draw particle
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        ctx.font = `${particle.size}px 'Inter', monospace`;
        ctx.fillStyle = particle.color + currentOpacity + ')';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Reduced glow effects
        if (Math.random() < 0.05) {
            ctx.shadowColor = particle.color + '0.3)';
            ctx.shadowBlur = 5;
        }
        
        ctx.fillText(particle.symbol, 0, 0);
        ctx.restore();
    }
}

// Segments functionality
function renderSegments() {
    const segmentsGrid = document.getElementById('segments-grid');
    if (!segmentsGrid) return;

    segmentsGrid.innerHTML = '';

    segments.forEach((segment, index) => {
        const segmentCard = createSegmentCard(segment, index);
        segmentsGrid.appendChild(segmentCard);
    });
}

function createSegmentCard(segment, index) {
    const card = document.createElement('div');
    card.className = 'segment-card';
    card.style.animationDelay = `${index * 0.05}s`;
    card.classList.add('slide-up');

    const isPopular = segment.participants > 80;
    const levelClass = `level-${segment.level.toLowerCase()}`;

    card.innerHTML = `
        ${isPopular ? `
            <div class="segment-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"></polygon>
                </svg>
                Popular
            </div>
        ` : ''}
        
        <div class="segment-icon ${segment.color}">
            <span style="font-size: 2rem;">${segment.icon}</span>
        </div>

        <h3>${segment.title}</h3>
        <p class="description">${segment.description}</p>

        <div class="segment-details">
            <div class="detail-row">
                <span class="label">Duration</span>
                <span class="value">${segment.duration}</span>
            </div>
            <div class="detail-row">
                <span class="label">Participants</span>
                <span class="value">${segment.participants} max</span>
            </div>
            <div class="detail-row">
                <span class="label">Level</span>
                <span class="value level-badge ${levelClass}">${segment.level}</span>
            </div>
        </div>

        <div class="price-section">
            <div>
                <span class="price">৳${segment.price}</span>
                <span class="original-price">৳${segment.originalPrice}</span>
            </div>
            <div class="savings">Save ৳${segment.originalPrice - segment.price}</div>
        </div>

        <button class="btn-primary" onclick="openSegmentModal(${segment.id})">
            Select Segment
        </button>
    `;

    return card;
}

function openSegmentModal(segmentId) {
    const segment = segments.find(s => s.id === segmentId);
    if (!segment) return;

    const modal = document.getElementById('segment-modal');
    const modalIcon = document.getElementById('modal-icon');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalFeaturesList = document.getElementById('modal-features-list');
    const modalDuration = document.getElementById('modal-duration');
    const modalParticipants = document.getElementById('modal-participants');
    const modalLevel = document.getElementById('modal-level');
    const modalPrice = document.getElementById('modal-price');
    const modalOriginalPrice = document.getElementById('modal-original-price');
    const modalRegisterBtn = document.getElementById('modal-register-btn');
    const modalRegisterText = document.getElementById('modal-register-text');

    // Populate modal content
    modalIcon.className = `modal-icon ${segment.color}`;
    modalIcon.innerHTML = `<span style="font-size: 2rem; color: white;">${segment.icon}</span>`;
    modalTitle.textContent = segment.title;
    modalDescription.textContent = segment.description;

    modalFeaturesList.innerHTML = '';
    segment.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        modalFeaturesList.appendChild(li);
    });

    modalDuration.textContent = segment.duration;
    modalParticipants.textContent = segment.participants;
    modalLevel.textContent = segment.level;
    modalLevel.className = `level-badge level-${segment.level.toLowerCase()}`;
    modalPrice.textContent = `৳${segment.price}`;
    modalOriginalPrice.textContent = `৳${segment.originalPrice}`;
    modalRegisterText.textContent = `Register for ৳${segment.price}`;

    // Show modal
    modal.classList.add('active');
    modal.classList.add('fade-in');
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('segment-modal');
    modal.classList.remove('active');
    
    // Restore body scroll
    document.body.style.overflow = '';
}

// News functionality
function renderNews() {
    const newsGrid = document.getElementById('news-grid');
    if (!newsGrid) return;

    newsGrid.innerHTML = '';

    newsArticles.forEach((article, index) => {
        const articleCard = createNewsCard(article, index);
        newsGrid.appendChild(articleCard);
    });
}

function createNewsCard(article, index) {
    const card = document.createElement('article');
    card.className = 'news-article';
    card.style.animationDelay = `${index * 0.1}s`;
    card.classList.add('slide-up');

    card.innerHTML = `
        <div class="news-header">
            <div class="news-meta">
                <span class="category ${article.color}">${article.category}</span>
                <span class="read-time">${article.readTime}</span>
            </div>
        </div>
        
        <h3>${article.title}</h3>
        <p class="excerpt">${article.excerpt}</p>
        
        <div class="news-footer">
            <div class="author">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>${article.author}</span>
            </div>
            <div class="date">${new Date(article.date).toLocaleDateString()}</div>
        </div>
        
        <div class="tags">
            ${article.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
        </div>
        
        <button class="btn-secondary">
            <span>Read Article</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12,5 19,12 12,19"></polyline>
            </svg>
        </button>
    `;

    return card;
}

// Schedule functionality
function renderSchedule() {
    const timeline = document.getElementById('schedule-timeline');
    const currentDayTitle = document.getElementById('current-day-title');
    const currentDayTheme = document.getElementById('current-day-theme');
    const searchResults = document.getElementById('search-results');
    
    if (!timeline) return;

    // Update day info
    const dayInfo = {
        day1: { title: 'Day 1 - November 15, 2025', theme: 'Opening & Foundations' },
        day2: { title: 'Day 2 - November 16, 2025', theme: 'Innovation & Research' },
        day3: { title: 'Day 3 - November 17, 2025', theme: 'Future & Awards' }
    };

    if (currentDayTitle) currentDayTitle.textContent = dayInfo[currentDay].title;
    if (currentDayTheme) currentDayTheme.textContent = dayInfo[currentDay].theme;

    // Get events for current day
    let events = scheduleData[currentDay] || [];

    // Apply filters
    const searchTerm = document.getElementById('schedule-search')?.value.toLowerCase() || '';
    
    events = events.filter(event => {
        const matchesFilter = currentFilter === 'all' || event.type === currentFilter;
        const matchesSearch = !searchTerm || 
            event.title.toLowerCase().includes(searchTerm) ||
            event.speaker.toLowerCase().includes(searchTerm) ||
            event.description.toLowerCase().includes(searchTerm);
        return matchesFilter && matchesSearch;
    });

    // Update search results
    if (searchResults) {
        searchResults.textContent = `${events.length} events found`;
    }

    // Clear timeline
    timeline.innerHTML = '';

    // Render events
    events.forEach((event, index) => {
        const eventCard = createScheduleEventCard(event, index);
        timeline.appendChild(eventCard);
    });

    if (events.length === 0) {
        timeline.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--text-secondary);">
                <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
                <h3 style="font-family: 'Orbitron', monospace; font-size: 1.5rem; margin-bottom: 1rem;">No Events Found</h3>
                <p>Try adjusting your filters or search terms to find more events.</p>
            </div>
        `;
    }
}

function createScheduleEventCard(event, index) {
    const card = document.createElement('div');
    card.className = `timeline-event ${event.featured ? 'featured' : ''}`;
    card.style.animationDelay = `${index * 0.05}s`;
    card.classList.add('slide-up');

    const typeColors = {
        keynote: 'yellow-gradient',
        workshop: 'blue-gradient',
        panel: 'green-gradient',
        networking: 'orange-gradient',
        ceremony: 'purple-gradient'
    };

    card.innerHTML = `
        ${event.featured ? `
            <div style="position: absolute; top: 1rem; right: 1rem;">
                <div style="display: flex; align-items: center; gap: 0.25rem; padding: 0.25rem 0.75rem; border-radius: 9999px; background: linear-gradient(to right, #fbbf24, #f59e0b); color: black; font-size: 0.75rem; font-weight: 700;">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"></polygon>
                    </svg>
                    Featured
                </div>
            </div>
        ` : ''}
        
        <div class="event-grid">
            <div class="event-time">
                <div class="event-icon ${typeColors[event.type] || 'blue-gradient'}">
                    <span style="font-size: 1.25rem;">${event.icon}</span>
                </div>
                <div>
                    <div class="event-time-info">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12,6 12,12 16,14"></polyline>
                        </svg>
                        <span>${event.time}</span>
                    </div>
                    <div class="event-category ${typeColors[event.type] || 'blue-gradient'}" style="padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 500; margin-top: 0.5rem; display: inline-block;">
                        ${event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </div>
                </div>
            </div>
            
            <div class="event-details">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <div class="event-meta">
                    <div class="event-meta-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <span>${event.speaker}</span>
                    </div>
                    <div class="event-meta-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>${event.location}</span>
                    </div>
                </div>
            </div>
            
            <div class="event-actions">
                <div class="event-capacity">Capacity: ${event.capacity}</div>
                <button class="btn-primary" style="padding: 0.75rem 1.5rem; font-size: 1rem;">
                    Add to Calendar
                </button>
            </div>
        </div>
    `;

    return card;
}

// Animation on scroll
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '-50px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-up');
            }
        });
    }, observerOptions);

    // Observe elements that should animate
    document.querySelectorAll('.feature-card, .stat-item, .segment-card, .achievement-item, .value-card, .mission-card, .announcement-card, .news-article, .timeline-event').forEach(el => {
        observer.observe(el);
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle initial page load
window.addEventListener('load', () => {
    // Check for hash in URL
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        showPage(hash);
    }
});

// Handle browser back/forward
window.addEventListener('popstate', () => {
    const hash = window.location.hash.substring(1) || 'home';
    showPage(hash);
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (animationFrame) {
        cancelAnimationFrame(animationFrame);
    }
});