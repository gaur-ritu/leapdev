# LEAP Dev Angular Coding Challenge

Welcome to our software engineering coding challenge! This coding challenge is an opportunity for you to demonstrate your coding skills and problem-solving abilities. We will be evaluating your ability to write clean, efficient, and maintainable code, and your overall approach to problem-solving. This assessment is designed to give us an insight into how you work and how you would fit into our engineering team.

Below you will find a description, requirements, and assumptions for 2 different tasks that we would like you to complete. You will also find details on how to run your code and system requirements for using this repository.

Like the real world, we don't expect this to be done in a single sitting. Read through the tasks, write a bit of code, take a break to think about it, then come back and write some more.

Additionally, please do NOT put your solution on your personal Github or otherwise share the problems or your solution in any other public forum.

Thanks in advance for taking the time to show us your skills. We look forward to seeing your solution and wish you the best of luck!

## When Finished

1. Make sure your code is pushed up to your repository.
2. Shoot an email over to use so we can take a look at your solution.
3. We will create a PR and evaulate your changes.
4. We will also download your solution and run your code.

## Evaluation Criteria

Our engineers will be assessing your code against 3 broad criteria:

- **Correct code:** Does the program meet the spec? Do all the tests pass? Does it run, does it produce correct results? How does it handle edge cases and bad input?
- **Maintainable code:** Is the code well structured and easy to read? Does it follow language idioms? Is the code well designed such that it could be easily extended or modified?
- **Pragmatic, operable code:** Is the code focused on solving the spec or is it over-engineered, providing more functionality than we requested? Does it follow best practices?

## Getting Started

While going through the challenges and looking at the starter code, you will notice that some component variables have already been declared with an `any` type. Feel free to update these as you see fit. They have just been added so that the code will compile out of the box. This will allow you to run the code and see your progress as you go.

### Prerequisites

Before you begin, make sure that you have the following installed:

- Node version 16.x (other versions might work but this has been tested against v16)
- Npm 8.x (other versions might work but this has been tested against v16)
- Angular CLI 15.x
- Code editor of your choice

Other versions of the above might work but this repository has been tested with the above versions.

### Local Commands

- Install Dependencies: `npm install`
  - You will need to run this before the next two commands in order to install the required packages to run the code
- Run your code: `npm run start`
  - If you keep this running, your code will build and the browser will refresh every time your code changes
- Test your code: `npm run test`
  - If you keep this running, your tests will re run every time your code changes

## Star Ratings

### Task Description

Write a system to display star ratings using Angular components.

### Assumptions

- You ONLY need to update the code found in the folder `src/app/star-ratings/components` but you are welcome to create any needed helper utils outside of that folder.
- Components can reuse each other (composition can be applied).
- Styling is not evaluated in this task.
- Rating lists will be at least two items long.
- The empty star is the `&#9734;` HTML element.
- The filled star is the `&#9733;` HTML element.
- The rate property of the ratings element is always an integer between 1 and 5.
- The ratings list will appear as follows:

```js
const ratings = [
  {
    name: "John Doe",
    content: "Nice thing!",
    rate: 5,
  },
  {
    // next rating
  },
];
```

### Requirements

Your task is to create three components in Angular which, based on supplied data, will allow the display of individual ratings, a list of ratings and an average rating. The components are:

#### RatingComponent

- It displays an individual rating and takes name, rate, content properties.
- Depending on the rating, it displays the appropriate number of filled and empty stars. For example: a rating of 4 means that four filled stars and one empty star should be displayed.
- The RatingComponent component should have the className ratings\_\_item.
- In the RatingComponent component, name should be rendered in `<h4>` tags and content in `<p>` tags.
- Each star must be wrapped in its own `<span>` tag.

**Example:**

