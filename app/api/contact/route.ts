import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().trim().email("A valid email is required"),
  message: z.string().trim().min(1, "Message is required"),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Please fill all required fields with valid values." },
        { status: 400 },
      )
    }

    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const toEmail = process.env.CONTACT_TO_EMAIL || "ferjaniwael20@gmail.com"

    if (!smtpUser || !smtpPass) {
      return NextResponse.json(
        {
          error:
            "Email is not configured on the server yet. Please set SMTP_USER and SMTP_PASS environment variables.",
        },
        { status: 500 },
      )
    }

    const { name, email, message } = parsed.data

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    await transporter.sendMail({
      from: `${name} <${email}>`,
      sender: smtpUser,
      to: toEmail,
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br/>")}</p>`,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }
}
