import { redirect } from "next/navigation";

export default function Home() {
  redirect("https://perlerbeadsnew.zippland.com/"); // <- 改成你的工作台路径，比如 /workspace /editor 等
}
