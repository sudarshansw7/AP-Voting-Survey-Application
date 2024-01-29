// Importing the config.js file
import config from "./config";
import Router from "./routes";
import ThemeProvider from "./theme";
import SnackBar from "./components/SnackBar";

function App() {
  // Accessing the database configuration
  const { host, port, user, password, database } = config.database;

  // Now you can use these values to connect to your database

  return (
    <ThemeProvider>
      <SnackBar />
      <Router />
    </ThemeProvider>
  );
}

export default App;

