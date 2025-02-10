This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).


# Getting Started

## Generalities

This project use the architecture based in clean Architecture + MVVM (Model-View-ViewModel) with this objetive:

- Use Zustand for the state management.
- Use React Query for the data fetching.
- Use React Navigation for the navigation.
- Use React Native Safe Area Context for the safe area.
- Keep business logic out of the UI layer.
- Keep the UI layer focused on presenting data and interacting with the user.
- Keep the presentation logic focused on the view models.
- Keep the data layer focused on storing and retrieving data.


## Considerations

This project was build with the next versions:

react => 18.3.1

react-native => 0.77.0

node => v22.13.1

cocoapods => 1.16.2

java => 21.0


### How first step use:

```sh
# Using npm
npm install

# OR using Yarn
yarn install
```

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

#### This is important to maintain consistency in the CocoaPods version.
The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

if you getting an error in the last command, try this:

```sh
sudo gem install bundler:2.2.28

## after use
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

