

export default async function NewsDetail({ params }) {
  const { id } = await params;

  return <main>
    <h1>News detail page</h1>
    <p>News ID: {id}</p>
  </main>
}