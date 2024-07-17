// import Link from "next/link";
import "./globals.css";
import MainHeader from "@/components/main-header/main-header";

export const metadata = {
	title: "NextLevel Food",
	description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<MainHeader />
				{children}
				{/* <div>
					<p>
						<Link style={{ color: "white", textAlign: "center" }} href="/">
							Home
						</Link>
					</p>
					<p>
						<Link style={{ color: "white", textAlign: "center" }} href="/meals">
							Meals
						</Link>
					</p>
					<p>
						<Link style={{ color: "white", textAlign: "center" }} href="/meals/share">
							Share
						</Link>
					</p>
					<p>
						<Link style={{ color: "white", textAlign: "center" }} href="/meals/shared-meal-01">
							Shared-meal-01
						</Link>
					</p>
					<p>
						<Link style={{ color: "white", textAlign: "center" }} href="/meals/shared-meal-02">
							Shared-meal-02
						</Link>
					</p>
					<p>
						<Link style={{ color: "white", textAlign: "center" }} href="/community">
							Community
						</Link>
					</p>
				</div> */}
			</body>
		</html>
	);
}

