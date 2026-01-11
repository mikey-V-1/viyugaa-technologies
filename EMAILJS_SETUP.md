# Contact Page - EmailJS Configuration

The Contact page uses EmailJS to send emails through the contact form.

## Environment Variables Required

Create a `.env` file in the project root with:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxxx
VITE_EMAILJS_USER_ID=xxxxxxxxxxxxxxxx
```

## Setup Instructions

1. **Get your EmailJS credentials:**
   - Go to https://dashboard.emailjs.com
   - Service ID: From "Email Services" section
   - Template ID: From "Email Templates" section
   - Public Key: From "Account" settings

2. **Add to `.env` file:**
   ```env
   VITE_EMAILJS_SERVICE_ID=service_abc123
   VITE_EMAILJS_TEMPLATE_ID=template_xyz789
   VITE_EMAILJS_USER_ID=your_public_key
   ```

3. **Restart dev server:**
   ```bash
   npm run dev
   ```

## How It Works

- The Contact form reads environment variables from `.env`
- EmailJS initializes with the public key
- Form data is sent through the EmailJS service
- Errors are displayed if keys are missing or invalid

## For Production (Vercel)

Add the environment variables in Vercel project settings:
1. Go to Project Settings → Environment Variables
2. Add each variable (VITE_EMAILJS_*)
3. Redeploy the project

**Note:** `.env` is in `.gitignore` for security - never commit sensitive keys to Git.
