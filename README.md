# Postpartum Wellness App

A compassionate mobile app designed to support postpartum mental and physical wellness through evidence-based tools, community connection, and accessible resources.

## Overview

This app helps women monitor their mental and physical wellness after having a baby. Postpartum depression, anxiety, PTSD, and other mood disorders happen more frequently than we realize or talk about. This app provides:

- 🧘‍♀️ **Wellness Toolbox** - Daily affirmations, mindfulness, breathing exercises, gentle movement, and more
- 🤝 **Mentor Connection** - Private, judgment-free support from trained postpartum mentors
- 📊 **Mood Tracking** - Monitor your emotional wellbeing over time
- 📚 **Resources** - Direct access to crisis support and educational materials
- 👤 **Profile Management** - Track your journey and celebrate your wins

The goal is to help postpartum moms find a healthy path post-birth and support early diagnosis of postpartum mental health challenges.

## ✨ Features

### Wellness Toolbox
All features are now fully implemented with beautiful, calming UI:

- **Affirmations** - 16 curated affirmations for postpartum moms
- **Mindfulness** - 5-sense grounding exercise
- **Breathing** - Animated 4-4-4 breathing exercise with real-time guidance
- **Laughter & Light** - Uplifting mom life moments and humor
- **Guided Visualization** - Three peaceful visualization journeys (beach, garden, mountain)
- **Gentle Movement** - Safe postpartum exercises with detailed instructions

### Support & Resources
- **Mentor Connection** - Connect with non-judgmental mentors (requires backend - see docs)
- **Crisis Support** - One-tap access to 988, PSI Helpline, and emergency services
- **Educational Resources** - Learn about postpartum mood disorders and family support

### Design
- 🎨 Light, balanced, simple, and inviting aesthetic
- 🌸 Soft color palette (rose, sage, peach, lavender, cream, sky)
- ♿ Accessible and easy to navigate
- 🌓 Dark mode support

## 📱 Screenshots

[Screenshots would go here in production]

## 🏗️ Project Status & Roadmap

### ✅ Phase 1: Complete
- Beautiful UI/UX design with calming color scheme
- All wellness features fully implemented
- Navigation structure and routing
- Resource screens and crisis support
- Profile creation and management

### 🚧 Phase 2: Backend Integration (In Progress)
- User authentication (UI ready, needs backend)
- Data persistence with AWS Amplify
- Mentor connection privacy service (critical - see docs)
- Mood tracking analytics
- Push notifications

### 🔮 Phase 3: Advanced Features (Planned)
- Machine learning for early detection
- Community features
- Custom art and illustrations
- Multi-language support

**Want to contribute?** Check out our [issues](https://github.com/BekahHW/postpartum-wellness-app/issues)!

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Expo CLI

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/BekahHW/postpartum-wellness-app.git
   cd postpartum-wellness-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   expo start
   ```

4. **Run the app**
   - **iOS**: Press `i` or run `npm run ios`
   - **Android**: Press `a` or run `npm run android`
   - **Web**: Press `w` or run `npm run web`
   - **Physical device**: Scan QR code with Expo Go app

### Testing
```bash
npm test          # Run tests in watch mode
npm run lint      # Check code quality
npm run format    # Format code with Prettier
```

## 📖 Documentation

Comprehensive guides for developers:

- **[Development Setup](docs/DEVELOPMENT_SETUP.md)** - Complete development environment setup
- **[Backend Setup](docs/BACKEND_SETUP.md)** - AWS Amplify, database, and API configuration
- **[Mentor Connection Privacy](docs/MENTOR_CONNECTION_PRIVACY.md)** - Critical privacy implementation for mentor calling feature

**Important:** The mentor connection feature requires backend implementation to protect user privacy. See the documentation for details.

# Code of Conduct

This is an inclusive space for education, learning and healthy communication. We ask that before you engage with the repository, please check out the [Code of Conduct](https://github.com/tkshill/Quarto/blob/main/CODE_OF_CONDUCT.md). This repo will serve as a learning experience not only in functional programming and UI design, but also in good community interactions. As much as possible, all contributors should feel safe, respected, and appreciated for their efforts.

## 🛠️ Tech Stack

### Frontend
- **React Native** 0.74.2
- **Expo** SDK 51
- **TypeScript** 5.3.3
- **React Navigation** 6.x (Native Stack & Bottom Tabs)
- **React Native Paper** 5.12.3 (Material Design)

### Backend (Planned)
- **AWS Amplify** - Authentication, API, DataStore
- **Twilio** - Mentor connection with privacy protection
- **AWS Lambda** - Serverless functions

### Development Tools
- **Jest** & **React Testing Library** - Testing
- **ESLint** & **Prettier** - Code quality
- **Storybook** - Component development
- **TypeScript** - Type safety

### Design System
- Custom light, balanced color palette
- Soft rose, sage, peach, lavender, cream, sky blues
- Material Design components
- Undraw.co illustrations

## 🤝 Contributing

We welcome contributions! This project serves as both a valuable resource for postpartum wellness and a learning opportunity for developers.

**Ways to contribute:**
- 🐛 Report bugs and issues
- 💡 Suggest new features
- 🎨 Improve UI/UX
- 📝 Improve documentation
- 🔧 Fix bugs or implement features
- 🧪 Write tests

**Getting started:**
1. Read the [Code of Conduct](CODE_OF_CONDUCT.md)
2. Check out [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines
3. Browse [open issues](https://github.com/BekahHW/postpartum-wellness-app/issues)
4. Join the conversation!

## 📄 License

[Your license here]

## 🙏 Acknowledgments

- Virtual Coffee community for support
- All contributors who have helped build this app
- Postpartum Support International for resources and inspiration

## 📞 Contact

- **Primary contact**: Issues on GitHub
- **Twitter**: [@bekahhw](https://twitter.com/BekahHW)

## ⚠️ Disclaimer

This app is not a substitute for professional medical advice, diagnosis, or treatment. If you are experiencing a mental health crisis, please call 988 (Suicide & Crisis Lifeline) or 911 immediately.

---

[![Virtual Coffee](https://img.shields.io/badge/Virtual-Coffee-red)](https://virtualcoffee.io)
[![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-000000.svg?style=flat-square&logo=EXPO&labelColor=ffffff&logoColor=000)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://reactnative.dev/)

Made with 💝 for postpartum wellness
