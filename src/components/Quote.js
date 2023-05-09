import React, { useEffect, useState } from 'react';
import { BASE_URL, API_KEY } from '../config/Apis';
import './Quote.css';

export default function Quote() {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    const res = await fetch(BASE_URL, { headers: { 'X-Api-Key': API_KEY } });
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    fetchQuote()
      .then((data) => {
        setQuote(data[0]);
        setLoading(false);
      })
      .catch((e) => setError(e));
  }, []);

  return (
    <>
      <h2 className="text-3xl font-bold mx-auto text-center mt-12">Quote of the day :</h2>
      <div className="text-center mx-auto mt-4 w-[350px]">
        <span className="err">{error ? `${error}` : ''}</span>
        <q className="text-xl font-semibold italic">
          {loading ? 'loading..' : quote.quote}
          {' '}
        </q>
        <div className="text-gray-400">{loading ? '' : quote.author}</div>
      </div>
    </>
  );
}
