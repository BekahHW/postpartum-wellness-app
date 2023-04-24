
// import Amplify from 'aws-amplify';
// import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure({
    Auth: {
      region: 'us-east-1',
      userPoolId: 'YOUR_USER_POOL_ID',
      userPoolWebClientId: 'YOUR_USER_POOL_CLIENT_ID'
    }
  });

  import { Auth } from 'aws-amplify';

async function handleSignIn() {
  try {
    const user = await Auth.signIn('username', 'password');
    console.log('Sign in successful:', user);
  } catch (error) {
    console.error('Error signing in:', error);
  }
}

async function handleSignOut() {
  try {
    await Auth.signOut();
    console.log('Sign out successful');
  } catch (error) {
    console.error('Error signing out:', error);
  }
}
