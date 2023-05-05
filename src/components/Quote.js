import React, { useEffect, useState } from 'react';
import './Quote.css';

export default function Quote() {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = 'https://api.api-ninjas.com/v1/quotes?category=business';
  const API_KEY = 'x+QeVi/NIQCuHt5PoMxkQw==Efb93a67XUWRzdsN';

  const fetchQuote = async () => {
    const res = await fetch(url, { headers: { 'X-Api-Key': API_KEY } });
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    fetchQuote()
      .then((data) => {
        setQuote((data[0]));
        setLoading(false);
      })
      .catch((e) => setError(e));
  }, []);

  return (
    <div className="text-center mx-auto mt-4 w-[350px]">
      <span className="err">{error ? `${error}` : ''}</span>
      <q className="text-xl font-semibold italic">
        {loading ? 'loading..' : quote.quote}
        {' '}
        {' '}
      </q>
      <div className="text-gray-400">
        {loading ? '' : quote.author}
      </div>
    </div>
  );
}
