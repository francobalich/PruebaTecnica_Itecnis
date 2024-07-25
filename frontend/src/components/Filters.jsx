import './Filters.css'

export const Filters = ({ initialItem = 1, lastItem = 12, total = 100 }) => {
  return (
    <section className='filters'>
      <div className='filters__container'>
        <div className='filters__message'>
          <p>Mostrando {initialItem}–{lastItem} de {total} resultados</p>
        </div>
        <div className='filters__order'>
          <p>Ordenar por: </p>
          <select id="options" name="options" class="filters__options">
            <option value="mayorPrecio">Mayor precio</option>
            <option value="menorPrecio">Menor precio</option>
          </select>
        </div>
      </div>
    </section>
  )
}
