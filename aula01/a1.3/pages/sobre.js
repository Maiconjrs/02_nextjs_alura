import Link  from "next/link";

export default function AboutPage() {
  return (
    <div>
      <h1> page sobre Welcome to Next.js!</h1>

      <ul>
        <li>
          <Link href="/">ir para home</Link>
        </li>
      </ul>
    </div>
  );
}
