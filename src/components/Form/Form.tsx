import styled from "@emotion/styled";
import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { button } from "../GlobalStyle/button";
import { ReactComponent as IconClose } from "src/asset/svg/modal-add-close-button.svg";
import { ReactComponent as IconUp } from "src/asset/svg/tabler_chevron-up.svg";
import { ReactComponent as IconDown } from "src/asset/svg/tabler_chevron-down.svg";
import Priority from "src/data/Priority";
import Dropdown from "../Dropdown/Dropdown";
import Modal from "../Modal/Modal";
import DropdownBody from "../Dropdown/DropdownBody";

type TypeFormProps = {
  onSubmit: (activity: {
    priority: string | undefined;
    title: string;
  }) => Promise<void>;
  setModal: () => void;
  titleForm: string;
  typeForm: "add" | "edit";
  titileActivityItem?: string;
  priority?: string;
};
const Container = styled.div({
  position: "absolute",
  background: "rgba(33, 37, 41, 0.68)",
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 101,
});
const FormWrapper = styled.form({
  display: "flex",
  flexDirection: "column",
  background: "#FFFFFF",
  width: "830px",
  height: "403px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "12px",
  zIndex: 102,
});
const FormHeader = styled.div({
  padding: "24px 30px 19px 30px",
  display: "flex",
  justifyContent: "space-between",
});
const FormBody = styled.div({
  height: "245px",
  border: "1px solid",
  borderLeft: "none",
  borderRight: "none",
  borderTopColor: "#E5E5E5",
  borderBottomColor: "#E5E5E5",
  padding: "38px 41px 23px 30px",
  display: "flex",
  flexDirection: "column",
});
const FormFooter = styled.div({
  display: "flex",
  justifyContent: "flex-end",
  height: "88px",
  padding: "15px 40px 19px 40px",
});
const FormCloseButton = styled.button({
  cursor: "pointer",
  border: "none",
  background: "none",
});
const FormHeading = styled.h1({
  fontSize: "18px",
  fontWeight: "600px",
  color: "#111111",
});
const FormInputLabel = styled.label({
  fontSize: "12px",
  marginBottom: "9px",
});
const FormInput = styled.input({
  fontSize: "16px",
  fontWeight: "400",
  borderRadius: "6px",
  padding: "14px",
  height: "52px",
  border: "1px solid #E5E5E5",
  ":focus": {
    border: "1px solid #16ABF8",
  },
});
const FormDropdown = styled.div({
  marginTop: "26px",
  width: "205px",
  height: "80px",
});
const FormDropdownLabel = styled.h2({
  fontSize: "12px",
  marginBottom: "9px",
});
const FormDrodownItems = styled.div<{ priority?: string | undefined }>(
  ({ priority }) => ({
    position: "relative",
    fontSize: "16px",
    fontWeight: "400",
    cursor: "pointer",
    padding: "14px 17px",
    display: "flex",
    justifyContent: "space-between",
    width: "205px",
    height: "52px",
    border: "1px solid #E5E5E5",
    borderRadius: "6px",
    background: priority === undefined ? "#F4F4F4" : "#FFFFFF",
  })
);
const FormSaveButton = styled(button)({
  textAlign: "center",
  width: "150px",
  padding: "13px 14px",
  ":disabled": {
    opacity: "20%",
  },
});
const Form: FC<TypeFormProps> = ({
  onSubmit,
  setModal,
  titleForm,
  priority,
  titileActivityItem,
  typeForm,
}) => {
  const [data, setData] = useState<{
    priority: string | undefined;
    title: string;
  }>({
    priority: priority || undefined,
    title: titileActivityItem || "",
  });
  const [isDisabled, setDisabled] = useState<boolean>(true);
  const itemPriority = Priority.find((item) => item.priority === priority);
  const [isDropdownClick, setDropdownClick] = useState<{
    visible: boolean;
    selectPriority: string;
    selected: boolean;
    color?: string;
    title: string;
  }>({
    visible: false,
    selectPriority: priority || "very-high",
    color: priority === undefined ? "#ED4C5C" : itemPriority?.color,
    selected: true,
    title:
      priority === undefined ? "Very High" : (itemPriority?.title as string),
  });
  useEffect(() => {
    data.title.trim().length <= 0 ? setDisabled(true) : setDisabled(false);
  }, [data.title]);
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, title: event.target.value }));
  };
  const onClickDropdown = () => {
    isDropdownClick.visible
      ? setDropdownClick((prev) => ({ ...prev, visible: false }))
      : setDropdownClick((prev) => ({ ...prev, visible: true }));
  };
  const onChangeDropdown = (value: {
    selectPriority?: string;
    color?: string;
    title: string;
  }) => {
    setDropdownClick((prev) => ({ ...prev, ...value }));
    setData((prev) => ({ ...prev, priority: value.selectPriority }));
  };
  const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(data);
  };
  return (
    <Modal>
      <Container>
        <FormWrapper data-cy={`modal-${typeForm}`} onSubmit={onSubmitForm}>
          <FormHeader>
            <FormHeading data-cy={`modal-${typeForm}-title`}>
              {titleForm}
            </FormHeading>
            <FormCloseButton
              data-cy={`modal-${typeForm}-close-button`}
              onClick={setModal}
              type={"button"}
            >
              <IconClose />
            </FormCloseButton>
          </FormHeader>
          <FormBody>
            <FormInputLabel
              data-cy={`modal-${typeForm}-name-title`}
              htmlFor="item-title"
            >
              NAMA LIST ITEM
            </FormInputLabel>
            <FormInput
              data-cy={`modal-${typeForm}-name-input`}
              type={"text"}
              id="item-title"
              placeholder="Tambahkan Nama List Item"
              onChange={onChangeInput}
              value={data.title}
            />
            <FormDropdown>
              <FormDropdownLabel data-cy={`modal-${typeForm}-priority-title`}>
                Priority
              </FormDropdownLabel>
              <FormDrodownItems
                data-cy={`modal-${typeForm}-priority-dropdown`}
                priority={data.priority}
                onClick={onClickDropdown}
              >
                {data.priority === undefined ? (
                  "Pilih Priority"
                ) : (
                  <DropdownBody
                    data-cy={`modal-${typeForm}-priority-item`}
                    title={isDropdownClick.title}
                    color={isDropdownClick.color}
                  />
                )}
                {isDropdownClick.visible ? <IconUp /> : <IconDown />}
                {isDropdownClick.visible && (
                  <Dropdown
                    typeForm={typeForm}
                    selectPriority={isDropdownClick.selectPriority}
                    selected={isDropdownClick.selected}
                    onChangeDropdown={onChangeDropdown}
                    items={Priority}
                    type="DROPDOWN_PRIORITY"
                  />
                )}
              </FormDrodownItems>
            </FormDropdown>
          </FormBody>
          <FormFooter>
            <FormSaveButton
              data-cy={`modal-${typeForm}-save-button`}
              disabled={isDisabled}
              type={"submit"}
            >
              Simpan
            </FormSaveButton>
          </FormFooter>
        </FormWrapper>
      </Container>
    </Modal>
  );
};
export default Form;
