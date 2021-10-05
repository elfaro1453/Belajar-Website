# Membuat Komponen Todos dan TodoItem

Komponen `TodoItem` dibuat terlebih dahulu karena menjadi child dari komponen `Todos`.

## Komponen TodoItem

Buat `TodoItem.jsx` di dalam folder `components`, isi dengan kode berikut :

```javascript
function TodoItem() {
  return (
    <li>Sebuah Item</li>
  )
}
export default TodoItem

```

Simpan `TodoItem.jsx`

## Komponen Todos

Komponen `Todos` digunakan sebagai container atau wadah untuk daftar atau list todo item.

Buat `Todos.jsx` di dalam folder `src`, isi dengan kode berikut :

```javascript
import TodoItem from "./TodoItem"

function Todos() {
  return(
    <ul>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul>
  )
}
export default Todos
```

Simpan file `TodoItem.jsx`

Keterangan :

* Setelah mengimport komponen TodoItem, kita memanggil komponen tersebut menggunakan kode `<TodoItem />`.
* `<TodoItem />` yang dipanggil sebanyak 3 kali itu masing-masing merupakan instansi yang berbeda

## Modifikasi App.js

Selanjutnya kita masukkan `Todos` ke dalam App.js, buka `App.js` kemudian ubah isinya menjadi seperti berikut ini :

```javascript
import React from 'react'
import AddTodo from "./components/AddTodo"
import Header from "./components/Header"
import Todos from "./components/Todos"

function App() {
  return (
    <React.Fragment>
      <Header />
      <AddTodo />
      <Todos />
    </React.Fragment>
  );
}
export default App
```

Simpan file `App.js` kemudian lihat hasilnya di browser.
