import { NextResponse, type NextRequest } from "next/server";

export const middleware  = (request: NextRequest) => {

    console.log(request.url)
}

