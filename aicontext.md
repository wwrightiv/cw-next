# Connect Wellness Front-End – Project Context for Cursor

## 🧠 Project Overview

This project is the new front-end for **Connect Wellness**, a wellness service provider offering in-person and virtual corporate wellness experiences (yoga, meditation, etc). The new site will be powered by a **Next.js** app connected to **Contentful** (headless CMS), deployed on **Netlify**.

We are starting from the official [Netlify Next.js platform starter](https://github.com/netlify-templates/next-platform-starter) and customizing it to meet our design, content, and business needs.

---

## 🧰 Tech Stack

- **Framework**: Next.js (App Router)
- **CMS**: Contentful
- **Deployment**: Netlify
- **Styling**: TailwindCSS
- **Content modeling**: via Contentful
- **Image handling**: next/image + Contentful assets
- **Markdown**: Some content fields in Contentful may use Markdown
- **Environment variables**: Managed via `.env` and Netlify dashboard
- **Type safety**: TypeScript
- **SEO**: Handled via `next/head` or a reusable SEO component

---

## 📁 Contentful Notes

- Content is modeled in **Contentful** using the following base content types:
  - `Page` – Used for general static pages (Home, About, etc.)
  - `Service` – Represents a specific offering (e.g. Corporate Yoga)
  - `Testimonial` – Client quotes with attribution
  - `TeamMember` – Bios and photos for instructors and staff
  - `Retreat` – Represents special events/retreats
  - `FAQ` – Questions and answers for Help/Support
  - `ContactInfo` – Site-wide contact details

> Keep in sync with the Contentful model definitions to avoid runtime errors. Changes to model fields should be reflected in both the Contentful UI and TypeScript types (use generated types when possible).

---

## 🧑‍💻 Code Standards

- **Component structure**:
  - Reusable components in `/components`
  - Page-level components in `/app`
  - Hooks in `/hooks`
  - Utilities in `/lib`
  - Contentful integration in `/lib/contentful.ts` or similar

- **Styling**:
  - TailwindCSS utility-first approach
  - Prefer composability with class names over deeply nested styles
  - Use `clsx` or similar utilities to manage conditional class names

- **Type safety**:
  - All Contentful entries should have corresponding TypeScript types
  - Use `@contentful/rich-text-react-renderer` for rendering rich text safely
  - Avoid using `any` unless absolutely necessary

- **Code organization**:
  - Use a `layout.tsx` file in the App Router for shared layouts
  - Use route-level loading, error, and metadata files
  - Follow feature-first or domain-based structuring when it adds clarity

---

## 🤖 AI + Cursor Usage Guidelines

To reduce hallucination and improve AI-assisted workflows:

### 1. **Prefer grounded sources**
- When working with Contentful content types, always **reference the actual schema** in Contentful.
- If unsure, run a real query in GraphiQL or inspect an entry via the Contentful API.

### 2. **Avoid assuming GraphQL shape**
- This project uses REST-based SDKs or Contentful's delivery API, **not GraphQL by default**.
- If GraphQL is introduced, the schema must be introspected with live tooling.

### 3. **State your intent clearly**
- When prompting Cursor or AI tools, state your **goal first**, then your current code/context.
- Example: “Generate a card component for a Service entry that includes the title, description, and image.”

### 4. **Use inline comments to constrain generation**
- Comment above a function or component with what it should do. E.g.:
  ```tsx
  // Renders a responsive grid of Service cards from Contentful
