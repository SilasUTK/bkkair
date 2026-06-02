"use client";

import { useRef, useState, type FormEvent } from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle,
  CircleAlert,
  Earth,
  LoaderCircle,
  Phone,
  Plane,
  User,
} from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const fieldClassName =
  "h-10 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-700 placeholder:text-slate-400 transition focus:border-orange-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-100";

const labelClassName = "mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500";

function getTodayString() {
  const now = new Date();
  const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return localDate.toISOString().split("T")[0];
}

export default function HeroForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [contactError, setContactError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const today = getTodayString();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const contact = (form.elements.namedItem("contact_detail") as HTMLInputElement)?.value.trim() ?? "";
    const contactConfirm = (form.elements.namedItem("contact_confirm") as HTMLInputElement)?.value.trim() ?? "";
    const travelDate = (form.elements.namedItem("travel_date") as HTMLInputElement)?.value ?? "";

    if (contact !== contactConfirm) {
      setContactError("ข้อมูลติดต่อกลับไม่ตรงกัน กรุณาตรวจสอบอีกครั้ง");
      return;
    }

    if (travelDate && travelDate < today) {
      setStatus("error");
      setContactError("");
      return;
    }

    setContactError("");
    setStatus("loading");

    const data: Record<string, string> = {
      form_source: "Homepage Lead Form",
      website: (form.elements.namedItem("website") as HTMLInputElement)?.value ?? "",
      destination: (form.elements.namedItem("destination") as HTMLSelectElement)?.value ?? "",
      visa_type: (form.elements.namedItem("visa_type") as HTMLSelectElement)?.value ?? "",
      full_name: (form.elements.namedItem("full_name") as HTMLInputElement)?.value.trim() ?? "",
      contact_detail: contact,
      travel_date: travelDate,
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => ({}));

      if (response.ok && (result.ok || result.success)) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-2.5">
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <input type="hidden" name="form_source" value="Homepage Lead Form" />

      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        <div>
          <label htmlFor="hero-destination" className={labelClassName}>
            <Earth className="h-3.5 w-3.5 text-orange-500" />
            ประเทศที่ต้องการไป *
          </label>
          <select id="hero-destination" name="destination" required defaultValue="" className={`${fieldClassName} cursor-pointer`}>
            <option value="" disabled>
              เลือกประเทศปลายทาง
            </option>
            <option value="Schengen">Schengen (กลุ่มเชงเก้น)</option>
            <option value="United Kingdom">United Kingdom (อังกฤษ)</option>
            <option value="United States">United States (อเมริกา)</option>
            <option value="Canada">Canada (แคนาดา)</option>
            <option value="Australia">Australia (ออสเตรเลีย)</option>
            <option value="Japan">Japan (ญี่ปุ่น)</option>
            <option value="South Korea">South Korea (เกาหลีใต้)</option>
            <option value="China">China (จีน)</option>
            <option value="Singapore">Singapore (สิงคโปร์)</option>
            <option value="Hong Kong">Hong Kong (ฮ่องกง)</option>
            <option value="Taiwan">Taiwan (ไต้หวัน)</option>
            <option value="Other">Other (อื่นๆ)</option>
          </select>
        </div>

        <div>
          <label htmlFor="hero-visa-type" className={labelClassName}>
            <Plane className="h-3.5 w-3.5 text-orange-500" />
            ประเภทวีซ่า
          </label>
          <select id="hero-visa-type" name="visa_type" defaultValue="" className={`${fieldClassName} cursor-pointer`}>
            <option value="">เลือกประเภท</option>
            <option value="ท่องเที่ยว">ท่องเที่ยว</option>
            <option value="ธุรกิจ">ธุรกิจ</option>
            <option value="เยี่ยมเยียน">เยี่ยมเยียน</option>
            <option value="นักเรียน">นักเรียน</option>
          </select>
        </div>

        <div>
          <label htmlFor="hero-full-name" className={labelClassName}>
            <User className="h-3.5 w-3.5 text-orange-500" />
            ชื่อ-นามสกุล *
          </label>
          <input id="hero-full-name" name="full_name" type="text" required placeholder="ชื่อ นามสกุล" className={fieldClassName} />
        </div>

        <div>
          <label htmlFor="hero-travel-date" className={labelClassName}>
            <CalendarDays className="h-3.5 w-3.5 text-orange-500" />
            วันที่เดินทาง *
          </label>
          <input id="hero-travel-date" name="travel_date" type="date" required min={today} className={fieldClassName} />
        </div>

        <div>
          <label htmlFor="hero-contact" className={labelClassName}>
            <Phone className="h-3.5 w-3.5 text-orange-500" />
            เบอร์/อีเมล/LINE *
          </label>
          <input
            id="hero-contact"
            name="contact_detail"
            type="text"
            required
            placeholder="เพื่อให้เราติดต่อกลับ"
            className={fieldClassName}
            onChange={() => setContactError("")}
          />
          <p className="mt-1.5 text-[11px] leading-relaxed text-slate-500">กรุณาตรวจสอบให้ถูกต้อง ทีมงานจะใช้ช่องทางนี้เพื่อติดต่อกลับ</p>
        </div>

        <div>
          <label htmlFor="hero-contact-confirm" className={labelClassName}>
            <Phone className="h-3.5 w-3.5 text-orange-500" />
            ยืนยันเบอร์/อีเมล/LINE *
          </label>
          <input
            id="hero-contact-confirm"
            name="contact_confirm"
            type="text"
            required
            placeholder="กรอกข้อมูลติดต่ออีกครั้ง"
            className={`${fieldClassName} ${contactError ? "border-red-500 focus:border-red-500 focus:ring-red-100" : ""}`}
            onChange={() => setContactError("")}
          />
          {contactError && (
            <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
              <CircleAlert className="h-3.5 w-3.5" />
              {contactError}
            </p>
          )}
        </div>
      </div>

      {status === "success" && (
        <div className="flex items-start gap-2.5 rounded-xl border border-emerald-100 bg-emerald-50 p-3 text-sm font-medium text-emerald-800">
          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" />
          <span>ส่งข้อมูลเรียบร้อยแล้ว ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง หากเป็นเคสเร่งด่วน กรุณาติดต่อ LINE OA: @823lateh</span>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-start gap-2.5 rounded-xl border border-red-100 bg-red-50 p-3 text-sm font-medium text-red-700">
          <CircleAlert className="mt-0.5 h-5 w-5 shrink-0" />
          <span>เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง หรือติดต่อเราทาง LINE</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="group mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-slate-800 px-5 text-sm font-bold text-white shadow-lg transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-65"
      >
        {status === "loading" ? (
          <>
            <LoaderCircle className="h-5 w-5 animate-spin" />
            กำลังส่ง...
          </>
        ) : (
          <>
            สั่งเอกสารเลย →
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
      <p className="text-center text-xs font-semibold leading-relaxed text-slate-500">
        ส่งภายใน 24 ชั่วโมง · ตรวจสอบโดยทีมงาน · ปลอดภัย 100%
      </p>
      <p className="text-center text-[11px] leading-relaxed text-slate-400">
        *BKK AIR ให้บริการจัดเตรียมเอกสารสนับสนุนเท่านั้น การอนุมัติวีซ่าขึ้นอยู่กับดุลยพินิจของสถานทูตหรือสถานกงสุล
      </p>
    </form>
  );
}
