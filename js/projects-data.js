/**
 * Mona Sayed Mohamed Emba - Portfolio Projects & Credential Data
 * Structured data source for projects, screenshots, and verified training.
 */

const PORTFOLIO_DATA = {
  projects: {
    starlight: {
      id: 'starlight',
      title: 'Starlight Cinemas',
      category: 'Cinema Booking Web Application',
      disclaimer: 'Full-Stack MVC Project',
      techTags: ['C#', 'ASP.NET Core MVC', 'Razor Views', 'Tailwind CSS', 'Entity Framework Core', 'SQL Server', 'TMDB API', 'Clean Architecture'],
      description: 'Starlight Cinemas is a cinema discovery and ticket-booking web application designed to help users explore movies, discover cinema locations, browse showtimes, select seats, and manage their bookings through a modern cinematic interface.',
      features: [
        'Movie browsing and cinema discovery across premier flagship theaters.',
        'Showtime listings with multi-format filtering (IMAX 4K Dual Laser, Dolby Atmos, VIP Dine-In Lounge).',
        'Interactive seat selection interface with tier pricing, live seat hold timer, and aisle layout.',
        'End-to-end booking and checkout workflow with tokenized payment UI simulation.',
        'Digital admission pass generation with turnstile-ready QR codes and visitation guidelines.',
        'User authentication interface with sign-in and account registration.',
        'My Bookings pass center to track upcoming tickets and active admissions.',
        'Clean layered architecture with BusinessLogicLayer services, ViewModels, and TMDB API integration.'
      ],
      gallery: [
        {
          src: 'assets/images/starlight-home.png',
          title: 'Starlight Cinemas - Home Experience',
          caption: 'Flagship cinema discovery home page featuring an immersive dark cinematic UI, screening highlights, and movie exploration.'
        },
        {
          src: 'assets/images/starlight-seat-selection.png',
          title: 'Auditorium Seat Selection',
          caption: 'Interactive seat map with tier pricing (Standard & VIP Recliner), live countdown seat hold, and instant price tally.'
        },
        {
          src: 'assets/images/starlight-admin-dashboard.png',
          title: 'Admin Back-Office Console',
          caption: 'Comprehensive management dashboard showing revenue metrics, daily admissions, active movies, and live booking feeds.'
        },
        {
          src: 'assets/images/starlight-my-bookings.png',
          title: 'My Bookings & Digital Pass Center',
          caption: 'User portal for managing upcoming screenings, checking ticket barcodes, and contactless turnstile QR codes.'
        },
        {
          src: 'assets/images/starlight-checkout.png',
          title: 'Checkout & Secured Payment Gateway',
          caption: 'Complete booking payment workflow with simulated encryption, concession options, and ticket cancellation policy.'
        }
      ]
    },
    rafeeq: {
      id: 'rafeeq',
      title: 'Rafeeq (رفيق)',
      category: 'Healthcare & Caregiving Web Application',
      disclaimer: 'Front-End Prototype',
      techTags: ['HTML5', 'CSS3', 'JavaScript', 'RTL Layout', 'Responsive Design', 'UI/UX Design'],
      description: 'Rafeeq is a healthcare and caregiving web application designed to help elderly people and patients with chronic conditions manage their care, reminders, and appointments.',
      features: [
        'Accessible Arabic user interface tailored for elderly users and family caregivers.',
        'User onboarding flows with dedicated login and account registration pages.',
        'Health dashboard with clear indicator cards for blood pressure (120/80), blood glucose (118 mg/dL), and pulse (78 bpm).',
        'Recent clinic visit tracking section with quick report access.',
        'Quick-access healthcare services (medication schedules, visit booking, emergency calling, and companion care).',
        'Intuitive side navigation for profile management, visits, notifications, and settings.'
      ],
      gallery: [
        {
          src: 'assets/images/rafeeq-welcome.png',
          title: 'Rafeeq - Arabic Welcome Screen',
          caption: 'Calm, accessible landing screen introducing the caregiving companion experience with clear call-to-action.'
        },
        {
          src: 'assets/images/rafeeq-dashboard.png',
          title: 'Health Indicators Dashboard',
          caption: 'Vital signs overview highlighting blood pressure, blood glucose, and heart rate with high readability.'
        },
        {
          src: 'assets/images/rafeeq-services.png',
          title: 'Quick Healthcare Services',
          caption: 'Accessible service grid for medication scheduling, clinic visit booking, companion care, and emergency contact.'
        },
        {
          src: 'assets/images/rafeeq-login.png',
          title: 'Arabic Login Interface',
          caption: 'Minimalist authentication view prioritizing ease of use for patients and caregivers.'
        },
        {
          src: 'assets/images/rafeeq-signup.png',
          title: 'Account Registration Page',
          caption: 'Simple signup form for elderly patients and authorized caregiving family members.'
        }
      ]
    }
  },

  certificate: {
    title: 'Web Development using .NET',
    institution: 'Information Technology Institute (ITI)',
    duration: '144 hours',
    dates: '15 August 2026 – 10 September 2026',
    issuer: 'Dr. Heba Saleh, Chairman, Information Technology Institute',
    image: 'assets/images/iti-certificate.jpg',
    topics: [
      { name: 'Database Fundamentals Using SQL Server', hours: '24 hrs' },
      { name: 'C# Programming Fundamentals', hours: '42 hrs' },
      { name: 'ASP.NET MVC', hours: '18 hrs' },
      { name: 'Generative AI, AI Agents & Workflow Automation', hours: '36 hrs' },
      { name: 'Freelancing Fundamentals', hours: '12 hrs' }
    ]
  }
};
