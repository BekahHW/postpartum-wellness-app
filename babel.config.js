export default function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    
      plugins: [
        [
           'module-resolver',
           {
             root: ['./src'],
             extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
             alias: {
               "tests": ["./tests/"],
               "@components": "./src/components",
             }
           }
        ]
      ]
    }
};
