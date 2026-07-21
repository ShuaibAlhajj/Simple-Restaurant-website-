## 2024-05-22 - [Modal Accessibility and Focus Management]
**Learning:** In static websites without component libraries, modal accessibility must be manually implemented. Key elements include role="dialog", aria-modal="true", converting non-semantic spans to buttons, and managing focus (storing trigger, focusing close button, restoring focus on close).
**Action:** Always implement focus restoration when closing modals and provide clear :focus-visible styles for keyboard users.

## 2024-05-23 - [Non-blocking Feedback and ARIA Filter States]
**Learning:** Native `alert()` calls are jarring and block the main thread, hurting the UX "flow". A lightweight toast system provides feedback without interruption. For menu filters, `aria-pressed` is essential for screen readers to understand the active selection in a list of toggle-like buttons.
**Action:** Replace all debug/info `alert()` calls with a toast system and ensure filter buttons use `aria-pressed`.

## 2024-05-24 - [Scrollspy and Dynamic ARIA Labels]
**Learning:** For single-page navigation, visual feedback of the current section (Scrollspy) significantly aids orientation. Using `IntersectionObserver` with `rootMargin: "0px 0px -50% 0px"` ensures the active state changes as the section crosses the middle of the viewport. For dynamic elements like a cart button, updating the `aria-label` with live counts (e.g., "View Order Cart - 1 item") is more accessible than just visual counters.
**Action:** Implement `IntersectionObserver` for auto-updating navigation states and ensure interactive counters have descriptive `aria-label` updates.

## 2024-07-21 - [Live Character Counters and Form Resets]
**Learning:** Implementing real-time feedback with character counters requires syncing input constraints with accessible visual feedback. By using `aria-live="polite"` on the status counter and linking the input via `aria-describedby` (sharing with error state IDs), screen readers stay informed without overwhelming announcements. During dynamic operations like form resets, the character counter's visual state must be manually re-evaluated based on the element's `maxlength` attribute rather than hardcoded string fallbacks, ensuring robust DOM state alignment.
**Action:** Always link visual character counters using `aria-describedby` and `aria-live="polite"`, and dynamically reset counter content in form-reset handlers.
