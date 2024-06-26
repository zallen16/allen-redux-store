// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(...props) {
  return (
    <Provider {...props} role="button" tabIndex="0"
    />
  );
}

export default DeleteBtn;
