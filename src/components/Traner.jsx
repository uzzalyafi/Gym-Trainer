/* eslint-disable react/prop-types */
import Card from '../ui/Card'

const Traner = ({ image, name, job, socials }) => {
  return (
    <Card className="trainer">
      <div className="traner_img">
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{job}</p>
      <div className="trainer_socials">
        {
          socials.map(({ icon, link }, index) => {
            return (
              <a href={link} key={index} target='_blank' rel='noreferrer'>
                {icon}
              </a>
            )
          })
        }
      </div>
    </Card>
  )
}

export default Traner