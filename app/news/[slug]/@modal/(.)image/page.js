import { DUMMY_NEWS } from "@/dummy-news";

export default async function ImagePage({ params }) {
  const { slug } = await params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);

  if (!newsItem) {
    notFound();
  }

  const { title, image } = newsItem;

  return (
    <>
      <div className="modal-backdrop" />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${image}`} alt={title} />
        </div>
      </dialog>
    </>
  );
}
