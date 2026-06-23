# How to Host Your Website FREE on GitHub Pages
## ikramestimation.com — Complete Beginner Guide

No coding required. Follow each step in order.
Estimated time: 20–30 minutes.

---

## What GitHub Pages is

GitHub is a free website used by developers to store files and code.
GitHub Pages is a feature that turns those files into a live website — for free.

Your site will be live at:
- `https://ikramestimation.com` (your real domain, after Step 4)
- `https://yourusername.github.io` (temporarily, while you set up the domain)

**Cost: $0** for hosting, forever.

---

## Step 1 — Create a free GitHub account

1. Open your browser and go to: **https://github.com**
2. Click **"Sign up"** (top right corner).
3. Enter your email, create a password, and pick a username.
   - Username tip: use something professional like `ikramestimation` or your name.
4. Verify your email — GitHub sends a confirmation code.
5. On the "What are you interested in?" screen, just scroll down and click **Skip**.
6. Choose the **Free plan** (it's already selected).

✅ You now have a GitHub account.

---

## Step 2 — Create a repository (a folder for your website)

A "repository" (called a "repo") is just a folder on GitHub that holds your website files.

1. After logging in, click the **"+" icon** in the top-right corner.
2. Select **"New repository"** from the dropdown.

3. Fill in the form:
   - **Repository name:** type exactly → `ikramestimation.com`
     *(This exact name is important — it must match your domain)*
   - **Description:** `Ikram Estimation Services website` (optional)
   - **Public** — make sure this is selected (required for free GitHub Pages)
   - **✅ Check "Add a README file"** — tick this box

4. Click the green **"Create repository"** button.

✅ Your repository is created. You'll see a page with just a README file.

---

## Step 3 — Upload your website files

Now you upload all the files from the zip you downloaded.

### First — unzip the downloaded file

1. Find `ikram-estimation-website.zip` in your Downloads folder.
2. Right-click it → **"Extract All"** (Windows) or double-click (Mac).
3. This creates a folder called `ikram-estimation`. Open that folder.
4. You should see files like `index.html`, `about.html`, a `css` folder, etc.

### Upload to GitHub

1. On your GitHub repository page, click **"uploading an existing file"**
   (you'll see this text as a link near the middle of the screen).
   
   *If you don't see it, click the "Add file" button → "Upload files".*

2. You'll see a large upload area with "Drag files here" text.

3. **Select ALL the contents** inside the `ikram-estimation` folder:
   - Press `Ctrl+A` (Windows) or `Cmd+A` (Mac) to select everything inside
   - **Important:** select the *contents* of the folder, not the folder itself
   - Drag everything into the GitHub upload area

4. You should see a list of files being uploaded (may take 1–2 minutes).

5. Scroll down to **"Commit changes"**:
   - In the message box type: `Initial website upload`
   - Leave everything else as-is
   - Click **"Commit changes"** (green button)

6. Wait for upload to finish (progress bar disappears).

✅ All your website files are now on GitHub.

### Check the upload worked

Click the **"Code"** tab (top left). You should see:
```
📄 .nojekyll
📄 404.html
📄 CNAME
📄 about.html
📄 blog.html
📄 contact.html
📄 index.html
📄 robots.txt
📄 samples.html
📄 services.html
📄 sitemap.xml
📁 assets/
📁 css/
📁 js/
📁 services/
```

If you see `index.html` in the list — the upload worked correctly.

---

## Step 4 — Turn on GitHub Pages (make the site go live)

1. On your repository page, click **"Settings"** (tab in the top row, looks like a gear ⚙️).
2. In the left sidebar, scroll down and click **"Pages"**.
3. Under **"Branch"**, click the dropdown that says "None" → select **"main"**.
4. Leave the folder as **"/ (root)"**.
5. Click **"Save"**.

GitHub will now build your website. This takes **1–3 minutes**.

6. Refresh the page after 2 minutes.
7. You'll see a green banner at the top: 
   **"Your site is live at https://yourusername.github.io"**

8. Click that link to see your website live! 🎉

✅ Your site is now live on the internet (at the `.github.io` address for now).

---

## Step 5 — Connect your real domain (ikramestimation.com)

This makes your site load at `https://ikramestimation.com` instead of the GitHub address.

### Part A — Tell GitHub your domain

1. Still on **Settings → Pages**.
2. Under **"Custom domain"**, type: `ikramestimation.com`
3. Click **"Save"**.
4. Tick the **"Enforce HTTPS"** checkbox (adds the padlock to your site — very important for Google).

GitHub will try to verify the domain. It will show "DNS check in progress" — that's normal, leave it.

### Part B — Tell your domain provider to point to GitHub

Log in to where you bought `ikramestimation.com` (GoDaddy, Namecheap, Dynadot, etc.).
Find the **DNS settings** for your domain. It might be called "DNS Management", "DNS Records", or "Zone File".

You need to add **4 "A" records** and **1 "CNAME" record**.

**Delete any existing "A" records** for `@` (the root/blank host) first, then add these:

#### Add 4 × A Records (points your domain to GitHub's servers)

| Type | Host / Name | Value (Points to) | TTL |
|------|-------------|-------------------|-----|
| A | `@` | `185.199.108.153` | Auto / 3600 |
| A | `@` | `185.199.109.153` | Auto / 3600 |
| A | `@` | `185.199.110.153` | Auto / 3600 |
| A | `@` | `185.199.111.153` | Auto / 3600 |

#### Add 1 × CNAME Record (for www)

| Type | Host / Name | Value (Points to) | TTL |
|------|-------------|-------------------|-----|
| CNAME | `www` | `yourusername.github.io` | Auto / 3600 |

> Replace `yourusername` with your actual GitHub username.

**Save all records.**

### Part C — Wait

DNS changes take **30 minutes to 24 hours** to spread worldwide.

To check progress, go to: **https://dnschecker.org** → type `ikramestimation.com` → click Search. When you see green ticks, it's working.

Once done:
- Visit `https://ikramestimation.com` — your site should load
- The padlock (🔒) should appear in the browser bar

✅ Your site is now live at `https://ikramestimation.com` — for free, forever.

---

## Step 6 — Make the contact form work

Right now the form shows a "preview mode" message. Choose one:

### Free option — Formspree.io

1. Go to **formspree.io** → sign up (free).
2. Click **"New Form"** → name it "Quote Request" → create.
3. Copy your form endpoint — it looks like: `https://formspree.io/f/xabcwxyz`

4. Download `contact.html` from GitHub:
   - In your repo, click `contact.html`
   - Click the **pencil icon** (Edit) in the top-right of the file view

5. Find this line (use Ctrl+F to search):
   ```
   <form action="#" method="POST" enctype="multipart/form-data" data-demo>
   ```

6. Replace it with:
   ```
   <form action="https://formspree.io/f/xabcwxyz" method="POST" enctype="multipart/form-data">
   ```
   *(Use your real Formspree URL, and remove `data-demo`)*

7. Scroll down → click **"Commit changes"** → **"Commit directly to main"** → **"Commit changes"**.

The form now sends to your email. Test it by submitting a dummy message.

---

## Step 7 — How to update your site in the future

Every time you want to change something:

**Quick edits (change text, fix a typo):**
1. Go to your GitHub repo.
2. Click the file you want to edit.
3. Click the **pencil icon** (Edit).
4. Make your change.
5. Click **"Commit changes"** → **"Commit directly to main"** → **"Commit changes"**.
6. Your live site updates in about 1–2 minutes.

**Add new files (like a sample PDF):**
1. Go to your GitHub repo.
2. Click **"Add file"** → **"Upload files"**.
3. Drag in the file.
4. Commit.

**Replace/update multiple files:**
1. Click **"Add file"** → **"Upload files"**.
2. Upload the updated files (GitHub replaces the old ones automatically).
3. Commit.

---

## Step 8 — Submit to Google (do this after the site is live)

1. Go to: **https://search.google.com/search-console**
2. Sign in with your Google account.
3. Click **"Add property"** → **"URL prefix"** → enter `https://ikramestimation.com`
4. Choose verification method: **HTML file** is easiest for GitHub Pages:
   - Download the small `.html` file Google gives you (named like `google1234abc.html`)
   - Upload it to your GitHub repo (same way as Step 7 "Add new files")
   - Commit it
   - Go back to Google Search Console and click **"Verify"**
5. After verification: **Sitemaps** (left menu) → enter `sitemap.xml` → **Submit**
6. Use **URL Inspection** → paste your homepage URL → **Request Indexing**

Google starts showing your site in search results within a few days to 2 weeks.

---

## Troubleshooting

**Site not loading at my domain?**
→ DNS is still spreading. Wait 24 hours. Check dnschecker.org.

**HTTPS padlock not showing?**
→ Go to GitHub Settings → Pages → tick "Enforce HTTPS". If it's greyed out, wait another hour for the SSL certificate to issue.

**I see a 404 error on GitHub's default page?**
→ Your `index.html` must be in the root of the repo (not inside a subfolder). Check the file list — `index.html` should be visible at the top level.

**I uploaded a folder instead of the files inside it?**
→ Delete the folder from GitHub and re-upload. Select the *contents* of `ikram-estimation`, not the folder itself.

**Changes not showing on live site?**
→ Wait 2 minutes then hard-refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac).

---

## Summary — what you have after all steps

| Item | Status |
|------|--------|
| Website live at ikramestimation.com | ✅ Free |
| HTTPS padlock (SSL) | ✅ Free |
| Custom domain connected | ✅ Done |
| Contact form working | ✅ Formspree free tier |
| SEO files (sitemap, robots.txt) | ✅ Built in |
| Google Search Console submitted | ✅ Your turn (Step 8) |

Monthly cost: **$0**. The only thing you paid for is the domain registration (once a year).

---

Need help at any step? Tell me exactly where you're stuck — I'll walk you through it.
