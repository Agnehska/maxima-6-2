import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function App() {
  return (
    <header>
      <SignedOut>
        <h1>Зайдя в наше супер-пупер приложение, вы оставите все свои данные!</h1>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <h1>Ура ты зашел!</h1>
        <UserButton />
      </SignedIn>
    </header>
  )
}