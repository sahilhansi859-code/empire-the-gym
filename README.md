# Empire The Gym - Professional Fitness Website

A modern, animated, multi-page website for **Empire The Gym** in Hansi, Hisar, Haryana. Built with React, Vite, Tailwind CSS, Framer Motion, and Express.js.

## 🏋️ Features

- **Multi-page**: Home, About, Gallery, Contact with 404 handling
- **Fully Responsive**: Mobile-first design
- **Animations**: Framer Motion powered (hero, scroll-reveal, counters, marquee, page transitions)
- **Language Toggle**: English / हिन्दी (Hinglish-friendly copy)
- **Contact Form**: Connected to Express API with validation, rate limiting, and JSON file storage
- **WhatsApp & Call Buttons**: Floating action buttons
- **Gallery Lightbox**: Masonry grid with keyboard navigation
- **FAQ Accordion**: Animated expandable sections
- **Live Open/Closed Indicator**: Based on IST timezone
- **SEO Ready**: Meta tags, Open Graph, structured data
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

## 🛠 Tech Stack

### Frontend
- React 18 + Vite
- React Router 6 (multi-page routing)
- Tailwind CSS (custom gym theme)
- Framer Motion (animations)
- React Icons
- React Hot Toast (notifications)
- Axios (API calls)

### Backend
- Node.js + Express
- CORS, Helmet, Rate Limiting
- Express Validator (input sanitization)
- Nodemailer (email support - optional)
- JSON file storage (easy to migrate to database)

## 📁 Project Structure

```
empire-the-gym/
├── client/                 # React frontend
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── ui/         # UI components (Button, Card, Counter, etc.)
│   │   │   └── layout/     # Layout components (Navbar, Footer, etc.)
│   │   ├── context/        # React Context (Language)
│   │   ├── data/           # Gym data (gymData.js - single source of truth)
│   │   ├── pages/          # Page components
│   │   ├── styles/         # Global styles
│   │   ├── App.jsx         # Main app with routing
│   │   └── main.jsx        # Entry point
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── .env.example
├── server/                 # Express backend
│   ├── data/               # JSON data storage
│   ├── server.js           # Main server file
│   ├── package.json
│   └── .env.example
├── package.json            # Root package.json with concurrent scripts
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone/navigate to project
cd empire-the-gym

# Install all dependencies (root, client, server)
npm run install:all

# Or install manually:
# npm install
# cd client && npm install
# cd ../server && npm install
```

### Development

```bash
# Run both client and server concurrently
npm run dev

# Or run separately:
# Terminal 1: npm run server  (starts Express on :3001)
# Terminal 2: npm run client  (starts Vite on :5173)
```

The app will be available at:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3001/api

### Production Build

```bash
# Build frontend for production
npm run build

# Start production server
npm start
```

## ⚙️ Configuration

### Environment Variables

Copy `.env.example` to `.env` in both `client/` and `server/` directories:

**Server (.env)**
```env
PORT=3001
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# Email (Optional - for Nodemailer)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=Empire The Gym <noreply@empirethegym.com>
CONTACT_EMAIL=info@empirethegym.com
```

**Client (.env)**
```env
VITE_API_URL=http://localhost:3001/api
```

## 📝 Content Management

All gym content is centralized in **`client/src/data/gymData.js`**. Update this single file to change:

- Gym name, slogan, owner, address, phone
- Timings, activities, amenities, USPs
- Membership plans (prices, features)
- Gallery images (Unsplash URLs - replace with your own)
- Testimonials (placeholder - replace with real member feedback)
- Trainer profiles (placeholder - replace with actual trainers)
- FAQ, About story, Mission/Vision, Values, Timeline
- Social media links
- SEO metadata

### Placeholders to Replace

