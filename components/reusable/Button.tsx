type ButtonProps = {
    type: 'button' | 'submit',
    title: string
}

const Button = ({ type, title }: ButtonProps) => {
  return (
    <button type={type}>{title}</button>
  )
}

export default Button