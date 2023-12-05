import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import { MenuSquare } from 'lucide-react';
import Link from 'next/link';
import { Button, Separator, Sheet, SheetContent, SheetTrigger } from './ui';

export const Header = async () => {
  return (
    <header className="flex justify-between bg-primary text-primary-foreground px-1.5 sm:px-4 py-2">
      <div className="">
        <Link href="/">
          <p className="text-4xl">
            <span className="font-extrabold bg-gradient-to-r from-amber-400 to-red-600 bg-clip-text text-transparent">
              M
            </span>
            <span className="text-2xl">edico</span>
          </p>
        </Link>
      </div>

      {/* Desktop view */}
      <div className="max-xs:hidden flex gap-4 justify-center items-center">
        <SignedOut>
          <SignInButton>
            <Button variant="secondary">Signin</Button>
          </SignInButton>
          <div className="py-2">
            <Separator orientation="vertical" />
          </div>
          <SignUpButton>
            <Button variant="secondary">Signup</Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>

      {/* Mobile view */}
      <div className="xs:hidden flex justify-center items-center">
        <Sheet>
          <SheetTrigger className="xs:hidden">
            <MenuSquare className="" />
          </SheetTrigger>
          <SheetContent side="right" className="xs:hidden min-w-full">
            <div className="flex gap-4 h-8">
              <SignedOut>
                <SignInButton>
                  <Button variant="secondary">Signin</Button>
                </SignInButton>
                <div className="py-2">
                  <Separator orientation="vertical" />
                </div>
                <SignUpButton>
                  <Button variant="secondary">Signup</Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <div className="flex flex-col ">
                  <UserButton afterSignOutUrl="/" />
                  <Link href="/profile" className="">
                    <p>Profile</p>
                  </Link>
                  <Link href="/medicals" className="">
                    <p>Medicals</p>
                  </Link>
                </div>
              </SignedIn>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
