import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./TermsModal.css";
function TermsModal({ onClose }) {
  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Terms and Conditions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>
          Please read these terms and conditions carefully before using Our
          Service.
        </h5>
        <h6>Interpretation</h6>
        <p>
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions.
        </p>
        <p>
          The following definitions shall have the same meaning regardless of
          whether they appear in singular or in plural.
        </p>
        <h6>Definitions</h6>
        <p>For the purposes of these Terms and Conditions:</p>
        <ul>
          <li>
            Affiliate means an entity that controls, is controlled by or is
            under common control with a party, where "control" means ownership
            of 50% or more of the shares, equity interest or other securities
            entitled to vote for election of directors or other managing
            authority.
          </li>
          <li>
            Company (referred to as either "the Company", "We", "Us" or "Our" in
            this Agreement) refers to e-Commerce.
          </li>
          <li>Country refers to: California, United States</li>
          <li>
            Device means any device that can access the Service such as a
            computer, a cellphone or a digital tablet.
          </li>
          <li>Service refers to the Website.</li>
          <li>
            Terms and Conditions (also referred as "Terms") mean these Terms and
            Conditions that form the entire agreement between You and the
            Company regarding the use of the Service.
          </li>
          <li>
            Third-party Social Media Service means any services or content
            (including data, information, products or services) provided by a
            third-party that may be displayed, included or made available by the
            Service.
          </li>
          <li>
            Website refers to e-Commerce, accessible from{" "}
            <a href="seedling-shop.vercel.app">e-Commerce</a>
          </li>
          <li>
            You means the individual accessing or using the Service, or the
            company, or other legal entity on behalf of which such individual is
            accessing or using the Service, as applicable.
          </li>
        </ul>
        <h6>Acknowledgement</h6>
        <p>
          These are the Terms and Conditions governing the use of this Service
          and the agreement that operates between You and the Company. These
          Terms and Conditions set out the rights and obligations of all users
          regarding the use of the Service.
        </p>
        <p>
          Your access to and use of the Service is conditioned on Your
          acceptance of and compliance with these Terms and Conditions. These
          Terms and Conditions apply to all visitors, users and others who
          access or use the Service.
        </p>
        <p>
          Terms and Conditions (also referred as "Terms") mean these Terms and
          Conditions that form the entire agreement between You and the Company
          regarding the use of the Service. Third-party Social Media Service
          means any services or content (including data, information, products
          or services) provided by a third-party that may be displayed, included
          or made available by the Service. Website refers to e-Commerce,
          accessible from e-Commerce You means the individual accessing or using
          the Service, or the company, or other legal entity on behalf of which
          such individual is accessing or using the Service, as applicable.
          Acknowledgement These are the Terms and Conditions governing the use
          of this Service and the agreement that operates between You and the
          Company. These Terms and Conditions set out the rights and obligations
          of all users regarding the use of the Service. Your access to and use
          of the Service is conditioned on Your acceptance of and compliance
          with these Terms and Conditions. These Terms and Conditions apply to
          all visitors, users and others who access or use the Service. By
          accessing or using the Service You agree to be bound by these Terms
          and Conditions. If You disagree with any part of these Terms and
          Conditions then You may not access the Service.
        </p>
        <p>
          You represent that you are over the age of 18. The Company does not
          permit those under 18 to use the Service.
        </p>
        <p>
          Your access to and use of the Service is also conditioned on Your
          acceptance of and compliance with the Privacy Policy of the Company.
          Our Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your personal information when You
          use the Application or the Website and tells You about Your privacy
          rights and how the law protects You. Please read Our Privacy Policy
          carefully before using Our Service.
        </p>
        <h6>Links to Other Websites</h6>
        <p>
          Our Service may contain links to third-party web sites or services
          that are not owned or controlled by the Company.
        </p>
        <p>
          The Company has no control over, and assumes no responsibility for,
          the content, privacy policies, or practices of any third party web
          sites or services. You further acknowledge and agree that the Company
          shall not be responsible or liable, directly or indirectly, for any
          damage or loss caused or alleged to be caused by or in connection with
          the use of or reliance on any such content, goods or services
          available on or through any such web sites or services.
        </p>
        <p>
          We strongly advise You to read the terms and conditions and privacy
          policies of any third-party web sites or services that You visit.
        </p>
        <h6>Termination</h6>
        <p className="">
          We may terminate or suspend Your access immediately, without prior
          notice or liability, for any reason whatsoever, including without
          limitation if You breach these Terms and Conditions.
        </p>
        <p className="">
          Upon termination, Your right to use the Service will cease
          immediately.
        </p>
        <h6>Limitation of Liability</h6>
        <p className="">
          Notwithstanding any damages that You might incur, the entire liability
          of the Company and any of its suppliers under any provision of this
          Terms and Your exclusive remedy for all of the foregoing shall be
          limited to the amount actually paid by You through the Service or 100
          USD if You haven't purchased anything through the Service.
        </p>
        <p className="">
          To the maximum extent permitted by applicable law, in no event shall
          the Company or its suppliers be liable for any special, incidental,
          indirect, or consequential damages whatsoever (including, but not
          limited to, damages for loss of profits, loss of data or other
          information, for business interruption, for personal injury, loss of
          privacy arising out of or in any way related to the use of or
          inability to use the Service, third-party software and/or third-party
          hardware used with the Service, or otherwise in connection with any
          provision of this Terms), even if the Company or any supplier has been
          advised of the possibility of such damages and even if the remedy
          fails of its essential purpose.
        </p>
        <p className="">
          Some states do not allow the exclusion of implied warranties or
          limitation of liability for incidental or consequential damages, which
          means that some of the above limitations may not apply. In these
          states, each party's liability will be limited to the greatest extent
          permitted by law.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TermsModal;
