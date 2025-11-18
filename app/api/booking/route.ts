import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { dictionaries } from "@/dictionaries";

// Format date dd/mm/yyyy
function formatDate(dateString: string) {
  if (!dateString) return "";

  const dateObj = new Date(dateString);

  const dd = String(dateObj.getDate()).padStart(2, "0");
  const mm = String(dateObj.getMonth() + 1).padStart(2, "0");
  const yyyy = dateObj.getFullYear();

  return `${dd}/${mm}/${yyyy}`;
}

export async function POST(req: Request) {
  try {
    // 🔥 next-intl tự gửi header locale → KHÔNG cần query
    const locale = req.headers.get("x-next-intl-locale") || "vi";

    // 🔥 Load JSON i18n đúng ngôn ngữ
    const dict = dictionaries[locale] || dictionaries["vi"];
    const t = dict.email;

    const body = await req.json();

    const {
      name = "",
      email = "",
      phone = "",
      guests = "",
      date = "",
      time = ""
    } = body;

    const formattedDate = formatDate(date);

    // ========================================================
    // 1️⃣ Load HTML template
    // ========================================================
    const templatePath = path.join(
      process.cwd(),
      "app/email-templates/confirm-order.html"
    );

    let html = fs.readFileSync(templatePath, "utf8");

    // ========================================================
    // 2️⃣ Replace i18n placeholders
    // ========================================================
    html = html
      .replace("{{TITLE}}", t.title)
      .replace("{{SUBTITLE}}", t.subtitle)
      .replace("{{RESTAURANT_NAME}}", t.restaurant_name)
      .replace("{{NOTE_TITLE}}", t.note_title)
      .replace("{{ADDRESS_LABEL}}", t.address_label)
      .replace("{{ADDRESS}}", t.address)
      .replace("{{CONTACT_LABEL}}", t.contact_label)
      .replace("{{CONTACT}}", t.contact);

    // ========================================================
    // 3️⃣ Replace dynamic fields
    // ========================================================
    html = html
      .replace("{{NAME}}", name)
      .replace("{{EMAIL}}", email)
      .replace("{{PHONE}}", phone)
      .replace("{{GUESTS}}", guests)
      .replace("{{DATE}}", formattedDate)
      .replace("{{TIME}}", time);

    // ========================================================
    // 4️⃣ Nodemailer setup
    // ========================================================
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // ========================================================
    // 5️⃣ Email gửi cho khách — theo đúng i18n JSON
    // ========================================================
    const mailToCustomer = {
      from: process.env.MAIL_USER,
      to: email,
      subject: t.subject,
      html,
    };

    // ========================================================
    // 6️⃣ Email gửi admin — luôn tiếng Việt
    // ========================================================
    const mailToAdmin = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_TO || process.env.MAIL_USER,
      subject: "Đặt bàn mới từ website The Kitchen",
      text: `
Có đơn đặt bàn mới từ website The Kitchen:

Họ tên: ${name}
Email: ${email}
Số điện thoại: ${phone}
Số lượng khách: ${guests}
Ngày: ${formattedDate}
Giờ: ${time}
      `,
    };

    // ========================================================
    // 7️⃣ Send both emails
    // ========================================================
    await Promise.all([
      transporter.sendMail(mailToCustomer),
      transporter.sendMail(mailToAdmin),
    ]);

    return NextResponse.json({
      success: true,
      message: "Email khách + email admin đã gửi!"
    });

  } catch (error: any) {
    console.error("Error sending email:", error);

    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
