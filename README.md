# Cloud Web App Deployment (`my-azure-app`)

A Vite-based web application deployed to the cloud with secure environment variable management for `VITE_SUBSCRIPTION_KEY`.

## Live Demo
- **Deployed App:** https://my-azure-app-6t3c.vercel.app/

## Key Features & Security
- **Environment Variable Management:** `VITE_SUBSCRIPTION_KEY` is excluded from Git via `.gitignore` (`.env` is never committed) and configured securely as a cloud environment variable on the hosting platform.
- **Runtime Verification:** Includes an interactive **Test Key Variable** button that verifies the key is loaded from `import.meta.env.VITE_SUBSCRIPTION_KEY` without exposing the full secret in the source code.

## Local Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Khanh1706/my-azure-app.git
   cd my-azure-app
