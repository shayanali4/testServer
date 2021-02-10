import React from 'react';
import LinkedIn from "linkedin-login-for-react";

function LoginWithLinkedin() {
    const callbackLinkedIn = (error, code, redirectUri) => {
    if (error) {
      // signin failed
    } else {
      // Obtain authorization token from linkedin api
      // see https://developer.linkedin.com/docs/oauth2 for more info
        console.log("linked in ==>", code);
    }
  };
    return (
        <div>
            <LinkedIn
        clientId="86h7otf91h3pfo"
        callback={callbackLinkedIn}
        // className={styles.linkedin}
        scope={["r_liteprofile","r_emailaddress"]}
        text="Login With LinkedIn"
      />
        </div>
    )
}

export default LoginWithLinkedin
