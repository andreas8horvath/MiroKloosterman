import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Basic email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    // In a production app with a configured database (like Firestore), we would persist the subscriber.
    // Here we simulate successful persistence with proper server-side logging and API response.
    console.log(`[Newsletter Subscription] New subscriber registered: ${email}`);

    // Return a beautiful, warm success message in line with Miro's tone of voice
    return NextResponse.json({
      success: true,
      message: 'Thank you. You have been subscribed to Miro\'s monthly reflections and retreat updates.',
    });
  } catch (error) {
    console.error('[Newsletter Subscription] Error during subscription:', error);
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
