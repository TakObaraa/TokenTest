import Button from '@atoms/Button/Button';
import CheckBox from '@atoms/CheckBox/Checkbox';
import InputPassword from '@atoms/Input/InputPassword/InputPassword';
import InputText from '@atoms/Input/InputText/InputText';
import LabelBox from '@atoms/LabelBox/LabelBox';
import Paragraph from '@atoms/Paragraph/Paragraph';
import SelectBox from '@atoms/SelectBox/SelectBox';
import Styled from '@emotion/styled';
import ModalContentItemLabel from '@molecules/ModalContentItemLabel/ModalContentItemLabel';
import Radios from '@molecules/Radios/Radios';
import AppModal, {
  AppModalContent,
  AppModalFooter,
  AppModalFooterCenter,
  AppModalFooterLeft,
  AppModalFooterRight,
} from '@organisms/App/AppModal/AppModal';
import AppModalForm, {
  AppModalFormInputRowItems,
  AppModalFormItem,
} from '@organisms/App/AppModalForm/AppModalForm';
import { COLOR, SIZE } from '@styles/constant';
import React, { useCallback, useState } from 'react';

export type RvFacilityEditModalPropsType = {
  isOpen: boolean;
  onDidDismiss: VoidFunction;
  useSystem: 'pro' | 'com';
  rvFacilityType: 'representativeFacility' | 'facility';
  rvFacilityModalType: 'edit' | 'new';
  useStaffInput?: boolean;
  useFacilityInput?: boolean;
  useDelete?: boolean;
  proFamilySetting: boolean;
  comFamilySetting: 'none' | 'double' | 'single';
};

const PostCodeInput = Styled(InputText)({
  width: '60px',
});

const InstanceSelects = Styled('div')({
  display: 'flex',
  gap: SIZE.GAP._4,
  alignItems: 'center',
});
const AddFacilityButton = Styled(Button)({
  margin: `${SIZE.MARGIN._0} ${SIZE.MARGIN.AUTO} ${SIZE.MARGIN._0}`,
});
const AddFacilityFormItem = Styled(AppModalFormItem)({
  borderTop: `solid ${SIZE.BORDER._2} ${COLOR.BORDER.GRAY_400}`,
  margin: `${SIZE.MARGIN._8} ${SIZE.MARGIN._0} ${SIZE.MARGIN._0} ${SIZE.MARGIN._0}`,
  padding: `${SIZE.PADDING._16} ${SIZE.PADDING._0} ${SIZE.PADDING._0} ${SIZE.PADDING._0}`,
});
const MailAddressSelect = Styled(SelectBox)({
  width: '190px',
});
const ContentItemTitle = Styled('div')({
  display: 'flex',
  gap: SIZE.GAP._4,
});

