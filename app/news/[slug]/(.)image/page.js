import { DUMMY_NEWS } from "@/dummy-news";

export default async function ImagePage({ params }) {
  const { slug } = await params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);

  if (!newsItem) {
    notFound();
  }

  const { title, image } = newsItem;

  return (
    <div className="fullscreen-image">
      <h2>Intercepted</h2>
      <img src={`/images/news/${image}`} alt={title} />
    </div>
  );
}
