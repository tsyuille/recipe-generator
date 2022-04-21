# Recipe Generator

Generates recipes based on what the user is craving. 

**Link to project:** https://generate-recipes.netlify.app/

<img width="1440" alt="Screen Shot 2022-04-21 at 6 48 27 AM" src="https://user-images.githubusercontent.com/24927444/164442739-7d52a2dc-ad4e-4f0f-86fa-1ad23b49d5c0.png">

## How It's Made

**Tech used:** HTML, CSS, JavaScript

This recipe generator uses the API from The Meal DB. Initially, the generator was setup to only return one recipe based on the user's input. 
I solved this by creating a carousel to display all of the meals (if the array length for that particular ingredient > 1) that are related to the input value.
The recipe along with an image of the meal is then displayed in the DOM for the user to view and use. 

## Lessons Learned

I had some trouble getting the carousel to work properly initially. At the time of building this project, what I wanted to implement was new to me. 
I had to research and figure it out as I went along. After thinking it through, debugging, and getting the carousel to work, I went back and refactored
to increase the readability of my code. 

