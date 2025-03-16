import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-20 lg:px-8">
        <nav className="flex justify-center space-x-6" aria-label="Footer">
          <Link
            href="/contact"
            className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/terms"
            className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy
          </Link>
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-muted-foreground">
          &copy; {new Date().getFullYear()} HVM Elite, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

