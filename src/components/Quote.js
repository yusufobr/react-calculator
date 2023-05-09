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
    <div className="container mx-auto mt-16  rounded-lg py-8 px-4 bg-[#ffffff80] drop-shadow-lg">
      <h2 className="text-xl font-semibold capitalize mx-auto">Quote of the day :</h2>
      <div className="flex flex-col ml-4 mt-4 gap-2 mx-auto">
        <span className="err">{error ? `${error}` : ''}</span>
        <q className="text-2xl font-semibold italic">
          {loading ? 'loading..' : quote.quote}
          {' '}
        </q>
        <div className="text-gray-700">{loading ? '' : quote.author}</div>
      </div>
    </div>
  );
}
