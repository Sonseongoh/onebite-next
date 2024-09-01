import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);

  return <h1>Book {id}</h1>;
}
