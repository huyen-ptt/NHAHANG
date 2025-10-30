import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.formData();

    const name = data.get("name")?.toString() || "";
    const email = data.get("email")?.toString() || "";
    const phone = data.get("phone")?.toString() || "";
    const guests = data.get("guests")?.toString() || "";
    const date = data.get("date")?.toString() || "";
    const time = data.get("time")?.toString() || "";
    const location = data.get("location")?.toString() || "";
    const flight = data.get("flight")?.toString() || "";

    // ⚙️ Cấu hình SMTP (ở đây ví dụ dùng Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // ✉️ Cấu hình nội dung email
    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_TO || process.env.MAIL_USER, // người nhận (có thể là chính bạn)
      subject: "Đặt bàn mới từ website The Kitchen",
      text: `
Có đơn đặt bàn mới từ website:

Họ tên: ${name}
Email: ${email}
Số điện thoại: ${phone}
Số lượng khách: ${guests}
Ngày: ${date}
Giờ: ${time}
Địa điểm: ${location}
Chuyến bay: ${flight}
      `,
    };

    // 📩 Gửi mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
