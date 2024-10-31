import {useFilterContext} from '../context/filterContext'
import GridView from './GridView';

function ProductList() {
  const {filter_products, setGridView} = useFilterContext();

  if (setGridView) {
    return <GridView products={filter_products} />
  }
  // if (!setGridView) {
  //   return <ListView products={filter_products} />
  // }


  return (
    <div>ProductList</div>
  )
}

export default ProductList