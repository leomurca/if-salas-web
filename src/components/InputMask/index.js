import { forwardRef } from 'react';
import { PatternFormat } from 'react-number-format';

/**
 * This component relies on the placeholder prop
 * So make sure that you passed the placeholder on the parent component.
 */
const InputMask = forwardRef((props, ref) => {
  const { onChange, placeholder, ...other } = props;

  return (
    <PatternFormat
      {...other}
      getInputRef={ref}
      onValueChange={values => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      valueIsNumericString={placeholder.includes('#')}
      format={placeholder}
    />
  );
});

export default InputMask;
// TODO: Add PropTypes to the project
