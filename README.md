# Ionic 2 Soundboard

This app takes a collection of sounds from a custom URL.
That way sounds can be added and removed at will,
while still keeping the app code the same.
The app makes use of [Ionic 2](http://ionic.io/2) with [TypeScript](https://www.typescriptlang.org/).

## Prerequisities
Assumes that Homebrew is installed.
For alternative installation options for Node, refer to their [website](https://nodejs.org/)
```
brew install node
npm install -g cordova
npm install -g ionic
```

## Setup
Assumes that Git is installed along with the prerequisites.
```
git clone git@github.com:rkalis/ionic-soundboard.git
cd ionic-soundboard
npm install
ionic platform add ios
ionic platform add android
```
Then run it locally with
```
ionic serve --lab
```
## Sounds Files
Unzip the zip file into www/sound

### Icon & Splash Screen (Note: this Ionic feature is in Beta)
Replace `ionic-soundboard/resources/icon.png` and `ionic-soundboard/resources/splash.png` with your own files.
Then run:
```
ionic resources
```

## Usage

On the web address specified by base_url + sounds_url there should be a page containing link tags in the following format:
```
<a href="sample_sound.mp3">Sample Title</a>
```

For example http://kalis.me/sounds looks like this:
```
<a href="/res/bird.mp3">Bird</a>
<a href="/res/cat.mp3">Cat</a>
<a href="/res/cow.mp3">Cow</a>
<a href="/res/dog.mp3">Dog</a>
<a href="/res/dolphin.mp3">Dolphin</a>
<a href="/res/frog.mp3">Frog</a>
<a href="/res/pig.mp3">Pig</a>
```
Resulting in this soundboard:
![Soundboard](https://i.imgur.com/4Bweeni.png)

Or with edited title-bar colour and random icon colours:
![Soundboard2](https://i.imgur.com/KL87vK5.png)

## Testing/Building/Publishing
Please refer to the [ContactApp Wiki](https://github.com/incodehq/contactapp/wiki)
for a comprehensive guide to testing, building, and publishing Ionic apps.
