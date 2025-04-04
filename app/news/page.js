import NewsLink from "@/components/news-link";
import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <NewsLink news={DUMMY_NEWS} />
    </>
  );
}
