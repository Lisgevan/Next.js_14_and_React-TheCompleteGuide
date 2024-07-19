import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
	// //code when using a backend server
	// const response = await fetch( "http://localhost:8080/news" );

	// if (!response.ok) throw new Error("Failed to fetch news.");

	// const news = await response.json();

	//--------------------------------------------------------------

	//code when using a better-sqlite3

	const news = await getAllNews();

	return (
		<>
			<h1>News Page</h1>
			<NewsList news={news} />
		</>
	);
}

