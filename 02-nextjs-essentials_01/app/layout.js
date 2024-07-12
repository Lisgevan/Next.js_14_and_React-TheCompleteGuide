import Link from "next/link";
import "./globals.css";

export const metadata = {
	title: "NextJS Course App",
	description: "Your first NextJS app!",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Link href="/">Home</Link>
				{children}
			</body>
		</html>
	);
}

