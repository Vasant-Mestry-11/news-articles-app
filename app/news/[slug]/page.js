import { DUMMY_NEWS } from "@/dummy-news";


export default async function NewsDetail({ params }) {
  const { slug } = await params;
  const { title, image, date, content } = DUMMY_NEWS.find(newsItem => newsItem.slug === slug)
  return <article className="news-article">
    <header>
      <img src={`/images/news/${image}`} alt={title} />
      <h1>{title}</h1>
      <time dateTime={date}>{date}</time>
    </header>
    <p>{content}</p>
  </article>
}