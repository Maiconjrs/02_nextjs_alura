import { GetStaticProps } from "next"

export default function Home() {
  return (
    <div>
      Sobre!
    </div>
  )
}

   const GetStaticProps: GetStaticProps = async (context) => {
  // const dadosDaAPI = await fetch('https://fakeapi-omariosouto.vercel.app/api/posts')
  //   .then((res) => res.json());

  // const paths = dadosDaAPI.posts.map((postAtual) => {
  return {
    props: {

    }
  }
 }