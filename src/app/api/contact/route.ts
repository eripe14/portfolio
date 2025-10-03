import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const {name, email, subject, message} = await request.json();

        if (!name || !email || !subject || !message) {
            return Response.json(
                {error: 'All fields are required'},
                {status: 400}
            );
        }

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Portfolio Contact: ${subject}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1;">New Contact Form Submission</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #6366f1;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
            text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
            replyTo: email,
        };

        await transporter.sendMail(mailOptions);
        return Response.json(
            {success: true, message: 'Email sent successfully'},
            {status: 200}
        );
    } catch (error) {
        console.error('Error sending email:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return Response.json(
            {error: 'Failed to send email', details: errorMessage},
            {status: 500}
        );
    }
}