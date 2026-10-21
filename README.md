# Graphics design portfolio

A responsive nine-page portfolio for Melicia Parker's Introduction to Graphics Design course at Mico University College. Instructor: Ms. Sandy Shaw.

The website is in `portfolio/`. It runs without a package installation or build step:

```sh
cd portfolio
python3 -m http.server 8000 --bind 127.0.0.1
```

See `portfolio/README.md` for the remaining coursework artifacts and source-verification steps. This is a draft website, not a published Sites project.

## Live website

Open https://madagascar9.github.io/MG/ or https://madagascar9.github.io/MG/portfolio/index.html . The repository-root entry redirects to the portfolio. The portfolio HTML pages use `./assets/style.css` and `./assets/app.js`, resolved relative to their own `/portfolio/` directory.

The repository-root `.nojekyll` file keeps branch-based Pages publishing static. The optional Actions workflow publishes the repository root too, preserving the same URLs in either mode.
