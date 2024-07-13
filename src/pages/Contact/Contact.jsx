import React, { useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineDownload,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { Button, Input, Textarea } from "../../components/form";
import { Page } from "../../components/Page";
import { blue, green, pink, red, yellow } from "../../utils";
import {
  ContactForm,
  ContactWrapper,
  DownloadButton,
  IconButton,
} from "./Contact.styled";

export const Contact = () => {
  const [form, setFormState] = useState({ name: "", email: "", message: "" });
  return (
    <Page header="Contact">
      <ContactWrapper>
        <ContactForm
          action="https://formspree.io/f/mbjbvlpv"
          method="POST"
          name="contact"
          id="contactform"
        >
          <Input
            placeholder="Name"
            type="text"
            name="name"
            onChange={(e) => {
              setFormState((prev) => ({ ...prev, name: e.target.value }));
            }}
            value={form.name}
          />
          <Input
            placeholder="Email"
            type="email"
            name="email"
            onChange={(e) => {
              setFormState((prev) => ({ ...prev, email: e.target.value }));
            }}
            value={form.email}
          />
          <Textarea
            lines={15}
            placeholder="Hi! How are you?"
            name="message"
            onChange={(e) => {
              setFormState((prev) => ({ ...prev, message: e.target.value }));
            }}
            value={form.message}
          />
        </ContactForm>
        <div className="buttons">
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/saksham-tomar-8090b22b7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton bg={"#FFD35A"}>
                <AiFillLinkedin size={40} />
              </IconButton>
            </a>

            {/* <a href="mailto:teshank.2137@gamil.com">
              <IconButton bg={green}>
                <AiOutlineMail size={40} />
              </IconButton>
            </a> */}

            <a
              href="https://github.com/saksham-tomer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton bg={"#FFD35A"}>
                <AiFillGithub size={40} />
              </IconButton>
            </a>

            <a
              href="https://drive.google.com/file/d/1bGk9GWRGKlmViGpRv6blH5Z8pQCfBqdL/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DownloadButton bg={"#FFD35A"} tooltip="Download">
                <AiOutlineDownload size={40} />
                <span>Resume</span>
              </DownloadButton>
            </a>
          </div>
          <Button
            disabled={
              form.email.length <= 0 ||
              form.name.length <= 0 ||
              form.message.length <= 0
            }
            onClick={() => {
              document.forms["contact"].submit();
            }}
          >
            Submit
          </Button>
        </div>
      </ContactWrapper>
    </Page>
  );
};
