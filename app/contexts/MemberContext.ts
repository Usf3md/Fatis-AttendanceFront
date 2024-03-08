import React from "react";
import { Member } from "../api/attendance/member/schema";

interface MemberContextType {
  member: Member;
  setMember: React.Dispatch<React.SetStateAction<Member>>;
}

const MemberContext = React.createContext<MemberContextType>(
  {} as MemberContextType
);

export default MemberContext;
