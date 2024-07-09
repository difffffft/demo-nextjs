export async function GET() {
    return Response.json([1, 2, 3, 4])
}


export async function POST(request:Request) {
    const comment = await request.json()
    return Response.json(comment)
}