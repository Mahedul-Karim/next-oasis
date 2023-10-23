"use client";
import { useCtx } from "@/context/ContextProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Home() {
  const router = useRouter();
  const { user,setUser } = useCtx();
  useEffect(() => {
    if (user || JSON.parse(localStorage.getItem('oasisUser') as string)) {
      router.push("/dashboard");
    }else{
      router.push('/login')
    }
  }, []);

  return <></>;
}
export default Home;
