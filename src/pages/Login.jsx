import { useState } from 'react';
import {
  Button,
  Checkbox,
  EditIcon,
  TextInputField,
  TickIcon
} from 'evergreen-ui';

function Login() {
  function RememberMeCheckbox() {
    const [checked, setChecked] = useState(true);
    return (
      <Checkbox
        label="Remember me?"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  }

  return (
    <div className="signup-main-div">
      <h1>Log in</h1>
      <form>
        <TextInputField
          label="Email"
          required
          description=""
          value=""
          // onChange={e => setValue(e.target.value)}
        />

        <TextInputField
          label="Password"
          required
          description=""
          value=""
          // onChange={e => setValue(e.target.value)}
        />

        <RememberMeCheckbox />

        <Button
          height={40}
          iconAfter={TickIcon}
          intent="success"
          appearance="primary">
          Submit
        </Button>
      </form>

      <Button
        height={40}
        iconAfter={EditIcon}
        intent="danger"
        appearance="minimal">
        Set a new Password
      </Button>
    </div>
  );
}

export default Login;
