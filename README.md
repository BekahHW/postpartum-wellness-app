# What is the Postpartum Wellness App

This app is to help women monitor their mental and physical wellness after having a baby. With a new baby, life is full of new and exciting things as well as challenges. For some women, being aware of their mental and physical health helps them to take care of themselves. Other women face postpartum depression, anxiety, PTSD, other postpartum mood disorders. And it happens more frequently than we realize or talk about. This app is meant to help postpartum moms find a healthy path post birth, to provide a resource for monitoring their mental health, and to provide support that can lead to early diagnoses of postpartum mental health disorders.

The profile keeps track of important information in order to help each user determine where they need help or to monitor daily habits. The app will also help you to celebrate your wins and find community or help when you need it.

# Project Goals

This is a passion project, and I'm learning as I go. Ultimately, the project will collect enough data to provide support to women who are facing postpartum mental health issues. Currently, the project is in Phase 1, setting up basic UI elements, without the full styling and custom art we see in the future.

This will likely be a long running project, with multiple phases that will include:

- Working with AWS Amplify
- Creating a clear [workflow](https://www.figma.com/file/GV6j3SxSSPZEpql0xV2etL/Workflows?node-id=0%3A1)
- Creating a clear [design aesthetic](https://www.figma.com/file/WB41mEaTanI6PWldMfENxQ/Material-Design-Theme-Kit-Copy)
- Machine learning

If any of that sounds interesting, don't hesitate to take a look at one of our [issues](https://github.com/BekahHW/postpartum-wellness-app/issues) and dive in.

# Run and Install

1. If you don't have it already, download and install [NODE.js](https://nodejs.org/en/download/)
2. Download and install [Expo-CLI](https://expo.io/tools#cli) via
   `yarn global add expo-cli`
3. [Fork](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo) this repo
4. Create a local copy on your machine
5. In a shell terminal/command line
6. Run the live development server with:

```
yarn start
```

From here, the app can be run a couple of different ways. If you have XCode, you can run the app on your computer. (With X-Code, instead of `yarn start` you can run `yarn ios` or `yarn android`.) If you don't have XCode that's fine! You'll see a QR code popup, you can access the app on your phone through the QR code. You will need the expo app.
A more in-depth guide for contributing can be found in the [CONTRIBUTING](https://github.com/BekahHW/postpartum-wellness-app/blob/main/CONTRIBUTING.md)

The page will reload if you make edits and save.
You will also see any lint errors in the console.

```
yarn test
```

Launches the test runner in the interactive watch mode.

# Code of Conduct

This is an inclusive space for education, learning and healthy communication. We ask that before you engage with the repository, please check out the [Code of Conduct](https://github.com/tkshill/Quarto/blob/main/CODE_OF_CONDUCT.md). This repo will serve as a learning experience not only in functional programming and UI design, but also in good community interactions. As much as possible, all contributors should feel safe, respected, and appreciated for their efforts.

# Tech Stack

- [React Native](https://github.com/expo/react-native/archive/sdk-39.0.2.tar.gz)
- [Expo](https://expo.io/learn) Expo is a framework and a platform for universal React applications. It is a set of tools and services built around React Native and native platforms that help you develop, build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript/TypeScript codebase.
- [React Native Paper](https://callstack.github.io/react-native-paper/) cross-platform Material Design for React Native
- [AWS Amplify](https://docs.amplify.aws/start/q/integration/react) as the mobile backend as a service
- [React Native Testing Library](https://testing-library.com/docs/react-native-testing-library/intro) for testing

# Contact

The primary way to communicate about this project is through issues, but you can also reach me at [@bekahhw](https://twitter.com/BekahHW) on Twitter.
