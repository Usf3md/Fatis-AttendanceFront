import { NextRequest, NextResponse } from "next/server";
import { getAccessCookie } from "@/services/cookies-managment";
import { Attendance } from "../schema";

export async function POST(request: NextRequest) {
  let status;
  const attendance = await fetch(`${process.env.BACKEND_URL}attendance/end/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getAccessCookie(request),
    },
  });
  return NextResponse.json(await attendance.json(), { status: status });
}
