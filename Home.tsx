import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-background shadow-sm md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <PlayIcon className="w-6 h-6 text-primary" />
          <span className="text-lg font-bold">Play Store</span>
        </Link>
        <div className="relative flex-1 max-w-md">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search apps & games"
            className="w-full pl-10 pr-8 rounded-full bg-muted focus:ring-primary focus:ring-1"
          />
        </div>
        <nav className="hidden gap-4 md:flex">
          <Link href="#" className="text-sm font-medium hover:text-primary" prefetch={false}>
            Games
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary" prefetch={false}>
            Apps
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary" prefetch={false}>
            Movies & TV
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary" prefetch={false}>
            Books
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary" prefetch={false}>
            Kids
          </Link>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="w-6 h-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </header>
      <main className="flex-1 overflow-auto">
        <section className="px-4 py-6 md:px-6 md:py-8">
          <div className="grid gap-6">
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">Featured Apps</h2>
                <Link href="#" className="text-sm font-medium text-primary" prefetch={false}>
                  See all
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <Link href="#" className="group" prefetch={false}>
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg"
                      alt="App 1"
                      width={150}
                      height={150}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                      style={{ aspectRatio: "150/150", objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/50 to-transparent">
                      <div className="text-sm font-medium text-white line-clamp-2">Spotify: Music and Podcasts</div>
                    </div>
                  </div>
                </Link>
                <Link href="#" className="group" prefetch={false}>
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg"
                      alt="App 2"
                      width={150}
                      height={150}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                      style={{ aspectRatio: "150/150", objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/50 to-transparent">
                      <div className="text-sm font-medium text-white line-clamp-2">
                        Instagram: Photo and Video Sharing
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="#" className="group" prefetch={false}>
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg"
                      alt="App 3"
                      width={150}
                      height={150}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                      style={{ aspectRatio: "150/150", objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/50 to-transparent">
                      <div className="text-sm font-medium text-white line-clamp-2">
                        TikTok: Short Videos, Trending Challenges
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="#" className="group" prefetch={false}>
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg"
                      alt="App 4"
                      width={150}
                      height={150}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                      style={{ aspectRatio: "150/150", objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/50 to-transparent">
                      <div className="text-sm font-medium text-white line-clamp-2">YouTube: Watch, Listen, Stream</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">Categories</h2>
                <Link href="#" className="text-sm font-medium text-primary" prefetch={false}>
                  See all
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                <Link href="#" className="group" prefetch={false}>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted">
                      <GamepadIcon className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div className="text-sm font-medium text-center line-clamp-2">Games</div>
                  </div>
                </Link>
                <Link href="#" className="group" prefetch={false}>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted">
                      <SmartphoneIcon className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div className="text-sm font-medium text-center line-clamp-2">Apps</div>
                  </div>
                </Link>
                <Link href="#" className="group" prefetch={false}>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted">
                      <FilmIcon className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div className="text-sm font-medium text-center line-clamp-2">Movies & TV</div>
                  </div>
                </Link>
                <Link href="#" className="group" prefetch={false}>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted">
                      <BookOpenIcon className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div className="text-sm font-medium text-center line-clamp-2">Books</div>
                  </div>
                </Link>
                <Link href="#" className="group" prefetch={false}>
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-muted">
                      <BabyIcon className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div className="text-sm font-medium text-center line-clamp-2">Kids</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold">Recommended for You</h2>
                <Link href="#" className="text-sm font-medium text-primary" prefetch={false}>
                  See all
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <Link href="#" className="group" prefetch={false}>
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg"
                      alt="App 1"
                      width={150}
                      height={150}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                      style={{ aspectRatio: "150/150", objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/50 to-transparent">
                      <div className="text-sm font-medium text-white line-clamp-2">Duolingo: Learn Languages</div>
                    </div>
                  </div>
                </Link>
                <Link href="#" className="group" prefetch={false}>
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg"
                      alt="App 2"
                      width={150}
                      height={150}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                      style={{ aspectRatio: "150/150", objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/50 to-transparent">
                      <div className="text-sm font-medium text-white line-clamp-2">Calm: Meditation & Sleep</div>
                    </div>
                  </div>
                </Link>
                <Link href="#" className="group" prefetch={false}>
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg"
                      alt="App 3"
                      width={150}
                      height={150}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                      style={{ aspectRatio: "150/150", objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/50 to-transparent">
                      <div className="text-sm font-medium text-white line-clamp-2">Snapchat: Camera & Messaging</div>
                    </div>
                  </div>
                </Link>
                <Link href="#" className="group" prefetch={false}>
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg"
                      alt="App 4"
                      width={150}
                      height={150}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                      style={{ aspectRatio: "150/150", objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/50 to-transparent">
                      <div className="text-sm font-medium text-white line-clamp-2">Headspace: Meditation & Sleep</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-4 px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <PlayIcon className="w-6 h-6 text-primary" />
            <span className="text-sm font-medium">Google Play Store</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-primary" prefetch={false}>
              About
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function BabyIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 12h.01" />
      <path d="M15 12h.01" />
      <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
      <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
    </svg>
  )
}


function BookOpenIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}


function FilmIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 3v18" />
      <path d="M3 7.5h4" />
      <path d="M3 12h18" />
      <path d="M3 16.5h4" />
      <path d="M17 3v18" />
      <path d="M17 7.5h4" />
      <path d="M17 16.5h4" />
    </svg>
  )
}


function GamepadIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  )
}


function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PlayIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}


function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SmartphoneIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  )
}
