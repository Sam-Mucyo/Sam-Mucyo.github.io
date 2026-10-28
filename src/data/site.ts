// Single source of truth for identity and contact details, shared by every
// page. Change a link here and it changes everywhere.

export const person = {
    name: 'Sam Mucyo',
    fullName: 'Samuel Mucyo',
    role: 'Software Engineer',
};

export const links = {
    email: 'mailto:sammucyo@college.harvard.edu',
    github: 'https://github.com/Sam-Mucyo',
    linkedin: 'https://www.linkedin.com/in/mucyo-samuel',
    phone: 'tel:+18579288144',
    whatsapp: 'https://wa.me/+18579288144',
    calendly: 'https://calendly.com/sammucyo?hide_landing_page_details=1&hide_gdpr_banner=1',
};

export const courseLinks = {
    harvard: 'https://www.harvard.edu/',
    cs50: 'https://cs50.harvard.edu/college/2023/fall/',
    cs2050: 'https://sites.google.com/g.harvard.edu/cs-2050/syllabus',
};

export const nav = [
    { label: 'Home', id: 'home' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
];

export const hero = {
    // Trusted, hand-written HTML: rendered with set:html.
    description: `Harvard Computer Science senior who tackles complex problems and delivers results. Proven ability to adapt and contribute at Amazon, while strengthening leadership as a teaching fellow for <a href="${courseLinks.cs50}" target="_blank" rel="noopener noreferrer">CS50</a> and <a href="${courseLinks.cs2050}" target="_blank" rel="noopener noreferrer">CS2050</a>. Excited to bring this proactive, adaptable approach to any team seeking innovative problem solvers.`,
};

export const contact = {
    title: 'Get in Touch',
    description: "I'm always interested in hearing about new opportunities, collaborations, or just having a chat about technology and software engineering.",
};

// The /contacts card: a short "link in bio" view of the same person.
export const card = {
    lines: [
        `Computer Science @ <a href="${courseLinks.harvard}" target="_blank" rel="noopener noreferrer">Harvard University</a>, Class of 2025`,
        'Building Software &amp; Learning!',
    ],
};
