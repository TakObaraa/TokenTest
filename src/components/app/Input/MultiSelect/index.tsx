import { css } from '@emotion/css';
import { Theme, useTheme } from '@emotion/react';
import {
  MultiSelect as MantineMultiSelect,
  MultiSelectProps,
} from '@mantine/core';

const inputStyle = (theme: Theme) => {
  return css({
    paddingTop: theme.spacings.xs,
    paddingBottom: theme.spacings.xs,

    '&[data-disabled]': {
      backgroundColor: theme.colors.secondary.main,
    },
  });
};

const inputFieldStyle = () => {
  return css({
    '::placeholder': {
      color: 'var(--mantine-color-placeholder)',
    },
  });
};

const pillStyle = (theme: Theme) => {
  return css({
    borderRadius: theme.radius.base,
    backgroundColor: theme.colors.secondary.light,
    outline: theme.borders.default,

    '--pill-height-sm': theme.fontSizes.xl,
  });
};

const optionStyle = (theme: Theme) => {
  return css({
    ':hover': {
      backgroundColor: theme.colors.sky.light,
    },
  });
};

const MultiSelect: React.FC<MultiSelectProps> = (props) => {
  const theme = useTheme();
  return (
    <MantineMultiSelect
      classNames={{
        input: inputStyle(theme),
        inputField: inputFieldStyle(),
        pill: pillStyle(theme),
        option: optionStyle(theme),
      }}
      {...props}
    />
  );
};

export default MultiSelect;
