import AuthLayout from "./_auth/AuthLayout";
import SignupForm from "./_auth/forms/SignupForm";
import SigninForm from "./_auth/forms/SigninForm";
import { Home } from "./_root/pages";
import { Routes, Route } from "react-router-dom";
import "./globals.css";
import RootLayout from "./_root/RootLayout";
import { Toaster } from "./components/ui/toaster";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />}></Route>
          <Route path="/sign-up" element={<SignupForm />}></Route>
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;
