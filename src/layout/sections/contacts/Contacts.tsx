import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";

export const Contact = () => {
    return (
        <StyledContacts>
<SectionTitle>Contacts</SectionTitle>
<StyledForm>
    <Field placeholder={'Name'}/>
    <Field placeholder={'Subject'}/>
    <Field as={'textarea'} placeholder={'message'}/>
    <Button type={'submit'}>Send message</Button>
</StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  background-color: rgba(228, 189, 241, 0.2);
  min-height: 50vh;
`

const StyledForm = styled.form`
max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
`

const Field = styled.input`

`