import HomePage from './components/HomePage';
import { getInstagramReels } from './data/instagramReels';

export default function Home() {
  return <HomePage reels={getInstagramReels()} />;
}
