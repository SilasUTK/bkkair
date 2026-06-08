export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  href?: string;
};

export type FaqTopic = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  keywords: string[];
  sections: Array<{
    heading: string;
    body: string;
  }>;
  faqIds: string[];
};

export const faqItems: FaqItem[] = [
  {
    id: "flight-reservation-meaning",
    question: "ใบจองตั๋วเครื่องบินสำหรับยื่นวีซ่าคืออะไร?",
    answer:
      "คือเอกสารแสดงแผนการเดินทางทางอากาศ เช่น ชื่อผู้เดินทาง เส้นทาง วันเดินทาง และรายละเอียดเที่ยวบิน ใช้เป็นเอกสารสนับสนุนประกอบคำขอวีซ่า ไม่ใช่ตั๋วโดยสารจริงที่ชำระเงินแล้ว",
    href: "/faq/flight-reservation-for-visa",
  },
  {
    id: "flight-reservation-vs-ticket",
    question: "Flight Reservation ต่างจากตั๋วเครื่องบินจริงอย่างไร?",
    answer:
      "Flight Reservation ใช้แสดงแผนการเดินทางเพื่อประกอบการยื่นวีซ่า ส่วนตั๋วเครื่องบินจริงคือบัตรโดยสารที่ชำระเงินและยืนยันการเดินทางแล้ว BKK AIR ให้บริการจัดเตรียมเอกสารสนับสนุน ไม่ได้ออกตั๋วจริงอัตโนมัติ",
    href: "/faq/flight-reservation-for-visa",
  },
  {
    id: "flight-reservation-schengen",
    question: "ใช้ Flight Reservation ยื่นวีซ่า Schengen ได้หรือไม่?",
    answer:
      "โดยทั่วไปคำขอวีซ่า Schengen มักต้องแสดงแผนการเดินทาง เช่น เส้นทางบิน ที่พัก แผนรายวัน และประกันการเดินทาง แต่ข้อกำหนดอาจต่างกันตามประเทศที่ยื่น ควรตรวจสอบกับสถานทูตหรือศูนย์รับคำร้องก่อนเสมอ",
    href: "/faq/schengen-visa-support-documents",
  },
  {
    id: "flight-reservation-uk",
    question: "ใช้ Flight Reservation ยื่นวีซ่า UK ได้หรือไม่?",
    answer:
      "เอกสารแผนการเดินทางและที่พักอาจช่วยอธิบายวัตถุประสงค์การเดินทางสำหรับ UK Visa ได้ในบางกรณี แต่ข้อกำหนดของ UKVI อาจเปลี่ยนแปลงและขึ้นอยู่กับประเภทวีซ่า ควรตรวจสอบคำแนะนำล่าสุดก่อนยื่น",
    href: "/faq/uk-visa-support-documents",
  },
  {
    id: "flight-reservation-canada",
    question: "ใช้ Flight Reservation ยื่นวีซ่า Canada ได้หรือไม่?",
    answer:
      "สามารถใช้เป็นเอกสารสนับสนุนเพื่ออธิบายแผนการเดินทาง ที่พัก และวัตถุประสงค์การไปแคนาดาได้ตามความเหมาะสม อย่างไรก็ตาม การพิจารณาเป็นอำนาจของ IRCC เท่านั้น",
    href: "/faq/canada-visa-support-documents",
  },
  {
    id: "flight-reservation-australia",
    question: "ใช้ Flight Reservation ยื่นวีซ่า Australia ได้หรือไม่?",
    answer:
      "สามารถใช้ประกอบการอธิบายเส้นทางและช่วงเวลาเดินทางสำหรับวีซ่า Australia ได้ในบางกรณี ทั้งนี้ควรตรวจสอบรายการเอกสารตามประเภทวีซ่า และผลการพิจารณาขึ้นอยู่กับหน่วยงานตรวจคนเข้าเมืองออสเตรเลีย",
    href: "/faq/australia-visa-support-documents",
  },
  {
    id: "hotel-reservation-meaning",
    question: "ใบจองโรงแรมสำหรับยื่นวีซ่าคืออะไร?",
    answer:
      "คือเอกสารแสดงรายละเอียดที่พัก เช่น ชื่อผู้เข้าพัก วันที่เข้าพัก ชื่อโรงแรม และเมืองปลายทาง เพื่อช่วยให้แผนการเดินทางมีความสอดคล้องสำหรับประกอบคำขอวีซ่า",
    href: "/faq/hotel-reservation-for-visa",
  },
  {
    id: "hotel-payment-needed",
    question: "ต้องจ่ายค่าโรงแรมจริงก่อนยื่นวีซ่าหรือไม่?",
    answer:
      "หลายกรณีผู้ยื่นไม่จำเป็นต้องชำระค่าโรงแรมจริงล่วงหน้าก่อนทราบผลวีซ่า แต่ข้อกำหนดแตกต่างกันตามสถานทูตและประเภทวีซ่า ควรตรวจสอบเงื่อนไขล่าสุดจากหน่วยงานที่เกี่ยวข้อง",
    href: "/faq/hotel-reservation-for-visa",
  },
  {
    id: "travel-itinerary-meaning",
    question: "Travel Itinerary คืออะไร?",
    answer:
      "Travel Itinerary คือแผนการเดินทางที่สรุปกิจกรรม เมืองที่พัก เส้นทาง และช่วงเวลาในแต่ละวัน เพื่ออธิบายวัตถุประสงค์และความสมเหตุสมผลของทริป",
    href: "/faq/travel-itinerary-for-visa",
  },
  {
    id: "schengen-itinerary-needed",
    question: "แผนการเดินทางจำเป็นสำหรับวีซ่า Schengen หรือไม่?",
    answer:
      "วีซ่า Schengen มักให้ความสำคัญกับแผนเดินทางที่ชัดเจนและสอดคล้องกับใบจองตั๋ว โรงแรม และประกันการเดินทาง แต่รายละเอียดเอกสารอาจต่างกันตามประเทศที่ยื่น",
    href: "/faq/schengen-visa-support-documents",
  },
  {
    id: "pdf-delivery",
    question: "เอกสารที่ได้รับเป็น PDF หรือไม่?",
    answer:
      "ใช่ เอกสารที่ BKK AIR จัดเตรียมจะส่งเป็นไฟล์ PDF สำหรับแนบหรือพิมพ์ประกอบชุดเอกสารยื่นวีซ่าตามข้อมูลที่ลูกค้าแจ้ง",
  },
  {
    id: "delivery-time",
    question: "ได้รับเอกสารภายในกี่ชั่วโมง?",
    answer:
      "โดยทั่วไปทีมงานจะแจ้งระยะเวลาดำเนินการหลังตรวจสอบคำขอและข้อมูลครบถ้วน หลายแพ็กเกจระบุกรอบส่งภายใน 24 ชั่วโมง ทั้งนี้ขึ้นอยู่กับรายละเอียดงานและความครบถ้วนของข้อมูล",
  },
  {
    id: "edit-after-order",
    question: "สามารถแก้ไขข้อมูลหลังสั่งซื้อได้หรือไม่?",
    answer:
      "สามารถแจ้งแก้ไขได้ หากทีมงานยังไม่เริ่มจัดทำหรือยังไม่ส่งไฟล์ โดยหลังเริ่มงานแล้วอาจมีข้อจำกัดหรือค่าใช้จ่ายเพิ่มเติมตามกรณี",
  },
  {
    id: "multiple-passengers",
    question: "สามารถสั่งหลายผู้โดยสารพร้อมกันได้หรือไม่?",
    answer:
      "ได้ ลูกค้าสามารถส่งคำขอหลายผู้โดยสารพร้อมกันได้ โดยควรกรอกชื่อและข้อมูลตามหนังสือเดินทางให้ถูกต้องครบถ้วนสำหรับทุกคน",
  },
  {
    id: "all-countries",
    question: "รองรับทุกประเทศหรือไม่?",
    answer:
      "BKK AIR รองรับหลายประเทศยอดนิยม เช่น Schengen, UK, Canada, Australia, Japan และ Korea หากประเทศปลายทางไม่อยู่ในรายการ สามารถติดต่อทีมงานเพื่อประเมินเอกสารที่เหมาะสม",
  },
  {
    id: "refund-if-rejected",
    question: "หากวีซ่าไม่ผ่านสามารถขอคืนเงินได้หรือไม่?",
    answer:
      "การไม่ผ่านวีซ่าไม่ใช่เหตุคืนเงินโดยอัตโนมัติ เพราะ BKK AIR ให้บริการจัดเตรียมเอกสารสนับสนุน ไม่ได้มีส่วนตัดสินผลวีซ่า เงื่อนไขคืนเงินเป็นไปตามนโยบายบริการและสถานะการดำเนินงาน",
  },
  {
    id: "not-visa-agency",
    question: "BKK AIR เป็นตัวแทนวีซ่าหรือไม่?",
    answer:
      "ไม่ใช่ BKK AIR ไม่ใช่ตัวแทนวีซ่าและไม่ใช่ผู้แทนสถานทูต เราให้บริการจัดเตรียมเอกสารสนับสนุนการยื่นวีซ่าตามข้อมูลการเดินทางของลูกค้าเท่านั้น",
  },
  {
    id: "no-embassy-relationship",
    question: "BKK AIR มีความสัมพันธ์กับสถานทูตหรือไม่?",
    answer:
      "ไม่มี BKK AIR ไม่มีความสัมพันธ์พิเศษกับสถานทูต สถานกงสุล หรือศูนย์รับคำร้องใด ๆ และไม่สามารถแทรกแซงหรือเร่งผลการพิจารณาวีซ่าได้",
  },
  {
    id: "no-visa-guarantee",
    question: "BKK AIR รับประกันผลวีซ่าหรือไม่?",
    answer:
      "ไม่รับประกัน ผลวีซ่าขึ้นอยู่กับดุลยพินิจของสถานทูตหรือสถานกงสุลเท่านั้น เอกสารของ BKK AIR เป็นเพียงเอกสารสนับสนุนเพื่อช่วยให้ข้อมูลการเดินทางชัดเจนขึ้น",
  },
  {
    id: "schengen-package",
    question: "ควรเลือกแพ็กเกจไหนสำหรับยื่นวีซ่า Schengen?",
    answer:
      "โดยทั่วไป Schengen มักต้องใช้ใบจองตั๋วเครื่องบิน ใบจองโรงแรม แผนการเดินทาง และประกันการเดินทาง ลูกค้าที่ต้องการความสอดคล้องของเอกสารมักเลือกแพ็กเกจชุดครบ หรือปรึกษาทีมงานก่อนสั่งได้",
    href: "/faq/schengen-visa-support-documents",
  },
];

