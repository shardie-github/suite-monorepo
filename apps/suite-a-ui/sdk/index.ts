import { z } from "zod";
const base = process.env.NEXT_PUBLIC_API_BASE || "";
export const HealthZ = z.object({ ok: z.boolean().optional(), ts: z.string().optional() }).passthrough();
export const Readyz = z.object({ ready: z.boolean().optional() }).passthrough();
export const Pong = z.object({ pong: z.boolean().optional() }).passthrough();
async function j<T>(res: Response): Promise<T> {
  const text = await res.text();
  try { return JSON.parse(text) as T; } catch { return {} as T; }
}
export async function getHealthz(){ const r = await fetch(`${base}/healthz`, { cache: "no-store" }); return HealthZ.parse(await j(r)); }
export async function getReadyz(){ const r = await fetch(`${base}/readyz`, { cache: "no-store" }); return Readyz.parse(await j(r)); }
export async function getPing(){ const r = await fetch(`${base}/v1/ping`, { cache: "no-store" }); return Pong.parse(await j(r)); }
