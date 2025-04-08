import NewsLink from "@/components/news-link";
import { getLatestNews } from "@/lib/news";

export default async function LatestNewsPage() {
  const news = await getLatestNews()

  return (
    <>
      <h2>Latest News</h2>
      <NewsLink news={news} />
    </>
  );
}
