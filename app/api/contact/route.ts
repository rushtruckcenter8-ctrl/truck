import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name: string;
  phone: string;
  location: string;
  email?: string;
  message?: string;
}

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
}

function getBusinessEmailHTML(data: ContactPayload): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
          .field { margin: 10px 0; }
          .label { font-weight: bold; color: #1f2937; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Message</h2>
          </div>
          <div class="content">
            <div class="field"><span class="label">Name:</span> ${data.name}</div>
            <div class="field"><span class="label">Phone:</span> <a href="tel:${data.phone}">${data.phone}</a></div>
            <div class="field"><span class="label">Location:</span> ${data.location}</div>
            ${
              data.email
                ? `<div class="field"><span class="label">Email:</span> <a href="mailto:${data.email}">${data.email}</a></div>`
                : ""
            }
            ${
              data.message
                ? `<div class="field"><span class="label">Message:</span><p style="margin-top: 5px; white-space: pre-wrap;">${data.message}</p></div>`
                : ""
            }
          </div>
        </div>
      </body>
    </html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactPayload = await request.json();

    if (!data.name?.trim() || !data.phone?.trim() || !data.location?.trim()) {
      return NextResponse.json(
        { error: "Missing required fields (name, phone, location)" },
        { status: 400 }
      );
    }

    if (data.email?.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email.trim())) {
        return NextResponse.json(
          { error: "Invalid email address" },
          { status: 400 }
        );
      }
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error("SMTP credentials not configured");
      return NextResponse.json(
        { error: "Email service not configured. Please contact support directly." },
        { status: 500 }
      );
    }

    const transporter = createTransporter();
    const businessEmail = process.env.BUSINESS_EMAIL || process.env.SMTP_USER;

    const replyTo = data.email?.trim() || undefined;

    await transporter.sendMail({
      from: `"Rush Truck Center" <${process.env.SMTP_USER}>`,
      to: businessEmail,
      ...(replyTo ? { replyTo } : {}),
      subject: `Website contact: ${data.name.trim()}`,
      html: getBusinessEmailHTML({
        ...data,
        name: data.name.trim(),
        phone: data.phone.trim(),
        location: data.location.trim(),
        email: data.email?.trim(),
        message: data.message?.trim(),
      }),
      text: `
New Contact Form Message

Name: ${data.name.trim()}
Phone: ${data.phone.trim()}
Location: ${data.location.trim()}
${data.email?.trim() ? `Email: ${data.email.trim()}\n` : ""}
${data.message?.trim() ? `Message:\n${data.message.trim()}` : ""}
      `.trim(),
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
