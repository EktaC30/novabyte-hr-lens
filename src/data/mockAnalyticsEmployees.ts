export interface AnalyticsEmployee {
  id: string;
  name: string;
  role: string;
  level: string;
  stack: string[];
  completionPercent: number;
  currentStage: "Setup" | "Checklist" | "Ticket" | "Review" | "Completed";
  tasksCompleted: number;
  totalTasks: number;
  onboardingDays: number;
  expectedDays: number;
  status: "on-track" | "at-risk" | "completed";
  riskReason?: string;
}

export const analyticsEmployees: AnalyticsEmployee[] = [
  {
    id: "a1", name: "Riya", role: "Backend", level: "Intern",
    stack: ["Node.js", "TypeScript", "PostgreSQL"],
    completionPercent: 70, currentStage: "Ticket", tasksCompleted: 7, totalTasks: 10,
    onboardingDays: 4, expectedDays: 5, status: "on-track",
  },
  {
    id: "a2", name: "Arjun", role: "Frontend", level: "Intern",
    stack: ["React", "TypeScript", "Tailwind"],
    completionPercent: 40, currentStage: "Checklist", tasksCompleted: 4, totalTasks: 10,
    onboardingDays: 5, expectedDays: 5, status: "at-risk",
    riskReason: "Low progress after 5 days",
  },
  {
    id: "a3", name: "Sneha", role: "Full Stack", level: "Intern",
    stack: ["React", "Node.js", "MongoDB"],
    completionPercent: 100, currentStage: "Completed", tasksCompleted: 10, totalTasks: 10,
    onboardingDays: 3, expectedDays: 5, status: "completed",
  },
  {
    id: "a4", name: "Karan", role: "DevOps", level: "Intern",
    stack: ["Docker", "AWS", "Terraform"],
    completionPercent: 55, currentStage: "Checklist", tasksCompleted: 6, totalTasks: 11,
    onboardingDays: 4, expectedDays: 5, status: "on-track",
  },
  {
    id: "a5", name: "Priya", role: "Frontend", level: "Intern",
    stack: ["React", "Next.js", "CSS"],
    completionPercent: 20, currentStage: "Setup", tasksCompleted: 2, totalTasks: 10,
    onboardingDays: 3, expectedDays: 5, status: "at-risk",
    riskReason: "Stuck in Setup stage for 3 days",
  },
  {
    id: "a6", name: "Vikram", role: "Backend", level: "Intern",
    stack: ["Python", "FastAPI", "PostgreSQL"],
    completionPercent: 90, currentStage: "Review", tasksCompleted: 9, totalTasks: 10,
    onboardingDays: 4, expectedDays: 5, status: "on-track",
  },
  {
    id: "a7", name: "Meera", role: "Full Stack", level: "Intern",
    stack: ["React", "Express", "MongoDB"],
    completionPercent: 100, currentStage: "Completed", tasksCompleted: 10, totalTasks: 10,
    onboardingDays: 4, expectedDays: 5, status: "completed",
  },
  {
    id: "a8", name: "Rohan", role: "Backend", level: "Intern",
    stack: ["Go", "gRPC", "PostgreSQL"],
    completionPercent: 30, currentStage: "Setup", tasksCompleted: 3, totalTasks: 10,
    onboardingDays: 6, expectedDays: 5, status: "at-risk",
    riskReason: "Exceeded expected onboarding time",
  },
];

export const categoryBottleneckData = [
  { category: "IT Setup", avgDays: 1.2 },
  { category: "Knowledge", avgDays: 2.1 },
  { category: "Compliance", avgDays: 0.8 },
  { category: "First Task", avgDays: 3.5 },
  { category: "Code Review", avgDays: 2.8 },
  { category: "Team Intro", avgDays: 0.5 },
];

export const weeklyTrendData = [
  { week: "Week 1", tasks: 12 },
  { week: "Week 2", tasks: 18 },
  { week: "Week 3", tasks: 24 },
  { week: "Week 4", tasks: 20 },
  { week: "Week 5", tasks: 28 },
  { week: "Week 6", tasks: 32 },
];
