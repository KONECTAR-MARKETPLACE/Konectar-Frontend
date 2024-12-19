import PropTypes from "prop-types";

function Button({children, onClick, className, type}) {
  return <button type={type} style={{ borderRadius:"5px", border:"1px solid #009933", }} onClick={onClick} className={className}>{children}</button>
}


Button.propTypes = {
  children: PropTypes.node.isRequired, // `node` allows any renderable content
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string
};

export default Button
