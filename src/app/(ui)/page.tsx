"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Home() {
  const router = useRouter();

  useEffect(() => router.push("/dashboard"), []);

  return <></>;
}
export default Home;
