# PostHog post-wizard report

The wizard has completed a deep integration of your project. PostHog analytics was instrumented across 8 files in the Astro static site. A reusable `posthog.astro` component was created and loaded site-wide via `BaseHead.astro`. Seven custom events capture the key user interactions: social profile link clicks, blog list CTA clicks, individual blog post clicks and views, footer email contact clicks, mobile nav menu toggles, and about-page "Let's Connect" CTA clicks. All event scripts use Astro's `is:inline` directive to avoid TypeScript processing issues, and all credentials are loaded from environment variables.

| Event                    | Description                                                                                                                         | File                                     |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| `social_link_clicked`    | User clicks a social profile link (LinkedIn, GitHub, X) in the hero/feature section. Captures `platform` and `location` properties. | `src/components/Feature/Feature.astro`   |
| `connect_cta_clicked`    | User clicks the "Let's Connect" CTA button on the about page.                                                                       | `src/pages/about.astro`                  |
| `read_more_blog_clicked` | User clicks the "Read more" button on the blog list section of the homepage.                                                        | `src/components/BlogList/BlogList.astro` |
| `blog_post_clicked`      | User clicks a blog post item in the listing. Captures `post_id` and `post_title` properties.                                        | `src/components/PostItem/PostItem.astro` |
| `blog_post_viewed`       | A blog post page is loaded and viewed. Captures `post_title` property.                                                              | `src/layouts/Post/Post.astro`            |
| `email_contact_clicked`  | User clicks the email link in the footer.                                                                                           | `src/components/Footer/Footer.astro`     |
| `nav_menu_toggled`       | User opens or closes the mobile navigation menu. Captures `state` (`open`/`closed`).                                                | `src/components/Header/Header.astro`     |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- **Dashboard — Analytics basics:** https://us.posthog.com/project/357944/dashboard/1402339
- **Blog Post Views (daily):** https://us.posthog.com/project/357944/insights/7P3Fe2p4
- **Blog post click-to-read funnel:** https://us.posthog.com/project/357944/insights/QGnHgUzp
- **Social link clicks by platform:** https://us.posthog.com/project/357944/insights/Dc1gUO4x
- **Connect CTA and email contact clicks:** https://us.posthog.com/project/357944/insights/MIWfLlMe
- **Nav menu engagement:** https://us.posthog.com/project/357944/insights/U1Vh4ITl

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