export const faqTopicPages: Record<string, FaqTopic> = {
  "flight-reservation-for-visa": {
    slug: "flight-reservation-for-visa",
    title: "ใบจองตั๋วเครื่องบินสำหรับยื่นวีซ่า | BKK AIR",
    description:
      "อธิบาย Flight Reservation for Visa คืออะไร ต่างจากตั๋วจริงอย่างไร และใช้เป็นเอกสารสนับสนุนวีซ่าได้ในกรณีใด",
    h1: "ใบจองตั๋วเครื่องบินสำหรับยื่นวีซ่า",
    intro:
      "Flight Reservation for Visa คือเอกสารที่ช่วยอธิบายแผนการเดินทางทางอากาศสำหรับประกอบคำขอวีซ่า โดยไม่ใช่ตั๋วเครื่องบินจริงที่ชำระเงินแล้ว",
    keywords: ["ใบจองตั๋วเครื่องบินสำหรับยื่นวีซ่า", "Flight Reservation for Visa", "Temporary Flight Reservation for Visa"],
    sections: [
      {
        heading: "Flight Reservation คืออะไร",
        body: "เอกสารนี้แสดงข้อมูลสำคัญ เช่น ชื่อผู้เดินทาง เส้นทาง วันเดินทาง และรายละเอียดเที่ยวบิน เพื่อให้เจ้าหน้าที่เห็นภาพรวมแผนการเดินทางของผู้ยื่นวีซ่า",
      },
      {
        heading: "ต่างจากตั๋วเครื่องบินจริงอย่างไร",
        body: "ตั๋วจริงคือบัตรโดยสารที่ชำระเงินและยืนยันการเดินทางแล้ว ส่วน Flight Reservation เป็นเอกสารสนับสนุนการยื่นวีซ่า BKK AIR ไม่ออกตั๋วจริงอัตโนมัติและไม่ยืนยันการเดินทางแทนสายการบิน",
      },
      {
        heading: "เหมาะกับวีซ่าประเภทใด",
        body: "มักใช้ประกอบคำขอวีซ่าท่องเที่ยวหรือเยี่ยมเยียน เช่น Schengen, UK, Canada และ Australia ตามความเหมาะสมของแต่ละกรณี ควรตรวจสอบข้อกำหนดล่าสุดกับสถานทูตหรือศูนย์รับคำร้อง",
      },
    ],
    faqIds: ["flight-reservation-meaning", "flight-reservation-vs-ticket", "flight-reservation-schengen", "no-visa-guarantee"],
  },
  "hotel-reservation-for-visa": {
    slug: "hotel-reservation-for-visa",
    title: "ใบจองโรงแรมสำหรับยื่นวีซ่า | BKK AIR",
    description:
      "คำแนะนำเรื่อง Hotel Reservation for Visa เอกสารที่พักสำหรับประกอบคำขอวีซ่าและการจัดแผนเดินทางให้สอดคล้อง",
    h1: "ใบจองโรงแรมสำหรับยื่นวีซ่า",
    intro:
      "Hotel Reservation for Visa ช่วยแสดงรายละเอียดที่พักและช่วงเวลาเข้าพัก เพื่อให้แผนการเดินทางมีความชัดเจนและสอดคล้องกับเอกสารอื่น",
    keywords: ["ใบจองโรงแรมสำหรับยื่นวีซ่า", "Hotel Reservation for Visa", "Visa Application Documents"],
    sections: [
      {
        heading: "ใบจองโรงแรมคืออะไร",
        body: "เป็นเอกสารแสดงชื่อผู้เข้าพัก ชื่อโรงแรม เมืองปลายทาง และวันที่เช็คอิน-เช็คเอาท์ สำหรับใช้เป็นเอกสารสนับสนุนประกอบชุดคำขอวีซ่า",
      },
      {
        heading: "ทำไมสถานทูตอาจขอรายละเอียดที่พัก",
        body: "รายละเอียดที่พักช่วยอธิบายว่าผู้เดินทางมีแผนพำนักในเมืองใดและช่วงเวลาใด ทำให้ข้อมูลสอดคล้องกับเส้นทางบินและแผนรายวัน",
      },
      {
        heading: "ข้อกำหนดอาจแตกต่างกัน",
        body: "บางประเทศอาจขอรายละเอียดที่พักมากหรือน้อยต่างกัน การยอมรับเอกสารขึ้นอยู่กับสถานทูตหรือศูนย์รับคำร้อง และไม่ใช่การรับประกันผลวีซ่า",
      },
    ],
    faqIds: ["hotel-reservation-meaning", "hotel-payment-needed", "pdf-delivery", "no-visa-guarantee"],
  },
  "travel-itinerary-for-visa": {
    slug: "travel-itinerary-for-visa",
    title: "แผนการเดินทางสำหรับยื่นวีซ่า | BKK AIR",
    description:
      "Travel Itinerary for Visa คืออะไร ทำไมแผนรายวันช่วยให้เอกสารยื่นวีซ่าสอดคล้องกับตั๋วและโรงแรม",
    h1: "แผนการเดินทางสำหรับยื่นวีซ่า",
    intro:
      "Travel Itinerary for Visa คือแผนรายวันที่ช่วยอธิบายวัตถุประสงค์การเดินทาง เมืองที่พัก และกิจกรรมหลักของทริป",
    keywords: ["แผนการเดินทางสำหรับยื่นวีซ่า", "Travel Itinerary for Visa", "Visa Support Documents Thailand"],
    sections: [
      {
        heading: "Travel Itinerary คืออะไร",
        body: "เป็นเอกสารสรุปแผนเดินทางแบบวันต่อวัน เช่น เมืองที่อยู่ กิจกรรมหลัก และที่พัก เพื่อช่วยให้ภาพรวมการเดินทางชัดเจน",
      },
      {
        heading: "ทำไมแผนรายวันจึงสำคัญ",
        body: "แผนรายวันที่ดีช่วยเชื่อมโยงเส้นทางบิน ที่พัก และวัตถุประสงค์ของทริปให้สอดคล้องกัน โดยเฉพาะกรณีเดินทางหลายเมืองหรือหลายประเทศ",
      },
      {
        heading: "เหมาะกับประเทศใด",
        body: "มักใช้กับ Schengen และปลายทางอื่นที่ต้องการเห็นแผนการเดินทางชัดเจน ทั้งนี้ข้อกำหนดขึ้นอยู่กับสถานทูตหรือศูนย์รับคำร้องแต่ละแห่ง",
      },
    ],
    faqIds: ["travel-itinerary-meaning", "schengen-itinerary-needed", "pdf-delivery", "edit-after-order"],
  },
  "schengen-visa-support-documents": {
    slug: "schengen-visa-support-documents",
    title: "เอกสารสนับสนุนวีซ่า Schengen | BKK AIR",
    description:
      "แนวทางเอกสารสนับสนุนวีซ่า Schengen เช่น Flight Reservation, Hotel Reservation, Travel Itinerary และประกันการเดินทาง",
    h1: "เอกสารสนับสนุนวีซ่า Schengen",
    intro:
      "Schengen Visa Supporting Documents มักต้องแสดงแผนเดินทางที่ชัดเจนและสอดคล้องกัน ทั้งเส้นทางบิน ที่พัก แผนรายวัน และประกันการเดินทาง",
    keywords: ["เอกสารสนับสนุนวีซ่า Schengen", "Schengen Visa Supporting Documents", "Visa Application Documents"],
    sections: [
      {
        heading: "เอกสารสนับสนุนที่พบบ่อย",
        body: "โดยทั่วไปอาจมีใบจองตั๋วเครื่องบิน ใบจองโรงแรม แผนการเดินทางรายวัน และประกันการเดินทาง รวมถึงเอกสารส่วนตัวและการเงินตามข้อกำหนดของประเทศที่ยื่น",
      },
      {
        heading: "ความสอดคล้องของข้อมูลสำคัญมาก",
        body: "วันที่เดินทาง เมืองปลายทาง ที่พัก และกิจกรรมควรสอดคล้องกัน เพื่อช่วยลดความสับสนในชุดเอกสารประกอบคำขอวีซ่า",
      },
      {
        heading: "ข้อจำกัดสำคัญ",
        body: "BKK AIR ไม่ใช่ตัวแทนวีซ่า ไม่มีความสัมพันธ์พิเศษกับสถานทูต และไม่รับประกันผลวีซ่า การพิจารณาเป็นอำนาจของสถานทูตหรือสถานกงสุลเท่านั้น",
      },
    ],
    faqIds: ["flight-reservation-schengen", "schengen-itinerary-needed", "schengen-package", "no-visa-guarantee"],
  },
  "uk-visa-support-documents": {
    slug: "uk-visa-support-documents",
    title: "เอกสารสนับสนุนวีซ่า UK | BKK AIR",
    description:
      "แนวทางเอกสารสนับสนุนวีซ่า UK เช่น แผนเดินทาง ที่พัก และ Flight Reservation พร้อมข้อจำกัดตาม UKVI",
    h1: "เอกสารสนับสนุนวีซ่า UK",
    intro:
      "UK Visa Supporting Documents ควรช่วยอธิบายวัตถุประสงค์การเดินทาง ช่วงเวลาเดินทาง และรายละเอียดที่พักอย่างชัดเจน",
    keywords: ["เอกสารสนับสนุนวีซ่า UK", "UK Visa Supporting Documents", "Visa Support Documents Thailand"],
    sections: [
      {
        heading: "เอกสารแผนเดินทาง",
        body: "แผนเดินทางและรายละเอียดที่พักสามารถช่วยอธิบายว่าผู้ยื่นต้องการเดินทางเมื่อใด ไปที่ไหน และมีวัตถุประสงค์ใด",
      },
      {
        heading: "Flight Reservation ในบางกรณี",
        body: "Flight Reservation อาจใช้เป็นเอกสารสนับสนุนตามความเหมาะสม แต่ข้อกำหนดของ UKVI อาจแตกต่างกันตามประเภทวีซ่าและสถานการณ์ของผู้ยื่น",
      },
      {
        heading: "ควรตรวจสอบข้อมูลล่าสุด",
        body: "ควรตรวจสอบคำแนะนำล่าสุดจาก UKVI หรือศูนย์รับคำร้องก่อนยื่นเอกสารทุกครั้ง BKK AIR ไม่มีส่วนในการตัดสินผลวีซ่า",
      },
    ],
    faqIds: ["flight-reservation-uk", "hotel-reservation-meaning", "travel-itinerary-meaning", "not-visa-agency"],
  },
  "canada-visa-support-documents": {
    slug: "canada-visa-support-documents",
    title: "เอกสารสนับสนุนวีซ่า Canada | BKK AIR",
    description:
      "แนวทาง Canada Visa Supporting Documents สำหรับอธิบายวัตถุประสงค์การเดินทาง แผนที่พัก เส้นทางบิน และ itinerary",
    h1: "เอกสารสนับสนุนวีซ่า Canada",
    intro:
      "Canada Visa Supporting Documents ช่วยอธิบายวัตถุประสงค์การเดินทาง แผนการพำนัก และช่วงเวลาเดินทางให้ชัดเจน",
    keywords: ["เอกสารสนับสนุนวีซ่า Canada", "Canada Visa Supporting Documents", "Travel Itinerary for Visa"],
    sections: [
      {
        heading: "วัตถุประสงค์และแผนเดินทาง",
        body: "เอกสารอย่าง travel itinerary, accommodation details และ flight plan ช่วยให้เห็นภาพรวมว่าผู้ยื่นจะเดินทางไปแคนาดาเพื่ออะไรและช่วงใด",
      },
      {
        heading: "ความสอดคล้องของเอกสาร",
        body: "ข้อมูลในแผนเดินทางควรสอดคล้องกับที่พัก เส้นทางบิน และข้อมูลส่วนตัวของผู้เดินทาง เพื่อลดความคลาดเคลื่อนในชุดเอกสาร",
      },
      {
        heading: "การพิจารณาเป็นอำนาจของ IRCC",
        body: "BKK AIR ช่วยจัดเตรียมเอกสารสนับสนุนเท่านั้น ไม่สามารถรับประกันผลวีซ่าหรือมีส่วนกับการตัดสินของ IRCC",
      },
    ],
    faqIds: ["flight-reservation-canada", "travel-itinerary-meaning", "hotel-reservation-meaning", "no-visa-guarantee"],
  },
  "australia-visa-support-documents": {
    slug: "australia-visa-support-documents",
    title: "เอกสารสนับสนุนวีซ่า Australia | BKK AIR",
    description:
      "แนวทาง Australia Visa Supporting Documents สำหรับแสดงแผนเดินทาง ที่พัก และเส้นทางบิน โดยไม่รับประกันผลวีซ่า",
    h1: "เอกสารสนับสนุนวีซ่า Australia",
    intro:
      "Australia Visa Supporting Documents ช่วยอธิบายเส้นทางบิน ช่วงเวลาเดินทาง ที่พัก และแผนกิจกรรมตามวัตถุประสงค์ของทริป",
    keywords: ["เอกสารสนับสนุนวีซ่า Australia", "Australia Visa Supporting Documents", "Flight Reservation for Visa"],
    sections: [
      {
        heading: "เอกสารแผนเดินทางสำหรับ Australia",
        body: "ผู้ยื่นอาจใช้ flight route, accommodation details และ travel itinerary เพื่อช่วยอธิบายแผนการเดินทางตามประเภทวีซ่าที่สมัคร",
      },
      {
        heading: "ข้อมูลควรตรงกัน",
        body: "วันที่เดินทาง เมืองปลายทาง และที่พักควรสอดคล้องกันในทุกเอกสาร เพื่อช่วยให้ชุดเอกสารอ่านง่ายและเป็นระบบ",
      },
      {
        heading: "ข้อจำกัด",
        body: "ผลการพิจารณาขึ้นอยู่กับหน่วยงานตรวจคนเข้าเมืองออสเตรเลียเท่านั้น BKK AIR ไม่ใช่ตัวแทนวีซ่าและไม่รับประกันผลการพิจารณา",
      },
    ],
    faqIds: ["flight-reservation-australia", "travel-itinerary-meaning", "hotel-reservation-meaning", "no-embassy-relationship"],
  },
};

export function getFaqItems(ids: string[]) {
  return ids
    .map((id) => faqItems.find((item) => item.id === id))
    .filter((item): item is FaqItem => Boolean(item));
}

export function createFaqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
