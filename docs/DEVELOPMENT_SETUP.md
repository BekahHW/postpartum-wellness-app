# Development Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or later)
- **npm** or **yarn**
- **Expo CLI** (`npm install -g expo-cli`)
- **Git**
- **iOS Simulator** (Mac only) or **Android Studio** (for Android development)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/postpartum-wellness-app.git
cd postpartum-wellness-app
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env` file in the root directory (use `.env.example` as a template):

```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```bash
# API Configuration
API_URL=http://localhost:3000
API_KEY=your_api_key_here

# AWS (if using Amplify)
AWS_REGION=us-east-1

# Twilio (for mentor connection)
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
```

### 4. Start Development Server

```bash
npm start
# or
expo start
```

This will start the Metro bundler and open Expo DevTools in your browser.

### 5. Run on Device/Simulator

**iOS (Mac only):**
```bash
npm run ios
# or press 'i' in the Expo DevTools terminal
```

**Android:**
```bash
npm run android
# or press 'a' in the Expo DevTools terminal
```

**Web:**
```bash
npm run web
# or press 'w' in the Expo DevTools terminal
```

**Physical Device:**
- Install Expo Go app from App Store/Play Store
- Scan QR code from terminal or Expo DevTools

---

## Project Structure

```
postpartum-wellness-app/
├── assets/                  # Images, fonts, icons
│   ├── images/
│   └── undraw_svgs/        # Illustration SVGs
├── components/             # Reusable components
├── constants/              # App constants
│   ├── Colors.ts          # Color theme
│   └── CardColors.ts      # Card color palette
├── docs/                   # Documentation
│   ├── BACKEND_SETUP.md
│   ├── MENTOR_CONNECTION_PRIVACY.md
│   └── DEVELOPMENT_SETUP.md
├── hooks/                  # Custom React hooks
├── navigation/             # Navigation configuration
│   ├── index.tsx          # Root navigator
│   └── BottomTabNavigator.tsx
├── screens/                # Screen components
│   ├── HomeScreen.tsx
│   ├── PositivityToolBoxScreen.tsx
│   ├── AffirmationScreen.tsx
│   ├── MindfulnessScreen.tsx
│   ├── BreathingScreen.tsx
│   ├── LaughingScreen.tsx
│   ├── VisualizationScreen.tsx
│   ├── MovingScreen.tsx
│   ├── ResourcesScreen.tsx
│   ├── MentorConnectionScreen.tsx
│   └── ...
├── App.tsx                 # Root component
├── app.json               # Expo configuration
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
└── babel.config.js        # Babel config
```

---

## Available Scripts

### Development
- `npm start` - Start Expo development server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run on web browser

### Testing
- `npm test` - Run Jest tests in watch mode
- `npm run test:ci` - Run tests once (for CI/CD)

### Code Quality
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript compiler checks

### Storybook (Component Development)
- `npm run storybook` - Start Storybook server
- `npm run build-storybook` - Build Storybook for production

---

## Technology Stack

### Core
- **React Native** 0.74.2
- **Expo** SDK 51
- **TypeScript** 5.3.3
- **React Navigation** 6.x (Native Stack & Bottom Tabs)

### UI Framework
- **React Native Paper** 5.12.3 (Material Design)
- Custom color theme (light/balanced/inviting palette)

### Development Tools
- **Jest** - Testing framework
- **React Testing Library** - Component testing
- **ESLint** - Linting
- **Prettier** - Code formatting
- **Storybook** - Component development

### Backend (Planned - see BACKEND_SETUP.md)
- AWS Amplify (Auth, API, DataStore)
- Twilio (Mentor connection)

---

## Expo SDK 51 Features Used

- `expo-asset` - Asset management
- `expo-constants` - App constants
- `expo-font` - Custom fonts
- `expo-linking` - Deep linking, phone calls
- `expo-splash-screen` - Splash screen
- `expo-status-bar` - Status bar styling

---

## Design System

### Color Palette

The app uses a light, balanced, and inviting color scheme designed for postpartum wellness:

**Primary Colors:**
- Primary: `#E89BA9` (Soft rose)
- Secondary: `#B8D4D0` (Sage green)
- Accent: `#F9D5A7` (Warm peach)

**Card Colors:**
- Lavender: `#D4C5E8`
- Rose: `#F5D4DC`
- Peach: `#FFE8D6`
- Sage: `#D9E8D8`
- Cream: `#FFF8E7`
- Sky: `#D9E8F5`

**Usage:**
```javascript
import Colors from '../constants/Colors';
import CardColors from '../constants/CardColors';
import useColorScheme from '../hooks/useColorScheme';

const colorScheme = useColorScheme();
const colors = Colors[colorScheme];

// Use in styles
backgroundColor: colors.background
color: colors.text
```

### Typography
- Headings: 28px, weight 600
- Subtitles: 16px, opacity 0.7
- Body: 14-15px, line-height 20-22px
- Card titles: 20px, weight 600

