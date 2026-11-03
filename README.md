# SUWON · BUNSIK — GitHub Pages practice site

A responsive fictional Korean snack-shop website for learning HTML/CSS/JavaScript and GitHub Pages deployment. All store details, prices, and imagery are practice/demo content.

## Files
- `index.html`: landing page
- `style.css`: responsive design
- `script.js`: favorite-menu picker and external ordering link settings
- `order.html` + `order.js`: practice cart/order form (does not submit real orders or payments)
- `assets/`: generated fictional storefront and food imagery

## Configure the ordering buttons
Open `script.js` and edit `ORDER_LINKS` with the correct store-specific URLs:

```js
const ORDER_LINKS = {
  naver: "https://your-naver-order-url",
  baemin: "https://your-baemin-store-url",
  yogiyo: "https://your-yogiyo-store-url"
};
```

The phone button uses a sample number `0311234567`. Change it to your intended demo number or actual store number. The own online order page is only a front-end demonstration; real order submission and payment need a backend and payment integration.

## Publish on GitHub Pages
1. Create a GitHub repository.
2. Upload all files and the `assets` folder from this directory.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**, `main`, and `/(root)`, then save.

The site is designed as a learning demo, not a real business storefront.
