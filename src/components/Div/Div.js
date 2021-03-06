import './Div.scss'
import classNames from 'classnames'

export default function Div(props) {
  const { className: customClass } = props

  const classes = classNames('ui-div', customClass)

  return (
    <div {...props} className={classes}>
      {props.children}
    </div>
  )
}
