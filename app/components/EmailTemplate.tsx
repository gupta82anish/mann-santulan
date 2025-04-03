import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Hr,
  Section,
} from '@react-email/components';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate = ({
  name,
  email,
  message,
}: EmailTemplateProps) => (
  <Html>
    <Tailwind>
      <Body className="bg-white my-auto mx-auto font-sans">
        <Container className="border border-solid border-[#eaeaea] rounded-lg my-[40px] mx-auto p-[20px] max-w-[465px]">
          <Section className="mt-[32px]">
            <Text className="text-[24px] font-normal text-[#1a1a1a] my-0">
              New Contact Form Submission
            </Text>
          </Section>
          <Section className="mt-[24px] mb-[12px]">
            <Text className="text-[14px] leading-[24px] text-[#666666]">
              You have received a new message from your therapy website contact form:
            </Text>
          </Section>
          <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
          <Section>
            <Text className="text-[14px] leading-[24px] text-[#666666]">
              <strong className="text-[#1a1a1a]">Name:</strong> {name}
            </Text>
            <Text className="text-[14px] leading-[24px] text-[#666666]">
              <strong className="text-[#1a1a1a]">Email:</strong>{' '}
              <Link
                href={`mailto:${email}`}
                className="text-muted-green hover:text-muted-green/80"
              >
                {email}
              </Link>
            </Text>
          </Section>
          <Section className="mt-[32px]">
            <Text className="text-[14px] leading-[24px] text-[#666666]">
              <strong className="text-[#1a1a1a]">Message:</strong>
            </Text>
            <Text className="text-[14px] leading-[24px] text-[#666666] bg-gray-50 p-4 rounded-lg">
              {message}
            </Text>
          </Section>
          <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
          <Section>
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              This email was sent from the contact form on your therapy website.
              You can reply directly to this email to respond to {name}.
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);