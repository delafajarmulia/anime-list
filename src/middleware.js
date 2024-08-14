export { default } from "next-auth/middleware"

export const config = { matcher: ["/users/:path*"] } // mathcer buat route mana yg mau -> :path* path apapun setelah users harus di protect