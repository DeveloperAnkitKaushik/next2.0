import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({ result: "Hello" });
}

export async function POST(req, res) {
    let { name, email, password } = await req.json();
    console.log(name + " " + password + " " + email);
    return NextResponse.json({ result: "success" });
}