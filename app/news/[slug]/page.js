import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";


export default async function NewsDetail({ params }) {
  const { slug } = await params;
  const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === slug)

  if (!newsItem) {
    notFound();
  }

  const { title, image, date, content } = newsItem;

  return <article className="news-article">
    <header>
      <img src={`/images/news/${image}`} alt={title} />
      <h1>{title}</h1>
      <time dateTime={date}>{date}</time>
    </header>
    <p>{content}</p>
  </article>
}