### Spacing
- Container padding: 24px
- Section margins: 24px
- Card gaps: 16px
- Button padding: 8px vertical, 32px horizontal

### Border Radius
- Cards: 12-16px
- Buttons: 24px (fully rounded)

---

## Key Features Implemented

### ✅ Wellness Toolbox
1. **Affirmations** - Positive daily reminders
2. **Mindfulness** - 5-sense grounding exercise
3. **Breathing** - 4-4-4 breathing animation
4. **Laughing** - Uplifting mom life content
5. **Visualization** - Guided imagery exercises
6. **Moving** - Gentle postpartum exercises

### ✅ Support Features
- **Resources** - Crisis hotlines and support organizations
- **Mentor Connection** - Connect to non-judgmental mentors (UI only, needs backend)

### ✅ User Profile
- Profile creation
- Baby information tracking

### ⚠️ Needs Backend Implementation
- User authentication (UI ready)
- Data persistence
- Mood tracking
- Emergency contacts
- Mentor connection service

---

## Development Workflow

### 1. Feature Development
```bash
# Create a new branch
git checkout -b feature/your-feature-name

# Make changes
# ... edit files ...

# Test your changes
npm test

# Lint and format
npm run lint
npm run format

# Commit
git add .
git commit -m "Add: feature description"

# Push
git push origin feature/your-feature-name
```

### 2. Code Review
- Create a Pull Request on GitHub
- Ensure all CI checks pass
- Request review from team members
- Address feedback

### 3. Merging
- Squash and merge to main branch
- Delete feature branch
- Pull latest main before starting next feature

---

## Testing

### Unit Tests

```bash
# Run all tests
npm test

# Run specific test file
npm test -- HomeScreen.test.tsx

# Run with coverage
npm test -- --coverage
```

### Manual Testing Checklist

**Before Each Release:**
- [ ] Test all navigation flows
- [ ] Verify all wellness tools work
- [ ] Test on both iOS and Android
- [ ] Check dark mode compatibility
- [ ] Verify all links and phone numbers
- [ ] Test error states
- [ ] Check accessibility (screen reader)

---

## Common Issues & Solutions

### Issue: Metro bundler won't start
```bash
# Clear cache
expo start -c
```

### Issue: Module not found errors
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Issue: iOS simulator not opening
```bash
# Reset simulator
xcrun simctl erase all
```

### Issue: Android build fails
```bash
# Clean Android build
cd android && ./gradlew clean
cd .. && npm run android
```

### Issue: TypeScript errors after update
```bash
# Regenerate types
npm run type-check
```

---

## Performance Optimization

### Images
- Use WebP format where possible
- Compress images before adding to assets
- Use `react-native-fast-image` for better image loading (if needed)

### Animations
- Use `react-native-reanimated` (already configured)
- Avoid animating layout properties
- Use `useNativeDriver: true` where possible

### Bundle Size
```bash
# Analyze bundle
npx expo-doctor

# Check for large dependencies
npm ls --depth=0
```

---

## Debugging

### React Native Debugger
```bash
# Install React Native Debugger
brew install --cask react-native-debugger

# Start debugger
open "rndebugger://set-debugger-loc?host=localhost&port=19000"
```

### Expo DevTools
- Press `d` in terminal to open developer menu
- Enable "Debug Remote JS" for Chrome debugging
- Use React DevTools for component inspection

### Logs
```bash
# View logs
npx react-native log-ios
npx react-native log-android
```

---

## Deployment

### Build for Production

**EAS Build (Recommended):**
```bash
# Install EAS CLI
npm install -g eas-cli

# Login
eas login

# Configure
eas build:configure

# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android
```

**Local Build:**
```bash
# iOS
expo build:ios

# Android
expo build:android
```

### Environment Configuration

Create different environments:
- `development` - Local testing
- `staging` - Pre-production testing
- `production` - Live app

---

## Contributing

### Code Style
- Use TypeScript for all new files
- Follow ESLint rules
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation for new features

### Commit Message Format
```
Type: Brief description

Longer description if needed

Types:
- Add: New feature
- Fix: Bug fix
- Update: Changes to existing features
- Refactor: Code restructuring
- Docs: Documentation changes
- Test: Adding tests
- Style: Code formatting
```

---

## Resources

### Documentation
- [Expo Docs](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Paper](https://callstack.github.io/react-native-paper/)

### Community
- [Expo Discord](https://chat.expo.dev/)
- [React Native Community](https://www.reactnative.dev/help)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/react-native)

### Design Resources
- [Undraw Illustrations](https://undraw.co/)
- [Material Design Icons](https://materialdesignicons.com/)
- [Expo Icons](https://icons.expo.fyi/)

---

## Next Steps

1. **Set up your development environment** following this guide
2. **Read BACKEND_SETUP.md** to understand backend requirements
3. **Review MENTOR_CONNECTION_PRIVACY.md** for critical privacy implementation
4. **Start building!** Pick a feature or bug to work on

---

## Support

For questions or issues:
- Open an issue on GitHub
- Contact the development team
- Check existing documentation

Happy coding! 🚀
