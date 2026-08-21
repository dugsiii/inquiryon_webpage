import * as React from "react";

const colors = { background: "#f4f4f4", ink: "#3a3a3a", slate: "#4e606b", blue: "#72d7ee", muted: "#71808a", white: "#ffffff" };

function EmailShell({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ margin: 0, padding: "32px 12px", backgroundColor: colors.background }}>
      <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto", overflow: "hidden", borderRadius: "12px", backgroundColor: colors.white, boxShadow: "0 8px 28px rgba(58, 58, 58, 0.08)", fontFamily: "Arial, Helvetica, sans-serif", color: colors.ink }}>
        <div style={{ padding: "22px 32px", backgroundColor: colors.slate }}>
          <div style={{ fontSize: "25px", fontWeight: 700, color: colors.white }}><span style={{ color: colors.blue }}>✦</span> Inquiryon</div>
        </div>
        <div style={{ padding: "42px 32px 36px" }}>
          <p style={{ margin: "0 0 12px", color: colors.muted, fontSize: "12px", fontWeight: 700, letterSpacing: "1.8px", textTransform: "uppercase" }}>{eyebrow}</p>
          <h1 style={{ margin: "0 0 22px", fontSize: "34px", lineHeight: 1.15, color: colors.ink }}>{title}</h1>
          <div style={{ fontSize: "16px", lineHeight: 1.7 }}>{children}</div>
        </div>
        <div style={{ height: "5px", backgroundColor: colors.blue }} />
      </div>
    </div>
  );
}

export function WaitlistEmailTemplate() {
  return (
    <EmailShell eyebrow="AMP early access" title="You’re on the list.">
      <p style={{ margin: "0 0 16px" }}>Thanks for your interest in AMP, the control layer for AI agent autonomy.</p>
      <p style={{ margin: "0 0 24px" }}>We’ll keep you posted as we open early access and share more about governing agents in production.</p>
      <p style={{ margin: 0 }}>— The Inquiryon team</p>
    </EmailShell>
  );
}

export function SupportConfirmationEmailTemplate() {
  return (
    <EmailShell eyebrow="Message received" title="Thanks for reaching out.">
      <p style={{ margin: "0 0 16px" }}>Your message made it to the Inquiryon team. We’ll review it and reply as soon as we can.</p>
      <p style={{ margin: "0 0 24px", color: colors.muted }}>You can reply directly to this email if there’s anything else you’d like us to know.</p>
      <p style={{ margin: 0 }}>— The Inquiryon team</p>
    </EmailShell>
  );
}

export function SupportNotificationEmailTemplate({ email, message }: { email: string; message: string }) {
  return (
    <EmailShell eyebrow="Website inquiry" title="A new message arrived.">
      <p style={{ margin: "0 0 8px", color: colors.muted, fontSize: "13px", fontWeight: 700 }}>FROM</p>
      <p style={{ margin: "0 0 24px" }}>{email}</p>
      <p style={{ margin: "0 0 8px", color: colors.muted, fontSize: "13px", fontWeight: 700 }}>MESSAGE</p>
      <div style={{ padding: "18px", borderLeft: `4px solid ${colors.blue}`, borderRadius: "4px", backgroundColor: colors.background, whiteSpace: "pre-wrap" }}>{message}</div>
    </EmailShell>
  );
}

export const EmailTemplate = WaitlistEmailTemplate;
