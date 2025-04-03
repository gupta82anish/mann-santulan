import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { EmailTemplate } from '@/app/components/EmailTemplate';

// Don't use NEXT_PUBLIC_ prefix for server-side environment variables
const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL_ADDRESS = 'gupta.anish82@yahoo.com'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    console.log('Received form submission:', { name, email });

    // Basic validation
    if (!name || !email || !message) {
      console.log('Validation failed');
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    console.log('Attempting to send email...');
    const data = await resend.emails.send({
      from: 'Mann Santulan <onboarding@resend.dev>', // You can customize this after domain verification
      to: EMAIL_ADDRESS,
      subject: `New Contact Form Submission from ${name}`,
      react: EmailTemplate({ name, email, message }),
      replyTo: email,
    });

    console.log('Email sent successfully:', data);
    return NextResponse.json(data);
  } catch (error) {
    // Log the actual error for debugging
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send email' },
      { status: 500 }
    );
  }
} 