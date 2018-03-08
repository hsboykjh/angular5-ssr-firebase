# Angular5 Server Side Rendering + Firebase Realtime Database (AngularFire2) boilerplate

## Get Started

```
$git clone https://github.com/hsboykjh/angular5-ssr-firebase.git
$cd angular5-ss-firebase
$npm install
```

## Firebase setup
create account and new project

## Firebase Realtime Database (Json)
```
objectData : {"name" : "jihoon"}

listData : [{"name" : "jihoon"},{"name" : "bob"}]
```
## Launching the Server Side Rendred App

Run `npm run universal` to trigger the build of the SSR app. Navigate to `http://localhost:5000/` and The app html should be rendred and hello messages from firebase firestore and the realtime databases will appear like this:


## Launching the Non Server Side Rendred App

the app uses the Angular CLI so just Run `ng serve` to serve the app on `http://localhost:4200/`