| Content | Location | Action |
|---------|----------|--------|
| **Photos** | `gymData.js` → `gallery[]`, `heroImages`, `trainer[].photo`, `about.owner.photo` | Replace Unsplash URLs with actual gym photos |
| **Membership Prices** | `gymData.js` → `membershipPlans[].price` | Update "Contact for Price" with actual prices |
| **Trainer Names/Bios** | `gymData.js` → `trainers[]` | Replace placeholder names, specializations, certifications |
| **Testimonials** | `gymData.js` → `testimonials[]` | Replace with real member feedback & photos |
| **Google Map** | `Contact.jsx` → iframe `src` | Update with actual Google Maps embed URL for "Empire The Gym, Lal Sadak, Hansi, Hisar" |
| **Social Links** | `gymData.js` → `social` | Update with actual Instagram, Facebook, YouTube URLs |
| **Email Config** | `server/.env` | Add SMTP credentials for email notifications |

## 🎨 Customization

### Colors
Edit `client/tailwind.config.js` → `theme.extend.colors.gym`:
- `gym.red` / `gym.red-light` / `gym.red-dark` - Primary accent (fiery red)
- `gym.gold` / `gym.gold-light` / `gym.gold-dark` - Secondary accent (gold)
- `gym.black` / `gym.dark` / `gym.card` - Dark theme base

### Fonts
Google Fonts loaded in `client/index.html`:
- Headings: **Bebas Neue** (primary) / **Oswald** (fallback)
- Body: **Inter** / **Poppins**

### Animations
Custom keyframes in `tailwind.config.js`:
- `fade-in`, `slide-up`, `slide-down`, `slide-left`, `slide-right`
- `scale-in`, `marquee`, `pulse-glow`, `counter`

## 📱 Pages Overview

### Home (`/`)
1. Hero (full-screen, animated headline, CTAs)
2. Marquee ticker (motivational words)
3. About preview + "Know More"
4. Why Choose Us (4 animated cards)
5. Programs (4 cards: Gym, Abs, Personal Training, Weight Loss)
6. Stats counters (animated)
7. Amenities (AC, Parking, Water)
8. Membership plans (3 tiers)
9. Gallery preview (6 images)
10. Testimonials slider (placeholder)
11. CTA banner
12. Footer

### About (`/about`)
- Hero banner
- Our Story
- Mission & Vision
- Meet the Owner (Ramandeep Singh)
- Our Trainers (4 placeholder cards)
- Our Values (4 cards)
- Why Empire timeline (5 milestones)
- CTA

### Gallery (`/gallery`)
- Hero banner
- Filter tabs (All/Equipment/Workouts/Training/Members)
- Responsive masonry grid
- Lightbox with next/prev/keyboard support

### Contact (`/contact`)
- Hero banner
- Contact form (Name, Phone, Email, Interest, Message) → API
- Contact info cards (Phone, WhatsApp, Address, Timings)
- Live Open/Closed indicator (IST)
- Google Maps embed + "Get Directions"
- FAQ accordion (6 questions)

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form |
| GET | `/api/health` | Health check |

### Contact Form Payload
```json
{
  "name": "John Doe",
  "phone": "9876543210",
  "email": "john@example.com",
  "interestedIn": "gym-workout",
  "message": "I want to know about membership plans."
}
```

### Response
```json
{
  "success": true,
  "message": "Enquiry submitted successfully!",
  "data": { "id": "1234567890" }
}
```

## 📦 Deployment

### Frontend (Vercel/Netlify)
1. Connect repository
2. Build command: `npm run build`
3. Output directory: `client/dist`
4. Add environment variable: `VITE_API_URL=https://your-api-domain.com/api`

### Backend (Railway/Render/VPS)
1. Set `NODE_ENV=production`
2. Set `CLIENT_URL=https://your-frontend-domain.com`
3. Configure SMTP for emails (optional)
4. Ensure `server/data/` directory is writable

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com) (placeholders)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- UI components styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Built with ❤️ for Empire The Gym**  
*Be The Part Of An Epic Empire*