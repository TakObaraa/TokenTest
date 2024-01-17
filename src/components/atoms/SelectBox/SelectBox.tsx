import { BOXSHADOW, BREAKPOINT, COLOR, SIZE } from '@styles/constant';
import React, { HTMLAttributes } from 'react';
import { Controller, UseFormRegisterReturn, useForm } from 'react-hook-form';
import Select, {
  CSSObjectWithLabel,
  GroupBase,
  OptionsOrGroups,
} from 'react-select';
// eslint-disable-next-line import/no-unresolved
import { StateManagerProps } from 'react-select/dist/declarations/src/useStateManager';

export type OptionsType = OptionsOrGroups<
  { label: string; value: string },
  GroupBase<{ label: string; value: string }>
>;

export type Style = {
  type?: 'default' | 'middle';
  setOptionsPosition?: 'default' | 'right';
};
export type Contents = {
  options: OptionsType;
  refs?: UseFormRegisterReturn;
};

type SelectBoxProps = Contents &
  Style &
  StateManagerProps &
  Pick<HTMLAttributes<HTMLDivElement>, 'className'>;

// Todo Styleの渡し方考える
/**
 * 選択ボックスの関数コンポーネント定義する
 * @param props プロパティ
 * @returns 選択ボックスコンポーネント
 */
