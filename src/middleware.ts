import { NextRequest, NextResponse } from "next/server"

export function middleware(req:NextRequest, res:NextResponse) {
    return NextResponse.redirect(new URL("/", req.url))
}

export const config = {
    matcher: '/xxx'
}