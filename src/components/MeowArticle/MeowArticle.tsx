"use client";

import { useEffect, useState } from "react";
import styles from "./MeowArticle.module.css";

export const MeowArticle = () => {
  // ui 컴포넌트는 상태에서 ui가 업데이트 되어야한다.
  // next 초기 text 데이터를 정적 데이터로 setting해둔다. (ssg)
  const [text, setText] = useState("uploading data...");

  // 클라이언트 컴포넌트가 마운트 될 때 딱 한번 실행시킴
  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com")
      .then((res) => res.json())
      .then((data) => setText(data.data[0]));
  }, []);

  return <article className={styles.article}>{text}</article>;
};
