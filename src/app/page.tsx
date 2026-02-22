wimport { redirect } from "next/navigation";

/**
 * Home page: redirect straight to the web workbench.
 * Change "/focus" to your real workbench route if needed (e.g. "/new", "/workspace").
 */
export default function Home() {
  redirect("/new");
}
