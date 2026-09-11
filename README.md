# Devashish Dhaulakhandi - Portfolio

Personal portfolio for Devashish Dhaulakhandi, an M.Tech. (Research) student at the Indian Institute of Science working on GPU systems, program analysis, and compilers.

## Publish on GitHub Pages

1. Keep these files at the root of the `Devashish-Dh/dev_portfolio` repository.
2. Open **Settings > Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Push or upload the files to the `main` branch.
5. Wait for the **Deploy Jekyll site to Pages** workflow to finish.

The site will appear at:

`https://devashish-dh.github.io/dev_portfolio/`

## Local preview

```bash
bundle install
bundle exec jekyll serve --baseurl /dev_portfolio
```

Open `http://127.0.0.1:4000/dev_portfolio/`.

## Updating content

- Personal details and links: `_config.yml`
- Homepage copy: `_data/locales/en.yml` and `_includes/page-home.html`
- Experience: `experience.html`
- Project pages: `entries/projects/`
- Styling: `css/portfolio.css`
- CV: `files/devashish_dhaulakhandi_cv.pdf`

Built from the MIT-licensed [Developer Portfolio Template](https://github.com/Andrei-Stefan20/developer-portfolio-template).