const SelectBox: React.FC<SelectBoxProps> = ({
  // refs,
  options,
  isMulti,
  isSearchable,
  isDisabled,
  isClearable = true,
  defaultValue,
  value,
  menuPosition,
  setOptionsPosition,
  type,
  placeholder,
  className,
  refs,
}) => {
  const { control } = useForm();
  return (
    <Controller
      control={control}
      name={refs?.name ? refs.name : ''}
      rules={{
        onChange: refs?.onChange,
      }}
      render={({ field }) => (
        <Select
          options={options}
          placeholder={placeholder}
          isClearable={isClearable}
          defaultValue={defaultValue}
          value={value}
          isMulti={isMulti}
          isSearchable={isSearchable}
          isDisabled={isDisabled}
          menuPosition={menuPosition}
          noOptionsMessage={({ inputValue }) =>
            inputValue && '検索条件に合致するデータがございません。'
          }
          className={className}
          onChange={field.onChange}
          styles={{
            // container: (base) => (),
            // eslint-disable-next-line no-shadow
            control: (base, { isDisabled, isFocused }) =>
              ({
                ...base,
                fontSize: `${
                  type === 'default' ? SIZE.FONT._12 : SIZE.FONT._14
                }`,
                border: isFocused
                  ? `${SIZE.BORDER._1} solid ${COLOR.BORDER.INPUT_FOCUS}`
                  : `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
                borderRadius: SIZE.RADIUS.DEFAULT,
                backgroundColor: isDisabled
                  ? COLOR.BACKGROUND.DISABLED
                  : COLOR.BACKGROUND.GRAY_0,
                color: isDisabled ? COLOR.FONT.DISABLED : 'inherit',
                boxShadow: isFocused ? BOXSHADOW.FOCUS : 'none',
                minHeight: `${type === 'default' ? '28px' : '30px'}`,
                minWidth: '60px',
                maxWidth: '100%',
              }) as CSSObjectWithLabel,
            dropdownIndicator: (base, { isFocused }) =>
              ({
                ...base,
                padding: isFocused ? SIZE.PADDING._0 : SIZE.PADDING._0,
              }) as CSSObjectWithLabel,
            clearIndicator: (base) =>
              ({
                ...base,
                padding: SIZE.PADDING._0,
                margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN._4} ${SIZE.MARGIN._0} ${SIZE.MARGIN._0}`,
              }) as CSSObjectWithLabel,
            // group: (base) => ({ ...base }),
            groupHeading: (base) =>
              ({
                ...base,
                fontSize: `${
                  type === 'default' ? SIZE.FONT._12 : SIZE.FONT._14
                }`,
                fontWeight: 'bold',
              }) as CSSObjectWithLabel,
            indicatorsContainer: (base) =>
              ({
                ...base,
                svg: { width: '16px', height: '16px' },
                padding: SIZE.PADDING._4,
              }) as CSSObjectWithLabel,
            indicatorSeparator: () => ({ display: 'none' }),
            input: (base) =>
              ({
                ...base,
                padding: SIZE.PADDING._0,
              }) as CSSObjectWithLabel,
            // loadingIndicator: () => ({}),
            // loadingMessage: () => ({}),
            menu: (base) =>
              ({
                ...base,
                width: 'max-content',
                minWidth: '100%',
                right: `${setOptionsPosition === 'right' ? 0 : undefined}`,
                [BREAKPOINT.TABLET]: {
                  maxWidth: 'calc(100vw - 96px)',
                },
                zIndex: 2,
              }) as CSSObjectWithLabel,
            menuList: (base) => ({
              ...base,
            }),
            menuPortal: (base) => ({
              ...base,
            }),
            // multiValue: () => ({}),
            multiValueLabel: (base) =>
              ({
                ...base,
                backgroundColor: COLOR.BACKGROUND.GRAY_50,
                padding: `${SIZE.PADDING._2} ${SIZE.PADDING._4}`,
                fontSize: `${
                  type === 'default' ? SIZE.FONT._12 : SIZE.FONT._14
                }`,
                borderTop: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
                borderBottom: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
                borderLeft: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
                borderRadius: `${SIZE.RADIUS.DEFAULT} ${SIZE.RADIUS.ZERO} ${SIZE.RADIUS.ZERO} ${SIZE.RADIUS.DEFAULT}`,
              }) as CSSObjectWithLabel,
            multiValueRemove: (base) =>
              ({
                ...base,
                color: COLOR.FONT.DEFAULT,
                backgroundColor: COLOR.BACKGROUND.GRAY_50,
                borderTop: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
                borderBottom: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
                borderRight: `solid ${SIZE.BORDER._1} ${COLOR.BORDER.DEFAULT}`,
                borderRadius: `${SIZE.RADIUS.ZERO} ${SIZE.RADIUS.DEFAULT} ${SIZE.RADIUS.DEFAULT} ${SIZE.RADIUS.ZERO}`,
                ':hover': {
                  backgroundColor: COLOR.BACKGROUND.RED_200,
                },
              }) as CSSObjectWithLabel,
            noOptionsMessage: (base) =>
              ({ ...base, overflow: 'hidden' }) as CSSObjectWithLabel,
            option: (base, { isFocused }) =>
              ({
                ...base,
                backgroundColor: isFocused
                  ? COLOR.BACKGROUND.SKY_100
                  : 'inherit',
                fontSize: `${
                  type === 'default' ? SIZE.FONT._12 : SIZE.FONT._14
                }`,
                color: isFocused ? COLOR.FONT.DEFAULT : COLOR.FONT.DEFAULT,
                padding: `${SIZE.PADDING._8} ${SIZE.PADDING._16} ${SIZE.PADDING._8} ${SIZE.PADDING._24}`,
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                cursor: 'pointer',
                ':active': {
                  backgroundColor: COLOR.BACKGROUND.GRAY_0,
                },
              }) as CSSObjectWithLabel,
            placeholder: (base) =>
              ({
                ...base,
                color: COLOR.FONT.PLACEHOLDER,
                padding: SIZE.PADDING._2,
              }) as CSSObjectWithLabel,
            // singleValue: (base) => ({ ...base }),
            valueContainer: (base) =>
              ({
                ...base,
                padding: `${SIZE.PADDING._4} ${SIZE.PADDING._4}`,
              }) as CSSObjectWithLabel,
          }}
        />
      )}
    />
  );
};
// 初期値を設定する
SelectBox.defaultProps = {
  type: 'default',
  setOptionsPosition: 'default',
  refs: undefined,
};

// コンポーネントをエクスポートする
export default SelectBox;
