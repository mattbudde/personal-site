[![Netlify Status](https://api.netlify.com/api/v1/badges/8ec719ad-c2f8-4529-b97d-e7561a9eaf33/deploy-status)](https://app.netlify.com/sites/delog-w3layouts/deploys)

# Personal Site

### Changing repositary URL for Netlify CMS access

You need to change repo URL to your own `repo` at `/static/admin/config.yml`, for example `username/repo-name`

### Creating Github OAuth Client ID

- Goto Github [Developer Settings](https://github.com/settings/developers)
- **New OAuth**
- Enter Application name
- Homepage URL as Netlify URL
- And **Authorization callback URL** to `https://api.netlify.com/auth/done`)
- Once Client ID and Secret token is generated configure same in [Netlify Access Control](#accessing-netlify-cms-admin) as described.

### Accessing Netlify CMS Admin

- Goto your Netlify site admin
- Goto **Access Control** > **OAuth** then **Install Provider** you need to select provider as `Github` as add `Client ID` and `Secret`
- Your Netlify CMS is ready. Goto you netlify site URL and append `/admin/`. for example `example.netlify.com/admin/`, You will see login with Github button.

### Managing Blog Posts in Netlify CMS

- Once logged in you will find all the blog post listed here.
- You can create, edit, update and delete like any CMS

### Editing Meta Data

Inside you Netlify CMS admin, `Settings > Config` or you can go to `site-meta-data.json`. Here you can edit following details

- Title
- Description
- Site URL
- Homepage Title
- Homepage Description
- To get the Contact form working. you need too add a form at [W3Layouts forms](https://my.w3layouts.com/Forms/). Follow the steps [How to enable W3Layouts Contact form](https://w3layouts.com/articles/introducing-contact-forms-for-static-websites/) instructions to create a form then your contact form is all set.

### Add Google Analytics

Change `trackingId` in `gatsby-config.js` at `gatsby-plugin-google-analytics` plugin
