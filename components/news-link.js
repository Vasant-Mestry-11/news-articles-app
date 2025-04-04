import Link from "next/link";

export default function NewsLink({ news }) {
  return <ul className="news-list">
    {news.map((newsItem) => {
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
}