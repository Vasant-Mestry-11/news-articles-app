import { getNewsItem } from "@/lib/news";

export default async function ImagePage({ params }) {
  const { slug } = await params;
  const newsItem = await getNewsItem(slug);

  if (!newsItem) {
    notFound();
  }

  const { title, image } = newsItem;

  return <img src={`/images/news/${image}`} alt={title} />;
}
