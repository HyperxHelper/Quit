import { z } from "zod"

export const signupSchema = z
  .object({
    name: z
      .string()
      .min(2, "Enter at least 2 characters")
      .max(60, "Keep it under 60 characters")
      .trim(),
    email: z.string().trim().toLowerCase().email("Enter a valid email address"),
    password: z
      .string()
      .min(8, "Use at least 8 characters")
      .regex(/[A-Z]/, "Add an uppercase letter")
      .regex(/[0-9]/, "Add a number"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

export const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email("Enter a valid email address"),
  password: z.string().min(1, "Enter your password"),
})

export const anonymousSchema = z.object({
  nickname: z
    .string()
    .min(2, "Nickname needs at least 2 characters")
    .max(30, "Keep it under 30 characters")
    .trim(),
  password: z.string().min(4, "Use at least 4 characters"),
})

export type SignupValues = z.infer<typeof signupSchema>
export type LoginValues = z.infer<typeof loginSchema>
export type AnonymousValues = z.infer<typeof anonymousSchema>