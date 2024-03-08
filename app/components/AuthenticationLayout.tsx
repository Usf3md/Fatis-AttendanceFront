"use client";
import { Suspense, useEffect, useState } from "react";
import Authenticator from "@/services/auth";
import LoginForm from "./LoginForm";
import FullPageSpinner from "./FullPageSpinner";
import { Member } from "../api/attendance/member/schema";
import MemberContext from "../contexts/MemberContext";

const AuthenticationLayout = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [member, setMember] = useState<Member>({} as Member);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    Authenticator.verify().then((res) => {
      setIsLoading(false);
      setIsAuthenticated(res);
    });
  }, []);
  useEffect(() => {
    fetch("/api/attendance/member/me")
      .then((res) => res.json())
      .then((data: Member) => setMember(data));
  }, [isAuthenticated]);
  return (
    <>
      {isLoading ? (
        <div className="h-svh">
          <FullPageSpinner />
        </div>
      ) : !isAuthenticated ? (
        <LoginForm />
      ) : (
        <MemberContext.Provider value={{ member, setMember }}>
          <main>
            <Suspense fallback={<FullPageSpinner />}>{children}</Suspense>
          </main>
        </MemberContext.Provider>
      )}
    </>
  );
};

export default AuthenticationLayout;
