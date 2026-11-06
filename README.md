# COERVERSE®

**COLOR OUTSIDE THE LINES.**

*An independent digital fashion and music editorial inspired by CORTIS.*

COERVERSE is a fanmade creative website combining music, fashion, photography, visual storytelling, and interactive digital experiences into one universe.

**Five individuals. One creative universe.**

---

## 01 / ABOUT THE PROJECT

COERVERSE is built as a digital fan editorial inspired by the creative identity of CORTIS.

The project features bold typography, photography-driven layouts, music archives, artist profiles, and interactive web experiences.

Its visual direction takes inspiration from contemporary fashion editorials, youth culture, and experimental website design.

### Website Features

| Page | Description | Status |
|---|---|---|
| Homepage | Editorial landing page with music and member previews | Implemented |
| The Cast | Five member profiles and creative credits | In progress |
| The Records | Music release archive | In progress |
| Watch | Video gallery and YouTube integration | In progress |
| Lookbook | Fashion photography and editorial gallery | Planned |
| Connect | Social media and community links | In progress |
| Playground | Interactive photobooth and mini-games | Planned |

---

## 02 / TECH STACK

This project uses:

| Technology | Purpose |
|---|---|
| Next.js | React framework and routing |
| React | Building user interfaces |
| TypeScript | Type-safe JavaScript |
| Tailwind CSS | Styling and responsive layouts |
| Lucide React | UI icons |
| Figma | UI/UX design |
| pnpm | Dependency management |
| Git | Version control |
| GitHub | Source code hosting |

---

## 03 / REQUIREMENTS

Before running COERVERSE, install the following development tools.

### Required Software

**1. Node.js**

Download: https://nodejs.org/

Install a supported Node.js LTS version. The version must meet the requirements of the Next.js release used by this project.

Node.js includes npm, which can be used to install pnpm.

**2. Git**

Download: https://git-scm.com/downloads

Git is used to clone repositories, track changes, and push updates to GitHub.

**3. Visual Studio Code**

Download: https://code.visualstudio.com/

Recommended code editor for this project.

**4. pnpm**

pnpm is the package manager used by COERVERSE.

Install it after Node.js and npm are available.

### Check Installed Tools

Open Command Prompt (CMD) or the VS Code terminal and run:

```cmd
node -v
npm -v
git --version
pnpm -v
```

Each command should display a version number.

If `pnpm` is not recognized, install a compatible version using:

```cmd
npm install -g pnpm
```

Then verify:

```cmd
pnpm -v
```

**Note:** Choose a pnpm version compatible with the installed Node.js version and the project's `packageManager` setting, if present.

If a command is still not recognized after installation, close and reopen the terminal.

---

## 04 / CLONE THE REPOSITORY

You can download the source code directly from GitHub using Git.

### Step 1 — Open CMD

Navigate to the folder where you want to save the project.

Example:

```cmd
cd C:\
```

### Step 2 — Clone COERVERSE

```cmd
git clone https://github.com/meganfbr/COERVERSE.git
```

### Step 3 — Enter the Project Folder

```cmd
cd COERVERSE
```

### Step 4 — Open the Project in VS Code

```cmd
code .
```

If the `code` command is unavailable, open VS Code manually and select **File → Open Folder → COERVERSE**.

---

## 05 / INSTALL PROJECT DEPENDENCIES

After cloning, install the required packages.

Make sure the terminal is inside the COERVERSE project folder.

```cmd
pnpm install
```

This command installs the dependencies listed in `package.json` and uses `pnpm-lock.yaml` to resolve the project's dependency versions.

The installation will create a `node_modules` folder.

**Important:** `node_modules` is not included in the GitHub repository. Each computer must install its own dependencies.

For an installation that strictly follows the lockfile, you can use:

```cmd
pnpm install --frozen-lockfile
```

If the lockfile and package manifest do not match, use the normal installation command and review the resulting changes.

---

## 06 / RUN THE DEVELOPMENT SERVER

Start the Next.js development server:

```cmd
pnpm dev
```

When the server is ready, the terminal normally displays:

```text
Local: http://localhost:3000
```

