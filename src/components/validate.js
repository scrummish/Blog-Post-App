function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title!';
  }
  if (!values.tags) {
    errors.tags = 'Enter some tags!';
  }
  if (!values.content) {
    errors.content = 'Enter some content!';
  }

  return errors;
}

export default validate;
