import Image from "next/image";
import Tab from "./_component/Tab";
import PostForm from "./_component/PostForm";
import Post from "../_component/Post";
import TabProvider from "./_component/TabProvider";
import style from "./home.module.css";

export default function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        {[...new Array(10)].map((_, idx) => (
          <Post key={idx} />
        ))}
      </TabProvider>
    </main>
  );
}
