import Link from "next/link";
import { GridContainer } from "@/components/layout/GridContainer";
import { Display, Body } from "@/components/typography";

export default function NotFound() {
  return (
    <GridContainer className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <Display size="xl" as="h1" className="mb-4">
        404
      </Display>
      <Body className="mb-8">The page you are looking for does not exist.</Body>
      <Link
        href="/"
        className="text-[clamp(0.6875rem,0.2vw+0.6rem,0.75rem)] font-medium uppercase tracking-[0.1em] text-gray-500 hover:text-blush transition-colors duration-300"
      >
        Return Home
      </Link>
    </GridContainer>
  );
}
