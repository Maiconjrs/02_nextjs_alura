import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>

      <img src="/images/60679012.jfif"/>

      <ul>
        <li>
          <Link href="/sobre">ir para Sobre</Link>
        </li>
      </ul>
    </div>
  );
}
