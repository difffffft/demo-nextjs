import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const headers = new Headers(request.headers);

  const theme = request.cookies.get("theme")
  console.log(theme);

  return Response.json({
    date: new Date().toLocaleTimeString(),
    // id: searchParams.get("id"),
    // Authorization: headers.get("Authorization"),
  });
}

export async function POST(request: NextRequest) {
  const comment = await request.json();
  return Response.json(comment);
}
