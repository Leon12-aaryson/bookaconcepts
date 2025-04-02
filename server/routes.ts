import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the incoming request body
      const validatedData = insertContactSubmissionSchema.safeParse(req.body);
      
      if (!validatedData.success) {
        const errorMessage = fromZodError(validatedData.error).message;
        return res.status(400).json({ message: errorMessage });
      }
      
      // Store the contact submission
      const submission = await storage.createContactSubmission(validatedData.data);
      
      // Return success response
      return res.status(201).json({ 
        message: "Contact form submitted successfully",
        submission 
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      return res.status(500).json({ 
        message: "An error occurred while processing your request" 
      });
    }
  });

  // Get all contact submissions (could be used for an admin dashboard)
  app.get("/api/contact-submissions", async (_req: Request, res: Response) => {
    try {
      const submissions = await storage.getContactSubmissions();
      return res.status(200).json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      return res.status(500).json({ 
        message: "An error occurred while fetching contact submissions" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
