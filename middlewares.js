import { NextResponse } from "next/server";

export function middleware(request) {
  // this will execute for each and every request
  return NextResponse.next()
}