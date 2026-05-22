import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MarketingShell from "../../../components/marketing/MarketingShell";
import JsonLd from "../../../components/marketing/JsonLd";
import { blogPosts } from "../../../components/marketing/content";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | BKK AIR`,
    description: post.description,
  };
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: { "@type": "Organization", name: "BKK AIR" },
  };

  return (
    <MarketingShell>
      <JsonLd data={articleSchema} />
      <article className="bg-white px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-black uppercase tracking-widest text-[#f59e0b]">{post.category}</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">{post.intro}</p>

          <div className="prose prose-slate mt-10 max-w-none">
            <h2>ภาพรวมที่ควรรู้</h2>
            <p>
              การเตรียมเอกสารยื่นวีซ่าควรมองเป็นชุดข้อมูลเดียวกัน ได้แก่ วัตถุประสงค์การเดินทาง เส้นทาง วันที่เดินทาง
              ที่พัก และหลักฐานการกลับประเทศไทย เอกสารอย่าง flight reservation และ hotel reservation
              จึงควรสอดคล้องกับข้อมูลส่วนอื่นเสมอ
            </p>
            <h2>BKK AIR ช่วยอะไรได้บ้าง</h2>
            <p>
              BKK AIR ช่วยจัดเตรียมใบจองตั๋วเครื่องบิน ใบจองโรงแรม และเอกสารสนับสนุนตามแพ็กเกจที่ลูกค้าเลือก
              ทุกคำขอผ่านทีมงานตรวจสอบก่อนดำเนินการ ไม่ใช่ระบบออกตั๋วจริงอัตโนมัติ และไม่ใช่การรับประกันผลวีซ่า
            </p>
            <h2>ลิงก์ที่เกี่ยวข้อง</h2>
            <p>
              ดู <Link href="/packages">แพ็กเกจและราคา</Link>, อ่าน <Link href="/faq">คำถามที่พบบ่อย</Link>,
              หรือ <Link href="/contact">ติดต่อทีมงาน</Link> เพื่อสอบถามก่อนส่งคำขอ
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-6 text-blue-900">
            พร้อมให้ทีมงานตรวจสอบข้อมูลแล้ว? <Link href="/order" className="font-black underline">ส่งคำขอที่ /order</Link>
          </div>
        </div>
      </article>
    </MarketingShell>
  );
}

