import { Nutrient } from "@/types"


function MicroNutrientCard(props: Nutrient) {

  const percentageAmount = props.percentage;

  return (
    <article className="card nutrient-card">
      <div>
        <h3>
          {props.name}
        </h3>
      </div>
      <h4>
        {percentageAmount}
      </h4>
      <div className="nutrient-card__progress"style={{background: 'lightgray'}}>
        <div className="nutrient-card__progress-filling" style={{background: `${props.color}`, width: `${percentageAmount}` + '%'}}>
        </div>
      </div>
    </article>
  )
}

export default MicroNutrientCard