import { IconDatepicker } from '@app/icons/normal';
import { css } from '@emotion/css';
import { Theme, useTheme } from '@emotion/react';
import {
  DatePickerInput as MantineInputDate,
  DatePickerInputProps,
  DatePickerType,
} from '@mantine/dates';

const inputStyle = (theme: Theme) => {
  return css({
    display: 'inline-flex',
    alignItems: 'center',
    minHeight: 'var(--input-height)',
    height: 'auto',
    minWidth: theme.sizes.sm,
    padding:
      'var(--input-padding-y,0) var(--_input-padding-right) var(--input-padding-y,0) var(--_input-padding-left)',
    border: theme.borders.default,
    backgroundColor: theme.colors.white,
    lineHeight: theme.lineHeights.reset,

    '& .mantine-InputPlaceholder-placeholder': {
      color: 'var(--mantine-color-placeholder)',
    },
  });
};

const dayStyle = (theme: Theme) => {
  return css({
    '&[data-weekend]': {
      color: theme.colors.red.main,
    },

    '&[data-today]': {
      color: theme.colors.primary.main,
      textDecoration: 'underline',
    },

    '&[data-in-range]': {
      backgroundColor: theme.colors.secondary.light,
    },

    '&:hover': {
      backgroundColor: theme.colors.sky.light,
    },

    '&[data-selected]': {
      backgroundColor: theme.colors.primary.main,
      color: theme.colors.white,
    },
  });
};

const InputDate = <Type extends DatePickerType = 'default'>(
  props: DatePickerInputProps<Type>,
) => {
  const theme = useTheme();
  return (
    <MantineInputDate
      classNames={{
        input: inputStyle(theme),
        day: dayStyle(theme),
      }}
      clearable={true}
      valueFormat="YYYY年MM月DD日"
      monthLabelFormat="YYYY年MM月"
      labelSeparator="〜"
      leftSection={<IconDatepicker />}
      {...props}
    />
  );
};

export default InputDate;
