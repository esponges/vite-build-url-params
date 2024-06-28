import { useSearchParams, Link } from 'react-router-dom';

import './App.css';

const LINKS = [
  '?song=426_Cold_Frosty_Morning',
  '?song=232_Amazing_Grace',
  '?song=482_Arkansas_Traveler',
];

function App() {
  const [searchParams] = useSearchParams();

  const searchParamsString = Object.fromEntries(searchParams);
  const song = searchParams.get('song');

  return (
    <>
      {/* Update the search params with the links */}
      {/* show existing search params, first string and then song */}
      <h1>Full search params in this page: {JSON.stringify(searchParamsString)}</h1>
      {/* song params */}
      <h1>Song params: {song || 'none'}</h1>
      <ol>
        {LINKS.map((link) => (
          <li key={link}>
            <Link to={link}>Change page url params to {link}</Link>
          </li>
        ))}
        <li>
          <Link to="/">Remove search params</Link>
        </li>
      </ol>
    </>
  );
}

export default App;
