# Modifikasi Project Awal create-react-app

Project React berfokus pada folder `src` yang ada di dalam project. Setelah pembuatan project menggunakan `create-react-app` akan ditemukan cukup banyak file di dalam folder `src`, kita perlu memodifikasi agar sesuai dengan pembelajaran React dasar.

## Hapus file yang belum diperlukan

Hapus beberapa file di folder `src` sehingga tersisa 2 file yaitu `index.js` dan `App.js`.

## Modifikasi file index.js

File index.js adalah file entry point atau titik awal dari project Nodejs.

Silahkan modifikasi isi dari index.js sehingga menjadi seperti berikut :

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

Dapat dilihat bahwasanya terdapat kode `<App />`, kode tersebut adalah custom tag yang dihasilkan dari membuat komponen javascript. Pada project ini, kita akan menggunakan komponen `App` sebagai container dari aplikasi atau wadah terluar dari aplikasi react.

## Modifikasi file App.js

`App.js` adalah komponen react yang didalamnya hanya berisi sebuah fungsi yang di-export.

Modifikasi file `App.js` menjadi seperti berikut ini :

```javascript
function App() {
  return (
    <h1>Belajar React</h1>
  );
}

export default App;
```

Dari kode di atas dapat diketahui bahwa komponen react terdiri dari sebuah fungsi yang diexport. Di dalam fungsi tersebut terdapat return value berupa kode html `<h1>Belajar React</h1>` yang tidak error meski berada di dalam kode javascript.

File javascript yang berisi kode html dan bisa dirender oleh react ini disebut sebagai JSX (Javascript XML).

Pada aplikasi kompleks, sebuah komponen bisa berisi beberapa komponen lainnya juga.
