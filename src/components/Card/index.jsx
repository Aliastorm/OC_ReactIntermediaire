import PropTypes from 'prop-types'

function Card({ label, title, picture }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
      <span>{label}</span>
      <img src={picture} alt="freelance" height={400} width={400} />
      <span>{title}</span>
    </div>
  )
}

export default Card
