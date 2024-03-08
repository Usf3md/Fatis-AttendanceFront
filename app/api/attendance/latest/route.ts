import { NextRequest, NextResponse } from "next/server";
import { getAccessCookie } from "@/services/cookies-managment";

export async function GET(request: NextRequest) {
  let status;
  const attendance = await fetch(
    `${process.env.BACKEND_URL}attendance/latest/`,
    {
      method: "GET",
      headers: {
        Authorization: getAccessCookie(request),
      },
    }
  );
  return NextResponse.json(await attendance.json(), { status: status });
}
