import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

export const Contact = () => {
    return (
        <StyledContacts>
<SectionTitle>Contacts</SectionTitle>
<StyledForm>
    <Field/>
    <Field/>
    <Field as={'textarea'}/>
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
  gap: 20px;
`

const Field = styled.input`

`