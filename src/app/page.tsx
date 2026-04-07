import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background">
      <h1 className="text-2xl font-bold">Welcome to the app!</h1>
      <div className="flex items-center justify-center">
        <OrganizationSwitcher />
        <UserButton />
      </div>
    </div>
  )
}