import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((newsItem) => {
          const { id, slug, title, image } = newsItem;
          return (
            <li key={id}>
              <Link href={`/news/${slug}`}>
                <img src={`/images/news/${image}`} alt={title} />
                <span>{title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
