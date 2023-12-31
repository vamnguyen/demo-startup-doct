import { Button } from "@react-email/button";
import { Container } from "@react-email/container";
import { Html } from "@react-email/html";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";

const EmailForgotPassword = () => {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={heading}>Hi my friend, we come from the Doct app!</Text>
          <Text style={paragraph}>
            Do you want to reset your password? Let's click the Reset Password
            button.
          </Text>
          <Text style={paragraph}>
            If you are not, please ignore this email.
          </Text>
          <Button
            style={button}
            href={`${process.env.NEXT_DOMAIN_APP_URL}/newPassword`}
          >
            Reset Password
          </Button>
        </Container>
      </Section>
    </Html>
  );
};

export default EmailForgotPassword;

// Styles for the email template
const main = {
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

const button = {
  backgroundColor: "#796EFF",
  color: "#FFF",
  borderRadius: "4px",
  padding: "12px 24px",
  fontSize: "16px",
  fontWeight: "600",
};
