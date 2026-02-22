import { redirect } from "next/navigation";

export default function Home() {
  redirect("perler-beads-six.vercel.app"); // <- 改成你的工作台路径，比如 /workspace /editor 等
}
