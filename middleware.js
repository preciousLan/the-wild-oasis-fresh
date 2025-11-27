// import { NextResponse } from "next/server"

// export function middleware(request){
//     console.log(request)

//     return NextResponse.redirect(new URL("/about", request.url))
// }

//AUTHJS midlleware

import { auth } from "./app/_lib/auth"

//whenever a request matches the paths I specify,'
//  run the authentication middleware first
export const middleware = auth

export const config= {
    matcher: ["/account/:path*"],
}