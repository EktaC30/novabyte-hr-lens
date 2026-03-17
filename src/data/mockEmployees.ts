export interface Employee {
  id: string;
  name: string;
  role: string;
  level: string;
  stack: string[];
  status: "in-progress" | "completed";
  checklistTotal: number;
  checklistCompleted: number;
  tasks: TaskItem[];
  stats: KPIStats;
  ticket: Ticket;
  activity: ActivityEvent[];
  velocityData: { day: string; tasks: number }[];
  trendData: { day: string; progress: number }[];
}

export interface TaskItem {
  id: string;
  name: string;
  completed: boolean;
}

export interface KPIStats {
  avgCompletionDays: number;
  expectedDays: number;
  efficiencyScore: number;
  tasksCompletedEarly: number;
}

export interface Ticket {
  id: string;
  title: string;
  status: "Unassigned" | "Picked Up" | "PR Submitted" | "Merged";
}

export interface ActivityEvent {
  id: string;
  action: string;
  timestamp: string;
  type: "checklist" | "ticket" | "pr";
}

export const mockEmployees: Employee[] = [
  {
    id: "1",
    name: "Riya",
    role: "Backend",
    level: "Intern",
    stack: ["Node.js", "TypeScript", "PostgreSQL"],
    status: "in-progress",
    checklistTotal: 10,
    checklistCompleted: 7,
    tasks: [
      { id: "t1", name: "Clone repository", completed: true },
      { id: "t2", name: "Install dependencies", completed: true },
      { id: "t3", name: "Setup environment variables", completed: false },
      { id: "t4", name: "Run local dev server", completed: true },
      { id: "t5", name: "Complete team intro", completed: true },
      { id: "t6", name: "Read codebase docs", completed: true },
      { id: "t7", name: "Setup IDE extensions", completed: true },
      { id: "t8", name: "First code review", completed: false },
      { id: "t9", name: "Submit first PR", completed: false },
      { id: "t10", name: "Complete security training", completed: true },
    ],
    stats: {
      avgCompletionDays: 2,
      expectedDays: 5,
      efficiencyScore: 92,
      tasksCompletedEarly: 85,
    },
    ticket: {
      id: "FLOW-INTERN-001",
      title: "Fix login API validation",
      status: "PR Submitted",
    },
    activity: [
      { id: "a1", action: "Submitted PR for login validation fix", timestamp: "2 hours ago", type: "pr" },
      { id: "a2", action: "Picked up ticket FLOW-INTERN-001", timestamp: "5 hours ago", type: "ticket" },
      { id: "a3", action: "Completed security training", timestamp: "1 day ago", type: "checklist" },
      { id: "a4", action: "Setup IDE extensions", timestamp: "1 day ago", type: "checklist" },
      { id: "a5", action: "Read codebase documentation", timestamp: "2 days ago", type: "checklist" },
    ],
    velocityData: [
      { day: "Mon", tasks: 2 },
      { day: "Tue", tasks: 3 },
      { day: "Wed", tasks: 1 },
      { day: "Thu", tasks: 2 },
      { day: "Fri", tasks: 3 },
    ],
    trendData: [
      { day: "Day 1", progress: 10 },
      { day: "Day 2", progress: 30 },
      { day: "Day 3", progress: 45 },
      { day: "Day 4", progress: 55 },
      { day: "Day 5", progress: 70 },
    ],
  },
  {
    id: "2",
    name: "Arjun",
    role: "Frontend",
    level: "Intern",
    stack: ["React", "TypeScript", "Tailwind"],
    status: "in-progress",
    checklistTotal: 10,
    checklistCompleted: 4,
    tasks: [
      { id: "t1", name: "Clone repository", completed: true },
      { id: "t2", name: "Install dependencies", completed: true },
      { id: "t3", name: "Setup environment variables", completed: true },
      { id: "t4", name: "Run local dev server", completed: true },
      { id: "t5", name: "Complete team intro", completed: false },
      { id: "t6", name: "Read codebase docs", completed: false },
      { id: "t7", name: "Setup IDE extensions", completed: false },
      { id: "t8", name: "First code review", completed: false },
      { id: "t9", name: "Submit first PR", completed: false },
      { id: "t10", name: "Complete security training", completed: false },
    ],
    stats: {
      avgCompletionDays: 4,
      expectedDays: 5,
      efficiencyScore: 74,
      tasksCompletedEarly: 60,
    },
    ticket: {
      id: "FLOW-INTERN-002",
      title: "Build dashboard sidebar",
      status: "Picked Up",
    },
    activity: [
      { id: "a1", action: "Picked up ticket FLOW-INTERN-002", timestamp: "3 hours ago", type: "ticket" },
      { id: "a2", action: "Completed dev server setup", timestamp: "6 hours ago", type: "checklist" },
      { id: "a3", action: "Setup environment variables", timestamp: "1 day ago", type: "checklist" },
    ],
    velocityData: [
      { day: "Mon", tasks: 1 },
      { day: "Tue", tasks: 2 },
      { day: "Wed", tasks: 1 },
      { day: "Thu", tasks: 0 },
      { day: "Fri", tasks: 1 },
    ],
    trendData: [
      { day: "Day 1", progress: 10 },
      { day: "Day 2", progress: 20 },
      { day: "Day 3", progress: 30 },
      { day: "Day 4", progress: 35 },
      { day: "Day 5", progress: 40 },
    ],
  },
  {
    id: "3",
    name: "Sneha",
    role: "Full Stack",
    level: "Intern",
    stack: ["React", "Node.js", "MongoDB"],
    status: "completed",
    checklistTotal: 10,
    checklistCompleted: 10,
    tasks: [
      { id: "t1", name: "Clone repository", completed: true },
      { id: "t2", name: "Install dependencies", completed: true },
      { id: "t3", name: "Setup environment variables", completed: true },
      { id: "t4", name: "Run local dev server", completed: true },
      { id: "t5", name: "Complete team intro", completed: true },
      { id: "t6", name: "Read codebase docs", completed: true },
      { id: "t7", name: "Setup IDE extensions", completed: true },
      { id: "t8", name: "First code review", completed: true },
      { id: "t9", name: "Submit first PR", completed: true },
      { id: "t10", name: "Complete security training", completed: true },
    ],
    stats: {
      avgCompletionDays: 3,
      expectedDays: 5,
      efficiencyScore: 98,
      tasksCompletedEarly: 95,
    },
    ticket: {
      id: "FLOW-INTERN-003",
      title: "Add user profile page",
      status: "Merged",
    },
    activity: [
      { id: "a1", action: "PR merged for user profile page", timestamp: "1 day ago", type: "pr" },
      { id: "a2", action: "Completed all onboarding tasks", timestamp: "2 days ago", type: "checklist" },
      { id: "a3", action: "Submitted first PR", timestamp: "3 days ago", type: "pr" },
    ],
    velocityData: [
      { day: "Mon", tasks: 3 },
      { day: "Tue", tasks: 2 },
      { day: "Wed", tasks: 3 },
      { day: "Thu", tasks: 2 },
      { day: "Fri", tasks: 1 },
    ],
    trendData: [
      { day: "Day 1", progress: 20 },
      { day: "Day 2", progress: 45 },
      { day: "Day 3", progress: 70 },
      { day: "Day 4", progress: 90 },
      { day: "Day 5", progress: 100 },
    ],
  },
];
