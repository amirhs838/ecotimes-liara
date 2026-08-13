"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader2, Save, Radio } from "lucide-react";

interface LiveItem {
  id: string;
  enabled: boolean;
  title: string;
  aparatUrl: string;
}

export default function LivePage() {
  const [item, setItem] = useState<LiveItem | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [title, setTitle] = useState("پخش زنده");
  const [aparatUrl, setAparatUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const load = useCallback(() => {
    setLoading(true);
    fetch("/api/admin/live")
      .then((r) => r.json())
      .then((d) => {
        if (d.item) {
          setItem(d.item);
          setEnabled(d.item.enabled);
          setTitle(d.item.title);
          setAparatUrl(d.item.aparatUrl);
        }
      })
      .catch(() => toast.error("بارگذاری تنظیمات پخش زنده ناموفق بود"))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => load(), [load]);

  async function save() {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/live", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ enabled, title, aparatUrl }),
      });
      const d = await res.json().catch(() => null);
      if (!res.ok || !d?.ok) throw new Error(d?.error ?? "ذخیره ناموفق بود");
      setItem(d.item);
      toast.success(
        d.item.enabled
          ? "پخش زنده روشن شد و در صفحه اصلی نمایش داده می‌شود"
          : "پخش زنده خاموش شد و از صفحه اصلی حذف می‌شود"
      );
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "ذخیره ناموفق بود");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="py-20 text-center text-sm text-zinc-500">
        <Loader2 className="w-5 h-5 animate-spin inline-block ml-2" />
        در حال بارگذاری...
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-5">
        <h1 className="text-2xl font-black text-zinc-900">پخش زنده</h1>
        <p className="text-sm text-zinc-500 mt-1">
          با روشن کردن این بخش، پخش زنده (آپارات) در انتهای صفحه اصلی سایت
          نمایش داده می‌شود و با خاموش کردن، حذف می‌شود.
        </p>
      </div>

      <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between bg-zinc-50 border-b border-zinc-200 px-4 py-3">
          <div className="flex items-center gap-2">
            <Radio className={`w-4 h-4 ${enabled ? "text-red-600" : "text-zinc-400"}`} />
            <h2 className="font-bold text-zinc-900 text-sm">وضعیت پخش زنده</h2>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                enabled ? "bg-red-100 text-red-700" : "bg-zinc-200 text-zinc-500"
              }`}
            >
              {enabled ? "روشن — در حال نمایش در سایت" : "خاموش"}
            </span>
          </div>
          {/* Toggle */}
          <button
            type="button"
            role="switch"
            aria-checked={enabled}
            onClick={() => setEnabled((v) => !v)}
            className={`relative w-11 h-6 rounded-full transition-colors ${
              enabled ? "bg-blue-600" : "bg-zinc-300"
            }`}
          >
            <span
              className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${
                enabled ? "left-0.5" : "left-[22px]"
              }`}
            />
          </button>
        </div>

        <div className="p-4 space-y-4">
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-zinc-800">عنوان بخش</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="پخش زنده"
              className="w-full border border-zinc-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-bold text-zinc-800">لینک آپارات</label>
            <input
              type="url"
              dir="ltr"
              value={aparatUrl}
              onChange={(e) => setAparatUrl(e.target.value)}
              placeholder="https://www.aparat.com/v/xxxx یا لینک embed"
              className="w-full border border-zinc-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-500 text-left"
            />
            <p className="text-[11px] text-zinc-400">
              لینک ویدیوی آپارات (aparat.com/v/...) یا لینک embed کامل — در سایت
              داخل پلیر نمایش داده می‌شود.
            </p>
          </div>

          <div className="pt-1">
            <button
              type="button"
              disabled={saving}
              onClick={save}
              className="inline-flex items-center gap-1.5 text-xs font-bold bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white px-4 py-2 rounded-md transition-colors"
            >
              {saving ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Save className="w-3.5 h-3.5" />
              )}
              ذخیره تنظیمات
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
