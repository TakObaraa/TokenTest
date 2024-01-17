import ModalContentItemLabel from '@molecules/ModalContentItemLabel/ModalContentItemLabel';
import { Story } from '@storybook/react';
import AppModalForm, {
  AppModalFormInputItems,
  AppModalFormItem,
} from './AppModalForm';

export default {
  title: 'Organisms/App/AppModalForm',
  component: AppModalForm,
};

export const Default: Story = () => (
  <div className="story-item">
    <AppModalForm>
      <AppModalFormItem>
        <ModalContentItemLabel label="項目ラベル" required />
        <p>AppModalFormItem: １項目単位でラップするためのコンポーネント</p>
      </AppModalFormItem>

      <AppModalFormItem>
        <ModalContentItemLabel label="項目ラベル" />
        <AppModalFormInputItems>
          <p>AppModalFormInputItems:</p>
          <p>1つの項目に対してインプットが複数ある場合に使用</p>
        </AppModalFormInputItems>
      </AppModalFormItem>

      <p>AppModal内でのみ使用可能なStyledComponentのコンポーネント</p>
    </AppModalForm>
  </div>
);
