goal-os/
│
├── public/
│   ├── favicon.ico
│   └── logo.png
│
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   ├── images/
│   │   └── backgrounds/
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── dashboard/
│   │   ├── calendar/
│   │   ├── planner/
│   │   ├── welcome/
│   │   └── ui/
│   │
│   ├── pages/
│   ├── data/
│   ├── hooks/
│   ├── utils/
│   ├── styles/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── routes.jsx
│
├── .gitignore
├── README.md
├── package.json
└── vite.config.js


////////////////////////////////////////////////////////////////////////////////////////////////////////////
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

////////////////////////////////////////////////////////////////////////////////////////////////////////////


//---------------------------------------------------------------------------------RESPONSE 1    

# GoalOS
A modern personal goal management dashboard built using React.

## Features

- Welcome Screen
- Dashboard
- Monthly Goal Planner
- Interactive Calendar
- Daily Planner
- Time Blocking
- Resource Manager
- Progress Tracking
- Analytics
- Responsive UI

---

## Tech Stack
React
Vite
React Router
Tailwind CSS
Framer Motion
Lucide React

---

## Installation
git clone <repo>
cd goal-os
npm install
npm run dev

---

## Version
Current Version     v0.1.0

---

# Changelog

## Response 1
✔ Project Setup
✔ Routing
✔ Base Pages
✔ Global Styles
✔ Ready for Layout Development
---

## Upcoming

Response 2
Welcome Page
Animations
Hero Section
Continue Journey

goal-os/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   │   ├── Welcome.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Month.jsx
│   │   ├── DayPlanner.jsx
│   │   ├── Resources.jsx
│   │   ├── Analytics.jsx
│   │   ├── Settings.jsx
│   │   └── NotFound.jsx
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── router.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
// ----------------------------------------------------res1 --------

## Response 2

✔ Application Layout

✔ Sidebar

✔ Top Navigation

✔ Responsive Shell

✔ Active Navigation

✔ Dashboard Layout

Version

v0.2.0


## Response 3

### Added

- Goal Hero Section
- Progress Bar
- Statistics Cards
- Today's Mission
- Responsive Dashboard

Version

v0.3.0

## Response 4

### Added

- Data-driven month system
- Month cards
- Reusable month data
- Interactive month navigation

Version

v0.4.0

## Response 5

Added

Interactive Month View

Calendar Grid

Daily Preview

Day Navigation

Version

v0.5.0

## Response 6

### Added

- Dynamic calendar engine
- Shared calendar data source
- Empty month placeholder
- Enhanced day cards
- Month-aware data loading

Version

v0.6.0

# Architecture 
roadmapConfig.js
↓
Global Rules
↓
roadmapData.js
↓
Daily Information
↓
Planner Page
↓
Dashboard
↓
Analytics
↓
Resources
------------------------------------------------------------------------------------------------------
# Architecture Evolution (Response 7)

## Why GoalOS Changed

When GoalOS started, the application was built around individual pages. Each page contained its own information and UI.

### Previous Architecture

```text
Page
│
├── Dashboard
│      ├── DSA Goal
│      ├── GitHub Goal
│      ├── Timeline
│      └── Subject
│
├── Month
│
└── Day Planner
       ├── DSA Goal
       ├── Timeline
       ├── Notes
       └── Subject
```

### Problems with this approach

* The same information is repeated in multiple places.
* Updating one common rule requires editing many files.
* Difficult to scale from a 60-day roadmap to a 90-day or 180-day roadmap.
* Backend integration becomes harder because business logic is scattered throughout the UI.

---

## New Architecture (Response 7)

GoalOS is now **data-driven**.

```text
roadmapConfig.js
        │
        ▼
Global Rules
        │
        ▼
roadmapData.js
        │
        ▼
Daily Information
        │
        ▼
Planner
Dashboard
Calendar
Analytics
Resources
```

### Responsibilities

### roadmapConfig.js

Contains information that rarely changes.

Examples:

* Total duration
* Daily DSA target
* GitHub push goal
* Daily timetable
* Development starting day

### roadmapData.js

Contains information that changes every day.

Examples:

* Subject
* Topic
* Milestone
* Development topic
* Weekly focus

---

## Example

Instead of writing this sixty times:

```text
Day 1
7 DSA Questions
3 Revision Questions
3-4 GitHub Pushes

Day 2
7 DSA Questions
3 Revision Questions
3-4 GitHub Pushes

...

Day 60
7 DSA Questions
3 Revision Questions
3-4 GitHub Pushes
```

GoalOS now stores the rule only once.

```javascript
dsa: {
    questionsPerDay: 7,
    revisionPerDay: 3
}

github: {
    minimum: 3,
    target: 4
}
```

Every page automatically reads those values.

---

## Why This Is Better

Imagine changing:

```text
7 DSA Questions
```

to

```text
10 DSA Questions
```

### Old Approach

Edit every planner or repeated section where the value appears.

### New Approach

```javascript
questionsPerDay: 10
```

One change updates the entire application.

---

## Engineering Lesson

A good application is **data-driven**, not **page-driven**.

Instead of asking:

> "How do I build this page?"

ask:

> "Where should this information live?"

Once the data model is designed well, the UI becomes much simpler to build, maintain, and extend.

---

## Future Scalability

Because GoalOS is configuration-driven, it can easily evolve into:

* 90-Day Placement Planner
* GATE Preparation Planner
* UPSC Study Planner
* Personal Habit Tracker
* Multi-user web application with a backend

without redesigning the entire frontend.

---

## Takeaway

One of the biggest lessons from GoalOS is that **designing the data first makes every future feature easier to build**.

This architecture is the foundation for the remaining versions of GoalOS and for the future backend implementation.
------------------------------------------------------------------------------------------------------------


## Response 7 (Part 1)

### Added
- `roadmapConfig.js`
- `roadmapData.js`
- Configurable roadmap engine
- Daily roadmap structure
- Separation of configuration and content

### Version
v0.7.0-alpha

## Response 7 (Part 2)

### Planner Engine

GoalOS now generates the daily planner automatically.

The planner calculates:

- DSA question range
- Revision targets
- GitHub goals
- Development start
- Subject
- Milestone
- Timeline

Instead of storing repeated information for every day, the planner combines:

roadmapConfig.js

+

roadmapData.js

to generate each day's view.


