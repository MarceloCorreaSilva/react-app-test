import React from 'react';
import styled from 'styled-components';

const FormFieldWrapper = styled.div``;
const Label = styled.label``;
const Input = styled.input``;

function FormField({
  label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';

  return (
    <FormFieldWrapper className="form-group">
      <Label htmlFor={fieldId}>{label}</Label>
      <Input
        as={tag}
        id={fieldId}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
      />
    </FormFieldWrapper>
  );
}

export default FormField;
