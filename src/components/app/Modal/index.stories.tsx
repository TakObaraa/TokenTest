import { IconCancel, IconUserMale } from '@app/icons/normal';
import Button from '@atoms/Button/Button';
import InputText from '@atoms/Input/InputText/InputText';
import InputTextArea from '@atoms/Input/TextArea/TextArea';
import styled from '@emotion/styled';
import ModalContentItemLabel from '@molecules/ModalContentItemLabel/ModalContentItemLabel';
import { Meta, StoryObj } from '@storybook/react';
import * as Modal from '.';

const CloseIcon = styled('button')(({ theme }) => ({
  fontFamily: 'inherit',
  padding: theme.spacings.none,
  opacity: '0.3', // hoverが必要なため例外的にopacityでIconの色を制御
  lineHeight: theme.lineHeights.reset,
  border: theme.borders.none,
  cursor: 'pointer',
  backgroundColor: 'transparent',
  ':hover': {
    opacity: '0.5',
  },
}));

type FrameProps = typeof Modal.Frame;

const meta: Meta<FrameProps> = {
  component: Modal.Frame,
  parameters: { controls: { hideNoControlsWarning: true } },
  args: {},
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Modal.Frame>
      <Modal.Header>header children</Modal.Header>
      <Modal.Content>content children</Modal.Content>
      <Modal.Footer>footer children</Modal.Footer>
    </Modal.Frame>
  ),
};

export const ExampleFormModal: StoryObj = {
  render: () => (
    <Modal.Frame>
      <Modal.Header>
        <Modal.HeaderTitle
          icon={<IconUserMale style={{ marginRight: '2px', height: '18px' }} />}
          title="フォームモーダル"
          subTitle="サンプル"
        />
        <CloseIcon>
          <IconCancel style={{ height: '18px' }} />
        </CloseIcon>
      </Modal.Header>
      <Modal.Content>
        <Modal.ContentForm>
          <Modal.ContentFormItem>
            <ModalContentItemLabel required label="InputText" />
            <InputText placeholder="入力してください" />
          </Modal.ContentFormItem>
          <Modal.ContentFormItem>
            <ModalContentItemLabel required label="InputTextArea" />
            <InputTextArea placeholder="入力してください" />
          </Modal.ContentFormItem>
        </Modal.ContentForm>
      </Modal.Content>
      <Modal.Footer>
        <Modal.ActionPanel
          left={
            <Button iconName="delete" setType="danger">
              削除
            </Button>
          }
          center={
            <Button iconName="cancel" setType="other">
              閉じる
            </Button>
          }
          right={<Button iconName="check">登録</Button>}
        />
      </Modal.Footer>
    </Modal.Frame>
  ),
};

type ControllerProps = typeof Modal.Controller;

export const ExampleModalController: StoryObj<ControllerProps> = {
  render: ({ ...props }) => (
    <Modal.Controller {...props}>
      <Modal.Frame>
        <Modal.Header>
          <Modal.HeaderTitle
            icon={
              <IconUserMale style={{ marginRight: '2px', height: '18px' }} />
            }
            title="フォームモーダル"
            subTitle="サンプル"
          />
        </Modal.Header>
        <Modal.Content>
          <Modal.ContentForm>
            <Modal.ContentFormItem>
              <ModalContentItemLabel required label="InputText" />
              <InputText placeholder="入力してください" />
            </Modal.ContentFormItem>
            <Modal.ContentFormItem>
              <ModalContentItemLabel required label="InputTextArea" />
              <InputTextArea placeholder="入力してください" />
            </Modal.ContentFormItem>
          </Modal.ContentForm>
        </Modal.Content>
        <Modal.Footer>
          <Modal.ActionPanel
            left={
              <Button iconName="delete" setType="danger">
                削除
              </Button>
            }
            center={
              <Button iconName="cancel" setType="other">
                閉じる
              </Button>
            }
            right={<Button iconName="check">登録</Button>}
          />
        </Modal.Footer>
      </Modal.Frame>
    </Modal.Controller>
  ),
};
