
```
moulai_prod1-main
├─ .DS_Store
├─ app
│  ├─ .DS_Store
│  ├─ accounts
│  │  └─ page.tsx
│  ├─ api
│  │  ├─ .DS_Store
│  │  ├─ ai
│  │  │  ├─ .DS_Store
│  │  │  ├─ classify-bulk
│  │  │  │  └─ route.ts
│  │  │  ├─ classify-transaction
│  │  │  │  └─ route.ts
│  │  │  └─ extract-merchant-anzsic
│  │  │     └─ route.ts
│  │  ├─ anzsic-mappings
│  │  │  ├─ .DS_Store
│  │  │  ├─ lookup
│  │  │  │  ├─ .DS_Store
│  │  │  │  ├─ bulk
│  │  │  │  │  └─ route.ts
│  │  │  │  └─ [code]
│  │  │  │     └─ route.ts
│  │  │  └─ route.ts
│  │  ├─ auth
│  │  │  ├─ .DS_Store
│  │  │  ├─ change-password
│  │  │  │  └─ route.ts
│  │  │  ├─ check
│  │  │  │  └─ route.ts
│  │  │  ├─ forgot-password
│  │  │  │  └─ route.ts
│  │  │  ├─ me
│  │  │  │  └─ route.ts
│  │  │  ├─ profile
│  │  │  │  └─ route.ts
│  │  │  ├─ reset-password
│  │  │  │  └─ route.ts
│  │  │  ├─ signin
│  │  │  │  └─ route.ts
│  │  │  ├─ signout
│  │  │  │  └─ route.ts
│  │  │  ├─ signup
│  │  │  │  └─ route.ts
│  │  │  ├─ subscription
│  │  │  │  └─ route.ts
│  │  │  ├─ token
│  │  │  │  └─ route.ts
│  │  │  ├─ user
│  │  │  │  └─ route.ts
│  │  │  └─ verify-email
│  │  │     └─ route.ts
│  │  ├─ complete-flow
│  │  │  └─ route.ts
│  │  ├─ contact-cpa
│  │  │  └─ route.ts
│  │  ├─ dashboard
│  │  │  └─ route.ts
│  │  ├─ debug
│  │  │  ├─ .DS_Store
│  │  │  ├─ onboarding-data
│  │  │  │  └─ route.ts
│  │  │  └─ route.ts
│  │  ├─ keyword-mappings
│  │  │  ├─ .DS_Store
│  │  │  ├─ bulk-search
│  │  │  │  └─ route.ts
│  │  │  ├─ comprehensive-stats
│  │  │  │  └─ route.ts
│  │  │  ├─ route.ts
│  │  │  ├─ search
│  │  │  │  └─ route.ts
│  │  │  ├─ stats
│  │  │  │  └─ route.ts
│  │  │  ├─ test-lookup
│  │  │  │  └─ route.ts
│  │  │  ├─ test-merchant-extraction
│  │  │  │  └─ route.ts
│  │  │  └─ [id]
│  │  │     ├─ .DS_Store
│  │  │     ├─ route.ts
│  │  │     └─ usage
│  │  │        └─ route.ts
│  │  ├─ merchants
│  │  │  ├─ .DS_Store
│  │  │  ├─ bulk-search
│  │  │  │  └─ route.ts
│  │  │  ├─ cleanup
│  │  │  │  └─ route.ts
│  │  │  ├─ route.ts
│  │  │  └─ search
│  │  │     └─ route.ts
│  │  ├─ parsers
│  │  │  ├─ parse_pdf_amex.py
│  │  │  ├─ parse_pdf_anz.py
│  │  │  ├─ parse_pdf_cba.py
│  │  │  ├─ parse_pdf_nab.py
│  │  │  ├─ parse_pdf_westpac.py
│  │  │  └─ parse_pdf_westpac_credit_card.py
│  │  ├─ process-pdf
│  │  │  ├─ .DS_Store
│  │  │  └─ route.ts
│  │  ├─ profile
│  │  │  ├─ .DS_Store
│  │  │  └─ route.ts
│  │  ├─ stripe
│  │  │  ├─ .DS_Store
│  │  │  ├─ create-checkout
│  │  │  │  └─ route.ts
│  │  │  ├─ payment-link-success
│  │  │  │  ├─ .DS_Store
│  │  │  │  └─ route.ts
│  │  │  └─ webhook
│  │  │     ├─ .DS_Store
│  │  │     └─ route.ts
│  │  ├─ support
│  │  │  └─ route.ts
│  │  ├─ test
│  │  │  ├─ .DS_Store
│  │  │  ├─ parse-amex
│  │  │  │  └─ route.ts
│  │  │  ├─ parse-westpac-choice
│  │  │  │  └─ route.ts
│  │  │  ├─ parse-westpac-live
│  │  │  │  └─ route.ts
│  │  │  └─ route.js
│  │  ├─ test-pdf
│  │  │  └─ page.tsx
│  │  ├─ transactions
│  │  │  ├─ .DS_Store
│  │  │  ├─ route.ts
│  │  │  └─ [id]
│  │  │     └─ route.ts
│  │  └─ users
│  │     ├─ .DS_Store
│  │     ├─ route.ts
│  │     └─ [userId]
│  │        ├─ .DS_Store
│  │        ├─ accounts
│  │        │  ├─ .DS_Store
│  │        │  ├─ route.ts
│  │        │  └─ [accountId]
│  │        │     └─ transactions
│  │        │        └─ .DS_Store
│  │        ├─ auth_link
│  │        │  └─ route.ts
│  │        ├─ consents
│  │        │  └─ route.ts
│  │        ├─ jobs
│  │        │  └─ route.ts
│  │        ├─ route.ts
│  │        └─ transactions
│  │           └─ route.ts
│  ├─ auth-link
│  │  └─ [authId]
│  │     └─ page.tsx
│  ├─ calculator
│  │  └─ page.tsx
│  ├─ callback
│  │  └─ page.tsx
│  ├─ components
│  │  ├─ .DS_Store
│  │  └─ basiq-consent-popup.tsx
│  ├─ connect-account
│  │  └─ page.tsx
│  ├─ connect-bank
│  │  └─ page.tsx
│  ├─ consents
│  │  └─ page.tsx
│  ├─ contact-cpa
│  │  └─ page.tsx
│  ├─ dashboard
│  │  ├─ .DS_Store
│  │  ├─ loading.tsx
│  │  └─ page.tsx
│  ├─ debug-pdf
│  │  └─ page.tsx
│  ├─ find-deductions
│  │  ├─ .DS_Store
│  │  ├─ loading.tsx
│  │  └─ page.tsx
│  ├─ forgot-password
│  │  └─ page.tsx
│  ├─ globals.css
│  ├─ help
│  │  ├─ .DS_Store
│  │  └─ contact
│  │     └─ page.tsx
│  ├─ helpcenter
│  │  └─ page.tsx
│  ├─ layout.tsx
│  ├─ legal
│  │  ├─ .DS_Store
│  │  ├─ privacy
│  │  │  └─ page.tsx
│  │  └─ terms
│  │     └─ page.tsx
│  ├─ onboarding
│  │  ├─ .DS_Store
│  │  ├─ page.tsx
│  │  ├─ step1
│  │  │  └─ page.tsx
│  │  ├─ step2
│  │  │  └─ page.tsx
│  │  └─ welcome
│  │     ├─ .DS_Store
│  │     └─ page.tsx
│  ├─ page.tsx
│  ├─ phone-number
│  │  └─ page.tsx
│  ├─ privacy
│  │  └─ page.tsx
│  ├─ profile
│  │  └─ page.tsx
│  ├─ reports
│  │  └─ page.tsx
│  ├─ reset-password
│  │  ├─ .DS_Store
│  │  └─ [token]
│  │     └─ page.tsx
│  ├─ select-accounts
│  │  └─ page.tsx
│  ├─ settings
│  │  ├─ .DS_Store
│  │  ├─ account
│  │  │  └─ page.tsx
│  │  ├─ accounts
│  │  │  └─ page.tsx
│  │  ├─ billing
│  │  │  └─ page.tsx
│  │  ├─ deductions
│  │  │  └─ page.tsx
│  │  ├─ salary-deductions
│  │  │  ├─ .DS_Store
│  │  │  └─ page.tsx
│  │  └─ security
│  │     └─ .DS_Store
│  ├─ stuck
│  │  └─ page.tsx
│  ├─ success
│  │  └─ page.tsx
│  ├─ support
│  │  └─ page.tsx
│  ├─ tax-details
│  │  ├─ loading.tsx
│  │  └─ page.tsx
│  ├─ terms
│  │  └─ page.tsx
│  ├─ test-pdf
│  │  └─ page.tsx
│  ├─ transactions
│  │  ├─ .DS_Store
│  │  ├─ loading.tsx
│  │  └─ page.tsx
│  ├─ upgrade
│  │  ├─ .DS_Store
│  │  ├─ page.tsx
│  │  └─ success
│  │     ├─ loading.tsx
│  │     └─ page.tsx
│  └─ upload-statements
│     ├─ .DS_Store
│     └─ page.tsx
├─ basiq-styles.css
├─ components
│  ├─ .DS_Store
│  ├─ bank-selection-popup.tsx
│  ├─ dashboard-header.tsx
│  ├─ dashboard-navigation.tsx
│  ├─ dashboard-sidebar.tsx
│  ├─ PremiumFeature.tsx
│  ├─ support-chatbox.tsx
│  ├─ theme-provider.tsx
│  └─ ui
│     ├─ accordion.tsx
│     ├─ alert-dialog.tsx
│     ├─ alert.tsx
│     ├─ aspect-ratio.tsx
│     ├─ avatar.tsx
│     ├─ badge.tsx
│     ├─ breadcrumb.tsx
│     ├─ button.tsx
│     ├─ calendar.tsx
│     ├─ card.tsx
│     ├─ carousel.tsx
│     ├─ chart.tsx
│     ├─ checkbox.tsx
│     ├─ collapsible.tsx
│     ├─ command.tsx
│     ├─ context-menu.tsx
│     ├─ dialog.tsx
│     ├─ drawer.tsx
│     ├─ dropdown-menu.tsx
│     ├─ form.tsx
│     ├─ hover-card.tsx
│     ├─ input-otp.tsx
│     ├─ input.tsx
│     ├─ label.tsx
│     ├─ menubar.tsx
│     ├─ navigation-menu.tsx
│     ├─ pagination.tsx
│     ├─ popover.tsx
│     ├─ progress.tsx
│     ├─ radio-group.tsx
│     ├─ resizable.tsx
│     ├─ scroll-area.tsx
│     ├─ select.tsx
│     ├─ separator.tsx
│     ├─ sheet.tsx
│     ├─ sidebar.tsx
│     ├─ skeleton.tsx
│     ├─ slider.tsx
│     ├─ sonner.tsx
│     ├─ switch.tsx
│     ├─ table.tsx
│     ├─ tabs.tsx
│     ├─ textarea.tsx
│     ├─ toast.tsx
│     ├─ toaster.tsx
│     ├─ toggle-group.tsx
│     ├─ toggle.tsx
│     ├─ tooltip.tsx
│     ├─ use-mobile.tsx
│     └─ use-toast.ts
├─ components.json
├─ data-integration.tsx
├─ hooks
│  ├─ use-mobile.tsx
│  ├─ use-toast.ts
│  └─ useTransactions.ts
├─ lib
│  ├─ .DS_Store
│  ├─ auth.ts
│  ├─ basiq-service.ts
│  ├─ data
│  │  ├─ .DS_Store
│  │  ├─ anzsic-mappings.ts
│  │  └─ merchant-mappings.ts
│  ├─ hooks
│  │  ├─ .DS_Store
│  │  ├─ useAuth.tsx
│  │  ├─ useTransactions.ts
│  │  └─ useUser.ts
│  ├─ middleware
│  │  └─ auth.ts
│  ├─ models
│  │  ├─ anzsic-mapping.ts
│  │  ├─ keyword-mapping.ts
│  │  ├─ merchant.ts
│  │  └─ user.ts
│  ├─ mongodb.ts
│  ├─ services
│  │  ├─ .DS_Store
│  │  ├─ anzsic-mapping-service.ts
│  │  ├─ auth.ts
│  │  ├─ database.ts
│  │  ├─ enhanced-ai-classification.ts
│  │  ├─ enhanced-merchant-classification.ts
│  │  ├─ keyword-mapping-service.ts
│  │  ├─ merchant-service.ts
│  │  ├─ simple-ai-classification.ts
│  │  ├─ simple-merchant-ai.ts
│  │  └─ transaction-processor.ts
│  ├─ transaction-cache.ts
│  ├─ transaction-field-mapping.ts
│  ├─ transaction-utils.ts
│  ├─ user-profile.ts
│  ├─ utils
│  │  ├─ memory-optimizer.ts
│  │  └─ performance-monitor.ts
│  └─ utils.ts
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ .DS_Store
│  ├─ favicon
│  │  ├─ .DS_Store
│  │  ├─ favicon-16x16.png
│  │  ├─ favicon-32x32.png
│  │  └─ favicon-96x96.png
│  ├─ favicon.ico
│  ├─ logos
│  │  ├─ .DS_Store
│  │  ├─ amex.svg
│  │  ├─ anz.svg
│  │  ├─ cba.svg
│  │  ├─ nab.svg
│  │  └─ westpac.svg
│  ├─ meta.json
│  ├─ placeholder-logo.png
│  ├─ placeholder-logo.svg
│  ├─ placeholder-user.jpg
│  ├─ placeholder.jpg
│  ├─ placeholder.svg
│  └─ site.webmanifest
├─ PYTHON_DEPLOYMENT_GUIDE.md
├─ requirements.txt
├─ scripts
│  ├─ .DS_Store
│  ├─ migrate-to-mongodb.ts
│  ├─ seed-comprehensive-deduction-keywords.ts
│  ├─ seed-comprehensive-merchants-anzsic.ts
│  ├─ seed-essential-keywords.ts
│  ├─ seed-merchants-anzsic.ts
│  ├─ seed-simple-data.ts
│  ├─ seed-simple-keywords.ts
│  └─ verify-keyword-seeding.ts
├─ styles
│  └─ globals.css
├─ tailwind.config.ts
├─ tsconfig.json
├─ vercel.json
└─ yarn.lock

```