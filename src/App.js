import React from 'react';
import 'bulma/css/bulma.css';
import './App.css'
import Navbar from "./navbar/Navbar"
import FormField from "./formfield/FormField"
import CoolButton from "./coolbutton/CoolButton"

const App = () => {
  return (
    <React.Fragment>
    <h1><Navbar/></h1>
  <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
<FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
<FormField label="Password" type="password"/>

<CoolButton isSmall isRounded isInfo isLight>Submit</CoolButton>

</React.Fragment>)
};

export default App;
