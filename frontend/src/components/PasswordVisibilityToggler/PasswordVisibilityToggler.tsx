import { memo } from 'react';
import { EyeOffIcon, EyeOnIcon } from '@assets/icons';
import { Image } from '@components/Image/Image';
import { PasswordVisibilityTogglerProps } from './PasswordVisibilityToggler.types';
import { VisibilityToggler } from './PasswordVisibilityToggler.styles';

export const PasswordVisibilityToggler = memo(
  ({ onToggle, isPasswordVisible }: PasswordVisibilityTogglerProps) => (
    <VisibilityToggler
      aria-label="Toggle password visibility"
      type="button"
      onClick={onToggle}
    >
      {!isPasswordVisible ? (
        <Image source={EyeOnIcon} altText="On" width={25} height={25} />
      ) : (
        <Image source={EyeOffIcon} altText="Off" width={25} height={25} />
      )}
    </VisibilityToggler>
  )
);

PasswordVisibilityToggler.displayName = 'PasswordVisibilityToggler';
