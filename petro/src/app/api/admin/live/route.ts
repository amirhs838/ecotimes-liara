import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { requireAdmin, isErrorResponse } from "@/lib/security";

export const runtime = "nodejs";

export async function GET(req: Request) {
  const guard = await requireAdmin(req);
  if (isErrorResponse(guard)) return guard.response;

  const item = await db.liveStream.findFirst();
  return NextResponse.json({ ok: true, item });
}

export async function PUT(req: Request) {
  const guard = await requireAdmin(req);
  if (isErrorResponse(guard)) return guard.response;

  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "بدنه درخواست نامعتبر است" }, { status: 400 });
  }

  const enabled = Boolean((body as Record<string, unknown>).enabled);
  const title = String((body as Record<string, unknown>).title ?? "پخش زنده").slice(0, 120);
  const aparatUrl = String((body as Record<string, unknown>).aparatUrl ?? "").trim().slice(0, 500);

  if (enabled && !aparatUrl) {
    return NextResponse.json(
      { ok: false, error: "برای روشن شدن پخش زنده، لینک آپارات لازم است" },
      { status: 400 }
    );
  }

  const existing = await db.liveStream.findFirst();
  const item = existing
    ? await db.liveStream.update({
        where: { id: existing.id },
        data: { enabled, title, aparatUrl },
      })
    : await db.liveStream.create({ data: { enabled, title, aparatUrl } });

  return NextResponse.json({ ok: true, item });
}
