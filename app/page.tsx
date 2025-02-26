import Library from "../components/main/Library";
import Link from "next/link";
export default function Home() {
  return (
    <div className="px-6 py-4 ">
      <div>home</div>

      <Link href={"/artists/oki"}>oki</Link>
      <br />
      <Link href={"/okiEra47"}>era47</Link>
    </div>
  );
}
