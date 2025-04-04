import NewsLink from "@/components/news-link";
import { getNewsForYear } from "@/lib/news";

export default async function FilteredNewsPage({ params }) {
  const { year } = await params;
  const news = getNewsForYear(year)
  return <NewsLink news={news} />
}