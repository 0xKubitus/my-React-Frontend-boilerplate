import { useState } from 'react';
import { Button, Checkbox, TextInputField, TickIcon } from 'evergreen-ui';

function ControlledCheckbox() {
  const [checked, setChecked] = useState(true);
  return (
    <Checkbox
      label="Remember me?"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
}

function Login() {
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

        <ControlledCheckbox />

        <Button
          height={40}
          iconAfter={TickIcon}
          intent="success"
          appearance="primary">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Login;
