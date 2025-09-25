import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import nodemailer from "nodemailer";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const submission = insertContactSubmissionSchema.parse(req.body);
      
      // Store in database
      const savedSubmission = await storage.createContactSubmission(submission);
      
      // Send email notification (if configured)
      try {
        await sendContactNotification(submission);
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
        // Don't fail the request if email fails
      }
      
      res.json({ success: true, id: savedSubmission.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          error: "Validation error", 
          details: error.errors 
        });
      }
      
      console.error("Contact submission error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Get contact submissions (admin endpoint)
  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching submissions:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

async function sendContactNotification(submission: any) {
  const smtpConfig = {
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  };

  if (!smtpConfig.auth.user || !smtpConfig.auth.pass) {
    console.log("SMTP credentials not configured, skipping email notification");
    return;
  }

  const transporter = nodemailer.createTransporter(smtpConfig);

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.CONTACT_EMAIL || "contact@comatra-fm.com",
    subject: `Nouvelle demande de devis - ${submission.productType}`,
    html: `
      <h2>Nouvelle demande de devis reçue</h2>
      <p><strong>Nom:</strong> ${submission.name}</p>
      <p><strong>Email:</strong> ${submission.email}</p>
      <p><strong>Téléphone:</strong> ${submission.phone || "Non renseigné"}</p>
      <p><strong>Type de produit:</strong> ${submission.productType}</p>
      <p><strong>Message:</strong></p>
      <p>${submission.message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}
