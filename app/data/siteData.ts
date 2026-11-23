export type ServiceCategory = {
  title: string;
  tag: string;
  treatmentSlug: string;
  image: string;
  items: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: 'Dermatology', tag: 'SKIN',
    treatmentSlug: 'skin',
    image: '/images/editorial/skin.webp',
    items: ['General Dermatology', 'Pediatric Dermatology', 'Surgical Dermatology', 'Acne & Acne Scars', 'Pigmentation & Melasma'],
  },
  {
    title: 'Trichology', tag: 'HAIR',
    treatmentSlug: 'hair',
    image: '/images/editorial/hair.webp',
    items: ['Hair Analysis', 'Hair Transplant', 'Hair Reduction', 'GFC / PRP', 'Artificial Hair Implantation'],
  },
  {
    title: 'Cosmetology', tag: 'AESTHETICS',
    treatmentSlug: 'aesthetics',
    image: '/images/editorial/facial.webp',
    items: ['Skin Rejuvenation', 'Injectables', 'Skin Boosters', 'Laser Treatments', 'Medi Facials'],
  },
];

export const testimonials = [
  { title: 'Exceptional Care & Results', text: 'I was nervous about getting a laser treatment, but the team made me feel at ease. The procedure was smooth, and the results are incredible.', author: 'Neha R' },
  { title: 'Best Dermatologists in Town!', text: 'I visited Wow Factor for hair loss treatment, and I’m so glad I did. The doctors explained everything clearly and I can already see a difference.', author: 'Amit P' },
  { title: 'Skin Glow Success', text: 'I had struggled with acne for years. The treatments were tailored to my skin and I finally feel confident in my skin.', author: 'Priya M' },
];

export const socialPosts = [
  { src: '/images/editorial/journal-skincare.webp', alt: 'Indian woman applying moisturizer' },
  { src: '/images/editorial/journal-portrait.webp', alt: 'Portrait of an Indian man in soft daylight' },
  { src: '/images/editorial/skin.webp', alt: 'Close-up portrait of an Indian woman' },
  { src: '/images/editorial/hair.webp', alt: 'Scalp consultation in a clinic' },
  { src: '/images/editorial/facial.webp', alt: 'Patient on a treatment bed during a facial consultation' },
];

export const teamMembers = [
  { name: 'Aswini Jaison', role: 'Designation', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85' },
  { name: 'Clinical Specialist', role: 'Senior Consultant', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85' },
  { name: 'Senior Consultant', role: 'Aesthetic Expert', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=85' },
  { name: 'Aesthetic Expert', role: 'Clinical Specialist', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=85' },
];
