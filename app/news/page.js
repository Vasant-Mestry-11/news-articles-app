import Link from "next/link";

export default function NewsPage() {
  return <header>
    <h1>News Page</h1>
    <p><Link href='/news/first-news'>First news link</Link></p>
    <p><Link href='/news/second-news'>Second news link</Link></p>
    <p><Link href='/news/third-news'>Third news link</Link></p>
  </header>
}