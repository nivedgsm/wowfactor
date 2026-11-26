const reels = [
  ['DetnudoytP1', 'Myth Busters with Dr. Asha Biju, part 1'],
  ['DVgB5kmCRkS', 'Myth Busters with Dr. Asha Biju, part 2'],
  ['DTc01GRjzJp', 'Radiance by Design'],
  ['DVGgpCJCcq4', 'Laser Hair Reduction'],
  ['DQtm1ihAMuU', 'Echoes of Forever'],
  ['DOdnWQ8jhvy', 'Medical Tourism'],
  ['DNGIS_gpG_5', 'It’s for you!'],
  ['DLcjsAxpJtG', 'Dermatologists and Aesthetic Physicians'],
  ['DK9qKxeSSJQ', 'Laser Hair Reduction without breaking the bank'],
] as const;

export type InstagramReel = {
  id: string;
  title: string;
  href: string;
  cover: string;
};

export function getInstagramReels(): InstagramReel[] {
  return reels.map(([id, title], index) => ({
    id,
    title,
    href: `https://www.instagram.com/reel/${id}/`,
    cover: `/images/editorial/reels/${index + 1}.png`,
  }));
}
