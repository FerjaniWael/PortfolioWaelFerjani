import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

type ContactPayload = {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload

    const name = String(body.name || "").trim()
    const email = String(body.email || "").trim()
    const subject = String(body.subject || "").trim()
    const message = String(body.message || "").trim()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 })
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ message: "Please provide a valid email address." }, { status: 400 })
    }

    const gmailUser = process.env.GMAIL_USER || "ferjaniwael40@gmail.com"
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD
    const toEmail = process.env.CONTACT_TO_EMAIL || "ferjaniwael20@gmail.com"

    if (!gmailAppPassword) {
      return NextResponse.json(
        { message: "Email service is not configured. Add GMAIL_APP_PASSWORD." },
        { status: 500 },
      )
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    })

    await transporter.sendMail({
      from: `Portfolio Contact <${gmailUser}>`,
      to: toEmail,
      replyTo: email,
      subject: `[Portfolio Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })

    return NextResponse.json({ message: "Message sent successfully." }, { status: 200 })
  } catch {
    return NextResponse.json({ message: "Unable to send message right now." }, { status: 500 })
  }
}
