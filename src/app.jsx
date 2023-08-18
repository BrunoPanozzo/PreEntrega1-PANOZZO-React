import './app.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

export function App() {

   //JS

  return (
   //HTML con algunos cambios (ej. class => className
                             //(todas las tags deben tener su etiqueta de cierre))
                             //(los nombre de los eventos van escritos en camelCase)
   // {JS}

     <div>   

        <NavBar/>
        <ItemListContainer greeting= {"Proximamente nuevos Estrenos"}/>
     </div>
  )
}

export default App
