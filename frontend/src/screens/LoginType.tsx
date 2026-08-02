import { useState } from "react";
import {
  Button,
  Card,
  Center,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconBuilding,
  IconCheck,
  IconUser,
} from "@tabler/icons-react";

export default function WorkspaceSelection() {
  const [selected, setSelected] = useState("personal");

  const cards = [
    {
      id: "personal",
      title: "Personal",
      description:
        "Sign documents, manage your files, and keep everything organized in your personal workspace.",
      icon: IconUser,
    },
    {
      id: "organization",
      title: "Organization",
      description:
        "Collaborate with your team, manage users, templates, workflows, and company documents.",
      icon: IconBuilding,
    },
  ];

  return (
    <Center
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)",
      }}
    >
      <Container size="lg">
        <Stack align="center" mb={50}>
          <Title order={1} fw={700}>
            Choose Your Workspace
          </Title>

          <Text c="dimmed" ta="center" maw={500}>
            Select how you want to use the application. You can
            always create another workspace later.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          {cards.map((card) => {
            const Icon = card.icon;
            const active = selected === card.id;

            return (
              <Card
                key={card.id}
                shadow="md"
                radius="xl"
                padding="xl"
                withBorder
                onClick={() => setSelected(card.id)}
                style={{
                  cursor: "pointer",
                  position: "relative",
                  border: active
                    ? "2px solid #228be6"
                    : undefined,
                  transform: active
                    ? "translateY(-6px)"
                    : "translateY(0)",
                  transition: "all .25s ease",
                }}
              >
                {active && (
                  <Paper
                    radius="xl"
                    p={6}
                    bg="blue"
                    style={{
                      position: "absolute",
                      top: 18,
                      right: 18,
                    }}
                  >
                    <IconCheck
                      size={16}
                      color="white"
                    />
                  </Paper>
                )}

                <Stack align="center" gap="lg">
                  <ThemeIcon
                    size={80}
                    radius="xl"
                    variant="light"
                    color="blue"
                  >
                    <Icon size={42} stroke={1.8} />
                  </ThemeIcon>

                  <Title order={3}>{card.title}</Title>

                  <Text
                    ta="center"
                    c="dimmed"
                    size="sm"
                    lh={1.7}
                  >
                    {card.description}
                  </Text>
                </Stack>
              </Card>
            );
          })}
        </SimpleGrid>

        <Group justify="center" mt={50}>
          <Button size="md" radius="xl" px={40}>
            Continue
          </Button>
        </Group>
      </Container>
    </Center>
  );
}