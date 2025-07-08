import LoginPage from "../features/auth/pages/LoginPage/LoginPage"
import SignupPage from "../features/auth/pages/SignupPage/SignupPage"
import { BrowserRouter, Navigate, /* Navigate */ Route, Routes } from "react-router-dom"

import "../shared/global.css"
import AuthLayout from "../features/auth/layouts/AuthLayout"
import NotFoundPage from "@/errors/NotFoundPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/login" replace />} />
        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
