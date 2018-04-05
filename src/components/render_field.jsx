import React from 'react';

function renderField(field) {
  const { meta: { touched, error } } = field;
  const className = `form-group ${touched && error && 'has-danger'}`;

  return (
    <div className={className}>
      <div>{field.label}</div>
      <input className="form-control" type="text"{...field.input} />
      <div className="text-help">
        { touched && error }
      </div>
    </div>
  );
}

export default renderField;
