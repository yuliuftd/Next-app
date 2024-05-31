import Image from "next/image";
import Link from "next/link";
import ProductCard from "./component/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/authOptions";
import { Metadata } from "next";
import ShowButton from "./component/ShowButton";
// to lazy load a client component:
// import dynamic from "next/dynamic";

// const HeavyComponent = dynamic(() => import("./component/HeavyComponent"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <ShowButton />
      <ProductCard />
      <Link href="/users">Users</Link>
    </main>
  );
}

// static meta tag
// export const metadata: Metadata = {
//   title: "title",
// };

// dynamic meta tag
// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch("");
//   const res = await product.json();
//   return {
//     title: res.title,
//     description: res.description,
//   };
// }
