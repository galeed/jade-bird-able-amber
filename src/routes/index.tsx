import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/portfolio/home-page";

export const Route = createFileRoute("/")({ component: HomePage });
