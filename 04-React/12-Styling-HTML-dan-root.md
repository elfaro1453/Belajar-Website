# Styling HTML

Styling HTML berarti memberi style untuk HTML keseluruhan, seperti background html, ukuran font awal, font-family secara umum, dan lain-lain.

Buat file bernama `index.css` di dalam folder `src`, file ini tidak berada di dalam folder `components/styles` dikarenakan berlaku untuk semua komponen.

Isi `index.css` dengan kode berikut :

```css
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}
body {
  font-family: system-ui, -apple-system, /* Firefox supports this but not yet `system-ui` */
      "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji";
  margin: 0;
}

#root {
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
}
```

## Import index.css ke dalam file index.js

Agar file CSS dapat digunakan, kita perlu mengimportnya di dalam `index.js` dikarenakan  `index.js` adalah entry point dari project ini.

Buka `index.js`, import `index.css` sehingga kodenya menjadi seperti ini :

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
```

Dapat dilihat bahwasanya untuk mengimport css pada JSX hanya perlu mengarahkan ke path dari file CSSnya.
