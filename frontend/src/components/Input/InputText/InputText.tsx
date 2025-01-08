import { Box } from '@components/Box/Box';
import { Props } from './InputText.types';
import { InputLabel } from '../InputLabel/InputLabel';
import { InputError } from '../InputError/InputError';
import { EndIconContainer, StyledInput } from './InputText.styles';

export const InputText = ({ id, label, error, endIcon, ...props }: Props) => {
  return (
    <div>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <Box position="relative">
        <Box position="relative">
          <StyledInput
            id={id}
            error={error}
            aria-label={label || ''}
            {...props}
          />
          {endIcon && <EndIconContainer>{endIcon}</EndIconContainer>}
        </Box>
        {error && (
          <InputError role="alert" data-testid={`${id}-error`}>
            Invalid input
          </InputError>
        )}
      </Box>
    </div>
  );
};
