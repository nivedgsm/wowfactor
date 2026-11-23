type Treatment = {
  name: string;
  slug: string;
  overview: string;
};

type TreatmentCategory = {
  name: string;
  slug: string;
  overview: string;
  items: Treatment[];
};

function category(
  name: string,
  slug: string,
  overview: string,
  treatments: Record<string, string>,
): TreatmentCategory {
  return {
    name,
    slug,
    overview,
    items: Object.entries(treatments).map(([name, overview]) => ({
      name,
      slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      overview,
    })),
  };
}

export const treatmentCategories = [
  category('Skin', 'skin', 'Explore dermatology consultations for skin concerns, from acne and pigmentation to moles and vitiligo.', {
    'General Dermatology': 'Start here if you have a new or ongoing concern such as a rash, irritation or a change in your skin. Bring a timeline of symptoms and a list of products or treatments you have tried.',
    'Pediatric Dermatology': 'Book a visit to discuss a child’s skin concerns. The consultation can cover when symptoms began, whether they come and go, and how they affect daily routines.',
    'Acne & Acne Scars': 'Discuss active breakouts, lingering marks or changes in skin texture after acne. Your clinician can examine which concerns are present and help you decide what to address first.',
    'Pigmentation & Melasma': 'Bring up patchy or uneven pigmentation and any changes you have noticed over time. Your clinician can assess the pattern and discuss options based on the findings.',
    'Vitiligo Surgery': 'A consultation about surgical options for vitiligo includes a review of affected areas, changes over time and previous treatment. Ask how the team assesses suitability and plans follow-up.',
    'Mole Excision': 'A consultation begins with an examination of the mole and a discussion of the reason for removal. Ask whether tissue examination is appropriate and what wound care and follow-up would involve.',
    'Punch Grafting': 'Ask how the clinic evaluates the area being considered for grafting, what a procedure would involve, and how the treated and donor sites would be followed during healing.',
  }),
  category('Hair', 'hair', 'Explore consultations for hair loss, scalp concerns, restoration and unwanted hair.', {
    'Hair Analysis': 'A hair and scalp assessment starts with the pattern and timing of changes you have noticed. Bring details about shedding, scalp symptoms, hair care routines and past treatments.',
    'Hair Transplant': 'Discuss the areas where you want more coverage, your history of hair loss and the areas that could supply donor hair. Ask what the procedure and recovery would mean for your routine.',
    'Hair Reduction': 'Bring up the areas you want to treat and any previous hair removal methods. Ask which options the clinician would consider for your skin tone and hair characteristics.',
    'PRP / GFC': 'Discuss platelet-rich plasma (PRP) and growth factor concentrate (GFC) with the clinician. Ask which approach they would consider for your concern, what a session involves and how progress would be assessed.',
    'Artificial Hair Implantation': 'Ask what type of artificial hair the clinic uses, what maintenance is involved and how the team would assess whether implantation suits your scalp and goals.',
  }),
  category('Laser', 'laser', 'Browse laser and light-based services and compare the questions to ask about each option.', {
    'Ultra Pulse CO2 Fractional Laser': 'Discuss the texture or scarring concern you want assessed. Ask how the clinician would choose the treatment area and explain the expected recovery and follow-up.',
    'Cool Laser Therapy': 'Share the concern you want addressed and ask the clinic to explain the device and treatment approach it uses under this name, including what a session and recovery may involve.',
    'Laser Peel': 'Discuss the skin surface changes you have noticed and ask how a laser peel compares with other resurfacing options for your skin. Review the preparation and aftercare for the approach the clinician proposes.',
    'Primelase Laser': 'Bring up the areas you want assessed for hair reduction. Ask how the clinician evaluates your hair and skin characteristics when planning treatment with Primelase.',
    'Tribeam Laser': 'Bring details about the spots or uneven tone you want assessed. Ask what the clinician sees on examination and whether a Tribeam session would be relevant to that finding.',
    'Revlite Laser': 'Tell the clinician when the concern appeared and describe prior laser or skin treatments. Ask how the team decides whether to use Revlite and how it would assess your response.',
    'Laser Tattoo Removal': 'Bring details about the tattoo’s age, size, colours and any previous removal attempts. Ask how those factors affect the plan and what to expect between visits.',
  }),
  category('Aesthetics', 'aesthetics', 'Explore skin tightening, injectables, microneedling, peels and facials.', {
    'Sygmalift HIFU': 'Discuss the areas where you have noticed changes in firmness. Ask where the clinician would consider focused ultrasound and how they would assess changes over time.',
    'Secret RF': 'Discuss the areas of texture or scarring you want assessed. Ask how the clinician plans a radiofrequency microneedling session and what to expect as your skin recovers.',
    'Sylfirm X': 'Share your skin concerns and any history of procedures or sensitivity. Ask what would make Sylfirm X appropriate to consider and how the clinician would monitor your response.',
    'Threadlift': 'Discuss the areas you would like assessed for a lift. Ask about the threads the clinic uses, what placement entails and what follow-up would involve.',
    Botox: 'Share which expression lines concern you and whether you have had injections before. Ask how the clinician assesses facial movement and plans treatment around your goals.',
    'Skin Boosters': 'Discuss the changes in skin quality you would like to address. Ask which product the clinician would consider, how it is administered and how they would review your response.',
    'Dermal Fillers': 'Discuss the facial areas where you have noticed a change in volume or contour. Ask which filler would be considered and how the clinician handles follow-up and potential complications.',
    Exosomes: 'Ask which product and application method the clinic uses, what evidence supports its use for your specific skin or hair concern, and what alternatives are available.',
    Mesotherapy: 'Ask which ingredients the clinic would consider for your skin or scalp concern, how the treatment would be delivered and what evidence supports the proposed use.',
    'Hydra Facial': 'Discuss your skin care routine and any sensitivity or recent procedures. Ask what steps the clinic includes in the facial and how it adjusts the session for your skin.',
    'Oxygeneo Facial': 'Discuss the skin concerns you want to address and your experience with previous facials. Ask what the Oxygeneo session includes and which products the clinic uses.',
    InnoPeel: 'Bring a list of products you use and share how your skin has responded to previous peels. Ask which InnoPeel formulation the clinician would consider and what aftercare it requires.',
    'Cosmelan Peel': 'Discuss the history of uneven pigmentation and any treatments you have tried. Ask what the in-clinic and home-care stages involve and how the clinician would review progress.',
    'Yellow Peel': 'Ask which formulation the clinic uses under this name and why it might suit your concern. Discuss expected peeling and how the appointment may fit your schedule.',
    'Glycolic Acid Peel': 'Share any history of irritation and your current exfoliation routine. Ask how the clinician selects the strength and plans skin care around the appointment.',
  }),
];

export function treatmentHref(slug: string) {
  return `/treatments/${slug}`;
}
