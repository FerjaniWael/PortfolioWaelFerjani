"use client"

import { FormEvent, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

type FormState = {
  name: string
  email: string
  message: string
}

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const result = await response.json()

      if (!response.ok) {
        setStatus({ type: "error", text: result.error || "Failed to send your message." })
        return
      }

      setStatus({ type: "success", text: "Message sent successfully." })
      setForm(initialState)
    } catch {
      setStatus({ type: "error", text: "Network error. Please try again." })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <Input
          placeholder="Your Name"
          className="bg-background/50 border-border focus:border-primary"
          required
          value={form.name}
          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Your Email"
          className="bg-background/50 border-border focus:border-primary"
          required
          value={form.email}
          onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
        />
      </div>
      <div>
        <Textarea
          placeholder="Your Message"
          rows={4}
          className="bg-background/50 border-border focus:border-primary resize-none"
          required
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        disabled={submitting}
      >
        <Send className="w-4 h-4 mr-2" />
        {submitting ? "Sending..." : "Send Message"}
      </Button>
      {status && (
        <p className={status.type === "success" ? "text-sm text-green-600" : "text-sm text-red-600"}>{status.text}</p>
      )}
    </form>
  )
}
