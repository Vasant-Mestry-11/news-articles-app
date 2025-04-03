import Link from "next/link";

export default function NewsPage() {
  return <>
    <h1>News Page</h1>
    <ul>
      <li>
        <Link href='/news/first-news'>First news link</Link>
      </li>
      <li>
        <Link href='/news/second-news'>Second news link</Link>
      </li>
      <li>
        <Link href='/news/third-news'>Third news link</Link>
      </li>
    </ul>
  </>
}