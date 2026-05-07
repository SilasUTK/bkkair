import { AlertCircle, CheckCircle2, Clock3, Download, Eye, ReceiptText, UploadCloud } from "lucide-react";
import { documentVault, statusSteps, summaryCards } from "./portalData.js";

const defaultActiveRequest = {
  bookingCode: "BKK-00000",
  destination: "N/A",
  product: "No active request",
  status: "ไม่มีสถานะ",
  quotationAmount: "-",
  quotationDue: "-",
  documentValidUntil: "-"
};

export default function OverviewContent({ activeRequest, onOpenModal }) {
  // ป้องกัน undefined error
  const request = activeRequest || defaultActiveRequest;
  const requestCode = safeText(request?.bookingCode, defaultActiveRequest.bookingCode);
  const destination = safeText(request?.destination, defaultActiveRequest.destination);
  const product = safeText(request?.product, defaultActiveRequest.product);
  const status = safeText(request?.status, defaultActiveRequest.status);
  const quotationAmount = safeText(request?.quotationAmount, defaultActiveRequest.quotationAmount);
  const quotationDue = safeText(request?.quotationDue, defaultActiveRequest.quotationDue);
  const documentValidUntil = safeText(request?.documentValidUntil, defaultActiveRequest.documentValidUntil);

  return (
    <div className="mt-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {summaryCards.map((card) => {
          const Icon = card.icon;
          const label = safeText(card.label, "Summary");
          const value = safeText(card.value, "0");
          return (
            <article
              key={label}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-extrabold text-slate-500">{label}</p>
                  <p className="mt-2 text-3xl font-black text-slate-950">{value}</p>
                </div>
                <div className={`flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-2xl ${card.tone}`}>
                  {Icon && <Icon className="h-6 w-6" aria-hidden="true" />}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.45fr_0.9fr]">
        
        {/* Left Col: Tracker */}
        <section className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] sm:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-normal text-[#2563EB]">Active Request</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">
                {requestCode} · {destination}
              </h2>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-500">{product}</p>
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-xs font-black text-[#FF5722] ring-4 ring-orange-50/50">
              <Clock3 className="h-4 w-4" aria-hidden="true" />
              {status}
            </span>
          </div>

          <ol className="mt-8 space-y-4 lg:grid lg:grid-cols-4 lg:gap-4 lg:space-y-0">
            {statusSteps.map((step, index) => {
              const Icon = step.icon;
              const isDone = step.state === "done";
              const isActive = step.state === "active";
              const isLast = index === statusSteps.length - 1;
              const label = safeText(step.label, `Step ${index + 1}`);
              const description = safeText(step.description);
              const badgeClass = isDone
                ? "bg-emerald-50 text-[#22C55E]"
                : isActive
                  ? "bg-orange-50 text-[#FF5722] ring-4 ring-orange-100"
                  : "bg-slate-100 text-slate-400";
              const connectorClass = isDone ? "bg-[#22C55E]" : "bg-slate-200";

              return (
                <li
                  key={safeText(step.id, label)}
                  className="relative grid grid-cols-[2.5rem_1fr] gap-3 rounded-2xl border border-slate-100 bg-[#F8FAFC] p-4 transition-colors hover:border-blue-100 lg:block"
                >
                  {!isLast ? (
                    <span
                      className={`absolute left-[2.45rem] top-14 h-[calc(100%+1rem)] w-0.5 rounded-full lg:hidden ${connectorClass}`}
                      aria-hidden="true"
                    />
                  ) : null}

                  <div className="relative z-10 flex flex-col items-center lg:block">
                    <div className="flex w-full items-center">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl transition-all ${badgeClass}`}>
                        {isDone ? <CheckCircle2 className="h-5 w-5" aria-hidden="true" /> : (Icon && <Icon className="h-5 w-5" aria-hidden="true" />)}
                      </div>
                      {!isLast ? (
                        <span className={`ml-3 hidden h-0.5 min-w-0 flex-1 rounded-full lg:block ${connectorClass}`} aria-hidden="true" />
                      ) : null}
                    </div>
                  </div>

                  <div className="relative z-10 lg:mt-4">
                    <p className="text-xs font-black text-slate-400">{index + 1}</p>
                    <h3 className="mt-1 text-sm font-black text-slate-950">{label}</h3>
                    <p className="mt-1 text-xs font-semibold leading-5 text-slate-500">{description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        {/* Right Col: Action */}
        <aside className="rounded-[2rem] border border-orange-100 bg-white p-5 shadow-[0_20px_60px_-15px_rgba(255,87,34,0.08)] sm:p-7 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-50 blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <div className="flex items-start gap-4">
              <div className="flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-[#FF5722]">
                <ReceiptText className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-black text-[#FF5722] tracking-wide uppercase">Pending Action</p>
                <h2 className="mt-1 text-2xl font-black text-slate-950 tracking-tight">Quotation ready</h2>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-500">
                  กรุณาชำระเงินและอัปโหลดสลิปเพื่อให้ทีมงานเริ่มจัดเตรียมเอกสาร
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 p-5">
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-extrabold text-slate-500">ยอดชำระ</span>
                <span className="text-2xl font-black text-slate-950 tracking-tight">{quotationAmount}</span>
              </div>
              <div className="mt-3 flex items-center justify-between gap-4 text-sm font-bold text-slate-500 border-t border-slate-100 pt-3">
                <span>กำหนดชำระภายใน</span>
                <span className="text-orange-600 bg-orange-50 px-2 py-0.5 rounded">{quotationDue}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenModal?.("payment")}
              className="mt-6 inline-flex min-h-[3.5rem] w-full items-center justify-center gap-3 rounded-2xl bg-[#FF5722] px-5 py-4 text-sm font-black text-white shadow-[0_20px_40px_-20px_rgba(255,87,34,0.75)] transition-all hover:-translate-y-0.5 hover:bg-[#E64A19] hover:shadow-[0_25px_45px_-20px_rgba(255,87,34,0.8)]"
            >
              <UploadCloud className="h-5 w-5" aria-hidden="true" />
              อัปโหลดสลิปชำระเงิน
            </button>
          </div>
        </aside>
      </div>

      {/* Document Vault */}
      <section className="rounded-[2rem] border border-slate-100 bg-white p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] sm:p-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-[#22C55E]">Document Vault</p>
            <h2 className="mt-2 text-2xl font-black text-slate-950 tracking-tight">เอกสารสำหรับยื่นวีซ่า</h2>
            <p className="mt-2 text-sm font-semibold text-slate-500">
              เอกสารมีอายุถึงวันที่ {documentValidUntil}
            </p>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-xs font-black text-amber-700 ring-2 ring-amber-100">
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
            กรุณาใช้เอกสารก่อนวันหมดอายุ
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {documentVault.map((doc) => {
            const Icon = doc.icon;
            const id = safeText(doc.id, safeText(doc.name, "document"));
            const name = safeText(doc.name, "Document");
            const fileName = safeText(doc.fileName, "document.pdf");
            return (
              <article key={id} className="group rounded-2xl border border-slate-100 bg-[#F8FAFC] p-5 transition-all hover:bg-white hover:shadow-md hover:border-blue-100">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB] transition-transform group-hover:scale-105 group-hover:rotate-3">
                      {Icon && <Icon className="h-6 w-6" aria-hidden="true" />}
                    </div>
                    <div className="min-w-0">
                      <h3 className="truncate text-base font-black text-slate-950 group-hover:text-[#2563EB] transition-colors">{name}</h3>
                      <p className="mt-1 truncate text-sm font-semibold text-slate-500">{fileName}</p>
                      <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-[#22C55E]">
                        <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                        Ready PDF
                      </span>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <button
                      type="button"
                      className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-[#2563EB]"
                      aria-label={`Preview ${name}`}
                    >
                      <Eye className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#2563EB] bg-[#2563EB] text-white shadow-[0_16px_30px_-18px_rgba(37,99,235,0.8)] transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-[0_20px_34px_-18px_rgba(37,99,235,0.9)]"
                      aria-label={`Download ${name}`}
                    >
                      <Download className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function safeText(value, fallback = "") {
  if (value === null || value === undefined) return fallback;
  if (typeof value === "string" || typeof value === "number") return value;
  return fallback;
}
