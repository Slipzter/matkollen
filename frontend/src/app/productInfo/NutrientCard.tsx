import { Nutrient } from "@/types"


function NutrientCard(props: Nutrient) {

  const percentageAmount = props.percentage;

  return (
    <article className="nutrient-card">
      <div>
        <h3>
          {props.name}
        </h3>
      </div>
      <h4>
        {percentageAmount}%
      </h4>
      <div className="nutrient-card__progress"style={{background: 'lightgray'}}>
        <div className="nutrient-card__progress-filling" style={{background: `${props.color}`, width: `${percentageAmount}` + '%'}}>
        </div>
      </div>
    </article>
  )
}

export default NutrientCard