import React from "react";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import LoginRegistration from "../../components/login_registration/login_registration";
import { AppRoute } from "../../enums/router";
import {RegistrationWrapper} from "./registrationStyles";

function Registration(): JSX.Element {
  
    return (
    <RegistrationWrapper>
      <LoginRegistration />
      <Input label="Email" />
      <Input label="Password" />
      <Button url = {AppRoute.Confirmation} maxWidth = '100%'>Registration</Button> 
    </RegistrationWrapper>); 
}

export default Registration;
