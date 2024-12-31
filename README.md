# React + Vite Project

This project is a React application built with Vite, featuring initial setups for fast development, Hot Module Replacement (HMR), and ESLint rules. It uses Tailwind CSS for the user interface design.

---

## Project Features

- **Vite Usage**: High-speed project execution and build times.
- **Fast Refresh**: Fast code reloading for a better developer experience.
- **Tailwind CSS Design**: Fast, beautiful, and modular design.
- **Hierarchical Registration Steps**: A user-friendly multi-step user registration process.

---

## File Structure

```plaintext
src/
├── App.jsx            # Main application file
├── main.jsx           # Entry file for Vite
├── ProtectedRoute.js  # Managing protected routes
├── Routes.js          # Define routes
├── assets/            # Resources including images and fonts
├── common/            # Reusable and common components
├── components/        # Main application components
├── constants/         # Constants and configurations
├── container/         # Container components (e.g., AppBar and Footer)
├── context/           # Context API management for various states
├── hooks/             # Custom hooks
├── pages/             # Main application pages
├── service/           # API-related files and requests
├── utils/             # Utility functions and tools
├── widget/            # Specific tools and widgets
```

---

## Hierarchical Registration Steps

This project includes a user-friendly multi-step registration process:

### Step 1: Enter Mobile Number

- The user enters their mobile number.
- A request is sent to send an OTP code to the entered number.

### Step 2: OTP Verification


- The user enters the OTP code sent to their mobile.
- The system verifies the entered code.

### Step 3: Complete Registration Form

- The user enters account information such as name, email, and other details.

### Step 4: Upload or Capture Photo

- The user can either upload a photo or use a webcam to take a picture.

### Step 5: Confirm Information

- All entered information is displayed for user confirmation.
- The user confirms the details and finalizes their registration.

---

## Installation and Setup

### 1. Install Dependencies

First, install the project dependencies using npm:


````
npm install

### 2.Run the Application
To run the project in development mode:

```
npm run dev


### 3.Build the Application
To build the project for production:

```
npm run build

---
````

````plaintext
## Key Features

### Async use-reducer-async Management

- Uses the use-reducer-async package to handle async logic (similar to redux-thunk).

### API Interaction

- The service/authSignIn.js file manages login and registration API requests.

### Protected Route Management

- The ProtectedRoute component is used to control access to specific pages for authenticated users.


---

## File Tree Structure

src/
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── ProtectedRoute.js
│   ├── Routes.js
│   ├── assets/
│   │   ├── fonts/
│   │   │   ├── vazir/
│   │   │   │   ├── Vazirmatn-Black.woff2
│   │   │   │   ├── Vazirmatn-Bold.woff2
│   │   │   │   ├── Vazirmatn-ExtraBold.woff2
│   │   │   │   ├── Vazirmatn-Medium.woff2
│   │   │   │   ├── Vazirmatn-Regular.woff2
│   │   ├── image/
│   │   │   ├── about1.jpeg
│   │   │   ├── about2.jpg
│   │   │   ├── carousel-1.avif
│   │   │   ├── carousel-2.avif
│   │   │   ├── carousel-3.avif
│   │   │   ├── Industrial-Maintenance-Mechanic-Technician-940x529.jpg
│   │   │   ├── officecleaning.jpg
│   │   │   ├── portfolio-5.jpg
│   ├── common/
│   │   ├── BackToUp.jsx
│   │   ├── BtnAnimation.jsx
│   │   ├── CustomeBtn.jsx
│   │   ├── Loading.jsx
│   │   ├── TextField.jsx
│   │   ├── Tilte.jsx
│   ├── components/
│   │   ├── AccordionMenu.jsx
│   │   ├── Carousel.jsx
│   │   ├── auth/
│   │   │   ├── Stepper.jsx
│   │   │   ├── ImageForm/
│   │   │   │   ├── ImageForm.jsx
│   │   │   │   ├── useCaptureImage.js
│   │   │   │   ├── useUploadImageForm.js
│   │   │   ├── otpForm/
│   │   │   │   ├── CheckOTPForm.jsx
│   │   │   │   ├── SendPhoneNumberForm.jsx
│   │   │   │   ├── useCheckOTP.js
│   │   │   │   ├── usePinInput.js
│   │   │   ├── registerForm/
│   │   │   │   ├── RegisterMain.jsx
│   │   │   │   ├── useRegisterLogic.js
│   │   │   ├── submitInformation/
│   │   │   │   ├── index.jsx
│   │   │   │   ├── SubmitInputs.jsx
│   │   │   │   ├── useUserForm.js
│   │   ├── counterMain/
│   │   │   ├── CounterAnimation.jsx
│   │   │   ├── CounterMain.jsx
│   │   ├── ourServices/
│   │   │   ├── Services.jsx
│   │   │   ├── ServicesPage.jsx
│   │   ├── table/
│   │   │   ├── Pagination.jsx
│   │   │   ├── RefreshButton.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── Table.jsx
│   │   │   ├── useFilteredUsers.js
│   │   │   ├── usePagination.js
│   │   ├── whyWorkers/
│   │   │   ├── Carousel.jsx
│   │   │   ├── Details.jsx
│   │   │   ├── WhyWorkers.jsx
│   ├── constants/
│   │   ├── index.js
│   ├── container/
│   │   ├── Footer.jsx
│   │   ├── index.js
│   │   ├── appBar/
│   │   │   ├── AppBar.jsx
│   │   │   ├── NavBar.jsx
│   ├── context/
│   │   ├── AuthReducer.js
│   │   ├── signupProvider.js
│   │   ├── StateContext.js
│   ├── hooks/
│   │   ├── useCookies.js
│   ├── pages/
│   │   ├── aboutUs.js
│   │   ├── home.js
│   │   ├── servicesUs.js
│   │   ├── signIn.js
│   ├── service/
│   │   ├── authSignIn.js
│   │   ├── http.js
│   ├── utils/
│   │   ├── backToUp.js
│   │   ├── objectUtils.js
│   │   ├── toPersianDigits.js
│   ├── widget/
│   │   ├── serviceVisitBtn.jsx

````