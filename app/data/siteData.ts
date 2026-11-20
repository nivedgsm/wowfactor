export type ServiceCategory = {
  title: string;
  tag: string;
  image: string;
  items: string[];
};

export type TreatmentGroup = {
  name: string;
  items: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: 'Dermatology', tag: 'SKIN',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1000&q=85',
    items: ['General Dermatology', 'Pediatric Dermatology', 'Surgical Dermatology', 'Acne & Acne Scars', 'Pigmentation & Melasma'],
  },
  {
    title: 'Trichology', tag: 'HAIR',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85',
    items: ['Hair Analysis', 'Hair Transplant', 'Hair Reduction', 'GFC / PRP', 'Artificial Hair Implantation'],
  },
  {
    title: 'Cosmetology', tag: 'AESTHETICS',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=85',
    items: ['Skin Rejuvenation', 'Injectables', 'Skin Boosters', 'Laser Treatments', 'Medi Facials'],
  },
];

export const treatmentGroups: TreatmentGroup[] = [
  { name: 'Lasers / Light', items: ['Ultra Pulse CO2 Fractional Laser', 'Cool Laser Therapy', 'Laser Peel', 'Primelase Laser', 'Tribeam Laser', 'Revlite Laser', 'Laser Tattoo Removal'] },
  { name: 'Skin Tightening', items: ['Sygmalift HIFU', 'Secret RF', 'Sylfirm X', 'Threadlift'] },
  { name: 'Injectables / Microneedling', items: ['Botox', 'PRP / GFC', 'Skin Boosters', 'Dermal Fillers', 'Exosomes', 'Mesotherapy'] },
  { name: 'Hair', items: ['Hair Reduction', 'Hair Analysis', 'Hair Transplant', 'GFC / PRP', 'Exosomes', 'Mesotherapy'] },
  { name: 'Dermato / Plastic Surgery', items: ['Vitiligo Surgery', 'Mole Excision', 'Punch Grafting'] },
  { name: 'Peels / Medi Facials', items: ['Hydra Facial', 'Oxygeneo Facial', 'InnoPeel', 'Cosmelan Peel', 'Yellow Peel', 'Glycolic Acid Peel'] },
];

export const testimonials = [
  { title: 'Exceptional Care & Results', text: 'I was nervous about getting a laser treatment, but the team made me feel at ease. The procedure was smooth, and the results are incredible.', author: 'Neha R' },
  { title: 'Best Dermatologists in Town!', text: 'I visited Wow Factor for hair loss treatment, and I’m so glad I did. The doctors explained everything clearly and I can already see a difference.', author: 'Amit P' },
  { title: 'Skin Glow Success', text: 'I had struggled with acne for years. The treatments were tailored to my skin and I finally feel confident in my skin.', author: 'Priya M' },
];

export const socialPosts = [
  'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=700&q=85',
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=85',
];

export const teamMembers = [
  { name: 'Aswini Jaison', role: 'Designation', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85' },
  { name: 'Clinical Specialist', role: 'Senior Consultant', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85' },
  { name: 'Senior Consultant', role: 'Aesthetic Expert', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=85' },
  { name: 'Aesthetic Expert', role: 'Clinical Specialist', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=85' },
];
