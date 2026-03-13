🌍 Location Selector (Country → State → City)

A simple React application that allows users to select a Country, State, and City using cascading dropdowns. The data is fetched dynamically from an API.

🚀 Features

Select Country → State → City

Dynamic API fetching

Custom React hooks

Reusable Select component

Loading and error handling

Built with React + TypeScript

🛠 Tech Stack

React

TypeScript

CSS

Custom React Hooks

Fetch API

📦 API Used

Country, State, and City data are fetched from:

https://location-selector.labs.crio.do
Endpoints

Get Countries

https://location-selector.labs.crio.do/countries

Get States

https://location-selector.labs.crio.do/countries/{country}/states

Get Cities

https://location-selector.labs.crio.do/countries/{country}/states/{state}/cities
📂 Project Structure
src
│
├── components
│ └── Select.tsx
│
├── hooks
│ ├── useCountries.ts
│ ├── useStates.ts
│ └── useCities.ts
│
├── App.tsx
└── main.tsx
⚙️ Installation

Clone the repository:

git clone <your-repo-url>

Navigate into the project:

cd location-selector

Install dependencies:

npm install

Start the development server:

npm run dev
💡 How It Works

The app loads all available countries.

When a user selects a country, the app fetches its states.

When a user selects a state, the app fetches its cities.

Each dropdown updates dynamically.
# XState
