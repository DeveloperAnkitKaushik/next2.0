import { NextResponse } from "next/server";

export function GET(_, res) {
    return NextResponse.json({ id: `${res.params.id}` });
}