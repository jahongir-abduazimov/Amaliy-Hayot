import { NextResponse } from 'next/server';

// Simple in-memory storage (in production, use a database)
// For now, we'll just validate and return success
// In production, you'd want to integrate with a service like:
// - Mailchimp
// - SendGrid
// - ConvertKit
// - Or your own database

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email manzili to\'g\'ri emas' },
        { status: 400 }
      );
    }

    // In a real application, you would:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Add to email service provider
    
    // For now, we'll just return success
    // You can add logging here to track subscriptions
    
    console.log('Newsletter subscription:', email);

    return NextResponse.json(
      { 
        success: true,
        message: 'Obuna muvaffaqiyatli amalga oshirildi!' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Xatolik yuz berdi. Iltimos, keyinroq urinib ko\'ring.' },
      { status: 500 }
    );
  }
}