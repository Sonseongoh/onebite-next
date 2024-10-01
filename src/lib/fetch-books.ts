import { IBookData } from "@/types";

export default async function fetchBooks(): Promise<IBookData[]> {
  const url = "http://localhost:12345/book";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
