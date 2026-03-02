# 🛡️ ThiefGuard AI - Advanced Object Detection Security System

A production-ready AI-powered security system with real-time object detection, theft prevention, and modern authentication. Built with Next.js 14, TensorFlow.js, and Tailwind CSS.

## ✨ Features

### 🔒 **Authentication & Security**
- Secure NextAuth.js authentication system
- Protected routes and session management
- Single admin account access control
- JWT-based session tokens

### 🎯 **AI Object Detection**
- Real-time object detection using TensorFlow.js and COCO-SSD model
- Person detection with visual alerts (red bounding boxes)
- Audio alerts for detected persons
- Confidence threshold filtering (60%+)
- Live camera feed processing

### 🎨 **Modern UI/UX**
- Production-level Tailwind CSS theme with custom design system
- Fully responsive design for all devices (mobile, tablet, desktop)
- Glass morphism effects and gradient backgrounds
- Smooth animations and transitions
- Professional dashboard layout

### 📱 **Responsive Design**
- Mobile-first approach with adaptive layouts
- Responsive navigation with hamburger menu
- Flexible camera feed that adjusts to screen size
- Touch-friendly interface elements

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Modern web browser with camera access

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jino-X/object-detection.git
   cd object-detection
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔐 Authentication

### Login Credentials
- **Email**: `theifguard@admin.com`
- **Password**: `objectAI@123`

### Usage Flow
1. Visit the application - you'll see the landing page
2. Click "Access Security Dashboard" or "Login"
3. Enter the credentials above
4. Access the live object detection system
5. Use the logout button in the navbar when done

## 🛠️ Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library

### AI & Detection
- **TensorFlow.js** - Machine learning library
- **COCO-SSD Model** - Pre-trained object detection model
- **React Webcam** - Camera access and video streaming

### Authentication
- **NextAuth.js** - Authentication library
- **JWT** - JSON Web Tokens for sessions

### Development
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📁 Project Structure

```
object-detection/
├── app/
│   ├── api/auth/[...nextauth]/     # NextAuth API routes
│   ├── login/                      # Login page
│   ├── globals.css                 # Global styles
│   ├── layout.js                   # Root layout
│   └── page.js                     # Home page
├── components/
│   ├── ui/                         # Reusable UI components
│   ├── navbar.js                   # Navigation component
│   ├── object-detection.js         # Main detection component
│   └── providers.js                # Auth providers
├── lib/
│   ├── auth.js                     # NextAuth configuration
│   └── utils.js                    # Utility functions
├── utils/
│   └── render-predictions.js       # Detection rendering logic
└── public/                         # Static assets
```

## 🎯 Key Components

### Object Detection System
- **Real-time Processing**: Continuous object detection at 10ms intervals
- **Visual Feedback**: Bounding boxes with color coding (red for persons, cyan for objects)
- **Audio Alerts**: Throttled audio notifications for person detection
- **Performance Optimized**: Efficient canvas rendering and prediction processing

### Authentication Flow
- **Protected Routes**: Automatic redirection to login for unauthenticated users
- **Session Management**: Persistent login state across browser sessions
- **Secure Logout**: Complete session cleanup and redirection

### Responsive Design
- **Mobile Navigation**: Collapsible menu for small screens
- **Adaptive Camera**: Video feed scales appropriately on all devices
- **Touch Interactions**: Optimized for mobile and tablet usage

## 🔧 Configuration

### Camera Settings
The webcam component is configured with optimal settings:
- **Resolution**: 1280x720 (ideal)
- **Facing Mode**: User (front camera)
- **Auto-sizing**: Responsive to container

### Detection Parameters
- **Confidence Threshold**: 60%
- **Detection Interval**: 10ms
- **Model**: COCO-SSD (80 object classes)

## 🎨 Customization

### Styling
The project uses a comprehensive Tailwind CSS setup with:
- Custom color palette with CSS variables
- Dark mode support (configured but not active)
- Custom animations and transitions
- Glass morphism utilities

### Authentication
To modify authentication:
1. Update credentials in `lib/auth.js`
2. Customize user roles and permissions
3. Add additional providers if needed

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Environment Variables
For production deployment, consider setting:
- `NEXTAUTH_URL` - Your domain URL
- `NEXTAUTH_SECRET` - Random secret for JWT signing

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support and questions, please open an issue in the repository.
