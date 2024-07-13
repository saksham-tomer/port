import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import Flip from "gsap/Flip";
import React, { useEffect } from "react";
import { Page } from "../../components/Page";
import { blue, green, yellow } from "../../utils";
import { Educations, Paragraph, SkillsWrapper, Text } from "./About.styled";
import { AboutItem } from "./AboutItem";
import Skills from "./SkillBall";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import robot from "../../assets/images/robot.png";
import eth from "../../assets/images/star.png";
import rust from "../../assets/images/thunderbolt.png";

export const About = () => {
  const { ref, inView } = useInView({});
  const [show, setShow] = useState(inView);
  useEffect(() => {
    setShow(inView);
  }, [inView]);

  useEffect(() => {
    gsap.registerPlugin(Flip);
    let cards = document.querySelectorAll(".about-item");
    cards.forEach((card, i) => {
      if (i === 0) {
        card.classList.add("active");
      }
      card.addEventListener("mouseenter", (e) => {
        if (card.classList.contains("active")) {
          return;
        }
        const state = Flip.getState(cards);
        cards.forEach((c) => {
          c.classList.remove("active");
        });
        card.classList.add("active");
        Flip.from(state, {
          duration: 0.5,
          ease: "elastic.out(1,0.9)",
          absolute: true,
        });
      });
    });
  }, []);
  return (
    <div ref={ref}>
      <Page header="About">
        <Text>
          <Paragraph>
            I'm a passionate programmer, who is always looking for new
            challenges to improve myself, also a team player, who is always
            ready to learn new things and help others.
            <br />I have a stron passion for WEB3 specially Solana and Etherium.
            I also find myself inclined towards learning challenging
            technologies so nowdays my goto language is Rust.
          </Paragraph>
          <Educations>
            <AboutItem
              color={"#FFDE4D"}
              active
              data={{
                title: "Supporting the community",
                p: "I love to write tech blogs",
                image: robot,
              }}
            />
            <AboutItem
              color={blue}
              data={{
                title: "Entheusiastic about Blockchain",
                p: "My go to smart contract language is solidity ",
                image: eth,
              }}
            />
            <AboutItem
              color="#FFD35A"
              data={{
                title: "Low level Programming",
                p: "Found new interest for Rust",
                image: rust,
              }}
            />
          </Educations>
        </Text>
        <SkillsWrapper>
          {show ? (
            <Canvas camera={{ position: [0, 0, 18] }}>
              <Skills />
            </Canvas>
          ) : (
            `${inView}`
          )}
        </SkillsWrapper>
      </Page>
    </div>
  );
};
