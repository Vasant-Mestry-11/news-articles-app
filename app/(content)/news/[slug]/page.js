import { getNewsItem } from "@/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";


export default async function NewsDetail({ params }) {
  const { slug } = await params;
  const newsItem = await getNewsItem(slug)

  if (!newsItem) {
    notFound();
  }

  const { title, image, date, content } = newsItem;

  return <article className="news-article">
    <header>
      <Link href={`/news/${slug}/image`}>
        <img src={`/images/news/${image}`} alt={title} />
      </Link>
      <h1>{title}</h1>
      <time dateTime={date}>{date}</time>
    </header>
    <p>{content}</p>
  </article>
}