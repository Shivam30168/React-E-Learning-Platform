import React from "react";
import './Help.css'

const Help = () => {
  return (
    <div className="privacypolicy-box">
      <p className="privacypolicy-para">
        My website does not automatically capture any specific personal
        information from you, (like name, phone number or e-mail address), that
        allows us to identify you individually.
      </p>
      <p className="privacypolicy-para">
        If the My website requests you to provide personal information, you will
        be informed for the particular purposes for which the information is
        gathered and adequate security measures will be taken to protect your
        personal information.
      </p>
      <h4 className="privacypolicy-head">Links to Other Sites</h4>
      <p className="privacypolicy-para">
        This website may contain links to other sites. If you click on a
        third-party link, you will be directed to that site. Note that these
        external sites are not operated by us. Therefore, we strongly advise you
        to review the Privacy Policy of these websites. We have no control over
        and assume no responsibility for the content, privacy policies, or
        practices of any third-party sites or services.
      </p>
      <h4 className="privacypolicy-head">Changes to This Privacy Policy</h4>
      <p className="privacypolicy-para">
        We may update our Privacy Policy from time to time. Thus, you are
        advised to review this page periodically for any changes. We will notify
        you of any changes by posting the new Privacy Policy on this page. These
        changes are effective immediately after they are posted on this page.
      </p>
      <h4 className="privacypolicy-head">Contact Us</h4>
      <p className="privacypolicy-para">
        If you have any questions or suggestions about our Privacy Policy, Do
        not hesitate to contact us at decta.ncert@nic.in.
      </p>
    </div>
  );
};

export default Help;
