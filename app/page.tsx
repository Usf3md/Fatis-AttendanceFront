"use client";
import {
  convertSecondsToDuration,
  convertSecondsToHMS,
} from "@/services/utils";
import { Button, Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import Modal from "./components/Modal";
import ThemeSwitcher from "./components/ThemeSwitcher";
import MemberContext from "./contexts/MemberContext";
import { Attendance } from "./api/attendance/schema";
import moment from "moment";
import "moment-timezone";

export default function Home() {
  const { member, setMember } = useContext(MemberContext);
  const [attendance, setAttendance] = useState<Attendance>();
  const [modalVisible, setModalVisible] = useState(false);
  const [shiftStartDT, setShiftStartDT] = useState<Date>(undefined!);
  const [shiftEndDT, setShiftEndDT] = useState<Date>(undefined!);
  const [passedTime, setPassedTime] = useState(0);

  const shiftTime = member.shift_duration;
  useEffect(() => {
    const interval = setInterval(() => {
      if (!shiftStartDT) return;
      if (shiftEndDT) {
        clearInterval(interval);
        return;
      }
      setPassedTime(
        //@ts-ignore
        parseInt((new Date() - new Date(shiftStartDT)) / 1000)
      );
    }, 1000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    fetch("/api/attendance/latest/")
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data: Attendance) => {
        setAttendance(data);
        if (data.start_datetime && !data.end_datetime) {
          setPassedTime(
            //@ts-ignore
            parseInt((new Date() - new Date(data.start_datetime)) / 1000)
          );
        } else if (data.start_datetime && data.end_datetime) {
          setPassedTime(
            parseInt(
              //@ts-ignore
              (new Date(data.end_datetime) - new Date(data.start_datetime)) /
                1000
            )
          );
        }
        setShiftStartDT(
          data.start_datetime ? new Date(data.start_datetime) : undefined!
        );
        setShiftEndDT(
          data.end_datetime ? new Date(data.end_datetime) : undefined!
        );
      })
      .catch((res) => res.json());
  }, []);
  let message = "";
  let onConfirm = () => {};

  if (!shiftStartDT) {
    message = "Are you sure you want to start your shift?";
    onConfirm = () => {
      fetch("api/attendance/start/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) return res.json();
        })
        .then((data: Attendance) =>
          setShiftStartDT(new Date(data.start_datetime))
        );
    };
  }
  if (shiftStartDT && !shiftEndDT) {
    message = "Are you sure you want to end your shift?";
    onConfirm = () => {
      fetch("api/attendance/end/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) return res.json();
        })
        .then((data: Attendance) => setShiftEndDT(new Date(data.end_datetime)));
    };
  }
  return (
    <main>
      <Modal
        isVisible={modalVisible}
        message={message}
        onConfirm={onConfirm}
        handleVisiblity={(isVisible) => setModalVisible(isVisible)}
      />
      <article className="flex p-3">
        <div className="flex flex-col gap-4 w-full">
          <Card radius="sm" className="w-full">
            <CardBody>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <p className="font-bold">{member.full_name}</p>
                  <Chip color="primary" variant="flat">
                    {member.job}
                  </Chip>
                </div>
                <div>
                  <ThemeSwitcher />
                </div>
              </div>
            </CardBody>
          </Card>
          <Card radius="sm" className="w-full">
            <CardBody>
              <div className="flex gap-4">
                <Chip
                  color={member.shift?.sun ? "success" : "danger"}
                  variant="flat"
                >
                  Sun
                </Chip>
                <Chip
                  color={member.shift?.mon ? "success" : "danger"}
                  variant="flat"
                >
                  Mon
                </Chip>
                <Chip
                  color={member.shift?.tues ? "success" : "danger"}
                  variant="flat"
                >
                  Tues
                </Chip>
                <Chip
                  color={member.shift?.wed ? "success" : "danger"}
                  variant="flat"
                >
                  Wed
                </Chip>
                <Chip
                  color={member.shift?.thurs ? "success" : "danger"}
                  variant="flat"
                >
                  Thurs
                </Chip>
                <Chip
                  color={member.shift?.fri ? "success" : "danger"}
                  variant="flat"
                >
                  Fri
                </Chip>
                <Chip
                  color={member.shift?.sat ? "success" : "danger"}
                  variant="flat"
                >
                  Sat
                </Chip>
              </div>
            </CardBody>
          </Card>
          <Card radius="sm" className="w-full">
            <CardHeader className="flex gap-3">
              <p className="font-bold">
                {shiftStartDT
                  ? moment(shiftStartDT)
                      .tz("Africa/Cairo")
                      .format("MMMM Do YYYY")
                  : "UNSET"}
              </p>
            </CardHeader>
            <CardBody>
              <div className="flex gap-2 items-center">
                <p>Started At:</p>
                <span className="text-success font-bold">
                  {shiftStartDT
                    ? moment(shiftStartDT)
                        .tz("Africa/Cairo")
                        .format("MMMM Do YYYY, h:mm:ss a")
                    : "UNSET"}
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <p>Ended At:</p>
                <span className="text-danger font-bold">
                  {shiftEndDT
                    ? moment(shiftEndDT)
                        .tz("Africa/Cairo")
                        .format("MMMM Do YYYY, h:mm:ss a")
                    : "UNSET"}
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <p>Shift Time:</p>
                <span className="font-bold text-secondary">
                  {convertSecondsToDuration(shiftTime)}
                </span>
              </div>
            </CardBody>
          </Card>
          <Card radius="sm" className="w-full">
            <CardHeader className="flex gap-3">
              <p className="font-bold">Timer</p>
            </CardHeader>
            <CardBody>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <p>Remaining Time</p>
                  <span className="font-bold text-secondary">
                    {convertSecondsToHMS(
                      shiftTime >= passedTime ? shiftTime - passedTime : 0
                    )}
                  </span>
                </div>
                <div className="flex-col gap-2">
                  <p>Overtime</p>
                  <span className="font-bold text-warning">
                    {convertSecondsToHMS(
                      passedTime >= shiftTime ? passedTime - shiftTime : 0
                    )}
                  </span>
                </div>
              </div>
            </CardBody>
          </Card>
          {shiftStartDT && shiftEndDT ? (
            <Card radius="sm" className="w-full">
              <CardHeader className="flex gap-3">
                <p className="font-bold">Note</p>
              </CardHeader>
              <CardBody>
                <p>Next Shift Starts Next Day</p>
              </CardBody>
            </Card>
          ) : (
            <div className="self-end">
              {!shiftStartDT && (
                <Button
                  radius="sm"
                  variant="flat"
                  color="success"
                  onClick={() => setModalVisible(true)}
                >
                  Check in
                </Button>
              )}
              {shiftStartDT && !shiftEndDT && (
                <Button
                  radius="sm"
                  color="danger"
                  variant="flat"
                  onClick={() => setModalVisible(true)}
                >
                  Check out
                </Button>
              )}
            </div>
          )}
        </div>
      </article>
    </main>
  );
}
