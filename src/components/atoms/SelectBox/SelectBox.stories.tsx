import { PropsOf } from '@emotion/react';
import { Story } from '@storybook/react';
import SelectBox from './SelectBox';

type SelectBoxPropsType = PropsOf<typeof SelectBox>;

export default {
  title: 'Atoms/SelectBox',
  component: SelectBox,
};

const Template: Story<SelectBoxPropsType> = ({
  options,
  placeholder,
  isMulti,
  isSearchable,
  isDisabled,
  type,
  className,
}) => (
  <div className="storybook-items">
    <SelectBox
      options={options}
      placeholder={placeholder}
      isMulti={isMulti}
      isSearchable={isSearchable}
      isDisabled={isDisabled}
      type={type}
      className={className}
    />
  </div>
);

const SampleOptions = [
  { label: '老人化保険事業所ワイズ苑', value: '2' },
  { label: 'ワイズ デイサービスセンター', value: '3' },
  { label: '訪問介護ワイズ', value: '4' },
];
export const Default = Template.bind({});
Default.args = {
  placeholder: '事業所選択事業所選択事業所選択事業所選択',
  options: SampleOptions,
};

export const Type: Story = () => (
  <div className="storybook-items">
    <div
      className="storybook-item"
      style={{
        width: 'fit-content',
      }}
    >
      <SelectBox options={SampleOptions} />
      <p className="storybook-component-name">default</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: 'fit-content',
      }}
    >
      <SelectBox options={SampleOptions} type="middle" />
      <p className="storybook-component-name">middle</p>
    </div>
  </div>
);

export const OptionGroup: Story = () => (
  <div className="storybook-items">
    <div
      className="storybook-item"
      style={{
        width: 'fit-content',
      }}
    >
      <SelectBox
        options={[
          {
            label: 'ワイズ法人',
            options: [
              { label: '老人化保険事業所ワイズ苑', value: '2' },
              { label: 'ワイズ　デイサービスセンター', value: '3' },
              { label: '訪問介護ワイズ', value: '4' },
            ],
          },
          {
            label: 'ワイずっず法人',
            options: [
              { label: '老人化保険事業所ワイズ苑', value: '5' },
              { label: 'ワイズ　デイサービスセンター', value: '6' },
              { label: '訪問介護ワイズ', value: '7' },
            ],
          },
        ]}
      />
      <p className="storybook-component-name">OptionGroup</p>
    </div>
  </div>
);

export const Settings: Story = () => (
  <div className="storybook-items">
    <div
      className="storybook-item"
      style={{
        width: 'fit-content',
      }}
    >
      <SelectBox options={SampleOptions} isMulti />
      <p className="storybook-component-name">isMulti</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: 'fit-content',
      }}
    >
      <SelectBox options={SampleOptions} isSearchable />
      <p className="storybook-component-name">isSearchable</p>
    </div>

    <div
      className="storybook-item"
      style={{
        width: 'fit-content',
      }}
    >
      <SelectBox options={SampleOptions} isDisabled />
      <p className="storybook-component-name">isDisabled</p>
    </div>
  </div>
);
