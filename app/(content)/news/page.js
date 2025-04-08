'use client';
import NewsLink from "@/components/news-link";
import { useEffect, useState } from "react";

export default function NewsPage() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')
  const [news, setNews] = useState()


  useEffect(() => {
    async function fetchNews() {
      setLoading(true)
      const response = await fetch('http://localhost:8080/news')

      if (!response.ok) {
        setError('Failed to fetch news.')
        setLoading(false)
      }

      const data = await response.json();
      setNews(data)
      setLoading(false)
    }
    fetchNews()
  }, [])


  if (loading) {
    return <p>Loading....</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  let newsContent;

  if (news) {
    newsContent = <NewsLink news={news} />
  }

  return (
    <>
      <h1>News Page</h1>
      {newsContent}
    </>
  );
}
