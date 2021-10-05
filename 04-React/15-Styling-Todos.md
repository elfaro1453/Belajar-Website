# Styling Komponen Todos

Komponen `Todos` hanya terdiri dari tag `ul` dan komponen `TodoItem`. Maka kita hanya perlu memodifikasi bagian tag `ul` saja dengan menambahkan id pada elemen tersebut.

Buka file `Todos.jsx`, tambahkan import style `Todos.css` dan id pada tag `ul` sehingga menjadi seperti berikut ini :

```javascript
import TodoItem from "./TodoItem"
import './styles/Todos.css'

function Todos() {
  let listData = [
    'Item Pertama',
    'Item Kedua',
    'Item Ketiga'
  ]
  return(
    <ul id="todos">
      <TodoItem data={listData} />
    </ul>
  )
}
export default Todos
```

Simpan `Todos.jsx`, akan muncul error pada import dikarenakan file `Todos.css` belum dibuat.

## Buat Todos.css

Buat file `Todos.css`, masukkan kode berikut :

```css
#todos {
  width: 100%;
  padding-top: 2px;
  padding-bottom: 2px;
  display: flex;
  flex-direction: column;
  padding-inline-start: 0px;
  margin: 0px;
  margin-block-start: 0px;
  margin-block-end: 0px;
}
```

Simpan file `Todos.css`.

Selanjutnya kita akan memberi styling pada komponen `TodoItem`.
