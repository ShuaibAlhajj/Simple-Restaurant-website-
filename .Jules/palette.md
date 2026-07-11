## 2024-05-22 - [Modal Accessibility and Focus Management]
**Learning:** In static websites without component libraries, modal accessibility must be manually implemented. Key elements include role="dialog", aria-modal="true", converting non-semantic spans to buttons, and managing focus (storing trigger, focusing close button, restoring focus on close).
**Action:** Always implement focus restoration when closing modals and provide clear :focus-visible styles for keyboard users.

## 2024-05-23 - [Non-blocking Feedback and ARIA Filter States]
**Learning:** Native `alert()` calls are jarring and block the main thread, hurting the UX "flow". A lightweight toast system provides feedback without interruption. For menu filters, `aria-pressed` is essential for screen readers to understand the active selection in a list of toggle-like buttons.
**Action:** Replace all debug/info `alert()` calls with a toast system and ensure filter buttons use `aria-pressed`.

## 2024-05-24 - [Scrollspy and Dynamic ARIA Labels]
**Learning:** For single-page navigation, visual feedback of the current section (Scrollspy) significantly aids orientation. Using `IntersectionObserver` with `rootMargin: "0px 0px -50% 0px"` ensures the active state changes as the section crosses the middle of the viewport. For dynamic elements like a cart button, updating the `aria-label` with live counts (e.g., "View Order Cart - 1 item") is more accessible than just visual counters.
**Action:** Implement `IntersectionObserver` for auto-updating navigation states and ensure interactive counters have descriptive `aria-label` updates.

## 2026-07-11 - [Character Counters and Live Regions]
**Learning:** For inputs with length constraints, visual counters provide essential feedback. Combining `aria-describedby` for initial context with `aria-live="polite"` for real-time updates ensures the counter is accessible without being intrusive. Using flexbox with `margin-left: auto` on the counter allows it to coexist gracefully with error messages in a shared `.form-help` container.
**Action:** Always link character counters to their inputs using `aria-describedby` and use `aria-live="polite"` for real-time status updates.