Open the following URL in your browser:

http://localhost:3000

The website should now run locally.

### Stop the Development Server

Return to the terminal running `pnpm dev`.

Press:

```text
Ctrl + C
```

If CMD asks:

```text
Terminate batch job (Y/N)?
```

Type:

```text
Y
```

The development server will stop.

### Restart the Server

```cmd
pnpm dev
```

---

## 07 / PROJECT STRUCTURE

The main application structure is:

```text
COERVERSE/
|
|-- app/
|   |-- page.tsx
|   |-- layout.tsx
|   |-- globals.css
|   |
|   |-- cast/
|   |   |-- page.tsx
|   |   `-- [slug]/
|   |       `-- page.tsx
|   |
|   |-- records/
|   |   `-- page.tsx
|   |
|   `-- watch/
|       |-- page.tsx
|       `-- [slug]/
|           `-- page.tsx
|
|-- components/
|   |-- Navbar.tsx
|   |-- Hero.tsx
|   |-- Records.tsx
|   |-- Screen.tsx
|   |-- Cast.tsx
|   |-- Connect.tsx
|   |-- CreativeEnergy.tsx
|   `-- Footer.tsx
|
|-- data/
|   |-- members.ts
|   `-- videos.ts
|
|-- public/
|   `-- image/
|
|-- package.json
|-- pnpm-lock.yaml
|-- .gitignore
`-- README.md
```

The structure may expand as additional pages and components are developed.

### Important Directories

- `app/` — Next.js routes and page layouts.
- `components/` — Reusable UI components.
- `data/` — Member information and video metadata.
- `public/image/` — Local image assets.
- `package.json` — Project dependencies and scripts.
- `pnpm-lock.yaml` — Locked dependency resolution.
- `.gitignore` — Files excluded from Git tracking.

---

## 08 / GIT & GITHUB WORKFLOW

Git is used to manage project changes, while GitHub stores the remote repository.

### A. Check Repository Status

Before committing:

```cmd
git status
```

This shows modified, deleted, and untracked files.

### B. Configure Git Identity

On a new computer, Git may require a name and email address.

Configure them using:

```cmd
git config --global user.name "YOUR_GITHUB_NAME"
git config --global user.email "YOUR_GITHUB_EMAIL"
```

Use an email associated with your GitHub account or a GitHub-provided `noreply` email.

To check the configuration:

```cmd
git config --global --list
```

You normally only need to configure this once per computer.

### C. Stage Changes

To add all modified and new files:

```cmd
git add .
```

**Important:** There must be a space between `add` and `.`.

Check the staged changes:

```cmd
git diff --cached --stat
git status
```

Before committing, make sure you are not adding passwords, API keys, `.env` secrets, or unnecessary generated files.

### D. Commit Changes

Create a commit:

```cmd
git commit -m "feat: update COERVERSE pages"
```

Other commit message examples:

```cmd
git commit -m "feat: add member profile pages"
git commit -m "feat: add watch video gallery"
git commit -m "fix: correct image paths"
git commit -m "style: improve responsive layout"
git commit -m "docs: update README"
```

### E. Push Changes to GitHub

Upload your local commits:

```cmd
git push origin main
```

If this is the first push for the local branch:

```cmd
git push -u origin main
```

GitHub may request authentication through a browser.

Repository:

https://github.com/meganfbr/COERVERSE

### F. Pull the Latest Changes

Before starting work on another computer, synchronize with GitHub:

```cmd
git pull --ff-only origin main
```

This retrieves the latest changes when the local branch can be updated without a merge.

If there are uncommitted local changes or diverging branches, resolve those first rather than forcing the update.

### Recommended Daily Workflow

When starting work:

```cmd
git status
git pull --ff-only origin main
pnpm install
pnpm dev
```

You generally only need `pnpm install` when dependencies have changed or the project has just been cloned.

After finishing work, stop the development server if needed, then:

```cmd
git status
git add .
git commit -m "feat: describe your changes"
git push origin main
```

---

## 09 / WORKING ON MULTIPLE COMPUTERS

COERVERSE can be developed across different computers using GitHub.

**Computer A:**

