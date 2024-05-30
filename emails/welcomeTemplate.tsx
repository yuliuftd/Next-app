import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = () => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-3xl">Hello Motor</Text>
            <Link href="https://www.google.com">Click</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

// define style by object if not using tailwind
// const body: CSSProperties = {
//   background: "#fff",
// };

// const heading: CSSProperties = {
//   fontSize: "32px",
// };

export default WelcomeTemplate;
