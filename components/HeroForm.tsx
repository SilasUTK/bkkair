"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
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
  "h-11 w-full rounded-xl border border-white/15 bg-slate-900/80 px-4 text-sm font-semibold text-white placeholder:text-slate-500 transition focus:border-orange-400 focus:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20";

const labelClassName = "mb-1.5 flex items-center gap-1.5 text-xs font-bold text-slate-300";

const CONSENT_ERROR_MESSAGE =
  "กรุณายอมรับข้อกำหนดการใช้บริการและนโยบายความเป็นส่วนตัวก่อนส่งคำขอ";

function getTodayString() {
  const now = new Date();
  const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return localDate.toISOString().split("T")[0];
}

export default function HeroForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [contactError, setContactError] = useState("");
  const [consentAccepted, setConsentAccepted] = useState(false);
  const [consentError, setConsentError] = useState("");
  const [isFormReady, setIsFormReady] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const consentRef = useRef<HTMLInputElement>(null);
  const consentBoxRef = useRef<HTMLLabelElement>(null);
  const today = getTodayString();

  function getFormReady(form: HTMLFormElement | null) {
    if (!form) return false;
    const contact = (form.elements.namedItem("contact_detail") as HTMLInputElement)?.value.trim() ?? "";
    const contactConfirm = (form.elements.namedItem("contact_confirm") as HTMLInputElement)?.value.trim() ?? "";
    const acceptTerms = (form.elements.namedItem("accept_terms") as HTMLInputElement)?.checked ?? false;

    return form.checkValidity() && contact === contactConfirm && acceptTerms;
  }

  function getRequiredFieldsReady(form: HTMLFormElement | null) {
    if (!form) return false;
    const destination = (form.elements.namedItem("destination") as HTMLSelectElement)?.value ?? "";
    const fullName = (form.elements.namedItem("full_name") as HTMLInputElement)?.value.trim() ?? "";
    const contact = (form.elements.namedItem("contact_detail") as HTMLInputElement)?.value.trim() ?? "";
    const contactConfirm = (form.elements.namedItem("contact_confirm") as HTMLInputElement)?.value.trim() ?? "";
    const travelDate = (form.elements.namedItem("travel_date") as HTMLInputElement)?.value ?? "";

    return Boolean(destination && fullName && contact && contactConfirm && travelDate && travelDate >= today && contact === contactConfirm);
  }

  function refreshFormReady() {
    setIsFormReady(getFormReady(formRef.current));
  }

  function focusConsentError() {
    setConsentError(CONSENT_ERROR_MESSAGE);
    window.setTimeout(() => {
      consentBoxRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      consentRef.current?.focus({ preventScroll: true });
    }, 0);
  }

  function handleDisabledSubmitIntent() {
    if (!consentAccepted && getRequiredFieldsReady(formRef.current)) {
      focusConsentError();
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const contact = (form.elements.namedItem("contact_detail") as HTMLInputElement)?.value.trim() ?? "";
    const contactConfirm = (form.elements.namedItem("contact_confirm") as HTMLInputElement)?.value.trim() ?? "";
    const travelDate = (form.elements.namedItem("travel_date") as HTMLInputElement)?.value ?? "";
    const acceptTerms = (form.elements.namedItem("accept_terms") as HTMLInputElement)?.checked ?? false;

    if (!acceptTerms) {
      setStatus("idle");
      setContactError("");
      focusConsentError();
      refreshFormReady();
      return;
    }

    if (!form.checkValidity()) {
      setStatus("idle");
      setConsentError("");
      form.reportValidity();
      refreshFormReady();
      return;
    }

    if (contact !== contactConfirm) {
      setContactError("ข้อมูลติดต่อกลับไม่ตรงกัน กรุณาตรวจสอบอีกครั้ง");
      setConsentError("");
      refreshFormReady();
      return;
    }

    if (travelDate && travelDate < today) {
      setStatus("error");
      setContactError("");
      setConsentError("");
      refreshFormReady();
      return;
    }

    setContactError("");
    setConsentError("");
    setStatus("loading");

    const data: Record<string, string | boolean> = {
      form_source: "Homepage Lead Form",
      website: (form.elements.namedItem("website") as HTMLInputElement)?.value ?? "",
      destination: (form.elements.namedItem("destination") as HTMLSelectElement)?.value ?? "",
      visa_type: (form.elements.namedItem("visa_type") as HTMLSelectElement)?.value ?? "",
      full_name: (form.elements.namedItem("full_name") as HTMLInputElement)?.value.trim() ?? "",
      contact_detail: contact,
      travel_date: travelDate,
      consentAccepted: true,
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
        setConsentAccepted(false);
        setConsentError("");
        setIsFormReady(false);
        formRef.current?.reset();
      } else {
        const responseError = typeof result.error === "string" ? result.error : typeof result.message === "string" ? result.message : "";
        if (responseError === CONSENT_ERROR_MESSAGE) {
          setStatus("idle");
          focusConsentError();
          refreshFormReady();
          return;
        }
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      onInput={refreshFormReady}
      onChange={refreshFormReady}
      noValidate
      className="space-y-2.5"
    >
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
            วันที่เดินทาง (โดยประมาณ) *
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
            onChange={() => {
              setContactError("");
              setStatus((current) => (current === "success" ? "idle" : current));
            }}
          />
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
            className={`${fieldClassName} ${contactError ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}`}
            onChange={() => {
              setContactError("");
              setStatus((current) => (current === "success" ? "idle" : current));
            }}
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
        <div className="flex items-start gap-2.5 rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-3 text-sm font-medium text-emerald-200">
          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" />
          <span>ส่งข้อมูลเรียบร้อยแล้ว ทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง หากเป็นเคสเร่งด่วน กรุณาติดต่อ LINE OA: @823lateh</span>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-start gap-2.5 rounded-xl border border-red-500/25 bg-red-500/10 p-3 text-sm font-medium text-red-200">
          <CircleAlert className="mt-0.5 h-5 w-5 shrink-0" />
          <span>เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง หรือติดต่อเราทาง LINE</span>
        </div>
      )}

      <label
        ref={consentBoxRef}
        htmlFor="hero-accept-terms"
        className={`flex items-start gap-3 rounded-xl border bg-white/[0.03] p-3 text-xs font-medium leading-relaxed text-slate-300 transition ${
          consentError ? "border-red-400/80 shadow-[0_0_0_3px_rgba(248,113,113,0.16)]" : "border-white/10"
        }`}
      >
        <input
          ref={consentRef}
          id="hero-accept-terms"
          name="accept_terms"
          type="checkbox"
          required
          checked={consentAccepted}
          aria-invalid={Boolean(consentError)}
          aria-describedby={consentError ? "hero-accept-terms-error" : undefined}
          onChange={(event) => {
            setConsentAccepted(event.target.checked);
            setConsentError(event.target.checked ? "" : CONSENT_ERROR_MESSAGE);
            setStatus((current) => (current === "success" ? "idle" : current));
            window.setTimeout(refreshFormReady, 0);
          }}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 bg-slate-900 text-orange-500 focus:ring-2 focus:ring-orange-500/30"
        />
        <span>
          ฉันยอมรับ{" "}
          <Link href="/terms" className="font-bold text-orange-300 underline decoration-orange-300/40 underline-offset-2 hover:text-orange-200">
            ข้อกำหนดการใช้บริการ
          </Link>{" "}
          และ{" "}
          <Link href="/privacy-policy" className="font-bold text-orange-300 underline decoration-orange-300/40 underline-offset-2 hover:text-orange-200">
            นโยบายความเป็นส่วนตัว
          </Link>
        </span>
      </label>
      {consentError && (
        <p id="hero-accept-terms-error" className="-mt-1 flex items-start gap-1.5 text-xs font-bold text-red-300">
          <CircleAlert className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          {consentError}
        </p>
      )}

      <div onMouseDown={handleDisabledSubmitIntent}>
        <button
          type="submit"
          disabled={status === "loading" || status === "success" || !isFormReady}
          className="group mt-2 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-[18px] border border-white/[0.18] bg-[linear-gradient(135deg,#FF7A18_0%,#FF9A2E_48%,#FFB347_100%)] px-5 py-3.5 text-[16px] font-extrabold text-white shadow-[0_18px_36px_rgba(255,122,24,0.26),inset_0_1px_0_rgba(255,255,255,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_46px_rgba(255,122,24,0.4),inset_0_1px_0_rgba(255,255,255,0.38)] disabled:pointer-events-none disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-65"
        >
          {status === "loading" ? (
            <>
              <LoaderCircle className="h-5 w-5 animate-spin" />
              กำลังส่ง...
            </>
          ) : (
            <>
              ส่งคำขอ
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
