"use client";
import { useEffect, useState } from "react";
import { getHealthz, getReadyz, getPing } from "../../sdk";
export default function Health(){
  const [data,setData] = useState<Record<string,unknown>>({});
  useEffect(()=>{ (async()=>{
    try { setData(d=>({...d, healthz: await getHealthz()})); } catch {}
    try { setData(d=>({...d, readyz: await getReadyz()})); } catch {}
    try { setData(d=>({...d, ping: await getPing()})); } catch {}
  })(); },[]);
  return <div className="prose"><h2>Health</h2><pre>{JSON.stringify(data,null,2)}</pre></div>;
}
