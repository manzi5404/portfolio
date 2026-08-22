// Profile image
import profileImage from '../assets/images/profile.jpeg'

// ---------------------------------------------------------------------------
// Automatic certificate discovery from src/assets/certificates/
// Every file in the folder is picked up automatically — nothing can be omitted.
// ---------------------------------------------------------------------------
const certModules = import.meta.glob('../assets/certificates/*', {
  eager: true,
  query: '?url',
  import: 'default',
})

const certUrl = (filename) => certModules[`../assets/certificates/${filename}`]

const name = 'Manzi Lucky'
const title = 'Software Developer'
const location = 'Rwanda'
const email = 'manziluckyyy@gmail.com'
const github = 'https://github.com/manzi5404'
const linkedin = 'https://www.linkedin.com/in/manzi-lucky-a61337341/'
const phone = '+250 789 897 235'
const cvUrl = '/ManziCV.pdf'
const languages = ['Kinyarwanda', 'English']

const summary =
  'Software Developer passionate about building modern digital solutions through web development, user-focused design, and emerging technologies. Experienced in independently designing, building, and shipping complete products end to end. Interested in exploring Artificial Intelligence and applying it to create meaningful solutions.'

const skills = {
  frontend: [
    { name: 'HTML', level: 'advanced' },
    { name: 'CSS', level: 'advanced' },
    { name: 'JavaScript', level: 'advanced' },
    { name: 'React', level: 'intermediate' },
    { name: 'Vue.js', level: 'intermediate' },
  ],
  backend: [
    { name: 'Node.js', level: 'intermediate' },
    { name: 'Express.js', level: 'intermediate' },
    { name: 'PHP', level: 'intermediate' },
  ],
  databases: [
    { name: 'PostgreSQL', level: 'intermediate' },
    { name: 'MySQL', level: 'intermediate' },
    { name: 'Supabase', level: 'intermediate' },
  ],
  design: [
    { name: 'Figma', level: 'intermediate' },
    { name: 'Canva', level: 'advanced' },
  ],
  ai: ['Artificial Intelligence', 'Machine Learning Concepts'],
  tools: ['Git/GitHub', 'VS Code', 'Terminal'],
  languages: ['Kinyarwanda', 'English'],
}

const experience = [
  {
    role: 'Software Developer (Intern)',
    company: 'M&S INNOVATION LAB, Kigali',
    period: '2 MONTH',
    description: [
      'Applied technical skills and gained real-world industry experience in software development within a professional technology lab environment.',
    ],
  },
  {
    role: 'Software Developer & Designer (Intern)',
    company: 'SANTECH, Kigali',
    period: '1 MONTH',
    description: [
      'Demonstrated strong problem-solving capacity and innovation by designing and building scalable software solutions and practical applications targeting real-world challenges.',
    ],
  },
]

const education = [
  {
    institution: 'SOS Technical High School',
    degree: 'ICT & Multimedia — Software Development',
    period: '2025 – 2027 (Expected)',
    description: 'Focused on software development, web technologies, and multimedia design.',
  },
]

const projects = [
  {
    id: 1,
    name: 'DOTTIE.YZ',
    category: 'Premium Streetwear E-commerce Platform',
    role: 'Full-Stack Developer',
    status: 'completed',
    description:
      'A premium streetwear e-commerce platform built with a modern tech stack. Features product browsing, cart management, checkout flow, and an admin dashboard for managing inventory and orders.',
    features: [
      'Full product catalog with search and filtering',
      'Shopping cart and checkout flow',
      'Admin dashboard for inventory management',
      'Responsive design for all devices',
      'Secure payment integration',
    ],
    challenges: 'Building a seamless checkout experience and ensuring payment security across all devices.',
    technologies: ['React', 'Node.js', 'Express.js', 'PostgreSQL'],
    liveUrl: 'https://dottie-yz.pages.dev/',
    repoUrl: 'https://github.com/manzi5404/dottie.yz',
    screenshot: '',
  },
  {
    id: 2,
    name: 'Faith Over Fear',
    category: 'Streetwear E-commerce Platform',
    role: 'Full-Stack Developer',
    status: 'completed',
    description:
      'A clothing brand e-commerce platform designed to showcase and sell streetwear products. Features a modern, clean storefront with product listings, cart functionality, and order management.',
    features: [
      'Modern storefront with product listings',
      'Shopping cart and order management',
      'Responsive and mobile-first design',
      'Product image gallery',
      'Contact and support page',
    ],
    challenges: 'Creating a visually striking brand presence while maintaining fast performance and usability.',
    technologies: ['React', 'Node.js', 'Express.js', 'MySQL'],
    liveUrl: 'https://faithoverfearrw.netlify.app/',
    repoUrl: 'https://github.com/manzi5404/faith-over-fear',
    screenshot: '',
  },
  {
    id: 3,
    name: 'Smart Expense Tracker',
    category: 'Personal Finance Application',
    role: 'Full-Stack Developer',
    status: 'in-progress',
    description:
      'A personal finance application that helps users track their expenses, categorize spending, and visualize their financial habits over time.',
    features: [
      'Expense entry and categorization',
      'Monthly spending summaries',
      'Visual charts and graphs',
      'Budget tracking tools',
      'Export financial reports',
    ],
    challenges: 'Building intuitive data visualization and ensuring accurate financial calculations.',
    technologies: ['React', 'Node.js', 'Express.js', 'Supabase'],
    liveUrl: 'https://smartexpensetrackerrw.netlify.app/',
    repoUrl: 'https://github.com/manzi5404/Smart-Expense-Tracker-SET-',
    screenshot: '',
  },
]

