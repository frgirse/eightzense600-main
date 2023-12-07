"use client";
import { useUser } from "@clerk/nextjs";
 
export default function Example() {
  const { isLoaded, isSignedIn, user } = useUser();
 
  if (!isLoaded || !isSignedIn) {
    return null;
  }
 
  return <div className="text-white text-xs">Hello, {user.firstName} welcome to Clerk</div>;
}