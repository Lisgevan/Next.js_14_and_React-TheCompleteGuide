import { NextResponse } from "next/server";

export function middleware(response) {
	console.log(response);
	return NextResponse.next();
}

export const config = {
	matcher: "/news",
};
