import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MarketingShell from "../../components/marketing/MarketingShell";
import { blogPosts } from "../../components/marketing/content";

export const metadata: Metadata = {
  title: "Blog | BKK AIR",
  description: "บทความเกี่ยวกับเอกสารยื่นวีซ่า ใบจองตั๋วเครื่องบิน ใบจองโรงแรม และการวางแผนเดินทางก่อนยื่นวีซ่า",
};

export default function BlogPage() {
  return (
    <MarketingShell>
      <section className="bg-white px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-widest text-[#2563EB]">Visa Knowledge</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Blog</h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              คู่มือและบทความ SEO ภาษาไทยสำหรับผู้ที่กำลังเตรียมเอกสารยื่นวีซ่า วางแผนใบจองตั๋ว และใบจองโรงแรม
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="flex h-full flex-col rounded-[2rem] border border-slate-100 bg-[#F8FAFC] p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-widest text-[#FF5722]">{post.category}</p>
                <h2 className="mt-3 text-2xl font-black leading-tight text-slate-900">{post.title}</h2>
                <p className="mt-3 flex-1 leading-relaxed text-slate-600">{post.description}</p>
                <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex items-center font-bold text-[#2563EB]">
                  อ่านบทความ <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

