import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    // 🧠 nhận JSON thay vì formData
    const body = await req.json();

    const {
      name = "",
      email = "",
      phone = "",
      guests = "",
      date = "",
      time = ""
    } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_TO || process.env.MAIL_USER,
      subject: "Đặt bàn mới từ website The Kitchen",
      text: `
Có đơn đặt bàn mới từ website The Kitchen:

Họ tên: ${name}
Email: ${email}
Số điện thoại: ${phone}
Số lượng khách: ${guests}
Ngày: ${date}
Giờ: ${time}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email đã được gửi thành công!" });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
