import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,
  textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`;

////////////////////////////////////////////////////////////////////
const initialState = {
  name: "",
  mob1: "",
  mob2: "",
  email: "",
  address: "",
  bg: "",

  prblm: "",
};
export default () => {
  const [values, setValue] = useState(initialState);
  const handleChange = (e) => {
    setValue({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    console.log(values);
    e.preventDefault();
    const response = await axios.post("http://localhost:5005/", values);

    console.log(response);
    alert("submitted");
  };

  return (
    <Container>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2>Blood-Donation 🩸🩸🩸</h2>
            <form onSubmit={onSubmit}>
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="name-input">Name</Label>
                    <Input
                      id="name-input"
                      type="text"
                      name="name"
                      defaultValue={values.name}
                      onChange={handleChange}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="name-input">Mob1</Label>
                    <Input
                      id="name-input"
                      type="text"
                      name="mob1"
                      defaultValue={values.mob1}
                      onChange={handleChange}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="name-input">Mob2</Label>
                    <Input
                      id="name-input"
                      type="text"
                      name="mob2"
                      defaultValue={values.mob2}
                      onChange={handleChange}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input">Email Address</Label>
                    <Input
                      id="email-input"
                      type="text"
                      name="email"
                      defaultValue={values.email}
                      onChange={handleChange}
                    />
                  </InputContainer>
                </Column>
                <Column>
                  <InputContainer>
                    <Label htmlFor="name-input">Your Address</Label>
                    <Input
                      id="name-input"
                      type="text"
                      name="address"
                      defaultValue={values.address}
                      onChange={handleChange}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="name-input">Blood-Group</Label>
                    <Input
                      id="name-input"
                      type="text"
                      name="bg"
                      defaultValue={values.bg}
                      onChange={handleChange}
                    />
                  </InputContainer>
                  {/* <InputContainer>
                    <Label htmlFor="any-problem">
                      Do you have any disease?
                      <Input
                        id="name-input"
                        type="checkbox"
                        name="checkbox"
                        defaultValue={values.checkbox}
                        onChange={handleChange}
                      />
                    </Label>
                  </InputContainer> */}
                  <InputContainer>
                    <Label htmlFor="name-input">
                      Do you have any disease ? If yes, please describe.
                    </Label>
                    <br></br>
                    <Input
                      id="name-input"
                      type="text"
                      name="prblm"
                      defaultValue={values.prblm}
                      onChange={handleChange}
                    />
                  </InputContainer>
                </Column>
              </TwoColumn>

              <SubmitButton type="submit" value="Submit">
                Submit
              </SubmitButton>
            </form>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
  );
};
