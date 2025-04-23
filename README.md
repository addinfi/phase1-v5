# Review Faster

A static web application for managing customer reviews and feedback.

## Features

- Customer data management with localStorage
- WhatsApp integration for sending review requests
- Review generation with AI
- Customer database with CRUD operations
- Mobile responsive design

## Quick Deploy

The fastest way to deploy this project is directly through Vercel:

1. Fork or clone this repository
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Deploy with default settings

## Manual Deployment

If you prefer to deploy manually:

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Navigate to the project directory:
   ```bash
   cd your-project-directory
   ```

4. Deploy:
   ```bash
   vercel
   ```

5. For production:
   ```bash
   vercel --prod
   ```

## Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Open the project folder:
   ```bash
   cd review-faster
   ```

3. Serve the files using any static file server, for example:
   ```bash
   npx serve
   ```

   Or use Python's built-in server:
   ```bash
   python -m http.server 8000
   ```

   Or PHP's built-in server:
   ```bash
   php -S localhost:8000
   ```

## Project Structure

- `welcome.html` - Main application page
- `customers.html` - Customer database management
- `profile.html` - User profile management
- `index.html` - Authentication page
- `vercel.json` - Vercel deployment configuration

## Technologies Used

- HTML5
- CSS3
- JavaScript
- LocalStorage for data persistence
- WhatsApp Web API
- Font Awesome icons
- Vercel for deployment

## Notes

- All data is stored in the browser's localStorage
- No backend server required
- Works entirely client-side
- Suitable for static hosting

## License

MIT License