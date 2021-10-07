# Komponen pada React (JSX)

Komponen adalah dasar dari aplikasi react, sehingga semua aplikasi react terdiri dari berbagai macam komponen. Kita bisa mengibaratkan komponen pada aplikasi react sebagai blok lego untuk membuat sebuah lego yang utuh.

Agar lebih tertata rapi, mari kita buat sebuah folder bernama `components` di dalam folder `src` sebagai tempat untuk membuat komponen.

Pada project todo ini, kita akan membuat 4 komponen, yaitu :

* Header
* AddTodo
* Todos
* TodoItem

## Memahami JSX (Javascript XML)

JSX adalah ekstensi atau perluasan javascript yang dikenalkan oleh React yang berbasis pada ES6 (EcmaScript 2015 atau Javascript versi terbaru).

JSX memungkinkan kita untuk menulis syntax HTML ke dalam javascript dengan cara mengkonversi jsx menjadi React Components.

Pada Project ini, kita akan menggunakan ekstensi file `.jsx` untuk mempermudah kita membedakan antara javascript biasa dengan javascript komponen React. Sehingga file `.js` yang ada di dalam folder `src` hanya tersisa `index.js` dan `App.js`.

## Mengakses variabel pada HTML di dalam JSX

Biasanya kita hanya perlu memanggil nama variabel untuk mengakses nilai dari variabelnya. Namun hal tersebut tidak bisa dilakukan pada HTML di dalam JSX.

Cara mengakses variabel pada HTML JSX dilakukan dengan format `{namaVariable}`.

Contoh semisal ada sebuah komponen bernama `App` :

**`App.js`**

```javascript
function App(){
  // Buat sebuah variabel bernama judul
  let judul = "Belajar Akses Variable"

  // Ubah title dari laman html menjadi judul
  document.title = judul

  // akses judul pada JSX berisi tag HTML <h1>
  return (
    <h1>{judul}</h1>
  )
}
export default App
```

Keterangan :

* variabel `judul` dapat diakses secara langsung pada javascript
* namun pada tag HTML, kita perlu menggunakan kurung kurawal `{judul}` untuk mengakses nilai dari variabel judul
