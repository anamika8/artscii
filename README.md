   
     █████╗ ██████╗ ████████╗███████╗ ██████╗██╗██╗
    ██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔════╝██║██║
    ███████║██████╔╝   ██║   ███████╗██║     ██║██║
    ██╔══██║██╔══██╗   ██║   ╚════██║██║     ██║██║
    ██║  ██║██║  ██║   ██║   ███████║╚██████╗██║██║
    ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝ ╚═════╝╚═╝╚═╝
                                               
# Artscii

## By Anamika Nayak, Stuart Rimel, Eliza Sohn & Pete Wells

### CS 554 - Software Engineering Project

---

## Description

ARTSCII is a React-based AI Generative ASCII art generator. It uses the Dezgo API to generate images based off of your prompts and then converts the image to ASCII characters.
It was created for Portland State University's CS-554 "Software Engineering" class in the Winter of 2023.

## Installation

Note: You will need to sign up for a [Dezgo](https://rapidapi.com/dezgo/api/dezgo/pricing) API key in order to run this on your own machine.

1. Clone or download this repo. `git clone https://github.com/elizasohn/artscii.git`
2. Install the node modules by navigating to root and running `npm install`
3. Create a file named .env and place it in the artscii folder. `[path_to_repository]/artscii/.env`
4. Create a variable for your Dezgo API key inside the .env file. `REACT_APP_STABLE_DIFFUSION_API_KEY = [your key here]`
5. Change into the artscii directory `cd [path_to_repo]/artscii` and run the project `npm start`
6. If it does not open automatically: with the application running, navigate to [localhost:3000](localhost:3000/) on a web browser like Chrome.

## Usage

[Try it out here!](https://artscii.elizasohn.com/)
Simply enter a search term, wait for the resulting ai generated image and press "asciify" to see the glorious ascii results!

## Technologies

- [React](https://react.dev/) and [JavaScript](https://www.javascript.com/)
- [NodeJS](https://nodejs.org/en)
- [Dezgo](https://rapidapi.com/dezgo/api/dezgo/details)
- [Axios](https://axios-http.com/docs/intro)
- [Jest](https://jestjs.io/)

## References

- [Marmelab: "Convert An Image Into An ASCII Art Masterpiece With Pure JavaScript"](https://marmelab.com/blog/2018/02/20/convert-image-to-ascii-art-masterpiece.html)
- [idevelop/ascii-camera](https://github.com/idevelop/ascii-camera)
- [React documentation](https://react.dev/reference/react)
- [Dezgo API Documentation](https://rapidapi.com/dezgo/api/dezgo)
- [Jest documentation](https://jestjs.io/docs/getting-started)