// ---------------------------------------------------------------------------
// Certificates — every certificate found in src/assets/certificates/
// (excluding the CV document). Titles extracted from the certificates.
// ---------------------------------------------------------------------------
const certificateManifest = [
  {
    file: 'certificate-html-foundations-for-web-development-1774357046635-1.png',
    title: 'HTML Foundations for Web Development',
    organization: 'FreeCodecamp',
    date: '2024',
    type: 'image',
  },
  {
    file: 'certificate-c-programming-fundamentals-1774468579946-1.png',
    title: 'C Programming Fundamentals',
    organization: 'FreeCodecamp',
    date: '2024',
    type: 'image',
  },
  {
    file: 'wavumbuzi-entrepreuship-challenge-certificate-1.png',
    title: 'Wavumbuzi Entrepreneurship Challenge',
    organization: 'Wavumbuzi',
    date: '2024',
    type: 'image',
  },
  {
    file: 'WhatsApp Image 2026-07-27 at 16.02.56.jpeg',
    title: 'Leadership Course Certificate',
    organization: 'Youth Impact Mission (YIM) — Rwanda',
    date: 'Apr 2024',
    type: 'image',
  },
  {
    file: 'WhatsApp Image 2026-07-27 at 16.02.56 (1).jpeg',
    title: 'Certificate of Appreciation',
    organization: 'Peace & Love Proclaimers (PLP) — Nyagatare Secondary School',
    date: 'Jun 2024',
    type: 'image',
  },
  {
    file: 'WhatsApp Image 2026-07-27 at 16.02.56 (2).jpeg',
    title: 'Certificate of Completion — Industrial Attachment',
    organization: 'Innovation Lab of Rwanda (RQF Level 3)',
    date: 'Apr–May 2025',
    type: 'image',
  },
  {
    file: 'WhatsApp Image 2026-07-27 at 16.02.57.jpeg',
    title: 'Road Safety & First Aid Training',
    organization: 'Healthy People Rwanda / First Aid Initiative Rwanda (FAIR)',
    date: '2024',
    type: 'image',
  },
  {
    file: 'WhatsApp Image 2026-07-27 at 16.02.57 (1).jpeg',
    title: 'Certificate of Participation — PISA 2025 Field Trial',
    organization: 'National Examination & School Inspection Authority (NESA)',
    date: '2025',
    type: 'image',
  },
  {
    file: 'WhatsApp Image 2026-07-27 at 16.16.02.jpeg',
    title: 'SAN HUB Apprenticeship Program — Software Development',
    organization: 'SAN HUB',
    date: '2026',
    type: 'image',
  },
]

const certificates = certificateManifest
  .map((cert, index) => ({
    id: index + 1,
    ...cert,
    image: certUrl(cert.file),
    preview: certUrl(cert.file),
    verificationUrl: '',
  }))
  .filter((cert) => Boolean(cert.image))

const contactInfo = {
  email: email,
  github: github,
  linkedin: linkedin,
  phone: phone,
}

export {
  name,
  title,
  location,
  email,
  github,
  linkedin,
  phone,
  cvUrl,
  languages,
  summary,
  skills,
  experience,
  education,
  projects,
  certificates,
  contactInfo,
  profileImage,
}

