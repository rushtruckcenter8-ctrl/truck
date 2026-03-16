# Email Setup Guide

This application uses nodemailer to send truck inquiry emails. Follow these steps to configure email functionality.

## Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Email Configuration (Required for truck inquiry form)
# 
# For Gmail:
# 1. Enable 2-Step Verification: https://myaccount.google.com/security
# 2. Generate an App Password: https://myaccount.google.com/apppasswords
# 3. Use the generated app password (not your regular password) in SMTP_PASSWORD

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Business email address (where inquiries will be sent)
# If not set, will default to SMTP_USER
BUSINESS_EMAIL=sales@eurotruck.ch
```

## Gmail Setup (Recommended)

1. **Enable 2-Step Verification**
   - Go to https://myaccount.google.com/security
   - Enable 2-Step Verification if not already enabled

2. **Generate App Password**
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Enter "Truck Sales App" as the name
   - Copy the generated 16-character password
   - Use this password in `SMTP_PASSWORD` (not your regular Gmail password)

## Other Email Providers

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
```

### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
```

### Custom SMTP Server
```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-username
SMTP_PASSWORD=your-password
```

## Testing

After setting up your environment variables:

1. Restart your development server: `npm run dev`
2. Navigate to any truck detail page
3. Click "Contact Us About This Truck"
4. Fill out and submit the form
5. Check both:
   - Your business email (inquiry notification)
   - The customer's email (confirmation email)

## Troubleshooting

- **"Email service not configured"**: Make sure all SMTP environment variables are set in `.env.local`
- **Authentication failed**: Double-check your SMTP credentials, especially for Gmail (use App Password, not regular password)
- **Connection timeout**: Verify SMTP_HOST and SMTP_PORT are correct for your provider
- **Emails not received**: Check spam/junk folders, verify email addresses are correct
