# Reward Seat Finder

**Date:** 6 April 2026
**Description:** An Australian-market tool for finding frequent flyer reward seats on Qantas and Velocity. Built with Next.js and a headless Playwright scraper.

**Info:**
- Live at: https://flights.alibo.dev
- Stack: Next.js + Playwright + AWS
- Source: Private

---

## Why I built it

Finding reward flights on Qantas and Velocity is slow. I wanted a fast, utilitarian tool to scrape availability directly and bypass clunky airline interfaces. It's built for speed and utility, not as a marketing site.

The app uses a brutalist, high-contrast aesthetic. Pure data, no fluff.

## How it's structured

The stack is a Next.js 14 frontend backed by PostgreSQL (Prisma) and Redis. The heavy lifting happens in a separate Node.js worker running Playwright and Chromium.

I deployed it on AWS using Terraform. It runs on a Graviton2 (ARM64) `t4g.small` instance. The 2GB of RAM is crucial because scraping with headless browsers easily OOMs smaller instances like the `t3.micro`. CI/CD pushes multi-platform Docker images to ECR, and Docker Compose handles orchestration on the box via AWS SSM.

## The hard parts

Scraping airlines headless means fighting anti-bot systems and transient network drops.

For Velocity, I had to manage transient Chromium timeouts, guard `page.evaluate` calls against SPA navigations, and strictly manage browser user-agents to prevent Imperva blocks. For Qantas, I built a region-mode fanout that respects rate limits by serializing source calls. When Qantas started throwing 403s on broad month-view lookups, I had to write fallback logic to pivot into single-page, day-by-day probes to maintain data coverage.

## What's next

Right now, live scraping is stable. The next step is expanding the background worker to handle automated saved searches and email alerts.

[← Back to projects](/projects)
