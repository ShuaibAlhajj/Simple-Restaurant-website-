## 2024-05-22 - [Modal Accessibility and Focus Management]
**Learning:** In static websites without component libraries, modal accessibility must be manually implemented. Key elements include role="dialog", aria-modal="true", converting non-semantic spans to buttons, and managing focus (storing trigger, focusing close button, restoring focus on close).
**Action:** Always implement focus restoration when closing modals and provide clear :focus-visible styles for keyboard users.

## 2024-05-23 - [Non-blocking Feedback and ARIA Filter States]
**Learning:** Native `alert()` calls are jarring and block the main thread, hurting the UX "flow". A lightweight toast system provides feedback without interruption. For menu filters, `aria-pressed` is essential for screen readers to understand the active selection in a list of toggle-like buttons.
**Action:** Replace all debug/info `alert()` calls with a toast system and ensure filter buttons use `aria-pressed`.

## 2024-05-24 - [Scrollspy and Dynamic ARIA Labels]
**Learning:** For single-page navigation, visual feedback of the current section (Scrollspy) significantly aids orientation. Using `IntersectionObserver` with `rootMargin: "0px 0px -50% 0px"` ensures the active state changes as the section crosses the middle of the viewport. For dynamic elements like a cart button, updating the `aria-label` with live counts (e.g., "View Order Cart - 1 item") is more accessible than just visual counters.
**Action:** Implement `IntersectionObserver` for auto-updating navigation states and ensure interactive counters have descriptive `aria-label` updates.

## 2024-08-07 - [Form Reset Synchronization for Character Counters]
**Learning:** Real-time character counters linked to inputs must be manually synchronized with the form's reset state. Relying only on browser-level reset actions restores textareas to empty, but fails to trigger JavaScript 'input' events, leaving visual counters out of sync (e.g. still showing '51 / 500' on an empty field).
**Action:** Explicitly call the counter update function inside the form's success/reset handler, and wrap validation messages and counters in a dedicated flex wrapper to keep layouts responsive and perfectly aligned.

## 2024-08-08 - [Modal Focus Trapping and Keyboard Accessibility]
**Learning:** In static modal dialogs, standard keyboard tab-key navigation escapes to elements outside the active modal container unless focus is explicitly trapped. Standardizing trapping using semantic query selectors and wrapping index pointers enhances screen reader and keyboard UX without layout compromises.
**Action:** Always implement a dedicated keydown event listener inside the modal to trap focus, using standard query selectors for focusable elements and checking for shiftKey modification.

## 2026-09-05 - [Form Validation Focus and Feedback]
**Learning:** When client-side form validation fails upon submission, users (especially screen reader and keyboard-only users) can be left unaware of missing or invalid fields if focus remains on the submit button. Tracking the first invalid field, setting focus directly to it, and providing a polite toast message guides users seamlessly to correct errors.
**Action:** Always track the first invalid input during form submit validation to set focus to it and display non-blocking feedback.

## 2026-09-13 - [Live Region Status for Filtered Results]
**Learning:** When users filter dynamic content (such as restaurant menu items), visual changes are immediately perceptible to sighted users, but screen reader users are unaware of the updated result set unless a live region announces the change. A polite, atomic live status container (`aria-live="polite"` and `aria-atomic="true"`) using `.sr-only` clearly communicates matching result counts without shifting focus or disrupting layout.
**Action:** Provide an accessible `.sr-only` live region when adding client-side category filters or search features to announce matching item counts.
