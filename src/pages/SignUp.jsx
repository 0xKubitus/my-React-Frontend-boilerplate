// import Navbar from 'components/Navbar';
import { Button, TextInputField, TickIcon } from 'evergreen-ui';

function SignUp() {
  return (
    <div className="signup-main-div">
      <h1>Sign Up</h1>
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

        <TextInputField
          label="Confirm Password"
          required
          description=""
          value=""
          // onChange={e => setValue(e.target.value)}
        />

        <Button
          height={40}
          iconAfter={TickIcon}
          intent="success"
          appearance="primary">
          Save
        </Button>
      </form>
    </div>
  );
}

export default SignUp;
