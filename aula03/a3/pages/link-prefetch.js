import Link from 'next/link';

// o prefetch possibilita pre carregar as páginas antes mesmo de serem clicadas,
// false elas vão carregar o conteudo quando passar o mouse por cima,
// true ela carregara ao iniciar a página -   OBSOLETO
export default function LinkPrefetchPage() {
  return (
    <div>
      <li>
        <Link href="/"  prefetch={true}>
          <a>
            Home
          </a>
        </Link>
      </li>
      <li>
        <Link href="/sobre" prefetch={true}>
          <a>
            Sobre
          </a>
        </Link>
      </li>
      <li>
        <Link href="/link-prefetch">
          <a>
            Link Prefetch
          </a>
        </Link>
      </li>
    </div>
  )
}