1. Make changes to the project.
2. Run `git add .`.
3. Commit your changes.
4. Push to GitHub.

**Computer B:**

1. Open the existing cloned repository.
2. Run `git pull --ff-only origin main`.
3. Run `pnpm install` if dependencies changed.
4. Continue development.

Always push completed work from one computer before pulling those updates on another computer.

Avoid editing the same files independently on multiple computers without synchronizing changes.

---

## 10 / TROUBLESHOOTING

### Error: `pnpm is not recognized`

Cause: pnpm is not installed or is unavailable in the current terminal.

Solution:

```cmd
node -v
npm -v
npm install -g pnpm
pnpm -v
```

If needed, reopen the terminal after installation.

### Error: `Module not found`

Cause: A dependency may be missing, or an import path may be incorrect.

Install project dependencies:

```cmd
pnpm install
```

For example, if `lucide-react` is missing:

```cmd
pnpm add lucide-react
```

Also check spelling, filenames, and import paths.

### Error: Images Not Displaying

Local image files are served from the `public` folder.

For example:

```text
public/image/members/martin.jpg
```

The correct Next.js image path is:

```tsx
<Image
  src="/image/members/martin.jpg"
  alt="Martin"
  width={400}
  height={500}
/>
```

Do not include `/public` in the image URL.

Make sure the filename, directory, capitalization, and extension match the actual file.

### Error: Port 3000 Already in Use

Another application or development server may already be using port 3000.

Stop the other development server, or run:

```cmd
pnpm dev -- -p 3001
```

Then open:

http://localhost:3001

### Error: Git Author Identity Unknown

Configure your Git name and email:

```cmd
git config --global user.name "YOUR_GITHUB_NAME"
git config --global user.email "YOUR_GITHUB_EMAIL"
```

Then retry the commit.

### Error: `git add.` Is Not a Command

Incorrect:

```cmd
git add.
```

Correct:

```cmd
git add .
```

### Message: `Everything up-to-date`

This means Git has no new local commits to upload.

Check:

```cmd
git status
```

If you have modified files, stage and commit them before pushing.

### Error: `fatal: not a git repository`

You are likely outside the cloned Git repository.

Navigate to the project folder:

```cmd
cd C:\path\to\COERVERSE
```

Then check:

```cmd
git status
```

### Error: `next is not recognized`

Make sure dependencies have been installed:

```cmd
pnpm install
```

Start Next.js through the project script:

```cmd
pnpm dev
```

You generally do not need to install Next.js globally.

### Git Push Rejected

If GitHub contains commits your local branch does not have, do not immediately use `--force`.

Check:

```cmd
git status
git fetch origin
```

Review the branch differences and synchronize safely before retrying.

---

## 11 / AVAILABLE SCRIPTS

| Command | Description |
|---|---|
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start development server |
| `pnpm build` | Create production build |
| `pnpm start` | Run production build |
| `pnpm lint` | Run configured lint script, if available |

Before deploying, check for build errors:

```cmd
pnpm build
```

A successful development server does not automatically guarantee a successful production build.

---

## 12 / DESIGN REFERENCE

**Design Direction:** Mixed Editorial / Fashion / Music / Youth Culture

The UI/UX was designed in Figma with an emphasis on oversized typography, asymmetrical layouts, bold photography, and high-contrast editorial compositions.

[Explore the COERVERSE Figma Design](https://www.figma.com/design/K8Tr2t521xv1fEJKTrWSlH)

---

## 13 / DISCLAIMER

COERVERSE is an unofficial, independent fanmade project developed for educational, creative, and non-commercial purposes.

This project is not affiliated with or endorsed by CORTIS, its management, or its record label.

All artist names, photographs, music, videos, and other third-party materials remain the property of their respective owners. Their use may require permission from the applicable rights holders.

---

## CREATED BY

**Megan Febriana**

Frontend Development · Creative Web Design · Digital Experiences

GitHub: https://github.com/meganfbr

---

# COERVERSE®

**NOT MADE TO FIT IN.**

*Music. Fashion. Youth. Expression.*

**COLOR OUTSIDE THE LINES.**
