import { useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  UnorderedList,
  ListItem,
  Button,
  Container,
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./DocTemplate.css";

const templateDescriptions: { [key: string]: string } = {
  "Project Charter": "Kickstart your projects with a clear and comprehensive charter that outlines objectives, scope, stakeholders, and deliverables.",
  "Project Schedule": "Plan and manage your project timelines with ease using our detailed schedule template, complete with milestones and deadlines.",
  "Project Change Request": "Handle changes seamlessly with our structured request template, ensuring all modifications are documented and approved efficiently.",
  "Project Closure": "Conclude your projects professionally, capturing lessons learned, final deliverables, and project success metrics.",
};

export function DocumentationTemplate() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Box className="doc-template-container" minHeight="100vh" py={16}>
      <Container maxW="container.lg">
        <VStack spacing={12} align="stretch">
          <Heading
            as="h1"
            size="2xl"
            textAlign="center"
            color="white"
            data-aos="fade-up"
          >
            Ready-to-Go Project Documentation Templates
          </Heading>

          <Text
            fontSize="xl"
            textAlign="center"
            color="whiteAlpha.900"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Elevate and speed up your workflow with our expertly crafted project
            documentation templates. Designed to save you time, enhance
            communication, and leave a lasting impression.
          </Text>

          <UnorderedList spacing={6} styleType="none">
            {Object.keys(templateDescriptions).map((item, index) => (
              <ListItem
                key={index}
                className="template-list-item"
                data-aos="fade-right"
                data-aos-delay={`${(index + 1) * 200}`}
              >
                <Text fontWeight="bold" fontSize="lg" mb={2} color="white">
                  {item} Template
                </Text>
                <Text color="whiteAlpha.900">{templateDescriptions[item]}</Text>
              </ListItem>
            ))}
          </UnorderedList>

          <Text
            fontSize="xl"
            fontWeight="medium"
            textAlign="center"
            color="white"
            data-aos="fade-up"
          >
            Grab one of our templates today and streamline your project
            management process for greater efficiency and effectiveness.
          </Text>

          <Button
            className="get-templates-button"
            size="lg"
            height="60px"
            width="100%"
            color="white"
            _hover={{ bg: "none" }}
            as="a"
            href="https://paystack.com/pay/u6v4m94rze"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
          >
            Get Your Templates Now
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}
