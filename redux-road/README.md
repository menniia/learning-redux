# Redux Road - Text-Based Adventure Game

## Introduction

Welcome to **Redux Road**, a text-based adventure game where you embark on a journey, manage supplies, and encounter various challenges along the way. This project showcases the core concepts of Redux for state management, allowing players to gather supplies, travel, and deal with unexpected mishaps.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)

## Features

- Manage supplies, distance traveled, and days on the road.
- Gather supplies to replenish your inventory.
- Travel for any number of days, while managing your supplies.
- Encounter challenges like tipping your wagon and losing supplies.

## Technologies Used

- JavaScript
- Redux

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/redux-road.git
cd redux-road
```

# Usage

After initializing the state, you can interact with the game through the following steps:

1. **Initialize the game state**:

   ```javascript
   let wagon = wagonReducer(undefined, {});
   console.log(wagon); // { supplies: 100, distance: 0, days: 0 }

   wagon = wagonReducer(wagon, { type: "travel", payload: 1 });
   console.log(wagon); // { supplies: 80, distance: 10, days: 1 }

   wagon = wagonReducer(wagon, { type: "gather" });
   console.log(wagon); // { supplies: 95, distance: 10, days: 2 }

   wagon = wagonReducer(wagon, { type: "tippedWagon" });
   console.log(wagon); // { supplies: 65, distance: 10, days: 3 }

   wagon = wagonReducer(wagon, { type: "travel", payload: 3 });
   console.log(wagon); // { supplies: 5, distance: 40, days: 6 }
   ```
