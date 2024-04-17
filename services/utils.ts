import { Attendance } from "@/app/api/attendance/schema";

export const getTodaysDate = () => {
  var today = new Date();
  var year = today.getFullYear();
  var month = String(today.getMonth() + 1).padStart(2, "0");
  var day = String(today.getDate()).padStart(2, "0");
  return year + "-" + month + "-" + day;
};

export function convertSecondsToHMS(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

  return formattedHours + ":" + formattedMinutes + ":" + formattedSeconds;
}

export function convertSecondsToDuration(seconds: number) {
  if (seconds === 0) return 0 + " s";
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  let duration = "";
  if (hours > 0) {
    duration += hours + " h ";
  }
  if (minutes > 0) {
    duration += minutes + " m ";
  }
  if (remainingSeconds > 0) {
    duration += remainingSeconds + " s";
  }

  return duration.trim();
}

export const calculateDifference = (attendance: Attendance, clock: Date) => {
  let difference;
  if (attendance.end_datetime) {
    difference =
      parseInt(
        //@ts-ignore
        (attendance.end_datetime -
          //@ts-ignore
          attendance.start_datetime) /
          1000
      ) - attendance.shift_duration;
  } else {
    difference =
      parseInt(
        //@ts-ignore
        (clock - attendance.start_datetime) / 1000
      ) - attendance.shift_duration;
  }
  return difference;
};
