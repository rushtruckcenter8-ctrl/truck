import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface InquiryData {
  name: string;
  email: string;
  phone: string;
  message?: string;
  truckId: string;
  truckName: string;
  truckBrand: string;
  truckYear: number;
  truckPrice: number;
  truckCurrency: string;
  truckStockNumber?: string;
  truckVIN?: string;
}

// ── Email transporter configuration ────────────────────────────────────────
// In production, use environment variables for these settings
function createTransporter() {
  // For Gmail, you'll need an App Password: https://support.google.com/accounts/answer/185833
  // For other providers, adjust the configuration accordingly
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
}

// ── Email templates ────────────────────────────────────────────────────────
function getBusinessEmailHTML(data: InquiryData): string {
  const currencySymbol = data.truckCurrency === "USD" ? "$" : "€";
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
          .truck-info { background: white; padding: 15px; margin: 15px 0; border-left: 4px solid #2563eb; }
          .field { margin: 10px 0; }
          .label { font-weight: bold; color: #1f2937; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Truck Inquiry</h2>
          </div>
          <div class="content">
            <p>A customer has expressed interest in one of your trucks:</p>
            
            <div class="truck-info">
              <h3 style="margin-top: 0;">Truck Details</h3>
              <div class="field">
                <span class="label">Truck:</span> ${data.truckBrand} ${data.truckName} (${data.truckYear})
              </div>
              <div class="field">
                <span class="label">Price:</span> ${currencySymbol}${data.truckPrice.toLocaleString()}
              </div>
              ${data.truckStockNumber ? `<div class="field"><span class="label">Stock #:</span> ${data.truckStockNumber}</div>` : ""}
              ${data.truckVIN ? `<div class="field"><span class="label">VIN:</span> ${data.truckVIN}</div>` : ""}
              <div class="field">
                <span class="label">Truck ID:</span> ${data.truckId}
              </div>
            </div>

            <h3>Customer Information</h3>
            <div class="field">
              <span class="label">Name:</span> ${data.name}
            </div>
            <div class="field">
              <span class="label">Email:</span> <a href="mailto:${data.email}">${data.email}</a>
            </div>
            <div class="field">
              <span class="label">Phone:</span> <a href="tel:${data.phone}">${data.phone}</a>
            </div>
            ${data.message ? `
              <div class="field">
                <span class="label">Message:</span>
                <p style="margin-top: 5px; white-space: pre-wrap;">${data.message}</p>
              </div>
            ` : ""}

            <div class="footer">
              <p>This inquiry was submitted from your truck sales website.</p>
              <p>Please respond to the customer within 24 hours.</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

function getCustomerEmailHTML(data: InquiryData): string {
  const currencySymbol = data.truckCurrency === "USD" ? "$" : "€";
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
          .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
          .truck-info { background: white; padding: 15px; margin: 15px 0; border-left: 4px solid #2563eb; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Thank You for Your Interest!</h2>
          </div>
          <div class="content">
            <p>Dear ${data.name},</p>
            
            <p>Thank you for your interest in the following truck:</p>
            
            <div class="truck-info">
              <h3 style="margin-top: 0;">${data.truckBrand} ${data.truckName} (${data.truckYear})</h3>
              <p><strong>Price:</strong> ${currencySymbol}${data.truckPrice.toLocaleString()}</p>
              ${data.truckStockNumber ? `<p><strong>Stock #:</strong> ${data.truckStockNumber}</p>` : ""}
            </div>

            <p>We have received your inquiry and one of our sales representatives will contact you within 24 hours at:</p>
            <ul>
              <li>Email: ${data.email}</li>
              <li>Phone: ${data.phone}</li>
            </ul>

            <p>If you have any urgent questions, please feel free to call us directly:</p>
            <ul>
              <li>+41 78 123 45 67</li>
              <li>+41 79 123 45 67</li>
            </ul>

            <p>We look forward to helping you find the perfect truck for your needs!</p>

            <p>Best regards,<br>
            <strong>Rush Truck Center Team</strong></p>

            <div class="footer">
              <p>Rush Truck Center — Affordable Truck Sales & Service</p>
              <p>info@rushtruckcenter.com</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

// ── API Route Handler ───────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    const data: InquiryData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.truckId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Check if email is configured
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.error("SMTP credentials not configured");
      return NextResponse.json(
        { error: "Email service not configured. Please contact support directly." },
        { status: 500 }
      );
    }

    const transporter = createTransporter();

    // Business email (to your sales team)
    const businessEmail = process.env.BUSINESS_EMAIL || process.env.SMTP_USER;
    await transporter.sendMail({
      from: `"Rush Truck Center" <${process.env.SMTP_USER}>`,
      to: businessEmail,
      replyTo: data.email,
      subject: `New Truck Inquiry: ${data.truckBrand} ${data.truckName} (${data.truckYear})`,
      html: getBusinessEmailHTML(data),
      text: `
New Truck Inquiry

Truck: ${data.truckBrand} ${data.truckName} (${data.truckYear})
Price: ${data.truckCurrency === "USD" ? "$" : "€"}${data.truckPrice.toLocaleString()}
${data.truckStockNumber ? `Stock #: ${data.truckStockNumber}\n` : ""}
${data.truckVIN ? `VIN: ${data.truckVIN}\n` : ""}

Customer Information:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
${data.message ? `\nMessage:\n${data.message}` : ""}
      `.trim(),
    });

    // Customer confirmation email
    await transporter.sendMail({
      from: `"Rush Truck Center" <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: `Thank you for your interest in ${data.truckBrand} ${data.truckName}`,
      html: getCustomerEmailHTML(data),
      text: `
Thank You for Your Interest!

Dear ${data.name},

Thank you for your interest in the following truck:

${data.truckBrand} ${data.truckName} (${data.truckYear})
Price: ${data.truckCurrency === "USD" ? "$" : "€"}${data.truckPrice.toLocaleString()}
${data.truckStockNumber ? `Stock #: ${data.truckStockNumber}\n` : ""}

We have received your inquiry and one of our sales representatives will contact you within 24 hours.

If you have any urgent questions, please call us:
+41 78 123 45 67
+41 79 123 45 67

Best regards,
Rush Truck Center Team

Rush Truck Center — Affordable Truck Sales & Service
info@rushtruckcenter.com
      `.trim(),
    });

    return NextResponse.json(
      { success: true, message: "Inquiry sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending inquiry email:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to send inquiry. Please try again later.",
      },
      { status: 500 }
    );
  }
}
