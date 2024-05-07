# TEORIA REACT

## Context

Los contextos son un método sencillo por el cual llamaremos y utilizaremos un estado, objeto o funcion sin la necesidad de utilizar props.

a. Los pasos necesarios a seguir para utilizar correctamente los contextos son:

- Importar createContext de react.
- Crear un contexto de la siguiente manera: const miContexto = createContext({})
- Exportar el contexto, en este caso pondremos miProvider para exportar, ya que por cada contexto hay un provider, y es una buena praxis: export const miProvider = ({children}) => {..contenido del contexto}
- 