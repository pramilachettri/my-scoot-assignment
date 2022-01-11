import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import CommonBtn from "../common/commonBtn";
import { accordionData } from "../data";
import Accordion from "react-bootstrap/Accordion";

const Accordions = () => {
  const [toggleActive, setToggleactive] = useState(false);

  const toggleClick = () => {
    setToggleactive(true);
  };

  const toggleCloseClick = () => {
    setToggleactive(false);
  };

  return (
    <div className="accordion">
      <Accordion className="accordion-group">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            When does the workshop start and what are the timings?
          </Accordion.Header>
          <Accordion.Body className="accordion-content">
            You can get all the details related to the timings and dates of the
            workshop at the top of the page.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion className="accordion-group">
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Will this be live or pre-recorded?
          </Accordion.Header>
          <Accordion.Body className="accordion-content">
            It’s going to be a completely live session.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion className="accordion-group">
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            I made the payment but didn't receive any confirmation email.
          </Accordion.Header>
          <Accordion.Body className="accordion-content">
            Write to hi@growthschool.io and our awesome support team will solve
            your queries in the fastest time possible.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion className="accordion-group">
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Since the workshop is live, will you be sharing recordings?
          </Accordion.Header>
          <Accordion.Body className="accordion-content">
            No, we won’t be sharing any recordings. Since it’s a live workshop,
            it’s expected that each participant will attend the workshop live.
            Also, recordings of a live session are just boring.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion className="accordion-group">
        <Accordion.Item eventKey="4">
          <Accordion.Header>Can I get a refund?</Accordion.Header>
          <Accordion.Body className="accordion-content">
            No. We don’t provide refunds in any case. If you are not sure about
            the workshop, check out the testimonials, read more about the
            trainer and take an informed decision. In case you miss out on
            attending the live workshop, we can move you to the next batch only
            ONCE.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion className="accordion-group">
        <Accordion.Item eventKey="5">
          <Accordion.Header>When can I receive the bonuses?</Accordion.Header>
          <Accordion.Body className="accordion-content">
            After the workshop is done, you will receive all the bonuses within
            48 hours.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion className="accordion-group">
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            Will I get a certificate after completion?
          </Accordion.Header>
          <Accordion.Body className="accordion-content">
            Yes, you will receive a certificate of completion if you finish the
            entire workshop.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion className="accordion-group">
        <Accordion.Item eventKey="7">
          <Accordion.Header>Do you have an affiliate program?</Accordion.Header>
          <Accordion.Body className="accordion-content">
            Yes, you will receive a certificate of completion if you finish the
            entire workshop.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="accordion-btn-container">
        <CommonBtn
          btnText="Reserve Seat for ₹499"
          padding="20px"
          width="150%"
        />
      </div>
    </div>
  );
};

export default Accordions;