const RvFacilityEditModal: React.FC<RvFacilityEditModalPropsType> = ({
  isOpen,
  onDidDismiss,
  useSystem,
  rvFacilityType,
  rvFacilityModalType,
  useStaffInput,
  useFacilityInput,
  useDelete,
  proFamilySetting,
  comFamilySetting,
}) => {
  console.log('render RvFacilityEditModal');
  const [addFacility, setAddFacility] = useState(false);
  const modalTitle = useCallback(
    (
      facilityType: RvFacilityEditModalPropsType['rvFacilityType'],
      modalType: RvFacilityEditModalPropsType['rvFacilityModalType'],
    ) => {
      if (facilityType === 'representativeFacility') {
        if (modalType === 'new') {
          return 'RVサイト追加';
        }
        if (modalType === 'edit') {
          return 'RVサイト編集';
        }
        return 'RVサイト追加/編集';
      }
      if (facilityType === 'facility') {
        if (modalType === 'new') {
          return 'RV事業所追加';
        }
        if (modalType === 'edit') {
          return 'RV事業所編集';
        }
        return 'RV事業所追加';
      }
      return 'RVサイト追加';
    },
    [],
  );

  return (
    <AppModal
      isOpen={isOpen}
      onDidDismiss={onDidDismiss}
      modalTitle={modalTitle(rvFacilityType, rvFacilityModalType)}
      modalTitleIcon="facility"
    >
      <AppModalContent>
        <AppModalForm>
          {/*
          代表事業所情報
          事業所追加の場合はは、どこの代表事業所に追加するかわかるようにdisableで表示
          */}
          <AppModalFormItem>
            <ContentItemTitle>
              <ModalContentItemLabel label="サイトコード" />
              <LabelBox setLabelColor="warning" setSize="small">
                必須
              </LabelBox>
            </ContentItemTitle>
            <InputText
              placeholder="サイトコード"
              disabled={
                rvFacilityType === 'facility' || rvFacilityModalType === 'edit'
              }
            />
          </AppModalFormItem>

          <AppModalFormItem>
            <ContentItemTitle>
              <ModalContentItemLabel label="インスタンス" />
              <LabelBox setLabelColor="warning" setSize="small">
                必須
              </LabelBox>
            </ContentItemTitle>
            <InstanceSelects>
              <Paragraph setBold>W</Paragraph>
              <SelectBox
                isDisabled={rvFacilityType === 'facility'}
                placeholder="インスタンス1"
                options={[
                  { label: '0', value: '0' },
                  { label: '1', value: '1' },
                  { label: '2', value: '2' },
                  { label: '3', value: '3' },
                  { label: '4', value: '4' },
                  { label: '5', value: '5' },
                  { label: '6', value: '6' },
                  { label: '7', value: '7' },
                  { label: '8', value: '8' },
                  { label: '9', value: '9' },
                ]}
              />
              <SelectBox
                isDisabled={rvFacilityType === 'facility'}
                placeholder="インスタンス2"
                options={[
                  { label: '0', value: '0' },
                  { label: '1', value: '1' },
                  { label: '2', value: '2' },
                  { label: '3', value: '3' },
                  { label: '4', value: '4' },
                  { label: '5', value: '5' },
                  { label: '6', value: '6' },
                  { label: '7', value: '7' },
                  { label: '8', value: '8' },
                  { label: '9', value: '9' },
                ]}
              />
              <SelectBox
                isDisabled={rvFacilityType === 'facility'}
                placeholder="インスタンス3"
                options={[
                  { label: '0', value: '0' },
                  { label: '1', value: '1' },
                  { label: '2', value: '2' },
                  { label: '3', value: '3' },
                  { label: '4', value: '4' },
                  { label: '5', value: '5' },
                  { label: '6', value: '6' },
                  { label: '7', value: '7' },
                  { label: '8', value: '8' },
                  { label: '9', value: '9' },
                ]}
              />
            </InstanceSelects>
          </AppModalFormItem>

          <AppModalFormItem>
            <ContentItemTitle>
              <ModalContentItemLabel label="グループ" />
              <LabelBox setLabelColor="warning" setSize="small">
                必須
              </LabelBox>
            </ContentItemTitle>
            <InputText
              placeholder="グループ"
              disabled={rvFacilityType === 'facility'}
            />
          </AppModalFormItem>

          <AppModalFormItem>
            <ContentItemTitle>
              <ModalContentItemLabel label="代表事業所名" />
              <LabelBox setLabelColor="warning" setSize="small">
                必須
              </LabelBox>
            </ContentItemTitle>
            <InputText
              placeholder="代表事業所名"
              disabled={rvFacilityType === 'facility'}
            />
          </AppModalFormItem>

          {/* 事業所情報 */}
          {useFacilityInput && (
            <>
              <AppModalFormItem>
                <ContentItemTitle>
                  <ModalContentItemLabel label="利用事業所名" />
                  <LabelBox setLabelColor="warning" setSize="small">
                    必須
                  </LabelBox>
                </ContentItemTitle>
                <InputText placeholder="利用事業所名" />
              </AppModalFormItem>
              <AppModalFormItem>
                <ContentItemTitle>
                  <ModalContentItemLabel label="セキュリティID" />
                  <LabelBox setLabelColor="warning" setSize="small">
                    必須
                  </LabelBox>
                </ContentItemTitle>
                <InputText placeholder="セキュリティID" />
              </AppModalFormItem>
              {useSystem === 'pro' && (
                <AppModalFormItem>
                  <ContentItemTitle>
                    <ModalContentItemLabel label="料金体系" />
                    <LabelBox setLabelColor="warning" setSize="small">
                      必須
                    </LabelBox>
                  </ContentItemTitle>
                  <SelectBox
                    placeholder="料金体系"
                    isSearchable
                    options={[
                      { label: '病院', value: '' },
                      { label: '診療所', value: '' },
                      { label: '在宅介護', value: '' },
                    ]}
                  />
                </AppModalFormItem>
              )}
              <AppModalFormItem>
                <ContentItemTitle>
                  <ModalContentItemLabel label="事業所種別" />
                  <LabelBox setLabelColor="warning" setSize="small">
                    必須
                  </LabelBox>
                </ContentItemTitle>
                <SelectBox
                  placeholder="事業所種別"
                  isSearchable
                  isClearable={false}
                  options={[
                    { label: '病院', value: '1' },
                    { label: '診療所', value: '1' },
                    { label: '介護老人保健事業所', value: '1' },
                  ]}
                  refs={{
                    name: 'facilityTypeSelect',
                    onChange: async () => {
                      console.log('facilityTypeSelect');
                    },
                    onBlur: async () => {
                      console.log('facilityTypeSelect');
                    },
                    ref: () => {
                      console.log('facilityTypeSelect');
                    },
                  }}
                />
              </AppModalFormItem>

              {useSystem === 'pro' && proFamilySetting === true && (
                <AppModalFormItem>
                  <ContentItemTitle>
                    <ModalContentItemLabel label="家族連携" />
                    <LabelBox setLabelColor="warning" setSize="small">
                      必須
                    </LabelBox>
                  </ContentItemTitle>
                  <Radios
                    radios={[
                      { label: 'なし', defaultChecked: true },
                      { label: '併用' },
                      { label: '単独' },
                    ]}
                    refs={{
                      name: 'familyConnection',
                      onChange: async () => {
                        console.log('onChange');
                      },
                      onBlur: async () => {
                        console.log('onBlur');
                      },
                      ref: () => {
                        console.log('ref');
                      },
                    }}
                  />
                </AppModalFormItem>
              )}
              {useSystem === 'com' && comFamilySetting !== 'none' && (
                <AppModalFormItem>
                  <ContentItemTitle>
                    <ModalContentItemLabel label="家族連携" />
                    <LabelBox setLabelColor="warning" setSize="small">
                      必須
                    </LabelBox>
                  </ContentItemTitle>
                  <Radios
                    radios={[
                      { label: '利用しない', defaultChecked: true },
                      { label: '利用する' },
                    ]}
                    refs={{
                      name: 'familyConnection',
                      onChange: async () => {
                        console.log('onChange');
                      },
                      onBlur: async () => {
                        console.log('onBlur');
                      },
                      ref: () => {
                        console.log('ref');
                      },
                    }}
                  />
                </AppModalFormItem>
              )}

              <AppModalFormItem>
                <ContentItemTitle>
                  <ModalContentItemLabel label="事業所管理者名" />
                  <LabelBox setLabelColor="warning" setSize="small">
                    必須
                  </LabelBox>
                </ContentItemTitle>
                <InputText placeholder="事業所管理者名" />
              </AppModalFormItem>

              <AppModalFormItem>
                <ModalContentItemLabel label="郵便番号" />
                <AppModalFormInputRowItems>
                  <PostCodeInput placeholder="３桁" maxLength={3} />
                  <span>-</span>
                  <PostCodeInput placeholder="４桁" maxLength={4} />
                </AppModalFormInputRowItems>
              </AppModalFormItem>
              <AppModalFormItem>
                <ModalContentItemLabel label="都道府県" />
                <SelectBox
                  placeholder="都道府県"
                  isSearchable
                  menuPosition="fixed"
                  options={[
                    { label: '和歌山県', value: '' },
                    { label: '青森', value: '' },
                  ]}
                />
              </AppModalFormItem>
              <AppModalFormItem>
                <ModalContentItemLabel label="住所" />
                <InputText placeholder="住所" />
              </AppModalFormItem>
              <AppModalFormItem>
                <ContentItemTitle>
                  <ModalContentItemLabel label="電話番号" />
                  <LabelBox setLabelColor="warning" setSize="small">
                    必須
                  </LabelBox>
                </ContentItemTitle>
                <InputText placeholder="電話番号" />
              </AppModalFormItem>
              <AppModalFormItem>
                <ModalContentItemLabel label="FAX番号" />
                <InputText placeholder="FAX番号" />
              </AppModalFormItem>

              <AppModalFormItem>
                <ModalContentItemLabel label="メールアドレス" />
                <MailAddressSelect
                  placeholder="メールアドレス"
                  isSearchable
                  menuPosition="absolute"
                  options={[
                    { label: '個人用メールアドレス', value: '' },
                    { label: '共有用メールアドレス', value: '' },
                  ]}
                />
                <InputText placeholder="メールアドレス" />
              </AppModalFormItem>

              {useStaffInput && (
                <>
                  <AppModalFormItem>
                    <ContentItemTitle>
                      <ModalContentItemLabel label="スタッフ名" />
                      <LabelBox setLabelColor="warning" setSize="small">
                        必須
                      </LabelBox>
                    </ContentItemTitle>
                    <InputText placeholder="スタッフ名" />
                  </AppModalFormItem>
                  <AppModalFormItem>
                    <ContentItemTitle>
                      <ModalContentItemLabel label="スタッフID" />
                      <LabelBox setLabelColor="warning" setSize="small">
                        必須
                      </LabelBox>
                    </ContentItemTitle>
                    <InputText placeholder="スタッフID" />
                    <CheckBox label="このスタッフを統括管理者にする" />
                  </AppModalFormItem>
                  <AppModalFormItem>
                    <ContentItemTitle>
                      <ModalContentItemLabel label="パスワード" />
                      <LabelBox setLabelColor="warning" setSize="small">
                        必須
                      </LabelBox>
                    </ContentItemTitle>
                    <InputPassword placeholder="パスワード" />
                    <ContentItemTitle>
                      <ModalContentItemLabel label="パスワード再入力" />
                      <LabelBox setLabelColor="warning" setSize="small">
                        必須
                      </LabelBox>
                    </ContentItemTitle>
                    <InputPassword placeholder="パスワード再入力" />
                  </AppModalFormItem>
                </>
              )}
            </>
          )}

          {useFacilityInput && addFacility && (
            <AddFacilityFormItem>
              {/* 事業所情報 */}
              <AppModalFormItem>
                <ContentItemTitle>
                  <ModalContentItemLabel label="利用事業所名" />
                  <LabelBox setLabelColor="warning" setSize="small">
                    必須
                  </LabelBox>
                </ContentItemTitle>
                <InputText placeholder="利用事業所名" />
              </AppModalFormItem>
              <AppModalFormItem>
                <ContentItemTitle>
                  <ModalContentItemLabel label="セキュリティID" />
                  <LabelBox setLabelColor="warning" setSize="small">
                    必須
                  </LabelBox>
                </ContentItemTitle>
                <InputText placeholder="セキュリティID" />
              </AppModalFormItem>
              {useSystem === 'pro' && (
                <AppModalFormItem>
                  <ContentItemTitle>
                    <ModalContentItemLabel label="料金体系" />
                    <LabelBox setLabelColor="warning" setSize="small">
                      必須
                    </LabelBox>
                  </ContentItemTitle>
                  <SelectBox
                    placeholder="料金体系"
                    isSearchable
                    options={[
                      { label: '病院', value: '' },
                      { label: '診療所', value: '' },
                      { label: '在宅介護', value: '' },
                    ]}
                  />
                </AppModalFormItem>
              )}
              <AppModalFormItem>
                <ContentItemTitle>
                  <ModalContentItemLabel label="事業所種別" />
                  <LabelBox setLabelColor="warning" setSize="small">
                    必須
                  </LabelBox>
                </ContentItemTitle>
                <SelectBox
                  placeholder="事業所種別"
                  isSearchable
                  isClearable={false}
                  options={[
                    { label: '病院', value: '1' },
                    { label: '診療所', value: '1' },
                    { label: '介護老人保健事業所', value: '1' },
                  ]}
                  refs={{
                    name: 'facilityTypeSelect',
                    onChange: async () => {
                      console.log('facilityTypeSelect');
                    },
                    onBlur: async () => {
                      console.log('facilityTypeSelect');
                    },
                    ref: () => {
                      console.log('facilityTypeSelect');
                    },
                  }}
                />
              </AppModalFormItem>

              {useSystem === 'pro' && proFamilySetting === true && (
                <AppModalFormItem>
                  <ContentItemTitle>
                    <ModalContentItemLabel label="家族連携" />
                    <LabelBox setLabelColor="warning" setSize="small">
                      必須
                    </LabelBox>
                  </ContentItemTitle>
                  <Radios
                    radios={[
                      { label: 'なし', defaultChecked: true },
                      { label: '併用' },
                      { label: '単独' },
                    ]}
                    refs={{
                      name: 'family',
                      onChange: async () => {
                        console.log('onChange');
                      },
                      onBlur: async () => {
                        console.log('onBlur');
                      },
                      ref: () => {
                        console.log('ref');
                      },
                    }}
                  />
                </AppModalFormItem>
              )}
              {useSystem === 'com' && comFamilySetting !== 'none' && (
                <AppModalFormItem>
                  <ContentItemTitle>
                    <ModalContentItemLabel label="家族連携" />
                    <LabelBox setLabelColor="warning" setSize="small">
                      必須
                    </LabelBox>
                  </ContentItemTitle>
                  <Radios
                    radios={[
                      { label: '利用しない', defaultChecked: true },
                      { label: '利用する' },
                    ]}
                    refs={{
                      name: 'family',
                      onChange: async () => {
                        console.log('onChange');
                      },
                      onBlur: async () => {
                        console.log('onBlur');
                      },
                      ref: () => {
                        console.log('ref');
                      },
                    }}
                  />
                </AppModalFormItem>
              )}

              <AppModalFormItem>
                <ContentItemTitle>
                  <ModalContentItemLabel label="事業所管理者名" />
                  <LabelBox setLabelColor="warning" setSize="small">
                    必須
                  </LabelBox>
                </ContentItemTitle>
                <InputText placeholder="事業所管理者名" />
              </AppModalFormItem>

              <AppModalFormItem>
                <ModalContentItemLabel label="郵便番号" />
                <AppModalFormInputRowItems>
                  <PostCodeInput placeholder="３桁" maxLength={3} />
                  <span>-</span>
                  <PostCodeInput placeholder="４桁" maxLength={4} />
                </AppModalFormInputRowItems>
              </AppModalFormItem>
              <AppModalFormItem>
                <ModalContentItemLabel label="都道府県" />
                <SelectBox
                  placeholder="都道府県"
                  isSearchable
                  menuPosition="fixed"
                  options={[
                    { label: '和歌山県', value: '' },
                    { label: '青森', value: '' },
                  ]}
                />
              </AppModalFormItem>
              <AppModalFormItem>
                <ModalContentItemLabel label="住所" />
                <InputText placeholder="住所" />
              </AppModalFormItem>
              <AppModalFormItem>
                <ContentItemTitle>
                  <ModalContentItemLabel label="電話番号" />
                  <LabelBox setLabelColor="warning" setSize="small">
                    必須
                  </LabelBox>
                </ContentItemTitle>
                <InputText placeholder="電話番号" />
              </AppModalFormItem>
              <AppModalFormItem>
                <ModalContentItemLabel label="FAX番号" />
                <InputText placeholder="FAX番号" />
              </AppModalFormItem>

              <AppModalFormItem>
                <ModalContentItemLabel label="メールアドレス" />
                <MailAddressSelect
                  placeholder="メールアドレス"
                  isSearchable
                  menuPosition="absolute"
                  options={[
                    { label: '個人用メールアドレス', value: '' },
                    { label: '共有用メールアドレス', value: '' },
                  ]}
                />
                <InputText placeholder="メールアドレス" />
              </AppModalFormItem>

              {useStaffInput && (
                <>
                  <AppModalFormItem>
                    <ContentItemTitle>
                      <ModalContentItemLabel label="スタッフ名" />
                      <LabelBox setLabelColor="warning" setSize="small">
                        必須
                      </LabelBox>
                    </ContentItemTitle>
                    <InputText placeholder="スタッフ名" />
                  </AppModalFormItem>
                  <AppModalFormItem>
                    <ContentItemTitle>
                      <ModalContentItemLabel label="スタッフID" />
                      <LabelBox setLabelColor="warning" setSize="small">
                        必須
                      </LabelBox>
                    </ContentItemTitle>
                    <InputText placeholder="スタッフID" />
                    <CheckBox label="このスタッフを統括管理者にする" />
                  </AppModalFormItem>
                  <AppModalFormItem>
                    <ContentItemTitle>
                      <ModalContentItemLabel label="パスワード" />
                      <LabelBox setLabelColor="warning" setSize="small">
                        必須
                      </LabelBox>
                    </ContentItemTitle>
                    <InputPassword placeholder="パスワード" />
                    <ContentItemTitle>
                      <ModalContentItemLabel label="パスワード再入力" />
                      <LabelBox setLabelColor="warning" setSize="small">
                        必須
                      </LabelBox>
                    </ContentItemTitle>
                    <InputPassword placeholder="パスワード再入力" />
                  </AppModalFormItem>
                </>
              )}
            </AddFacilityFormItem>
          )}
          {rvFacilityType === 'representativeFacility' &&
            rvFacilityModalType === 'new' && (
              <AddFacilityButton
                iconName="entry"
                onClick={() => setAddFacility(true)}
              >
                事業所追加
              </AddFacilityButton>
            )}
        </AppModalForm>
      </AppModalContent>
      <AppModalFooter>
        {useDelete ? (
          <AppModalFooterLeft>
            <Button iconName="check" setType="danger" onClick={onDidDismiss}>
              削除
            </Button>
          </AppModalFooterLeft>
        ) : (
          <AppModalFooterLeft />
        )}
        <AppModalFooterCenter>
          <Button
            iconName="cancel"
            onClick={() => {
              onDidDismiss();
              setAddFacility(false);
            }}
            setType="other"
          >
            閉じる
          </Button>
        </AppModalFooterCenter>
        <AppModalFooterRight>
          <Button iconName="check" setType="primary" onClick={onDidDismiss}>
            登録
          </Button>
        </AppModalFooterRight>
      </AppModalFooter>
    </AppModal>
  );
};
export default RvFacilityEditModal;
