"use client";

import { sectionRoleHint } from "@/lib/section-role";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import PostPicker, { type PostSummary } from "@/components/admin/post-picker";
import { Loader2, Plus, Save, X, GripVertical } from "lucide-react";
import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

/* eslint-disable @typescript-eslint/no-explicit-any */

interface Slot {
  uid: string;
  position: number;
  post: PostSummary;
}

let uidCounter = 0;
function nextUid() {
  uidCounter += 1;
  return `slot-${Date.now()}-${uidCounter}`;
}

function SortableRow({
  sectionKey,
  slot,
  single,
  onPositionChange,
  onRemove,
}: {
  sectionKey: string;
  slot: Slot;
  single?: boolean;
  onPositionChange: (position: number) => void;
  onRemove: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: slot.uid,
    data: { sectionKey },
  });
  return (
    <div
      ref={setNodeRef}
      style={{ transform: CSS.Transform.toString(transform), transition }}
      className={`flex items-center gap-2 border border-zinc-200 rounded-lg px-2.5 py-2 ${
        isDragging ? "opacity-50 shadow-md" : ""
      }`}
    >
      {!single && (
        <button
          type="button"
          className="cursor-grab p-1 text-zinc-400 hover:text-zinc-700 active:cursor-grabbing"
          title="جابه‌جایی"
          {...attributes}
          {...listeners}
        >
          <GripVertical className="w-4 h-4" />
        </button>
      )}
      {!single && (
        <input
          type="number"
          min={1}
          max={99}
          value={slot.position}
          onChange={(e) => {
            const v = parseInt(e.target.value, 10);
            onPositionChange(Number.isNaN(v) ? 1 : Math.max(1, v));
          }}
          className="w-14 text-center border border-zinc-300 rounded-md py-1 text-sm tabular-nums"
          title="موقعیت"
        />
      )}
      <span className="flex-1 min-w-0 text-sm text-zinc-800 line-clamp-1">
        {slot.post.title}
        {slot.post.status !== "PUBLISHED" && (
          <span className="mr-1.5 text-[10px] text-amber-600">
            ({slot.post.status === "DRAFT" ? "پیش‌نویس" : "زمان‌بندی"})
          </span>
        )}
      </span>
      <button
        type="button"
        onClick={onRemove}
        className="p-1 text-zinc-400 hover:text-red-600"
        title="حذف از بخش"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

export default function SectionsPage() {
  const [sections, setSections] = useState<any[]>([]);
  const [slots, setSlots] = useState<Record<string, Slot[]>>({});
  const [dirty, setDirty] = useState<Record<string, boolean>>({});
  const [saving, setSaving] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [newPosition, setNewPosition] = useState<Record<string, number>>({});

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 4 } }));

  const load = useCallback(() => {
    setLoading(true);
    fetch("/api/admin/sections")
      .then((r) => r.json())
      .then((d) => {
        const items = d.items ?? [];
        setSections(items);
        const map: Record<string, Slot[]> = {};
        for (const s of items) {
          map[s.key] = s.placements.map((p: any) => ({
            uid: nextUid(),
            position: p.position,
            post: { id: p.post.id, title: p.post.title, status: p.post.status },
          }));
        }
        setSlots(map);
        setDirty({});
      })
      .catch(() => toast.error("بارگذاری بخش‌ها ناموفق بود"))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => load(), [load]);

  function updateSection(key: string, next: Slot[]) {
    setSlots((s) => ({ ...s, [key]: next }));
    setDirty((d) => ({ ...d, [key]: true }));
  }

  function addSlot(key: string, post: PostSummary) {
    const pos = newPosition[key] ?? 1;
    const cap = sections.find((s) => s.key === key)?.capacity ?? 1;
    // single-capacity slots: the new post simply takes the place
    if (cap <= 1) {
      updateSection(key, [{ uid: nextUid(), position: 1, post }]);
      return;
    }
    const current = slots[key] ?? [];
    updateSection(key, [...current, { uid: nextUid(), position: pos, post }]);
  }

  function removeSlot(key: string, uid: string) {
    updateSection(
      key,
      (slots[key] ?? []).filter((s) => s.uid !== uid)
    );
  }

  function moveSlot(key: string, uid: string, position: number) {
    updateSection(
      key,
      (slots[key] ?? []).map((s) => (s.uid === uid ? { ...s, position } : s))
    );
  }

  function reorderSlots(key: string, uid: string, overUid: string | null) {
    if (!overUid || uid === overUid) return;
    const current = slots[key] ?? [];
    const from = current.findIndex((s) => s.uid === uid);
    const to = current.findIndex((s) => s.uid === overUid);
    if (from === -1 || to === -1) return;
    const reordered = arrayMove(current, from, to).map((s, i) => ({ ...s, position: i + 1 }));
    updateSection(key, reordered);
  }

  function onDragEnd(e: DragEndEvent) {
    const key = String(e.active.data.current?.sectionKey ?? "");
    if (!key) return;
    reorderSlots(key, String(e.active.id), e.over ? String(e.over.id) : null);
  }

  async function save(key: string) {
    setSaving(key);
    try {
      const res = await fetch(`/api/admin/sections/${key}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          placements: (slots[key] ?? []).map((s) => ({
            postId: s.post.id,
            position: s.position,
          })),
        }),
      });
      const d = await res.json().catch(() => null);
      if (!res.ok || !d?.ok) throw new Error(d?.error ?? "ذخیره ناموفق بود");
      toast.success("چیدمان ذخیره شد");
      setDirty((dd) => ({ ...dd, [key]: false }));
      load();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "ذخیره ناموفق بود");
    } finally {
      setSaving(null);
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
    <div>
      <div className="mb-5">
        <h1 className="text-2xl font-black text-zinc-900">چیدمان صفحه اصلی</h1>
        <p className="text-sm text-zinc-500 mt-1">
          پست‌های هر بخش و موقعیت آن‌ها را مدیریت کنید — برای جابه‌جایی، آیتم‌ها را
          بکشید و رها کنید. یک پست می‌تواند در چند بخش و حتی چند موقعیت از یک بخش باشد.
          بخش‌های تک‌خانه‌ای با افزودن پست جدید، خودکار جایگزین پست قبلی می‌شوند.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {sections.map((s) => {
          const list = (slots[s.key] ?? []).slice().sort((a, b) => a.position - b.position);
          return (
            <div key={s.key} className="bg-white border border-zinc-200 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between bg-zinc-50 border-b border-zinc-200 px-4 py-3">
                <div>
                  <h2 className="font-bold text-zinc-900 text-sm">{s.name}</h2>
                  {sectionRoleHint(s.key) && (
                    <span className="text-[10px] text-zinc-400">
                      {sectionRoleHint(s.key)}
                    </span>
                  )}
                  <span className="text-[10px] text-zinc-400 block">
                    ظرفیت نمایش: {s.capacity}
                  </span>
                  {s.capacity <= 1 && (
                    <p className="text-[10px] text-blue-500 mt-0.5">
                      تک‌خانه — پست جدید خودکار جایگزین قبلی می‌شود
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  disabled={!dirty[s.key] || saving === s.key}
                  onClick={() => save(s.key)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white px-3 py-1.5 rounded-md transition-colors"
                >
                  {saving === s.key ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  ) : (
                    <Save className="w-3.5 h-3.5" />
                  )}
                  ذخیره
                </button>
              </div>

              <div className="p-3 space-y-2">
                {list.length === 0 && (
                  <p className="text-xs text-zinc-400 py-2 text-center">
                    هنوز پستی در این بخش قرار نگرفته
                  </p>
                )}
                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
                  <SortableContext
                    items={list.map((slot) => slot.uid)}
                    strategy={verticalListSortingStrategy}
                  >
                    {list.map((slot) => (
                      <SortableRow
                        key={slot.uid}
                        sectionKey={s.key}
                        slot={slot}
                        single={s.capacity <= 1}
                        onPositionChange={(position) => moveSlot(s.key, slot.uid, position)}
                        onRemove={() => removeSlot(s.key, slot.uid)}
                      />
                    ))}
                  </SortableContext>
                </DndContext>

                {/* add row */}
                <div className="flex items-center gap-2 pt-1">
                  {s.capacity > 1 && (
                    <input
                      type="number"
                      min={1}
                      max={99}
                      value={newPosition[s.key] ?? 1}
                      onChange={(e) => {
                        const v = parseInt(e.target.value, 10);
                        setNewPosition((p) => ({
                          ...p,
                          [s.key]: Number.isNaN(v) ? 1 : Math.max(1, v),
                        }));
                      }}
                      className="w-14 text-center border border-zinc-300 rounded-md py-1.5 text-sm tabular-nums"
                      title="موقعیت"
                    />
                  )}
                  <PostPicker
                    placeholder="افزودن پست به این بخش..."
                    onSelect={(post) => addSlot(s.key, post)}
                  />
                  <span className="text-zinc-300">
                    <Plus className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}