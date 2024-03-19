import { NextRequest, NextResponse } from "next/server";
import { getAccessCookie } from "@/services/cookies-managment";

export async function POST(request: NextRequest) {
  let status;
  const attendance = await fetch(
    `${process.env.BACKEND_URL}attendance/start/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: getAccessCookie(request),
      },
      body: JSON.stringify({
        local_ip: request.headers.get("x-forwarded-for"),
      }),
    }
  );
  return NextResponse.json(await attendance.json(), { status: status });
}
