"use client";

import style from "./navMenu.module.css";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import {
  IconHome,
  IconHomeFilled,
  IconMessages,
  IconMessagesFilled,
  IconProfile,
  IconProfileFilled,
} from "@/app/_Icons";

export default function NavMenu() {
  const segment = useSelectedLayoutSegment();
  console.log(segment);
  const me = {
    // 임시로 내 정보 있는것처럼
    id: "zerohch0",
  };

  return (
    <>
      <li>
        <Link href="/home">
          <div className={style.navPill}>
            {segment === "home" ? (
              <>
                <IconHomeFilled />
                <div style={{ fontWeight: "bold" }}>홈</div>
              </>
            ) : (
              <>
                <IconHome />
                <div>홈</div>
              </>
            )}
          </div>
        </Link>
      </li>
      <li>
        <Link href="/explore">
          <div className={style.navPill}>
            {segment && ["search", "explore"].includes(segment) ? (
              <>
                <IconHomeFilled />
                <div style={{ fontWeight: "bold" }}>탐색하기</div>
              </>
            ) : (
              <>
                <IconHome />
                <div>탐색하기</div>
              </>
            )}
          </div>
        </Link>
      </li>
      <li>
        <Link href="/messages">
          <div className={style.navPill}>
            {segment === "messages" ? (
              <>
                <IconMessagesFilled />
                <div style={{ fontWeight: "bold" }}>쪽지</div>
              </>
            ) : (
              <>
                <IconMessages />
                <div>쪽지</div>
              </>
            )}
          </div>
        </Link>
      </li>
      {me?.id && (
        <li>
          <Link href={`/${me?.id}`}>
            <div className={style.navPill}>
              {segment === me.id ? (
                <>
                  <IconProfileFilled />
                  <div style={{ fontWeight: "bold" }}>프로필</div>
                </>
              ) : (
                <>
                  <IconProfile />
                  <div>프로필</div>
                </>
              )}
            </div>
          </Link>
        </li>
      )}
    </>
  );
}
