# Essential Stuff

## Html import links

Google font

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;500&display=swap"
  rel="stylesheet"
/>
```

Material icon

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0"
/>
```

---

## CSS Variables

### Colors

```css
--black: #000000;
```

Light theme

```css
--background-light: #fffbff;
--on-background-light: #201a18;
--surface-light: #fff8f6;
--surface-container-low-light: #fef1ec;
--surface-container-highest-light: #ede0db;
--on-surface-light: #201a18;
--on-surface-variant-light: #52443d;
--primary-light: #9d4300;
--on-primary-light: #ffffff;
--primary-container-light: #ffdbca;
--on-primary-container-light: #341100;
--secondary-container-light: #ffdbca;
--on-secondary-container-light: #2b160a;
--outline-light: #85736b;
--outline-variant-light: #d7c2b9;
--inverse-surface-light: #362f2c;
--inverse-on-surface-light: #fbeee9;
```

Dark theme

```css
--background-dark: #201a18;
--on-background-dark: #ede0db;
--surface-dark: #181210;
--surface-container-low-dark: #201a18;
--surface-container-highest-dark: #3a3330;
--on-surface-dark: #d0c4bf;
--on-surface-variant-dark: #d7c2b9;
--primary-dark: #ffb690;
--on-primary-dark: #552100;
--primary-container-dark: #783200;
--on-primary-container-dark: #ffdbca;
--secondary-container-dark: #5c4032;
--on-secondary-container-dark: #ffdbca;
--outline-dark: #a08d84;
--outline-variant-dark: #52443d;
--inverse-surface-dark: #ede0db;
--inverse-on-surface-dark: #201a18;
```

### Typography

Font family

```css
--font-primary: "Kumbh Sans", sans-serif;
```

Font size

```css
--fs-base: 62.5%;
--fs-display-large: 5.7rem;
--fs-display-medium: 4.5rem;
--fs-display-small: 3.6rem;
--fs-headline-large: 3.2rem;
--fs-headline-medium: 2.8rem;
--fs-headline-small: 2.4rem;
--fs-title-large: 2.2rem;
--fs-title-medium: 1.6rem;
--fs-title-small: 1.4rem;
--fs-body-large: 1.6rem;
--fs-body-medium: 1.4rem;
--fs-body-small: 1.2rem;
--fs-label-large: 1.4rem;
--fs-label-medium: 1.2rem;
--fs-label-small: 1.1rem;
```

Line height

```css
--lh-base: 20px;
--lh-display-large: 64px;
--lh-display-medium: 52px;
--lh-display-small: 44px;
--lh-headline-large: 40px;
--lh-headline-medium: 36px;
--lh-headline-small: 32px;
--lh-title-large: 28px;
--lh-title-medium: 24px;
--lh-title-small: 20px;
--lh-body-large: 24px;
--lh-body-medium: 20px;
--lh-body-small: 16px;
--lh-label-large: 20px;
--lh-label-medium: 16px;
--lh-label-small: 16px;
```

Font weight

```css
--fw-regular: 400;
--fw-medium: 500;
```

Letter spacing

```css
--ls-n-025: -0.25px;
--ls-p-010: 0.1px;
--ls-p-015: 0.15px;
--ls-p-025: 0.25px;
--ls-p-040: 0.4px;
--ls-p-050: 0.5px;
```

### Spacing

```css
--spacing-base: 4px;
--spacing-05: calc(var(--spacing-base) * 0.5);
--spacing-1: calc(var(--spacing-base) * 1);
--spacing-2: calc(var(--spacing-base) * 2);
--spacing-3: calc(var(--spacing-base) * 3);
--spacing-4: calc(var(--spacing-base) * 4);
--spacing-5: calc(var(--spacing-base) * 5);
--spacing-6: calc(var(--spacing-base) * 6);
--spacing-7: calc(var(--spacing-base) * 7);
--spacing-8: calc(var(--spacing-base) * 8);
--spacing-9: calc(var(--spacing-base) * 9);
--spacing-10: calc(var(--spacing-base) * 10);
--spacing-11: calc(var(--spacing-base) * 11);
--spacing-12: calc(var(--spacing-base) * 12);
--spacing-13: calc(var(--spacing-base) * 13);
--spacing-14: calc(var(--spacing-base) * 14);
--spacing-15: calc(var(--spacing-base) * 15);
--spacing-16: calc(var(--spacing-base) * 16);
--spacing-17: calc(var(--spacing-base) * 17);
--spacing-18: calc(var(--spacing-base) * 18);
--spacing-19: calc(var(--spacing-base) * 19);
--spacing-20: calc(var(--spacing-base) * 20);
```

### Box shadow

```css
--shadow-1: 0px 1px 3px 1px #00000026, 0px 1px 2px 0px #0000004d;
--shadow-2: 0px 2px 6px 2px #00000026, 0px 1px 2px 0px #0000004d;
--shadow-3: 0px 1px 3px 0px #0000004d, 0px 4px 8px 3px #00000026;
--shadow-4: 0px 2px 3px 0px #0000004d, 0px 6px 10px 4px #00000026;
--shadow-5: 0px 4px 4px 0px #0000004d, 0px 8px 12px 6px #00000026;
```

### Border radius

```css
--radius-extra-small: 4px;
--radius-small: 8px;
--radius-medium: 12px;
--radius-large: 16px;
--radius-extra-large: 28px;
--radius-full: 1000px;
```

### Transition

```css
--tr-duration-short: 200ms;
--tr-duration-medium: 400ms;
--tr-duration-long: 500ms;
--tr-easing-linear: cubic-bezier(0, 0, 1, 1);
--tr-easing-emphasized: cubic-bezier(0.2, 0, 0, 1);
```

### Others

```css
--sidebar-width: 360px;
```