![star-ratings-rating](https://user-images.githubusercontent.com/372717/220824242-7f86b575-aca9-48c8-844c-a9252d33e44c.jpeg)

#### AverageRatingComponent

- Displays the average rating. Depending on the given ratings property, it should calculate the average rating from all ratings rounded up (4.01 to 5, but 4.0 to 4) and display an appropriate number of stars, as with the Rating component.
- The AverageRatingComponent component should have the className ratings\_\_average.
- It takes in `ratings` that is an object array with properties for `name`, `content` and `rate`.
  - A variable has been stubbed out with `any` to allow the code to initially build

**Example:**

![star-rating-average](https://user-images.githubusercontent.com/372717/220824264-2faba999-745e-483b-98f9-61541ceeb86d.jpeg)

#### RatingsListComponent

- Takes ratings as its property and displays both the average rating and all individual ratings.
- The RatingsListComponent component should have the className `ratings`.
- It takes in `ratings` that is an object array with properties for `name`, `content` and `rate`.

#### StarRatingsPageComponent

- Update the HTML to pass in rating data to the above 3 components
  - For the rating component, pass in the first record of data
  - Do not modify anything else about this page (the tests rely on the DOM structure)

**Example:**

![star-rating-list](https://user-images.githubusercontent.com/372717/220824281-ddbc844b-cad4-40d1-8f3e-948e0a073948.jpeg)

## Social App

### Task Description

Implement an Angular component with a basic functionality of Social-App. The app will enable user to view 5 friends with the highest mutual friends number ordered by the number of likes (from the highest to lowest), display current like count of each friend, give a like to each friend and handle both successful and failing API requests.

### Assumptions

- Styling is not evaluated in this task.
- If you add any new imports or declarations to `SocialAppsModule`, you are allowed to update any tests to match as needed.
- To mimic a real scenario, there is a 1 second delay when loading the api data.
- You do not need to modify the `SocialAppService`.
- You do not need to update anything in the following folders:
  - `/src/social-app/data`
  - `/src/social-app/types`
- Friend is of following type:

```js
type Friend = {
  name: string,
  likeCount: number,
};
```

### Requirements

- The outermost tag of the FriendList component is a `div` with class `app-wrapper`.
- The FriendList component has an `<h3>` tag with `My Friends` inside.
- The FriendList component should take in `friends` as a list of `Friend`.
- The SocialAppPage component should fetch the friend list and pass it to the FriendList component.
- The SocialAppPage component should have a method called `addFriendLike` that takes in the `id` of the friend to add a `like` to
- Use the service `SocialAppService` to load friends and add `likes` but DO NOT modify the service. It has the following methods:
  - getFriends
  - addFriendLike
    - takes in the `id` to add a like to
    - returns on object with the property `likeCount` which represents the new `likeCount` (not always incremental by 1)
- If there is an error loading friends, display an error message inside of a `<div>` tag with the class `error`
  - The message should say `Fetching friends has failed`
  - You can mimic this by updating the injected value `simulateLoadError` in the `SocialAppsModule`
- If there is an error message adding a `like` to a friend, display an error message inside of a `div` tag with the class `error`
  - The message should say `Liking friend has failed`
  - You can mimic this by updating the injected value `simulateUpdateError` in the `SocialAppsModule`
- Display all 5 friends with like counts and buttons contained in the test data
  - Although the response from `getFriends` could contain any number of friends
- The friends should be displayed in the order from most likes to least likes
- If 2 friends have the same number of likes, order them alphabetically
- Friends should be displayed in a `<ul>`
- Each friend should have a `<span>` tag with their name inside
- Each friend have a `<button>` tag which triggers adding a `like`
- The content of the `<button>` should be `Like ##` where `##` represents the total `likes` they have
  - ex: A friend with 25 likes would have the button text `Like 25`
- After clicking the 'like' button, the displayed `likeCount` should get updated if successful
- After clicking the 'like' button, the displayed the list order should be updated based on the previously mentioned sorting criteria (i.e. highest total likes, alphabetically)
- After clicking the 'like' button, the button for that friend should become disabled if successful

**Example:**

![social-app](https://user-images.githubusercontent.com/372717/220824102-6cd9fdc9-019d-415c-8659-06d3a25c9f86.gif)
