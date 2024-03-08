import { NextRequest, NextResponse } from "next/server";
import { getAccessCookie } from "@/services/cookies-managment";

export async function GET(request: NextRequest) {
  const member = await fetch(
    `${process.env.BACKEND_URL}attendance/members/me/`,
    {
      headers: {
        Authorization: getAccessCookie(request),
      },
    }
  );
  return NextResponse.json(await member.json(), { status: member.status });
}
