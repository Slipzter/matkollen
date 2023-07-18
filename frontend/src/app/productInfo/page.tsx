import NutrientCard from "./NutrientCard"




function ProductInfoPage() {

  const productName = 'Product name here';
  const calories = '350';

  return (


    <div className="product-info">
      <img className="product-info__image" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" alt="" />
      <h1 className="product-info__title">{productName}</h1>
      <section className="product-info__card-section">
        <article className="card product-info__energy-card">
          <h3>Energy</h3>
          <h2>{calories} Kcal</h2>
        </article>
          <NutrientCard name={'Carbs'} color={'blueviolet'} percentage={20}/>
          <NutrientCard name={'Fat'} color={'orange'} percentage={45}/>
          <NutrientCard name={'Protein'} color={'red'} percentage={32}/>
      </section>
    </div>
  )
}

export default ProductInfoPage