
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "lucide-react";

const timelineData = [
  {
    year: "Year 1",
    title: "Foundation & Future Readiness",
    goals: [
      "Advanced Admin, Tableau Certs",
      "Python, SQL Basics",
      "Einstein AI Intro",
      "Launch Dashboards"
    ]
  },
  {
    year: "Year 2",
    title: "Data-Driven Collaboration",
    goals: [
      "Platform App Builder Cert",
      "Cross-Functional Projects",
      "Data Storytelling",
      "Present to Execs"
    ]
  },
  {
    year: "Year 3",
    title: "AI Integration & Influence",
    goals: [
      "Data Strategy Lead Role",
      "Predictive Lead Scoring",
      "Tableau CRM Dashboards",
      "Mentor Others"
    ]
  },
  {
    year: "Year 4",
    title: "Architect & Strategist",
    goals: [
      "Application Architect Cert",
      "Lead Digital Transformation",
      "Strategic System Design"
    ]
  },
  {
    year: "Year 5",
    title: "Executive or Consultant Path",
    goals: [
      "CRM Director or Consultant Path",
      "AI-Powered CRM Strategy",
      "Brand/Thought Leadership"
    ]
  }
];

export default function CareerTimeline() {
  const [progress, setProgress] = useState({});
  const [notes, setNotes] = useState({});
  const [dates, setDates] = useState({});

  const toggleGoal = (year, goal) => {
    const key = `${year}-${goal}`;
    setProgress((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleNoteChange = (year, goal, note) => {
    const key = `${year}-${goal}`;
    setNotes((prev) => ({ ...prev, [key]: note }));
  };

  const handleDateChange = (year, goal, date) => {
    const key = `${year}-${goal}`;
    setDates((prev) => ({ ...prev, [key]: date }));
  };

  return (
    <div className="grid gap-4 p-4">
      {timelineData.map(({ year, title, goals }) => (
        <Card key={year} className="bg-white shadow-md">
          <CardContent className="p-4">
            <h2 className="text-xl font-bold mb-2">{year}: {title}</h2>
            <ul className="space-y-4">
              {goals.map((goal) => {
                const key = `${year}-${goal}`;
                return (
                  <li key={goal} className="p-2 border rounded">
                    <div className="flex items-center justify-between">
                      <span className={progress[key] ? "line-through" : ""}>{goal}</span>
                      <Button
                        variant={progress[key] ? "secondary" : "default"}
                        size="sm"
                        onClick={() => toggleGoal(year, goal)}
                      >
                        {progress[key] ? "Undo" : "Mark Complete"}
                      </Button>
                    </div>
                    <div className="mt-2 grid gap-2">
                      <label className="text-sm flex items-center gap-2">
                        <Calendar size={16} />
                        <Input
                          type="date"
                          value={dates[key] || ""}
                          onChange={(e) => handleDateChange(year, goal, e.target.value)}
                        />
                      </label>
                      <Textarea
                        placeholder="Add notes..."
                        value={notes[key] || ""}
                        onChange={(e) => handleNoteChange(year, goal, e.target.value)}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
