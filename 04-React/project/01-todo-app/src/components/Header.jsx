import './styles/Header.css'

function Header() {
  let title = "Simple Todo App"
  document.title = title
  return(
    <div id="header">
      <h1>{title}</h1>
    </div>
  )
}
export default Header
