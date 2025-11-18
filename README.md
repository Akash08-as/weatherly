# Weatherly 🌦️

Weatherly is a simple and elegant weather application that fetches real-time weather data for capital cities of India.  
It features a clean UI, dynamic backgrounds, and responsive design for an engaging user experience.

---

## 🚀 Features
- Fetches live weather data using API integration  
- Dropdown menu for selecting Indian state capitals  
- Dynamic backgrounds and weather-themed visuals  
- Responsive design with layered blocks and glassmorphism styling  
- Secure backend with PHP for API key management  

---

## 📂 Project Structure
weatherly/
│── index.html        # Main UI
│── style.css         # Styling (glassmorphism, gradients, responsive blocks)
│── weather.js        # Frontend logic
│── weatherapi.js     # API integration script
│── weather.php       # Backend validation & API key handling
│── sunny.png         # Sample weather icon
│── README.md         # Documentation


---

## ⚙️ Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Akash08-as/weatherly.git
2. Navigate to the project folder:
  cd weatherly
3. Open index.html in your browser to view the app.

---

🔑 Backend Setup
Ensure you have a PHP-enabled server (e.g., XAMPP, WAMP, or hosting provider).

Store your API key securely in environment variables.

Update weather.php to fetch the key and validate city names.

---
## 📖 Usage

1. Open `index.html` in your browser.  
2. From the dropdown menu, select the capital city of an Indian state.  
3. The app will fetch real-time weather data for the selected city using the integrated API.  
4. Weather details (temperature, condition, humidity, etc.) will be displayed with dynamic backgrounds and icons that match the current weather.  
5. Switch between different cities to compare weather conditions instantly.  

### Example
- Select **Bhopal** → Weatherly shows current temperature, sky condition, and updates the background to match.  
- Select **Delhi** → Instantly fetches Delhi’s weather and updates visuals accordingly.  

### Notes
- Ensure you have a stable internet connection for live API calls.  
- If backend (`weather.php`) is configured, API keys will be securely managed.  
- Works best on modern browsers (Chrome, Edge, Firefox).  
